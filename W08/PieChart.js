class PieChart {

    constructor( config, data ) {
        this.config = {
            parent: config.parent,
            width: config.width || 256,
            height: config.height || 256,
            margin: config.margin || {top:10, right:10, bottom:10, left:10},
            title: config.title || '',
            xlabel: config.xlabel || '',
            ylabel: config.ylabel || ''
        }
        this.data = data;
        this.init();
    }

    init() {
        let self = this;

        self.svg = d3.select( self.config.parent )
            .attr('width', self.config.width)
            .attr('height', self.config.height);

        self.chart = self.svg.append('g')
            .attr('transform', `translate(${self.config.width/2}, ${(self.config.height/2)})`);

        self.inner_width = self.config.width - self.config.margin.left - self.config.margin.right;
        self.inner_height = self.config.height - self.config.margin.top - self.config.margin.bottom;

        self.radius = Math.min( self.inner_width, self.inner_height ) / 2;
        self.iradius = 50;

        const title_space = 10;
        self.svg.append('text')
            .style('font-size', '20px')
            .style('font-weight', 'bold')
            .attr('text-anchor', 'middle')
            .attr('x', self.config.width / 2)
            .attr('y', self.config.margin.top - title_space)
            .text( self.config.title );
    }

    update() {
        let self = this;

        
        self.render();
    }

    render() {
        let self = this;

        const color = d3.scaleOrdinal()
            .range(["red", "yellow", "burlywood", "brown", "orange"]);

        const pie = d3.pie()
            .value( d => d.value );

        const pieGroup = self.chart.selectAll("pie")
            .data(pie(self.data))
            .enter()
            .append("g")
            .attr("class", "pie");

        const arc = d3.arc()
            .innerRadius(self.iradius)
            .outerRadius(self.radius);

        pieGroup.append("path")
            .attr("d", arc )
            .attr("fill", d => color(d.index))
            .attr("stroke", "white" )
            .style("stroke-width", "2px");
    }
}
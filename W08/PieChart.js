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
            .attr('transform', `translate(${self.config.width/2}, ${(self.config.height-self.config.margin.top)/2 + self.config.margin.top})`);

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

        const colors = [];
        self.data.forEach(d => {colors.push(d.color);});
        self.color = d3.scaleOrdinal()
            .range(colors);

        self.arc = d3.arc()
            .innerRadius(self.iradius)
            .outerRadius(self.radius);
        
        self.render();
    }

    render() {
        let self = this;

        const pie = d3.pie()
            .value( d => d.value );

        const pieGroup = self.chart.selectAll("pie")
            .data(pie(self.data))
            .enter()
            .append("g")
            .attr("class", "pie");

        pieGroup.append("path")
            .attr("d", self.arc )
            .attr("fill", d => self.color(d.index))
            .attr("stroke", "white" )
            .style("stroke-width", "2px");
        
        pieGroup.append("text")
            .attr("fill", "black")
            .attr("transform", d => "translate(" + this.arc.centroid(d) + ")")
            .attr("text-anchor", "middle")
            .text(d => d.data.label);
    }
}
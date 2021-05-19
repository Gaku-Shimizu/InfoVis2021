var data;
var bar_chart;

d3.csv("https://gaku-shimizu.github.io/InfoVis2021/W10/gdp2020.csv")
    .then( data => {
        data.forEach( d => { d.value = +d.value;});
        this.data = data;

        var config = {
            parent: '#drawing_region',
            width: 512,
            height: 256,
            margin: {top:25, right:10, bottom:50, left:80},
            title: 'GDP Ranking 2020(Source: IMF)',
            xlabel: 'GDP(Unit: Millions of U.S. dollars)',
            ylabel: 'Country Name'
        };

        bar_chart = new BarChart( config );
        bar_chart.update(data);
    })
    .catch( error => {
        console.log( error );
    });

d3.select('#reverse')
    .on('click', () => {
        data.reverse();
        bar_chart.update(data);
    });

d3.select('#descend')
    .on('click', () => {
        data.sort((a,b) => {
            if(a.value < b.value){
                return 1;
            }
            else{
                return -1;
            }
        });
        bar_chart.update(data);
    });

d3.select('#ascend')
    .on('click', () => {
        data.sort((a,b) => {
            if(a.value > b.value){
                return 1;
            }
            else{
                return -1;
            }
        });
        bar_chart.update(data);
    });

d3.select('#alphabet')
    .on('click', () => {
        data.sort((a,b) => {
            if(a.label > b.label){
                return 1;
            }
            else{
                return -1;
            }
        });
        bar_chart.update(data);
    });
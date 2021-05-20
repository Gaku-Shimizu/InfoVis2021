var scatter_plot;

d3.csv("https://gaku-shimizu.github.io/InfoVis2021/W10/gdp_population2020.csv")
    .then( data => {
        data.forEach( d => { d.x = +d.x; d.y = +d.y; d.r = 5;});

        var config = {
            parent: '#drawing_region',
            width: 512,
            height: 512,
            margin: {top:25, right:10, bottom:50, left:80},
            title: 'GDP vs Population 2020(Source: IMF)',
            xlabel: 'GDP(Unit: Millions of U.S. dollars)',
            ylabel: 'Population(Unit: Thousands of people)'
        };

        scatter_plot = new ScatterPlot( config, data );
        scatter_plot.update(0, 0);
    })
    .catch( error => {
        console.log( error );
    });

d3.select('#reset')
    .on('click', () => {
        scatter_plot.update(0, 0);
    });

d3.select('#focus')
    .on('click', () => {
        scatter_plot.update(5500000, 150000);
    });

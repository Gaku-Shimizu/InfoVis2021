let input_data;
let bubble_chart;
let stacked_bar_chart;
let filter = [];

d3.csv("https://gaku-shimizu.github.io/InfoVis2021/FinalTask/data_final.csv")
    .then( data => {
        input_data = data;
        input_data.forEach( d => {
            d.population = +d.population;
            d.bed = +d.bed;
        });

        const color_scale = d3.scaleOrdinal( d3.schemeCategory10 );
        color_scale.domain(['Hokkaido/Tohoku','Kantou','Chubu','Kinki','Chugoku','Shikoku','Kyusyu/Okinawa']);

        scatter_plot = new ScatterPlot( {
            parent: '#drawing_region_scatterplot',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'Sepal length [cm]',
            ylabel: 'Sepal width [cm]',
            cscale: color_scale
        }, input_data );
        scatter_plot.update();

        bar_chart = new BarChart( {
            parent: '#drawing_region_barchart',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'Species',
            cscale: color_scale
        }, input_data );
        bar_chart.update();
    })
    .catch( error => {
        console.log( error );
    });

function Filter() {
    if ( filter.length == 0 ) {
        scatter_plot.data = input_data;
    }
    else {
        scatter_plot.data = input_data.filter( d => filter.includes( d.species ) );
    }
    scatter_plot.update();
}

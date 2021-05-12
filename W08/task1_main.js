d3.csv("https://gaku-shimizu.github.io/InfoVis2021/W08/w08_task.csv")
    .then( data => {
        data.forEach( d => { d.value = +d.value;});

        var config = {
            parent: '#drawing_region',
            width: 512,
            height: 256,
            margin: {top:25, right:10, bottom:50, left:80},
            title: 'Bar Chart',
            xlabel: 'Value',
            ylabel: 'Label'
        };

        const bar_chart = new BarChart( config, data );
        bar_chart.update();
    })
    .catch( error => {
        console.log( error );
    });
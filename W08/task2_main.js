d3.csv("https://gaku-shimizu.github.io/InfoVis2021/W08/w08_task2.csv")
    .then( data => {
        data.forEach( d => { d.x = +d.x; d.y = +d.y;});

        var config = {
            parent: '#drawing_region',
            width: 512,
            height: 256,
            margin: {top:25, right:10, bottom:50, left:50},
            title: 'Line Chart',
            xlabel: 'X-label',
            ylabel: 'Y-label'
        };

        const line_chart = new LineChart( config, data );
        line_chart.update();
    })
    .catch( error => {
        console.log( error );
    });
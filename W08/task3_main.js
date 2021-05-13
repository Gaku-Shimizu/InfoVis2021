d3.csv("https://gaku-shimizu.github.io/InfoVis2021/W08/w08_task.csv")
    .then( data => {
        data.forEach( d => { d.value = +d.value;});

        var config = {
            parent: '#drawing_region',
            width: 256,
            height: 256,
            margin: {top:25, right:0, bottom:0, left:0},
            title: 'Pie Chart',
            xlabel: 'Value',
            ylabel: 'Label'
        };

        const pie_chart = new PieChart( config, data );
        pie_chart.update();
    })
    .catch( error => {
        console.log( error );
    });
$(function() {
    "use strict";

    var demo_idx = 0;

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'placeholder',
            type: 'line',
            backgroundColor:'rgba(255, 255, 255, 0.0)',
            plotBorderColor: '#545454',
            plotBorderWidth: 2
        },
        title:{
            text: ''
        },
        plotOptions: {
            series: {
                enableMouseTracking: false,
                shadow: false,
                borderWidth: 0,
                marker: {
                    enabled: false
                }
            }
        },
        xAxis:{
            title:{
                text:''
            },
            gridLineWidth: 1,
            minorGridLineWidth: 0,
            tickWidth: 0,
            minPadding: 0.0,
            maxPadding: 0.0
        },
        yAxis:{
            title:{
                text:''
            },
            minPadding: 0.0,
            maxPadding: 0.0
        },
        credits: {
            enabled: false // A plugin for highcharts is of course using highcharts
        },
        series: [{
            downsample: { threshold: 1000 },
            data: demo_data[demo_idx],
            showInLegend: false,
            animation: false
        }]
    });

    // Initialize slider
    var $slider = $("#slider-threshold").slider({
        value: chart.series[0].options.downsample.threshold,
        min: 2,
        max: demo_data[demo_idx].length,
        slide: function( event, ui ) {
            $("#threshold").val(ui.value);
            chart.series[0].options.downsample.threshold = ui.value;
            chart.series[0].setData(demo_data[demo_idx]);
       }
    });
    $("#threshold").val( $slider.slider("value") );
    $("#length").text( demo_data[demo_idx].length );

    // On demo data change
    $("#data").change(function () {
        demo_idx = $(this).val();

        chart.series[0].options.downsample.threshold = 1000; // Default

        $slider.slider("option", "max", demo_data[demo_idx].length);
        $slider.slider("value", chart.series[0].options.downsample.threshold);

        chart.series[0].setData(demo_data[demo_idx])

        $("#threshold").val( $( "#slider-threshold" ).slider( "value" ) );
        $("#length").text( demo_data[demo_idx].length );
    });

});

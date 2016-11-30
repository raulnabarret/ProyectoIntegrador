var chartData

$(document).ready(function() {

    $.ajax({

        url: 'http://localhost:3300/api/temperatura',
        type: 'GET',
        success: function(data) {

            chartData = data

            var template = Handlebars.compile($("#tabular-template-temp").html())
            $("#table-location-temp").html(template(data))

            var chartProperties = {
                "caption": "Lectura de Datos de Sensores",
                "xAxisName": "Tiempo",
                "yAxisName": "Datos",
                        // "numberPrefix": "deg ",
                        "paletteColors": "#0075c2",
                        "bgColor": "#ffffff",
                        "showBorder": "0",
                        "showCanvasBorder": "0",
                        "plotBorderAlpha": "10",
                        "usePlotGradientColor": "0",
                        "plotFillAlpha": "50",
                        "showXAxisLine": "1",
                        "axisLineAlpha": "25",
                        "divLineAlpha": "10",
                        "showValues": "0",
                        "showAlternateHGridColor": "0",
                        "captionFontSize": "14",
                        "subcaptionFontSize": "14",
                        "subcaptionFontBold": "0",
                        "toolTipColor": "#ffffff",
                        "toolTipBorderThickness": "0",
                        "toolTipBgColor": "#000000",
                        "toolTipBgAlpha": "80",
                        "toolTipBorderRadius": "2",
                        "toolTipPadding": "5"
            }

            var categoriesArray = [{
                "category": data["data"]
            }]

            var lineChart = new FusionCharts({
                type: 'area2d',
                renderAt: 'chart-location-temp',
                width: '1000',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: chartProperties,
                    data: data["data"]
                }
            })

            lineChart.render()
        }
    })
})

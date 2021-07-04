
import React, { Component } from "react";
import Chart from "react-apexcharts";

class PriceHistoryChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "Preço",
                data: [5085, 5085, 5443, 4659, 3008, 5384, 5384, 5384, 5384, 5993, 3343, 3413, 3158, 5194, 3986, 2683, 3125, 3641, 4831]
            }],
            options: {
                labels: ["1/07", "2/07", "3/07", "4/07", "5/07", "6/07", "7/07", "8/07", "9/07", "10/07", "11/07", "12/07", "13/07", "14/07", "15/07", "16/07", "17/07", "18/07", "19/07"],

                xaxis: {
                    type: 'string',
                },
                title: {
                    text: 'Placa de Vídeo Zotac NVIDIA GeForce RTX 3070 Ti - Kabum',
                    align: 'left',
                    style: {
                        fontSize: '17px',
                        fontWeight: 'bold',
                        color: '#4C505E'
                    },
                },
                
                chart: {
                    id: "area",
                    height: 350,
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    curve: ['smooth'],
                    lineCap: 'butt',
                    colors: ['#4C505E'],
                    width: 4,
                    dashArray: 0,
                },
                markers: {
                    size: 5,
                    strokeWidth: 3,
                    fillOpacity: 1,
                    shape: "circle",
                    colors: '#ffffff',
                    strokeColors: ['#4C505E'],
                    hover: {
                        size: 10,
                        sizeOffset: 1
                    }
                },
                fill: {
                    opacity: 1,
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0,
                        inverseColors: true,
                        colorStops: [
                            [
                                {
                                    opacity: 1,
                                    offset: 0,
                                    color: "#4C505E"
                                },
                                {
                                    opacity: 0,
                                    offset: 100,
                                    color: "#4C505E"
                                }
                            ]
                        ]
                    }
                }
            }
        };
    }

    render() {
        return (
            <div className="chart-container">
                <Chart className="chart-object"
                    type="area"
                    options={this.state.options}
                    series={this.state.series}
                    height="227px"
                />
            </div>
        );
    }
}

export default PriceHistoryChart;
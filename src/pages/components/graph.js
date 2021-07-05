
import React, { Component } from "react";
import Chart from "react-apexcharts";

class PriceHistoryChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "Preço",
                data: this.props.valores
            }],
            options: {
                labels: this.props.labels,

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
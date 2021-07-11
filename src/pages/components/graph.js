import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

export default function PriceGraph(props) {
    const seriesArray = [
        {
            name: "Preço",
            data: [0,0,0]
        }
    ];

    const [series, setSeries] = useState(seriesArray);

    const [options, setOptions] = useState({
        chart: {
            id: "area",
            height: 350,
            zoom: {
                enabled: false
            }
        },
        xaxis: {
            categories: ["1", "2", "3"]
        },
        yaxis: {
            show: true,
            labels: {
                show: true,
                style: {
                    colors: ["#ffffff00"],
                    fontSize: '4px',
                },
            }
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            show: true,
            width: [3, 3],
            curve: 'straight',
            dashArray: [0, 8],
            lineCap: 'butt',
            colors: ["#4C505E", "#AEAEAE"],
        },
        markers: {
            size: 0,
            strokeWidth: 3,
            fillOpacity: 0,
            shape: "circle",
            colors: ['#ffffff', '#ffffff'],
            strokeColors: ["#4C505E", "#AEAEAE"],
            hover: {
                size: 0,
                sizeOffset: 1
            }
        },
        legend: {
            show: true,
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
            },
        },
        tooltip: {
            style: {
                fontSize: '12px',
            },
            onDatasetHover: {
                highlightDataSeries: true,
            }, 
            marker: {
                show: false,
            }
        }
    });

    useEffect(() => {
        const seriesArray = [
            
            {
                name: "Preço Boleto",
                data: props.seriesCartao
            },
            {
                name: "Preço Cartao",
                data: props.seriesBoleto
            }
    
        ];

        setSeries(seriesArray);

        let someOptions = {...options, ...{ 
            title : {
                text : `${props.title} - ${props.origin}`
            },
            xaxis: {
                categories: props.seriesLabel
            }
        }}

        setOptions(someOptions);
    }, [props]);

    return (
        <div className="chart-container">
            <Chart className="chart-object"
                type="line"
                options={options}
                series={series}
                height={250}
            />
        </div>
    );
}
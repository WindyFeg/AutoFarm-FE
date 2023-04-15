import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
);

function Graph(props) {

    const graphData = props.history;
    let graphColor;
    switch (props.type) {
        case "humid_Dirt":
            graphColor = "#007deb";
            break;
        case "humid_Air":
            graphColor = "#95c842";
            break;
        default:
            graphColor = "#e7a336";
    }


    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            data: graphData,
            backgroundColor: 'transparent',
            borderColor: graphColor,
            pointBorderColor: graphColor,
            pointBorderWidth: 1,
            tension: 0.2
        }]

    }
    
    let num = 3.14159265358979323846;
    let str = num.toString();
    let decimalIndex = str.indexOf('.');
    let formattedNum = str.substring(0, decimalIndex + 3);
    const options = {

        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                // min: Math.min(...graphData),
                // max: Math.max(...graphData),
                ticks: {
                    stepSize: (((Math.max(...graphData) - Math.min(...graphData)) / 2.01).toFixed(2)),
                    callback: (value) => value.toString().substring(0,value.toString().indexOf(".") + 3) + "℃"
                },
                gird: {
                    display: false,
                    // borderDash: [2, 5]
                }
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        },
        tooltips: {
            enabled: true,
            callbacks: {
                label: (tooltipItem) => tooltipItem.yLabel
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }


    return (
        <div className="graphbox" >
            <Line
                className='linegraph'
                data={data}
                options={options}
            />
        </div >
    );
}

export default Graph;
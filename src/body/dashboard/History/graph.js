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

    const graphData = props.data;

    let graphColor;
    switch (props.type) {
        case "irrigation":
            graphColor = "#007deb";
            break;
        case "lighting":
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
                    stepSize: ((Math.max(...graphData) - Math.min(...graphData)) / 2).toFixed(2),
                    callback: (value) => value + "℃"
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
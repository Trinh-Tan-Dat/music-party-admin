import React, { useEffect, useMemo, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import ComboBox from '../inputs/ComboBox';

const BarChart = ({ data, labels }) => {
    const chartRef = useRef(null);

    const stepSize = useMemo(() => {
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min;
        const numSteps = 5; // Number of steps you want on the y-axis

        let step = Math.ceil(range / numSteps / 10) * 10; // Round up to nearest 10

        return step;
    }, [data]);

    useEffect(() => {
        if (!chartRef.current) return;

        const chartInstance = new Chart(chartRef.current, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: ' Online users',
                    data: data, 
                    backgroundColor: 'rgb(34, 197, 94)',
                    borderColor: "rgba(0,0,0,0)",
                    barPercentage: 0.8,
                    categoryPercentage: 0.6,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, 
                plugins: {
                    legend: {
                        labels: { font: { size: 20 }, color: 'green'},
                        position: 'bottom'
                    }
                },
                scales: {
                    x: {
                        ticks: { font: { size: 16 }, color: 'green'},
                        grid: { display: false },
                        offset: true,
                    },
                    y: {
                        border: { dash: [10, 12], color: 'green' },
                        ticks: { font: { size: 20 }, color: 'green', stepSize },
                        grid: { display: true, color: 'rgb(34, 197, 94)' },
                    },
                }
            }
        });

        return () => chartInstance.destroy();
    }, [data, labels, stepSize]);

    return (
        <div className='relative bg-gray px-10 pt-20 pb-5 mb-10 rounded-xl shadow-lg
                        h-[400px]
                        2xl:w-[1000px]'>
            <div className='absolute right-10 top-5'>
                <ComboBox options={['2023', '2022']}/>    
            </div>                   
            <canvas ref={chartRef}/>
        </div>
    )
};

export default BarChart;

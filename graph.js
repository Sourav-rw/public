// Function to create a chart
    function createChart(chartId, data, gradient) {
        var chart = document.getElementById(chartId).getContext('2d'),
            gradient = chart.createLinearGradient(0, 0, 0, 450);

        gradient.addColorStop(0, 'rgba(72, 130, 159, 0.59)');
        gradient.addColorStop(0.5, 'rgba(72, 130, 159, 0.05)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.00)');

        var options = {
            responsive: true,
            maintainAspectRatio: false,
            hover: {
                mode: 'nearest',
                intersect: true
            },
            animation: {
                easing: 'easeInOutQuad',
                duration: 520
            },
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }]
            },
            elements: {
                line: {
                    tension: 0.4
                },
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        };

        var chartInstance = new Chart(chart, {
            type: 'line',
            data: data,
            options: options
        });
    }

    // Call the function with data for each chart

    // Chart 1
    var data1 = {
        labels: ['Aug 21', 'Aug 22', 'Aug 23', 'Aug 24'],
        datasets: [{
            label: 'Chart 1 Data',
            backgroundColor: gradient,
            borderColor: 'rgba(72, 130, 159, 0.5)',
            data: [114.5, 116.4, 115.4, 114.7],
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHitRadius: 10
        }]
    };
    createChart('chart1', data1, gradient);

    // Chart 2
    var data2 = {
        labels: ['Label A', 'Label B', 'Label C'],
        datasets: [{
            label: 'Chart 2 Data',
            backgroundColor: gradient,
            borderColor: 'rgba(72, 130, 159, 0.5)',
            data: [32.1, 35.7, 33.8],
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHitRadius: 10
        }]
    };
    createChart('chart2', data2, gradient);

    // Chart 3
    var data3 = {
        labels: ['Category X', 'Category Y', 'Category Z'],
        datasets: [{
            label: 'Chart 3 Data',
            backgroundColor: gradient,
            borderColor: 'rgba(72, 130, 159, 0.5)',
            data: [250, 220, 280],
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHitRadius: 10
        }]
    };
    createChart('chart3', data3, gradient);
    
    // Chart 4
    var data4 = {
        labels: ['Label D', 'Label E', 'Label F'],
        datasets: [{
            label: 'Chart 4 Data',
            backgroundColor: gradient,
            borderColor: 'rgba(72, 130, 159, 0.5)',
            data: [10, 20, 15],
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHitRadius: 10
        }]
    };
    createChart('chart4', data4, gradient);

    // Chart 5
    var data5 = {
        labels: ['Sample 1', 'Sample 2', 'Sample 3'],
        datasets: [{
            label: 'Chart 5 Data',
            backgroundColor: gradient,
            borderColor: 'rgba(72, 130, 159, 0.5)',
            data: [50, 30, 40],
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHitRadius: 10
        }]
    };
    createChart('chart5', data5, gradient);

    // Chart 6
    var data6 = {
        labels: ['Data A', 'Data B', 'Data C'],
        datasets: [{
            label: 'Chart 6 Data',
            backgroundColor: gradient,
            borderColor: 'rgba(72, 130, 159, 0.5)',
            data: [80, 70, 90],
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHitRadius: 10
        }]
    };
    createChart('chart6', data6, gradient);
    
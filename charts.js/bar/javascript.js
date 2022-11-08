var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Average of GDP per Capita',
            data: [19791.13,14480.30,20818.45,13856.00,2505.17,2569.00],
            backgroundColor: [
                '#ff0800'
            ],
            borderColor: [
                '#000'
            ],
            borderWidth: 1
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP by Region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Southern Asia and Africa lag far behind the rest of the world.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    text: 'GDP per Capita (USD)',
                    display: true
                }
            }
        },
    },
});
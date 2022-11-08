var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'China',
            data: [{x: 71.5, y: 3678}],
            backgroundColor: 'rgb(62,0,0,0.1)',
            borderColor: 'rgb(62,0,0,0.1)',
            borderWidth: 2
        },
        {
            label: 'India',
            data: [{x: 61.1, y: 2548}],
            backgroundColor: 'rgb(0,30,30,0.1)',
            borderColor: 'rgb(0,30,30,0.1)',
            borderWidth: 2
        },
        {
            label: 'United States',
            data: [{x: 77.1, y: 45986}],
            backgroundColor: 'rgb(90,149,255,0.1)',
            borderColor: 'rgb(90,149,255,0.1)',
            borderWidth: 2
        },
        {
            label: 'Indonesia',
            data: [{x: 68.3, y: 5878}],
            backgroundColor: 'rgb(20,255,20,0.1)',
            borderColor: 'rgb(20,255,20,0.1)',
            borderWidth: 2
        },
        {
            label: 'Brazil',
            data: [{x: 71.9, y: 11461}],
            backgroundColor: 'rgb(90,90,90,0.1)',
            borderColor: 'rgb(90,90,90,0.1)',
            borderWidth: 2
        },
        {
            label: 'Russia',
            data: [{x: 65.4, y: 13173}],
            backgroundColor: 'rgb(255,0,150,0.1)',
            borderColor: 'rgb(255,0,150,0.1)',
            borderWidth: 2
        },
        {
            label: 'Pakistan',
            data: [{x: 62.6, y: 3366}],
            backgroundColor: 'rgb(255,149,255,0.1)',
            borderColor: 'rgb(255,149,255,0.1)',
            borderWidth: 2
        },
        {
            label: 'Bangladesh',
            data: [{x: 65.8, y: 1632}],
            backgroundColor: 'rgb(62,149,210,0.1)',
            borderColor: 'rgb(62,149,210,0.1)',
            borderWidth: 2
        },
        {
            label: 'Japan',
            data: [{x: 81.1, y: 32193}],
            backgroundColor: 'rgb(0,0,240,0.1)',
            borderColor: 'rgb(0,0,240,0.1)',
            borderWidth: 2
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Life Expectancy vs. GDP',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'You can see a rough correlation between high GDP and high life expectancy.'
            },
        },
        scales: {
            y: {
                title:{
                    text: 'GDP (USD)',
                    display: true
                }
            },
            x: {
                title: {
                    text: 'Life expectancy (years)',
                    display: true
                }
            }
        },
    },
});
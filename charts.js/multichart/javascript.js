var ctx = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
        datasets: [{
            label: 'Arizona',
            data: [3.68,2.98,2.68,3.03,3.94,4.04,3.12,3.75,2.36,2.87,3.80],
            backgroundColor: '#b35806',
            borderColor: '#b35806',
            tension: 0.2
        },
        {
            label: 'California',
            data: [2.93,2.76,2.40,2.20,1.97,2.15,2.38,2.78,2.70,2.57,3.40],
            backgroundColor: '#f1a340',
            borderColor: '#f1a340',
            tension: 0.2
        },
        {
            label: 'Idaho',
            data: [1.78,2.34,2.19,1.99,1.59,2.06,1.60,2.38,1.37,1.17,2.63],
            backgroundColor: '#fee0b6',
            borderColor: '#fee0b6',
            tension: 0.2
        },
        {
            label: 'Nevada',
            data: [2.52,2.17,3.32,2.63,0.85,2.02,1.47,0.17,1.25,1.52,4.72],
            backgroundColor: '#d8daeb',
            borderColor: '#d8daeb',
            tension: 0.2
        },
        {
            label: 'Oregon',
            data: [3.49,3.36,1.33,1.73,1.66,1.99,2.64,3.62,3.27,4.22,6.60],
            backgroundColor: '#998ec3',
            borderColor: '#998ec3',
            tension: 0.2
        },
        {
            label: 'Washington',
            data: [3.44,3.12,3.97,4.22,4.31,3.84,5.41,6.88,6.83,6.71,5.86],
            backgroundColor: '#542788',
            borderColor: '#542788',
            tension: 0.2
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Hate crimes on the rise since 2018 in Western states',
                padding: 10,
                font: {
                    weight: 'bolder',
                    size: 20
                }
            },
            subtitle: {
                display: true,
                text: 'Every state has seen an uptick except for Washington, which retains a high rate of reported incidents.',
                padding: 10,
                font: {
                    size: 15,
                    weight: 450
                }
            },
            legend: {
                position: 'top',
                labels: {
                    padding: 20,
                    boxWidth: 25,
                    font: {
                        size: 12.5
                    }
                }
            }
        },
        scales: {
            y: {
                title:{
                    text: 'Hate crimes per 100,000 residents',
                    display: true,
                    beginAtZero: false
                }
            },
        },
    },
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [67,82,75,57,57],
        backgroundColor: [
          '#E8953A',
          '#F2813D',
          '#DB6641',
          '#F24C3D',
          '#E83A5D'
        ]
      }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Most school shootings in the US happen in the middle of the week',
                padding: 10,
                font: {
                    weight: 'bolder',
                    size: 20
                }
            },
            subtitle: {
                display: true,
                text: 'Monday, Thursday and Friday are the least common days for school shooters to strike.',
                padding: 10,
                font: {
                    size: 15,
                    weight: 450
                }
            },
            legend: {
                position: 'top',
                labels: {
                    padding: 20,
                    boxWidth: 25,
                    font: {
                        size: 12.5
                    }
                }
            }
        },
    },
});

const indData = {
    datasets: [{
      label: 'Industrial/Agricultural',
      data: [{
              x: 6,
              y: 1317,
              r: 0.6,
              indLabel: 'Mining, quarrying, and oil and gas extraction'
          },
          {
              x: 13.6,
              y: 966,
              r: 8.2,
              indLabel: 'Construction'
          },
          {
              x: 8.5,
              y: 1033,
              r: 14.1,
              indLabel: 'Manufacturing'
          },
          {
              x: 4.9,
              y: 790,
              r: 18,
              indLabel: 'Wholesale and retail trade'
          },
          {
              x: 16.8,
              y: 973,
              r: 7.1,
              indLabel: 'Transportation and utlities'
          },
      ],
      backgroundColor: '#d53e4f'
    },
    {
      label: 'Information',
      data: [{
              x: 7.2,
              y: 1271,
              r: .3,
              indLabel: 'Publication, except Internet'
          },
          {
              x: 18.3,
              y: 1325,
              r: .4,
              label: 'Motion picture and sound recording industries'
          },
          {
              x: 10.7,
              y: 1213,
              r: 0.4,
              indLabel: 'Broadcasting, except Internet'
          },
          {
              x: 13,
              y: 1367,
              r: 0.8,
              indLabel: 'Telecommunications'
      }],
      backgroundColor: '#f46d43'
      },
      {
          label: 'Finance and real estate',
          data: [{
              x: 1.8,
              y: 1367,
              r: 4.4,
              indLabel: 'Finance'
          },
          {
              x: 2.3,
              y: 1209,
              r: 2.5,
              indLabel: 'Insurance'
          },
          {
              x: 6.5,
              y: 1000,
              r: 2.2,
              indLabel: 'Real estate and rental and leasing'
      }],
      backgroundColor: '#fdae61'
      },
      {
          label: 'Professional and business services',
          data: [{
              x: 1.9,
              y: 1515,
              r: 10.5,
              indLabel: 'Professional and technical services'
          },
          {
              x: 5.1,
              y: 742,
              r: 4.9,
              indLabel: 'Management, administrative and waste services'
      }],
      backgroundColor: '#fee08b'
      },
      {
          label: 'Education and health services',
          data: [{
              x: 15.2,
              y: 1110,
              r: 4.7,
              indLabel: 'Educational services'
          },
          {
              x: 7.7,
              y: 953,
              r: 18.2,
              indLabel: 'Health care and social assistance'
      }],
      backgroundColor: '#e6f598'
      },
      {
          label: 'Leisure and hospitality',
          data: [{
              x: 5.5,
              y: 824,
              r: 2,
              indLabel: 'Arts, entertainment and recreation'
          },
          {
              x: 6.4,
              y: 691,
              r: 9.8,
              indLabel: 'Accommodation'
          },
          {
              x: 1.6,
              y: 609,
              r: 8.2,
              indLabel: 'Food services and drinking places'
      }],
      backgroundColor: '#abdda4'
      },
      {
          label: 'Other services',
          data: [{
              x: 3.7,
              y: 858,
              r: 5.6,
              indLabel: 'Other services, including private households'
          }],
          backgroundColor: '#66c2a5'
      }
  ]
};

var ctx = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'bubble',
    data: indData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Highly-unionized economic sectors tend to offer slightly higher wages',
                padding: 10,
                font: {
                    weight: 'bolder',
                    size: 20
                }
            },
            subtitle: {
                display: true,
                text: 'Outside of white-collar careers like finance and professional services, workers in fields with higher union density often take home more per week - even if they are not in a union themselves.',
                padding: 10,
                font: {
                    size: 15,
                    weight: 450
                }
            },
            legend: {
                position: 'top',
                labels: {
                    padding: 20,
                    boxWidth: 25,
                    font: {
                        size: 12.5
                    }
                }
            },
            tooltip: {
                displayColors: false,
                callbacks: {
                    title: function(context) {
                        console.log(context)
                        return context[0].raw.indLabel
                    },
                    label: function(context) {
                        return `There are ${context.raw.r} million American workers in the ${context.raw.indLabel} sector. Their average weekly pay is $${context.raw.y}. ${context.raw.x}% of workers in this sector are represented by labor unions.`
                    }
                }
            },    
        },
        scales: {
                x: {
                    title:{
                        text: 'Union density (percent)',
                        display: true
                    }
                },
                y: {
                    title:{
                        text: 'Average weekly pay (USD)',
                        display: true
                    },
                    min: 400
                }
            },
    },
});

// return `There are ${context.raw.r} million American workers in the ${context.raw.indLabel} sector. Their average weekly pay is $${context.raw.y}. ${context.raw.x}% of workers in this sector are represented by labor unions.`

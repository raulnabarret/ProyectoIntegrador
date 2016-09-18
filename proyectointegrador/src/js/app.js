var $chart = $("#Chart")

var chart = new Chart($chart, {
    type: 'bar',
    data: {
        labels: ["8:00 am", "8:00 am", "8:00 am", "8:00 am", "8:00 am", "8:00 am"],
        datasets: [{
            label: 'Centígrados',
            data: [12, 19, 13, 15, 12, 13],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
})
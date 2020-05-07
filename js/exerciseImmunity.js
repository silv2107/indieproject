let recoveryRate = document.getElementById('recoveryRate').getContext('2d');
let survivalRate = document.getElementById('survivalRate').getContext('2d');


let immResponsePhaseRecovTime = new Chart(recoveryRate, {
    type: 'bar', //
    data: {
        labels:['moderate exercise', 'no exercise', 'intensive exercise'],
        datasets:[
            {
            label: 'Virus clearence',
            data: [1.5, 4, 0],
            backgroundColor: 'blue'},
            {
            label: 'Antibody production',
            data: [1.5, 2, 10],
            backgroundColor: 'green'},    
        ]
    },
    options: {
        responsive:true,
        maintainAspectRatio: false,
        scales: {
        xAxes: [{ stacked: true }],
        yAxes: [{ stacked: true }]
        },
        title:{
            display:true,
            text: 'Number of weeks to recover after virus infection',
            // position:'left',
            fontSize:25
        },
        legend:{
            position:'top'
        }
    }
});

let survivalRatePercent = new Chart(survivalRate, {
    type: 'bar', //
    data: {
        labels:['No-exerecise','Moderate exercise','Intensive exercise'],
        datasets:[
                {
                label: 'Survival percent',
                data: [40, 80, 25],
                backgroundColor: 'lightgreen'
                }    
        ]
    },
    options:{
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title:{
            display:true,
            text: 'Survival rate (%) of patients infected with virus in lungs',
            position:'top',
            fontSize:25
        },
        legend:{
            position:'top'
        }
    }
});
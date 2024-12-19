// Komandas dalībnieku datu struktūra
const teamMembers = [
    {
        name: "Kitija Kuprijanova",
        age: 20,
        gender: "Sieviete",
        role: "Programmas izstrādātāja",
        hobbies: ["Datorspēles", "Ceļošana", "Mūzika"]
    }
];

// Funkcija, lai parādītu papildus informāciju un diagrammas
function toggleDetails(exampleId) {
    const exampleDiv = document.getElementById(exampleId);
    exampleDiv.style.display = (exampleDiv.style.display === "none") ? "block" : "none";
}

// Chart.js diagrammas iestatīšana
const ctx1 = document.getElementById('chart1').getContext('2d');
const chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Piemērs 1'],
        datasets: [{
            label: 'Piemērs 1',
            data: [12],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('chart2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Piemērs 2'],
        datasets: [{
            label: 'Piemērs 2',
            data: [15],
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            borderColor: 'rgba(0, 255, 0, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx3 = document.getElementById('chart3').getContext('2d');
const chart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Piemērs 3'],
        datasets: [{
            label: 'Piemērs 3',
            data: [18],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
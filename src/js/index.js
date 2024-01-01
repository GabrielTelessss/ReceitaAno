const ctx = document.getElementById("receita");

Chart.defaults.color = "#FFF";
Chart.defaults.font.family = "Open Sans";

new Chart(ctx, {
    type: "bar",
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
        ],
        datasets: [
            {
                label: "Receita R$",
                data: [
                    5.2, 7.9, 12.3, 11.2, 11.5, 28.8, 35.5, 40, 43.5, 50.5, 60, 61.8, 
                ],
                backgroundColor: "#F4BD50",
                borderRadius: 6,
                borderSkipped: false,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            lagend: {
                display: false,
            },
            title: {
                display: true, text: "Sua Receita de 2024",
                padding: {
                    bottom: 16,
                },
                font: {
                    size: 24, weight: "normal",
                },
            },
            tooltip: {
                backgroundColor: "#27202D",
            },
        },
        scales: {
            x: {
                border: {
                    dash: [2, 4],
                },
                grid: {
                    color: "#27292D",
                },
                title: {
                    text: "2024",
                },
            },
            y: {
                grid: {
                    color: "#27292D",
                },
                border: {
                    dash: [2, 4],
                },
                beginAtZero: true,
                title: {
                    display: true, text: "Receita R$",
                },
            },
        },
    },
    
});

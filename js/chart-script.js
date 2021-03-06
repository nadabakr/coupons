let couponShopChart = document
    .getElementById("couponShopChart")
    .getContext("2d");
let horizentalBarChart = new Chart(couponShopChart, {
    type: "horizontalBar",
    data: {
        labels: ["H&M", "فريحة", "Solo", "Smile", "الاصيل"],
        datasets: [{
            backgroundColor: "#fcb26da9",
            data: [3000, 4500, 9400, 8134, 1763],
        }, ],
    },
    options: {
        title: {
            text: "الكوبونات المطبوعه في كل متجر ",
            display: false,
        },
        scales: {
            xAxes: [{
                stacked: true,
            }, ],
            yAxes: [{
                stacked: true,
            }, ],
        },
        legend: {
            display: false,
        },
    },
});

// MonthChart
let couponMonthChart = document
    .getElementById("couponMonthChart")
    .getContext("2d");
let barChart = new Chart(couponMonthChart, {
    type: "bar",
    data: {
        labels: [
            "يناير",
            "فبراير",
            "مارس",
            "ابريل",
            "مايو",
            "يونيو",
            "يوليو",
            "اغسطس",
            "سبتمبر",
            "اكتوبر",
            "نوفمبر",
            "ديسمبر",
        ],
        datasets: [{
            // label: "Bar Dataset",
            backgroundColor: "#aaafcfb0",

            data: [
                3000,
                4500,
                9400,
                8134,
                1763,
                5399,
                4563,
                6474,
                7543,
                5467,
                7356,
                4332,
            ],
        }, ],
    },
    options: {
        title: {
            text: "معدل إنشاء الكوبونات شهريا",
            display: false,
        },
        scales: {
            xAxes: [{
                stacked: true,
            }, ],
            yAxes: [{
                stacked: true,
            }, ],
        },
        legend: {
            display: false,
        },
    },
});
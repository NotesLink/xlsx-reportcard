class chart {
    constructor(data) {
        let chart = document.createElement("table");
        chart.classList.add("graph");
        chart.style.height = ChartConfig.chartHeight;
        let tbody = document.createElement("tbody");
        ChartConfig.subjects.forEach((k) => {
            let tr = document.createElement("tr");
            tr.setAttribute("style", `height: ${Math.floor((((data[k]) / config.MaxMarks[k]) * 100))}%`);
            let th = document.createElement("th");
            th.setAttribute("scope", "row");
            th.innerHTML = `${k.split(' ')[0]}<br>(${Math.floor((((data[k]) / config.MaxMarks[k]) * 10000)) / 100}%)`;
            tr.appendChild(th);
            let bgcolor;
            if ((Math.floor((((data[k]) / config.MaxMarks[k]) * 10000)) / 100) > 90) {
                bgcolor = "#0a0";
            } else if ((Math.floor((((data[k]) / config.MaxMarks[k]) * 10000)) / 100) > 50) {
                bgcolor = "#00d";
            }
            tr.innerHTML += `<td style="background-color: ${bgcolor}"><span></span></td>`;
            tbody.appendChild(tr);
        });
        chart.appendChild(tbody);
        return chart;
    }
}
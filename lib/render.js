function renderData(z) {
    let page = document.createElement("div");
    page.classList.add("page");
    let container = document.createElement("div");
    container.classList.add("container");
    container.appendChild(new logo);
    let d = document.createElement("div");
    d.innerHTML = config.Title;
    d.classList.add("page-title");
    container.appendChild(d);
    container.appendChild(document.createElement("br"));
    config.StudentDetailColumnNames.forEach((col) => {
        d = document.createElement("div");
        d.innerHTML = `<b>${col}</b>: ${z[col]}`;
        d.classList.add("student-details");
        container.appendChild(d);
    });
    let tablecontainer = document.createElement("div");
    container.appendChild(document.createElement("br"));
    tablecontainer.classList.add("table-container");
    tablecontainer.appendChild(new markstable(z));
    container.appendChild(tablecontainer);
    if (ChartConfig.enabled) {
        let graphcontainer = document.createElement("div");
        graphcontainer.classList.add("table-container");
        graphcontainer.appendChild(new chart(z));
        container.appendChild(graphcontainer);
    }
    container.appendChild(document.createElement("br"));
    container.appendChild(new footer);
    page.appendChild(container);
    contentdiv.appendChild(page);
    let p = document.createElement("p");
    contentdiv.appendChild(p);
}
class page {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("page");
    }
}

class markstable {
    constructor(marksdata) {
        this.table = document.createElement("table");
        this.table.style.fontSize = config.tableFontSize || "1.5em";
        let header = document.createElement("tr");
        config.Columns.forEach((colname) => {
            let th = document.createElement("th");
            th.innerHTML = colname;
            header.appendChild(th);
        });
        this.table.appendChild(header);
        config.subjects.forEach((sub) => {
            let tr = document.createElement("tr");
            let subject = document.createElement("td");
            subject.innerHTML = sub;
            tr.appendChild(subject);
            let maxmarks = document.createElement("td");
            maxmarks.innerHTML = config.MaxMarks[sub];
            tr.appendChild(maxmarks);
            let obtainedmarks = document.createElement("td");
            obtainedmarks.innerHTML = marksdata[sub];
            tr.appendChild(obtainedmarks);
            this.table.appendChild(tr);
        });
        return this.table;
    }
}

class logo {
    constructor() {
        this.img = document.createElement("img");
        this.img.setAttribute("src", config.LogoURL);
        this.img.classList.add("logo");
        return this.img;
    }
}

class footer {
    constructor() {
        let footer = document.createElement("div");
        footer.classList.add("page-footer");
        config.FooterAreas.forEach((f) => {
            let d = document.createElement("div");
            d.classList.add("page-footer-item");
            d.innerHTML = `${f}: `;
            footer.appendChild(d);
        });
        return footer;
    }
}
const newDiv = document.querySelector(".table");

for (let i = 1; i <= 10; i++) {
    const TableRow = document.createElement("tr");
    newDiv.append(TableRow);

    for (let j = 1; j <= 10; j++) {
        const sectionTable = document.createElement("td");
        TableRow.append(sectionTable);
        const sectionTextDiv = document.createElement("div");
        sectionTable.append(sectionTextDiv);
        sectionTextDiv.textContent = `${j * i}`;
    }
}

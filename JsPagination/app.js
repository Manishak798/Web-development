const User = [
    { "id": 1, "name": "John Doe", "email": "john.doe@example.com" },
    { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com" },
    { "id": 3, "name": "Robert Johnson", "email": "robert.johnson@example.com" },
    { "id": 4, "name": "Emily Davis", "email": "emily.davis@example.com" },
    { "id": 5, "name": "Michael Brown", "email": "michael.brown@example.com" },
    { "id": 6, "name": "Amanda Wilson", "email": "amanda.wilson@example.com" },
    { "id": 7, "name": "Daniel Miller", "email": "daniel.miller@example.com" },
    { "id": 8, "name": "Sophia Moore", "email": "sophia.moore@example.com" },
    { "id": 9, "name": "Matthew Taylor", "email": "matthew.taylor@example.com" },
    { "id": 10, "name": "Olivia Johnson", "email": "olivia.johnson@example.com" },
    { "id": 11, "name": "William Anderson", "email": "william.anderson@example.com" },
    { "id": 12, "name": "Emma Thomas", "email": "emma.thomas@example.com" },
    { "id": 13, "name": "Christopher Clark", "email": "christopher.clark@example.com" },
    { "id": 14, "name": "Samantha Davis", "email": "samantha.davis@example.com" },
    { "id": 15, "name": "Nicholas Martinez", "email": "nicholas.martinez@example.com" },
    { "id": 16, "name": "Ava Garcia", "email": "ava.garcia@example.com" },
    { "id": 17, "name": "Joseph Hernandez", "email": "joseph.hernandez@example.com" },
    { "id": 18, "name": "Madison Robinson", "email": "madison.robinson@example.com" },
    { "id": 19, "name": "David Smith", "email": "david.smith@example.com" },
    { "id": 20, "name": "Ella Davis", "email": "ella.davis@example.com" },
    { "id": 21, "name": "Christopher Harris", "email": "christopher.harris@example.com" },
    { "id": 22, "name": "Mia White", "email": "mia.white@example.com" },
    { "id": 23, "name": "Andrew Turner", "email": "andrew.turner@example.com" },
    { "id": 24, "name": "Isabella Johnson", "email": "isabella.johnson@example.com" },
    { "id": 25, "name": "James Wilson", "email": "james.wilson@example.com" },
    { "id": 26, "name": "Abigail Miller", "email": "abigail.miller@example.com" },
    { "id": 27, "name": "John Martin", "email": "john.martin@example.com" },
    { "id": 28, "name": "Grace Hall", "email": "grace.hall@example.com" },
    { "id": 29, "name": "Ryan Taylor", "email": "ryan.taylor@example.com" },
    { "id": 30, "name": "Chloe Davis", "email": "chloe.davis@example.com" },
    { "id": 31, "name": "Dylan Johnson", "email": "dylan.johnson@example.com" },
    { "id": 32, "name": "Sophie White", "email": "sophie.white@example.com" },
    { "id": 33, "name": "Caleb Harris", "email": "caleb.harris@example.com" },
    { "id": 34, "name": "Olivia Martinez", "email": "olivia.martinez@example.com" },
    { "id": 35, "name": "Ethan Robinson", "email": "ethan.robinson@example.com" },
    { "id": 36, "name": "Amelia Turner", "email": "amelia.turner@example.com" },
    { "id": 37, "name": "Benjamin Clark", "email": "benjamin.clark@example.com" },
    { "id": 38, "name": "Aria Harris", "email": "aria.harris@example.com" },
    { "id": 39, "name": "Logan Davis", "email": "logan.davis@example.com" },
    { "id": 40, "name": "Natalie Wilson", "email": "natalie.wilson@example.com" },
    { "id": 41, "name": "Jackson Smith", "email": "jackson.smith@example.com" },
    { "id": 42, "name": "Penelope Turner", "email": "penelope.turner@example.com" },
    { "id": 43, "name": "Lucas Hall", "email": "lucas.hall@example.com" },
    { "id": 44, "name": "Stella Robinson", "email": "stella.robinson@example.com" },
    { "id": 45, "name": "Gabriel Davis", "email": "gabriel.davis@example.com" },
    { "id": 46, "name": "Lily Taylor", "email": "lily.taylor@example.com" },
    { "id": 47, "name": "Wyatt Johnson", "email": "wyatt.johnson@example.com" },
    { "id": 48, "name": "Leah White", "email": "leah.white@example.com" },
    { "id": 49, "name": "Carter Harris", "email": "carter.harris@example.com" },
    { "id": 50, "name": "Isaac Martinez", "email": "isaac.martinez@example.com" }
]
const tablebody = document.getElementById("data");
function num(from, to) {
    let tablehtml = " ";
    for (var i = from - 1; i < to; i++) {
        tablehtml += `<tr>
<td id="userid">${User[i].id}</td>
<td id="username">${User[i].name}</td>
<td id="useremail">${User[i].email}</td>
</tr>
` }
    tablebody.innerHTML = tablehtml;

}
num(1, 5);

const prevbtn = document.getElementById("prev");
const pgnum = document.getElementById("numbtn");
const nextbtn = document.getElementById("next");
const ultag = document.getElementById("pagination");
function pagination(totalpages, page) {
    let li = " ";
    let beforepage = page - 1;
    let afterpage = page + 1;
    if ((page > 1)) {
        li += `<button id="prev" onclick="Prev()" class="tab active">← Prev</button>`
    }
    for (var i = beforepage; i <= afterpage; i++) {
        if (page === i) {
            `<button class="btn ">${i}</button>`
        }
    }
    if (page < totalpages) {
        li += `<button id=next onclick="Next()" class="tab ">Next →</button>`
    }
    ultag.innerHTML = li;
}
pagination(10, 5);
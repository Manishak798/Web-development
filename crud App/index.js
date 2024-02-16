// window.onload = function () {
//     const existingData = localStorage.getItem("data");
//     if (existingData) {
//         dataarr = JSON.parse(existingData);
//     }
// }
const dataarr = [];//data is saved in this array
const localdataarr = [];
const tbodyvalues = document.getElementById("tbody");
let count = 0;
function Submit() {
    //     console.log("Submit");
    const createdData = create();

    const retirevedData = retirevedDatafromlocalstorage(createdData).flat();//flat nested array
    console.log("retrive", retirevedData);
    // const flattenedData = retrievedData.flat(); // Flatten the array
    const insertData = inserting(retirevedData);
    console.log(insertData);
}
//create
function create() {

    let name = document.getElementById("Name").value;
    let jobtitle = document.getElementById("Jobtitle").value;
    let address = document.getElementById("Address").value;
    const valueObject = {
        id: count++,
        Name: name,
        JobTitle: jobtitle,
        Address: address
    }
    dataarr.push(valueObject);
    return dataarr;
    // console.log(dataarr);
}
//data in localstorage
function retirevedDatafromlocalstorage(data) {
    /// Convert the array to a JSON string before storing it in local storage
    localStorage.setItem("data", JSON.stringify(data));
    //getting values from localstorage to table
    // const userdata = localStorage.getItem("data", JSON.stringify(data));
    // localdataarr.push(userdata);
    // // console.log(userdata);
    // return localdataarr;
    const existingData = localStorage.getItem("data");
    if (existingData) {
        const parsedData = JSON.parse(existingData);
        localdataarr.push(parsedData);
    }
    return localdataarr;

}
function inserting(values) {
    console.log("Values received by inserting function:", values);
    tbodyvalues.innerHTML = "";

    // Construct HTML content for table rows
    let tableRows = values.forEach(value => `
        <tr>
            <th scope="row">${value.id}</th>
            <td>${value.Name}</td>
            <td>${value.JobTitle}</td>
            <td>${value.Address}</td>
        </tr>
    `);

    // Join the table rows into a single string and set as tbody content
    tbodyvalues.innerHTML = tableRows;
}


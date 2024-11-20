// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(promiseNumber) {
    return new Promise((resolve) => {
        const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
        setTimeout(() => resolve({ promiseNumber, time: parseFloat(time) }), time * 1000);
    });
}

// Reference to the table body
const tableBody = document.getElementById("output");

// Create an array of 3 promises
const promises = [
    createRandomPromise(1),
    createRandomPromise(2),
    createRandomPromise(3),
];

// Wait for all promises to resolve using Promise.all
Promise.all(promises).then((results) => {
    // Remove the "Loading..." row
    const loadingRow = document.getElementById("loading");
    if (loadingRow) {
        loadingRow.remove();
    }

    let totalTime = 0;

    // Populate the table with the results
    results.forEach((result) => {
        totalTime += result.time;
        const row = document.createElement("tr");
        row.innerHTML = `<td>Promise ${result.promiseNumber}</td><td>${result.time.toFixed(3)}</td>`;
        tableBody.appendChild(row);
    });

    // Add the total row
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
    tableBody.appendChild(totalRow);
});

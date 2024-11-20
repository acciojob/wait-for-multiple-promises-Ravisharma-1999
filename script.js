//your JS code here. If required.
// Function to create a promise that resolves after a random time
function createPromise(promiseNumber) {
    return new Promise((resolve) => {
        const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
        setTimeout(() => {
            resolve({ promiseNumber, time: time.toFixed(3) });
        }, time * 1000);
    });
}

// Create an array of promises
const promises = [
    createPromise(1),
    createPromise(2),
    createPromise(3),
];

// Handle the promises with Promise.all
Promise.all(promises)
    .then((results) => {
        // Remove the loading text
        const resultTable = document.getElementById('resultTable');
        resultTable.innerHTML = '';

        let totalTime = 0;

        // Populate the table with results
        results.forEach(result => {
            totalTime += parseFloat(result.time);
            const row = document.createElement('tr');
            row.innerHTML = `<td>Promise ${result.promiseNumber}</td><td>${result.time}</td>`;
            resultTable.appendChild(row);
        });

        // Add total row
        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
        resultTable.appendChild(totalRow);
    });

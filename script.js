// Function to simulate random delay (1 to 3 seconds)
function createRandomPromise() {
    const randomDelay = Math.floor(Math.random() * 3) + 1; // Random time between 1 and 3 seconds
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(randomDelay); // Resolve with the time taken in seconds
        }, randomDelay * 1000);
    });
}

// Create 3 promises
const promise1 = createRandomPromise();
const promise2 = createRandomPromise();
const promise3 = createRandomPromise();

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3]).then(results => {
    // Remove the loading row
    const loadingRow = document.getElementById('loadingRow');
    loadingRow.style.display = 'none';

    // Calculate total time taken for all promises to resolve
    const totalTime = results.reduce((acc, time) => acc + time, 0);

    // Populate the table with the results
    const tableBody = document.getElementById('output');

    // Row for Promise 1
    const row1 = document.createElement('tr');
    row1.innerHTML = `<td>Promise 1</td><td>${results[0]}</td>`;
    tableBody.appendChild(row1);

    // Row for Promise 2
    const row2 = document.createElement('tr');
    row2.innerHTML = `<td>Promise 2</td><td>${results[1]}</td>`;
    tableBody.appendChild(row2);

    // Row for Promise 3
    const row3 = document.createElement('tr');
    row3.innerHTML = `<td>Promise 3</td><td>${results[2]}</td>`;
    tableBody.appendChild(row3);

    // Row for Total time
    const row4 = document.createElement('tr');
    row4.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
    tableBody.appendChild(row4);
});

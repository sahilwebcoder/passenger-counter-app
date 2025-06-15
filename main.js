const entriesEl = document.getElementById('save-entries');
const countEl = document.getElementById('count');
let count = 0;

function increment() {
    count++
countEl.textContent = count
}

function save() {
    entriesEl.textContent += count + ' - ';
    countEl.textContent = 0;
    count = 0;
}
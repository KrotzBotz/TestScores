"use strict";

const scoresBtn = document.getElementById("scoresBtn");
const results = document.getElementById("results");

// ask the user for the scores and return them as an array of numbers
function getScores() {
    const entry = prompt("Enter test scores separated by commas.");

    // Cancel gives back null, so check for that and for an empty entry
    if (entry === null || entry.trim() === "") {
        return [];
    }

    // split the entry at the commas and change each piece into a number
    const parts = entry.split(",");
    const scores = [];
    for (const part of parts) {
        scores.push(parseFloat(part));
    }
    return scores;
}

// add up the scores and divide by how many there are
function getAverage(scores) {
    let total = 0;
    for (const score of scores) {
        total += score;
    }
    return total / scores.length;
}

// show a message on the page and in an alert box
function showMessage(message) {
    results.textContent = message;
    alert(message);
}

// get the scores, then display them with the low, high, and average
function displayScores() {
    const scores = getScores();

    if (scores.length === 0) {
        showMessage("No scores were entered.");
        return;
    }

    // the spread operator (...) passes the array items to Math.min and Math.max
    const low = Math.min(...scores);
    const high = Math.max(...scores);
    const average = getAverage(scores);

    showMessage(
        "Scores: " + scores.join(", ") + "\n" +
        "Low score = " + low + "\n" +
        "High score = " + high + "\n" +
        "Average score = " + average.toFixed(1)
    );
}

scoresBtn.addEventListener("click", displayScores);

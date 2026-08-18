function setTheme(theme) {

    if (theme === "purple") {

        document.body.classList.add("purple-mode");

        localStorage.setItem("theme", "purple");

    } else {

        document.body.classList.remove("purple-mode");

        localStorage.setItem("theme", "yellow");

    }

}


// Remember selected theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "purple") {

    setTheme("purple");

} else {

    setTheme("yellow");

}


// Set your start date
const startDate = new Date('2022-12-30');

function updateDaysCount() {
    const today = new Date();
    const diffMs = today - startDate;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Replace the entire h1 text
    document.getElementById('days-count').textContent = `${days+1} days in programming`;
}

// Show immediately
updateDaysCount();

// Optional: refresh every hour
setInterval(updateDaysCount, 1000 * 60 * 60);

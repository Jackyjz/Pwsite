const themeToggle = document.getElementById('theme-toggle');
const currentHour = new Date().getHours();

// Function to apply theme based on time
function applyTimeBasedTheme() {
    if (currentHour >= 18 || currentHour < 6) {
        // Apply dark theme between 6 PM and 6 AM
        document.body.classList.add('dark-theme');
    } else {
        // Apply light theme during the day
        document.body.classList.remove('dark-theme');
    }
}

// Function for manual theme toggle
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});
// Apply the time-based theme on page load
applyTimeBasedTheme();

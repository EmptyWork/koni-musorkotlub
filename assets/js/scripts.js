// Update all time elements with year attribute to the current year

let currentYear = new Date().getFullYear().toString();
document.querySelectorAll("time[currentyear]").forEach((time) => {
    time.textContent = currentYear;
    time.setAttribute("datetime", currentYear);
});
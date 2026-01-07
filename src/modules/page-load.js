const { SchedulerLoader } = require("./Schedule/schedule.js");

document.addEventListener("DOMContentLoaded", () => {
    
    console.log("Page Loaded and Schedule Initialized");
    SchedulerLoader.loadSchedule("2024-07-11");

});
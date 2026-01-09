const { SchedulerLoader } = require("./Schedule/schedule.js");
import {dayController} from './Schedule/dayController';
const { callSheduleRegisterModal } = require("./Modal/ScheduleRegister.Modal.js");

document.addEventListener("DOMContentLoaded", () => {
    dayController.startDate();
    console.log("Page Loaded and Schedule Initialized");
    SchedulerLoader.loadSchedule(document.getElementById("scheduleDateInput").value);

});

document.getElementById("scheduleDateInput").addEventListener("change", (event) => {
    SchedulerLoader.loadSchedule(event.target.value);
});


document.getElementById("newScheduleButton").addEventListener("click", () => {
    callSheduleRegisterModal();
})
const { SchedulerLoader } = require("./Schedule/schedule.js");
import {dayController} from './Schedule/dayController';

document.addEventListener("DOMContentLoaded", () => {
    dayController.startDate();
    console.log("Page Loaded and Schedule Initialized");
    SchedulerLoader.loadSchedule("2024-07-11");

});
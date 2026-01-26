const { SchedulerLoader } = require("./Schedule/scheduleController.js");
import {DateController} from './Schedule/DateController.js';
import { phoneMask } from './Utils/masks.js';
const { modalController } = require("./Modal/ModalController.js");

document.addEventListener("DOMContentLoaded", () => {
    DateController.startDate();
    console.log("Page Loaded and Schedule Initialized");
    SchedulerLoader.loadSchedule(document.getElementById("scheduleDateInput").value);

});

document.getElementById("scheduleDateInput").addEventListener("change", (event) => {
    SchedulerLoader.loadSchedule(event.target.value);
});


document.getElementById("newScheduleButton").addEventListener("click", () => {
    
    modalController.callSheduleRegisterModal();

});

document.addEventListener("click", (e) =>{

    if (e.target.id === 'modalExit') {
        console.log('a');
        modalController.exitSheduleRegisterModal(e);
    }


});

document.addEventListener("submit", (e) => {

    if (e.target && e.target.id === "newScheduleForm") {

        e.preventDefault();
        
        modalController.submitNewSchedule(e);
        
        modalController.errorControler();
    }

});

document.addEventListener("input", (e) => {

    if(e.target && e.target.classList.contains("telephone")){
        e.target.value = phoneMask(e.target.value);
    }
});
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { apiConfig } from "../service/api-config";
import { ScheduleService } from "../service/ScheduleService";
import { DateController } from "./DateController";
dayjs.extend(customParseFormat);


const scheduleTablesIds = [
    {
        id : "ScheduleMorning",
        maxTime : "12:00",
        minTime : "09:00"
    },
    {
        id : "ScheduleAfternoon",
        maxTime : "18:00",
        minTime : "13:00"
    },
    {
        id : "ScheduleNight",
        maxTime : "21:00",
        minTime : "19:00"
    }
]

function generateAppointment(appointment, table){
    
    const tr = document.createElement('tr');
    
    const time = document.createElement("td");
    
    time.textContent = appointment.time;

    const petName = document.createElement("span");
    petName.textContent = appointment.animalName;
    petName.classList.add("pet");

    let petTd = document.createElement("td");
    petTd.appendChild(petName);
    petTd.innerHTML += '/' + appointment.ownerName;

    const service = (document.createElement("td"))
    service.textContent = appointment.service;

    const remove = (document.createElement("td"))
    remove.textContent = "Remover agendamento";

    tr.appendChild(time);
    tr.appendChild(petTd);
    tr.appendChild(service);
    tr.appendChild(remove);


    table.appendChild(tr);
    console.log(tr);
}


async function loadSchedule(date){
    
    clearSchedule();
    
    const scheduleList = await ScheduleService.getSchedule()

    scheduleTablesIds.forEach(schedule =>{

        const table = document.getElementById(schedule.id).querySelector("table").querySelector("tbody");
        
        console.log(scheduleList);

        const fillteredAppointment = scheduleList.filter(appointment => {

            return dayjs(date).isSame(dayjs(appointment.date), 'day')  
                && DateController.isBeforeDate(dayjs(schedule.maxTime, "HH:mm"), dayjs(appointment.time, "HH:mm"))
                && DateController.isAfterDate(dayjs(schedule.minTime, "HH:mm"), dayjs(appointment.time,  "HH:mm"))
        })
        


        fillteredAppointment.forEach(appointment =>{

           generateAppointment(appointment, table);

        })


    })
}

function clearSchedule(){
    scheduleTablesIds.forEach(schedule =>{
        const table = document.getElementById(schedule.id).querySelector("table").querySelector("tbody");
        table.innerHTML = "";
    })
}


export const SchedulerLoader  = {
    loadSchedule : async function(date) {
        await loadSchedule(date);
    },

}

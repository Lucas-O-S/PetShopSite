
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);


const test = [
    {
        animalName : "Rex",
        ownerName : "John Doe",
        service : "Grooming",
        date : "2024-07-10",
        time : "10:00"
    },
    {
        animalName : "Whiskers",
        ownerName : "Jane Smith",
        service : "Vaccination",
        date : "2024-07-11",
        time : "14:00"
    },
    {
        animalName : "Buddy",
        ownerName : "Alice Johnson",
        service : "Check-up",
        date : "2024-07-12",
        time : "09:30"
    },
    {
        animalName : "jax",
        ownerName : "Alice Johnson",
        service : "Check-up",
        date : "2024-07-12",
        time : "19:30"
    },
    {
        animalName : "jax",
        ownerName : "Alice Johnson",
        service : "Check-up",
        date : "2024-07-12",
        time : "18:00"
    }
]

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

function loadSchedule(date){
    scheduleTablesIds.forEach(schedule =>{

        const table = document.getElementById(schedule.id).querySelector("table").querySelector("tbody");

        const fillteredAppointment = test.filter(appointment => {
            return date === date &&
            (dayjs(appointment.time, "HH:mm").isAfter(dayjs(schedule.minTime, "HH:mm")) || dayjs(appointment.time, "HH:mm").isSame(dayjs(schedule.minTime, "HH:mm")))
            && (dayjs(appointment.time, "HH:mm").isBefore(dayjs(schedule.maxTime, "HH:mm")) || dayjs(appointment.time, "HH:mm").isSame(dayjs(schedule.maxTime, "HH:mm")));
        })

        fillteredAppointment.forEach(appointment =>{
           
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

        })


    })
}

export const SchedulerLoader  = {
    loadSchedule : function(date) {
        loadSchedule(date);
    }
}

import { apiConfig } from "./api-config";
import { schedule } from '../model/scheduleModel';
import dayjs from "dayjs";
import { DateController } from "../Schedule/DateController";

async function getSchedule(){
    try{
    
        const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify()
        })

        return response.json();    
    
    }
    catch(error){
        
        console.error("Error fetching schedule:", error);

        alert("Falha ao buscar agendamentos.");
    
    }

}

async function postSchedule(appointment) {
    try{

        const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(appointment)
        })

        


    }
    catch(error){
        
        console.error("Error fetching schedule:", error);

        alert("Falha ao buscar agendamentos.");
    
    }
}

async function blockSameTimeSchedule(scheduleToverify) {
    
    const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify()
    });

    const schedules = await response.json();
    console.log(scheduleToverify);
    return schedules.find( (schedule) => {
        return (
            DateController.isSameTime(
                dayjs(`${schedule.date} ${schedule.time}`, "YYYY-MM-DD HH:mm"),
                scheduleToverify,
            )
            
        )
    }) != null;

}

async function deleteSchedule(id) {
        
    const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
        method: 'DELETE',
    });

    console.log(response)

}


export const ScheduleService = {
    getSchedule : async function() {
        return await getSchedule();
    },

    postSchedule : async function(appointment){

        return await postSchedule(appointment);
    },

    blockSameTimeSchedule : async function(scheduleToverify) {
        return await blockSameTimeSchedule(scheduleToverify);
    },

    deleteSchedule : async function(id){
        await deleteSchedule(id);
    },

}


import { apiConfig } from "./api-config";

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


export const ScheduleService = {
    getSchedule : async function() {
        return await getSchedule();
    },

    postSchedule : async function(appointment){

        return await postSchedule(appointment);
    }
}
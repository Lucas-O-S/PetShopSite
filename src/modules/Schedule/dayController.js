import dayjs from "dayjs";

function startDate (){
    const dateInput = document.getElementById("scheduleDateInput");
    dateInput.value = dayjs().format("YYYY-MM-DD");
    console.log(dateInput.value);
}



export const dayController = {
    startDate : function(){
        startDate();
    }
}


import dayjs from "dayjs";

function startDate (){
    const dateInput = document.getElementById("scheduleDateInput");
    dateInput.value = dayjs().format("YYYY-MM-DD");
    console.log(dateInput.value);
}

function isBeforeDate(dateBefore, dateToVerify){

    return (dateToVerify.isBefore(dateBefore) || dateBefore.isSame(dateToVerify))

}

function isAfterDate(dateAfter, dateToVerify){
    return (dateToVerify.isAfter(dateAfter) || dateAfter.isSame(dateToVerify))

}


export const DateController = {
    startDate : function(){
        startDate();
    },

    isBeforeDate : function(dateBefore, dateToVerify){
        return isBeforeDate(dateBefore, dateToVerify);
    },

    isAfterDate(dateAfter, dateToVerify){
        return isAfterDate(dateAfter, dateToVerify);
    }



}




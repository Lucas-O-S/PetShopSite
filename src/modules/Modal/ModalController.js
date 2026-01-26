import { schedule } from "../model/scheduleModel";
import { ScheduleService } from "../service/ScheduleService";
import { SchedulerLoader } from "../Schedule/scheduleController";
import { DateController } from "../Schedule/DateController";
import dayjs from "dayjs";

const error = {
  
  text : "",

  hasError: true


}

const callSheduleRegisterModal = () => {
  fetch('../../pages/scheduleModal.html')
    .then(response => response.text())
    .then(html => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        const template = temp.querySelector('#schedule-modal');
        console.log(template)

        document.body.appendChild(template.content.cloneNode(true));
   
    })
    .catch(err => console.error('Erro ao carregar modal:', err));
};

const exitSheduleRegisterModal = (e) => {
  
  const modal = e.target.closest('.scheduleModal-container');
  
  if (modal) modal.remove();

};

function verifySchedule(){
  
}

const submitNewSchedule = () => {
 
  error.hasError = false;


  const tutorName = document.getElementById("TutorName").value;
  const petName = document.getElementById("PetName").value;
  const phone = document.getElementById("Telefone").value;
  const service = document.getElementById("Service").value;
  const date = document.getElementById("Date").value;
  const hour = document.getElementById("Hour").value;

  const newSchedule = schedule({
    animalName: petName,
    ownerName: tutorName,
    service: service,
    date: date,
    time: hour,
    phone: phone
  })

  const scheduleDate = dayjs(`${date} ${hour}`, "YYYY-MM-DD HH:mm" );

  console.log(scheduleDate);

  if(phone.length < 15 || phone.length > 15 ){
    error.text = 'Telefone invalida, tamanho incopativel';
    error.hasError = true;
  }

  else if(DateController.isBeforeDate(dayjs(), scheduleDate)){
    error.text = 'Data invalida, digite uma data posterior';
    error.hasError = true;
  }


  console.log(phone);

  if(!error.hasError){

    ScheduleService.postSchedule(newSchedule.returnSchedule());
  
    SchedulerLoader.loadSchedule(date);
  
    exitSheduleRegisterModal({target: document.getElementById("modalExit")});
  }

}

const errorControler = () => {

  const errorElement = document.getElementById("insertScheduleError");

  console.log(errorElement);

  if(!errorElement) return;

  if(error.hasError){
  
    errorElement.textContent = error.text;
    errorElement.classList.remove("hidden");
  
  }

  else
    errorElement.classList.add("hidden");
  

}

export const modalController = {

  callSheduleRegisterModal : function(){
      callSheduleRegisterModal();
  },

  exitSheduleRegisterModal: function(e){
    exitSheduleRegisterModal(e);
  },

  submitNewSchedule: function(e){
    submitNewSchedule(e);
  },

  errorControler : function () {
    errorControler();
  }
  
}



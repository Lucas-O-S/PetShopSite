import { schedule } from "../model/schedule";
import { ScheduleService } from "../service/ScheduleService";
import { SchedulerLoader } from "../Schedule/schedule";

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
 
  const tutorName = document.getElementById("TutorName").value;
  const PetName = document.getElementById("PetName").value;
  const phone = document.getElementById("Telefone").value;
  const Service = document.getElementById("Service").value;
  const Date = document.getElementById("Date").value;
  const Hour = document.getElementById("Hour").value;

  const newSchedule = schedule({
    animalName: PetName,
    ownerName: tutorName,
    service: Service,
    date: Date,
    time: Hour,
    phone: phone
  })

  console.log(newSchedule.returnSchedule);

  ScheduleService.postSchedule(newSchedule.returnSchedule());

  SchedulerLoader.loadSchedule(Date);


  exitSheduleRegisterModal({target: document.getElementById("modalExit")});

}

const errorControler = () => {

  const errorElement = document.getElementById("insertScheduleError");

  console.log(errorElement);

  if(!errorElement) return;

  if(error.hasError){
  
    errorElement.textContent = error.text;
  
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



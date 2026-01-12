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

const submitNewSchedule = () => {
 
  const tutorName = document.getElementById("TutorName").value;
  const PetName = document.getElementById("PetName").value;
  const Telefone = document.getElementById("Telefone").value;
  const Service = document.getElementById("Service").value;
  const Date = document.getElementById("Date").value;
  const Hour = document.getElementById("Hour").value;


  

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
  }
  
}



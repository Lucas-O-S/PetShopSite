export const callSheduleRegisterModal = () => {
  fetch('../../pages/scheduleModal.html')
    .then(response => response.text())
    .then(html => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        const template = temp.querySelector('#schedule-modal');
        console.log(template)

        document.body.appendChild(template.content.cloneNode(true));
   
    })
    // .catch(err => console.error('Erro ao carregar modal:', err));
};

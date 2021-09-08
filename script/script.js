document.addEventListener('DOMContentLoaded', function(){

const btnOpenModal = document.querySelector('#btnOpenModal');
const modalBlock = document.querySelector('#modalBlock');
const closeModal = document.querySelector('#closeModal');
const questionTitle = document.querySelector('#question');
const formAnswers = document.querySelector('#formAnswers');
const burgerName = ['Стандарт','Черный'];
const burgerImage = ['burger.png','burgerBlack.png'];

btnOpenModal.addEventListener('click', () => {
  modalBlock.classList.add('d-block');
  playTest();
})

closeModal.addEventListener('click',() => {
  modalBlock.classList.remove('d-block');
})

const playTest = () => {
  const renderQuestions = () => {
    questionTitle.textContent = 'Какого цвета бургер вы хотите?';

    formAnswers.innerHTML = `
              <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="./image/${burgerImage[0]}" alt="burger">
                  <span>${burgerName[0]}</span>
                </label>
              </div>
              <div class="answers-item d-flex justify-content-center">
                <input type="radio" id="answerItem2" name="answer" class="d-none">
                <label for="answerItem2" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="./image/${burgerImage[1]}" alt="burger">
                  <span>${burgerName[1]}</span>
                </label>
              </div>`;
  }
  renderQuestions();
}
})




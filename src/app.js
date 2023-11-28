const steps1 = document.getElementById('player1_strip').children;
const steps2 = document.getElementById('player2_strip').children;
const body = document.querySelector('body');

let p1 = 0;
let p2 = 0;

window.addEventListener('keyup', (event) => {
  if (event.keyCode === 81) {
    p1 += 1;

    steps1[p1 - 1].classList.remove('active');
    steps1[p1].classList.add('active');
  }
  if (event.keyCode === 80) {
    p2 += 1;

    steps2[p2 - 1].classList.remove('active');
    steps2[p2].classList.add('active');
  }

  if (p1 === steps1.length - 1) {
    if (p2 !== 9) {
      steps1[p1 - 1].classList.remove('active');
      steps1[p1].classList.add('active');

      setTimeout(() => {
        const message = document.createElement('p');
        message.textContent = 'Выиграл 1 игрок';
        message.dataset.mes = 'message';
        body.appendChild(message);

        const mes = document.querySelectorAll('[data-mes]');
        setTimeout(() => {
          for (let i = 0; i < mes.length; i += 1) {
            mes[i].remove();
          }
        }, 1000);

        p1 = 0;
        p2 = 0;

        steps1[9].classList.remove('active');
        steps1[0].classList.add('active');

        for (let i = 0; i < steps2.length; i += 1) {
          steps2[i].classList.remove('active');
        }

        steps2[0].classList.add('active');
      }, 100);
    }
  } else if (p2 === steps2.length - 1) {
    if (p1 !== 9) {
      steps2[p2 - 1].classList.remove('active');
      steps2[p2].classList.add('active');

      setTimeout(() => {
        const message = document.createElement('p');
        message.textContent = 'Выиграл 2 игрок';
        message.dataset.mes = 'message';
        body.appendChild(message);

        const mes = document.querySelectorAll('[data-mes]');
        setTimeout(() => {
          for (let i = 0; i < mes.length; i += 1) {
            mes[i].remove();
          }
        }, 1000);

        p1 = 0;
        p2 = 0;

        steps2[9].classList.remove('active');
        steps2[0].classList.add('active');

        for (let i = 0; i < steps1.length; i += 1) {
          steps1[i].classList.remove('active');
        }

        steps1[0].classList.add('active');
      }, 100);
    }
  }
});

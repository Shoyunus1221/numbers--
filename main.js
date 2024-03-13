const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
  
  let count = 0;
  
  function increaseCounter() {
    count++;
    counterDisplay.textContent = count;
  }
  
  function decreaseCounter() {
    if (count > 0) {
      count--;
      counterDisplay.textContent = count;
    } else {
      alert('Siz 0 raqamiga yetib keldingiz. Minusga sanash mumkin emas');
    }
  }

  increaseBtn.addEventListener('click', increaseCounter);
  decreaseBtn.addEventListener('click', decreaseCounter);
document.getElementById("final_btn-1").addEventListener("click", function(){
    document.getElementById("modal-2").classList.add("open")
});

document.getElementById("close-modal-btn-2").addEventListener("click", function(){
    document.getElementById("modal-2").classList.remove("open")
});

const counters = document.querySelectorAll('[data-counter]');

if (counters) {
  counters.forEach(counter => {
      counter.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.counter_btn')) {
          let value = parseInt(target.closest('.counter').querySelector('input').value);

          if (target.classList.contains('counter_btn_plus')) {
            value++;
          } else {
            --value;
          }

          target.closest('.counter').querySelector('input').value = value
        }
      })
  })
}
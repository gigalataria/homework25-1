const p1 =  document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")

btn1.addEventListener('click', function () {
    p1.style.display = 'block';
    p2.style.display = 'none';
  });
  
btn2.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'block';
  });
  
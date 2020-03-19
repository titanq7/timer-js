window.addEventListener("DOMContentLoaded", function() {
  "use strick";

// Timer

let deadline = '2020-03-20'; // Конечная дата, deadline нашего таймера.

function getTimeRemaining (endtime){ // Функция которая вычисляет остаток времени и получает часы, минуты и секунды.
  let t = Date.parse(endtime) - Date.parse(new Date()), 
  seconds = Math.floor((t / 1000) % 60),  // Получаем секунды через остаток. 
  minutes =  Math.floor((t / 1000 / 60) % 60), // получаем минуты.
  hours = Math.floor((t / (1000*60*60))); // Получаем минуты.
 // days = Math.floor((t / (1000*60*60*24))); // Получаем дни.

 return { // Создаем обьект с получеными значениями и возращаем его. То есть getTimeRemaining(seconds), getTimeRemaining(minutes), getTimeRemaining(hours).
   'total' : t,
   'seconds' : seconds,
   'minutes' : minutes,
   'hours' : hours
 };
}

function setCloak(id, endtime) { // Создает различные переменные, 
  let timer = document.getElementById(id), // Нужное ид будет помещаться в переменную timer.
      seconds = timer.querySelector('.seconds'), // Кладем в переменные найденые классы через querySelector.
      minutes = timer.querySelector('.minutes'), // Кладем в переменные найденые классы через querySelector.
      hours = timer.querySelector('.hours'), // Кладем в переменные найденые классы через querySelector.
      timeInterval = setInterval(updateClock, 1000); // Установили для фукнции updateClock интервал запуска каждую секунду.

  function updateClock() { // Получает разницу между временем и записывает данные в классы.

    let t = getTimeRemaining(endtime); // Кладем в t полученные данные из функции getTimeRemaining.
    hours.textContent = t.hours; // записывааем в класс hours пролученные getTimeRemaining(hours).
    minutes.textContent = t.minutes;
    seconds.textContent = t.seconds;

    function addZero() { // Если getTimeRemaining(свойство) < 10 добавляем '0' к t.seconds.
      if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds;
      }
      if (t.minutes < 10) {
        minutes.textContent = '0' + t.minutes;
      }
      if (t.hours < 10) {
        hours.textContent = '0' + t.hours;
      }
    }
    addZero(); // Активируем функцию для добавления '0'.

    if (t <= 0) {
      clearInterval(timeInterval); // если t <= 0 , останавливаем метод timeInterval.
    }

  }
}

setCloak('timer', deadline); // id и конец отчета. deadline можно заменить на '2020-03-20' - обязательно тип данных строка.

});

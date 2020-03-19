window.addEventListener("DOMContentLoaded", function() {
  
  "use strick";
  // Timer

  let deadline = '2020-03-20'; // End date, deadline of our timer.

  function getTimeRemaining (endtime){ // A function that calculates the remainder of the time and receives hours, minutes and seconds.
    let t = Date.parse(endtime) - Date.parse(new Date()), 
    seconds = Math.floor((t / 1000) % 60),  // We get seconds through the remainder. 
    minutes =  Math.floor((t / 1000 / 60) % 60), // We get minutes.
    hours = Math.floor((t / (1000*60*60))); // We get the minutes.
   // days = Math.floor((t / (1000*60*60*24))); // Get the days.

   return { // We create an object with the obtained values and return it. getTimeRemaining(endtime).seconds, getTimeRemaining(endtime).seconds, getTimeRemaining(endtime).hours.
     'total' : t,
     'seconds' : seconds,
     'minutes' : minutes,
     'hours' : hours
   };
  }

  function setCloak(id, endtime) { // Creates various variables, 
    let timer = document.getElementById(id), // The desired id will be placed in the timer variable.
        seconds = timer.querySelector('.seconds'), // We put the found classes in variables through querySelector.
        minutes = timer.querySelector('.minutes'), // We put the found classes into variables through querySelector.
        hours = timer.querySelector('.hours'), // We put the found classes in variables through querySelector.
        timeInterval = setInterval(updateClock, 1000); // Set the updateClock function to the launch interval every second.

    function updateClock() { // Gets the difference between time and writes data to classes.

      let t = getTimeRemaining(endtime); // We put in t the received data from the getTimeRemaining function.
      hours.textContent = t.hours; // write to class hours received getTimeRemaining(endtime).hours.
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;


      function addZero() { // If getTimeRemaining (property) <10 add '0' to t.seconds.
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
      addZero(); // We activate the function to add '0'.

      if (t <= 0) {
        clearInterval(timeInterval); // if t <= 0, stop the timeInterval method.
      }

    }
  }

  setCloak('timer', deadline); // id and end of report. deadline can be replaced with '2020-03-20' - the string data type is required.

});

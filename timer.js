// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let hoursDiv = document.querySelector('#hours');
// let minutesDiv = document.querySelector('#minutes');
// let secondsDiv = document.querySelector('#seconds');
// let startBtn = document.querySelector('.startCount');

// hoursDiv.innerHTML = hours
// minutesDiv.innerHTML = minutes
// secondsDiv.innerHTML = seconds

// const count = () => {
//   hoursDiv.innerHTML = hours
//   minutesDiv.innerHTML = minutes
//   secondsDiv.innerHTML = seconds
  
//   seconds++
  
//   if (secondsDiv.innerHTML > 58) {
//     minutes++
//     seconds = 0
//   } else if (minutesDiv.innerHTML > 58) {
//     hours++
//     minutes = 0
//   }
// };

// let timer;

// const startCount = () => {
//   if(!timer) {
//     timer = setInterval(count, 1 * 1000)
//     startBtn.innerHTML = "Zatrzymaj"
//     startBtn.style.backgroundColor = "#eb3b5a"
//   } else {
//     window.clearInterval(timer);
//     timer = null
//     startBtn.innerHTML = "Wznów"
//     startBtn.style.backgroundColor = "#26de81"
//   }
// }

// const clearCount = () => {
//   hours = 0
//   minutes = 0
//   seconds = 0
//   hoursDiv.innerHTML = hours
//   minutesDiv.innerHTML = minutes
//   secondsDiv.innerHTML = seconds
// }

let hours = 0;
let minutes = 0;
let seconds = 0;

let container = document.querySelector('#timer');
let startBtn = document.querySelector('#startCount');

let timer = 0;

const count = () => {
  seconds++ ;
  localStorage.setItem('seconds', seconds)
  if(seconds >= 60) {
    minutes++;
    seconds = 0;
    localStorage.setItem('minutes', minutes)
  } else if (minutes >= 60) {
    hours++;
    minutes = 0;
    localStorage.setItem('hours', hours)
  }
  
  let template =
	'<div id="hours">'+ hours +' h</div>' +
  '<div id="minutes">'+ minutes +' m</div>' +
  '<div id="seconds">'+ seconds +' s</div>';
  
  saferInnerHTML(container, template);
}

const startCount = () => {
   if(!timer) {
    timer = setInterval(count, 1 * 1000)
    startBtn.innerHTML = 'Zatrzymaj'
    // console.log('Start')
  } else {
    window.clearInterval(timer);
    timer = null
    startBtn.innerHTML = 'Wznów'
    // console.log('Pause')
  }
};

const clearCount = () => {
  hours = 0
  minutes = 0
  seconds = 0
  
  let template =
	'<div id="hours">'+ hours +' h</div>' +
  '<div id="minutes">'+ minutes +' m</div>' +
  '<div id="seconds">'+ seconds +' s</div>';
  
  saferInnerHTML(container, template);

}


function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  
  function createDaysOfMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDays = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysMonth = dezDaysList[index];
    const dayListItem1 = document.createElement('li');
    dayListItem1.innerHTML = daysMonth;

    monthDays.appendChild(dayListItem1);
  }
}

createDaysOfMonth();
  // Escreva seu código abaixo.



  /*
  let day = document.createElement('li');
undefined
day.append('5');
undefined
day
<li>​5​</li>​
days.append(day);
undefined
days.append(day);
undefined
let day2 = document.createElement('li');
undefined
day2.append('6');
undefined
days.append(day2);
undefined
*/
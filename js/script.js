const getTodayDate = () => {
  const date = new Date();
  const day = date.getDate();
  const formatedDate = day + '.' + (date.getMonth() + 1) + '.' + '2020';
  document
    .getElementById('todayDate')
    .appendChild(document.createTextNode(formatedDate));
};

const getCountDownDays = () => {
  const date = new Date();
  const day = date.getDate();
  const daysLeft = Math.abs(24 - day);
  const countDown =
    daysLeft === 0 ? 'Gleðileg jól!' : daysLeft + ' dagar til jóla';
  document
    .getElementById('countDownDays')
    .appendChild(document.createTextNode(countDown));
};

const showContentIfDecemeber = () => {
  const date = new Date();
  const month = date.getMonth();
  if (month === 11) {
    document.getElementById('content').style.display = 'block';
  }
};

const getExerciseForToday = () => {
  const date = new Date();
  const day = date.getDate();
  let exercise = null;
  let isLink = false;
  switch (day) {
    case 1:
      exercise = '50 burpees (brjóta upp í viðráðanleg sett)';
      break;

    case 2:
      exercise = '5 mín. wall squat (t.d. 1 min x5)';
      break;

    case 3:
      exercise = 'Hálftíma göngutúr';
      break;

    case 4:
      exercise = 'https://www.youtube.com/watch?v=9DqQ5GfZth4&t=449s';
      isLink = true;
      break;

    case 5:
      exercise = '10 burpees';
      break;

    case 6:
      exercise = '20 burpees';
      break;

    case 7:
      exercise = '10 burpees';
      break;

    case 8:
      exercise = '20 burpees';
      break;

    case 9:
      exercise = '10 burpees';
      break;

    case 10:
      exercise = '20 burpees';
      break;

    case 11:
      exercise = '10 burpees';
      break;

    case 12:
      exercise = '20 burpees';
      break;

    case 13:
      exercise = '10 burpees';
      break;

    case 14:
      exercise = '20 burpees';
      break;

    case 15:
      exercise = '10 burpees';
      break;

    case 16:
      exercise = '20 burpees';
      break;

    case 17:
      exercise = '10 burpees';
      break;

    case 18:
      exercise = '20 burpees';
      break;

    case 19:
      exercise = '10 burpees';
      break;

    case 20:
      exercise = '20 burpees';
      break;

    case 21:
      exercise = '10 burpees';
      break;

    case 22:
      exercise = '20 burpees';
      break;

    case 23:
      exercise = '20 burpees';
      break;

    case 24:
      exercise = '20 burpees';
      break;
  }
  let activeDay = document.getElementById('activeDay').children[0];
  activeDay.innerHTML = '';
  document
    .getElementById('activeDay')
    .removeEventListener('click', getExerciseForToday);
  if (isLink) {
    activeDay.appendChild(document.createElement('a'));
    activeDay.children[0].href = exercise;
    activeDay.children[0].appendChild(document.createTextNode(exercise));
  } else {
    activeDay.appendChild(document.createTextNode(exercise));
  }
};

const renderCalendar = () => {
  for (let index = 0; index < 25; index++) {
    const dayContainer = document
      .getElementById('calendar')
      .appendChild(document.createElement('div'));
    dayContainer.className = 'dayContainer';
    dayContainer.id = 'day' + index;

    const dayContent = dayContainer.appendChild(document.createElement('div'));
    dayContent.className = 'dayContent';
    if (index > 0) {
      dayContent.appendChild(document.createTextNode(index));
    }
  }
  const date = new Date();
  const day = date.getDate();
  const dayContainer = document.getElementById('day' + day);
  dayContainer.id = 'activeDay';
  document
    .getElementById('activeDay')
    .addEventListener('click', getExerciseForToday);
};
renderCalendar();
getTodayDate();
getCountDownDays();
showContentIfDecemeber();

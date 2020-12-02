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
  let text = null;
  let isLink = false;
  switch (day) {
    case 1:
      text = '50 burpees (brjóta upp í viðráðanleg sett)';
      break;

    case 2:
      text = '5 mín. wall squat (t.d. 1 min x5)';
      break;

    case 3:
      text = '100x bakfettur';
      link = 'https://www.youtube.com/watch?v=DDJtB8Zgyow'; //bakfettur
      isLink = true;
      break;

    case 4:
      link = 'https://www.youtube.com/watch?v=9DqQ5GfZth4&t=449s'; //6 min ab workout
      isLink = true;
      break;

    case 5:
      text = 'Hálftíma göngutúr';
      break;

    case 6:
      text = '20 burpees';
      break;

    case 7:
      text = '10 burpees';
      break;

    case 8:
      text = '20 burpees';
      break;

    case 9:
      text = '10 burpees';
      break;

    case 10:
      text = '20 burpees';
      break;

    case 11:
      text = '10 burpees';
      break;

    case 12:
      text = '20 burpees';
      break;

    case 13:
      text = '10 burpees';
      break;

    case 14:
      text = '20 burpees';
      break;

    case 15:
      text = '10 burpees';
      break;

    case 16:
      text = '20 burpees';
      break;

    case 17:
      text = '10 burpees';
      break;

    case 18:
      text = '20 burpees';
      break;

    case 19:
      text = '10 burpees';
      break;

    case 20:
      text = '20 burpees';
      break;

    case 21:
      text = '10 burpees';
      break;

    case 22:
      text = '20 burpees';
      break;

    case 23:
      text = '20 burpees';
      break;

    case 24:
      text = '20 burpees';
      break;
  }
  const activeDay = document.getElementById('activeDay');
  activeDay.classList.add('windowOpened');

  let activeDayContent = activeDay.children[0];
  activeDayContent.innerHTML = '';
  document
    .getElementById('activeDay')
    .removeEventListener('click', getExerciseForToday);
  if (isLink) {
    activeDayContent.appendChild(document.createElement('a'));
    activeDayContent.children[0].href = link;
    activeDayContent.children[0].appendChild(
      document.createTextNode(text ? text : link),
    );
  } else {
    activeDayContent.appendChild(document.createTextNode(text));
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

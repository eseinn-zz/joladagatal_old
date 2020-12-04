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

renderExerciseForDay = (day) => {
  const date = new Date();
  const today = date.getDate();
  const [text, link, isLink] = getExerciseForDay(day);

  const chosenDay = document.getElementById(
    day === today ? 'activeDay' : 'day' + day,
  );
  if (day === today) {
    chosenDay.classList.add('windowOpened');
    document
      .getElementById('activeDay')
      .removeEventListener('click', getExerciseForToday);
  }
  console.log(chosenDay);
  let content = chosenDay.children[0];
  content.innerHTML = '';

  if (isLink) {
    content.appendChild(document.createElement('a'));
    content.children[0].href = link;
    content.children[0].appendChild(
      document.createTextNode(text ? text : link),
    );
  } else {
    content.appendChild(document.createTextNode(text));
  }
};

const getExerciseForToday = () => {
  const date = new Date();
  const day = date.getDate();
  renderExerciseForDay(day);
};

const getExerciseForDay = (day) => {
  let text = null;
  let link = null;
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
      link = 'https://www.youtube.com/watch?v=9DqQ5GfZth4'; //6 min ab workout
      isLink = true;
      break;

    case 5:
      link = ' https://www.youtube.com/watch?v=oAPCPjnU1wA'; // 20 MINUTE FULL BODY WORKOUT(NO EQUIPMENT)
      isLink = true;
      break;

    case 6:
      text = 'Hálftíma göngutúr';
      break;

    case 7:
      text = '50 armbeygjur';
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
  return [text, link, isLink];
};

const renderCalendar = () => {
  const date = new Date();
  const day = date.getDate();
  for (let index = 0; index < 25; index++) {
    const dayContainer = document
      .getElementById('calendar')
      .appendChild(document.createElement('div'));
    dayContainer.className = 'dayContainer';
    dayContainer.id = 'day' + index;

    const dayContent = dayContainer.appendChild(document.createElement('div'));
    dayContent.className = 'dayContent';
    if (index > 0) {
      if (day > index) {
        renderExerciseForDay(index);
      } else {
        dayContent.appendChild(document.createTextNode(index));
      }
    }
  }

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

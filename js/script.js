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
getTodayDate();
getCountDownDays();
showContentIfDecemeber();

const onButtonClick = () => {
  document.getElementById('button').style.display = 'none';
  getExerciseForToday();
};

const getExerciseForToday = () => {
  const date = new Date();
  const day = date.getDate();
  let exercise = null;
  console.log(day);
  switch (day) {
    case 1:
      exercise = '50 burpees (brjóta upp í viðráðanleg sett)';
      break;

    case 2:
      exercise = '5 mín. wall squat (t.d. 1 min x5)';
      break;

    case 3:
      exercise = '10 burpees';
      break;

    case 4:
      exercise = '20 burpees';
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
  console.log(exercise);
  const containers = document.getElementById('exercise').children;
  containers[1].appendChild(document.createTextNode(exercise));
};

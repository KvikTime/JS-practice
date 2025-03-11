'use strict';
document.addEventListener('DOMContentLoaded', () =>{
  let studentsTabel = document.querySelector('.students-table');// Обертка, где бдут находиться ячейки
  let NOWDATE = new Date; // Сегодняшняя полная дата
  let nowYear = NOWDATE.getFullYear(); // Сегодняшний год
  let nowMonth = NOWDATE.getMonth(); // Сегодняшний месяц
  let nowDay = NOWDATE.getDate(); // Сегодняшний день

  console.log(nowYear)
  console.log(nowMonth)
  console.log(nowDay)

  const headCELLname = document.querySelector('.name') // Главная ячейка 'Ф.И.О.'
  const headCELLfaculty = document.querySelector('.faculty') // Главная ячейка 'Факультет'
  const headCELLstartStudy = document.querySelector('.start-study') // Главная ячейка 'Годы обучения'
  const headCELLbirthday = document.querySelector('.birthday') // Главная ячейка 'Годы обучения'
  let resetFilter = document.querySelector('.filter__reset')

  let direction = false; // Переменная направления сортировки.
  let sortingDate = null; // Обнуление направления.
  let result = [];
  let copyStudentsList = [];

  const studentsList = [ // Массив объектов студентов
    {
      name: 'Настя',
      surname: 'Кеняйкина',
      patronymic: 'Евгеньевна',
      birthday: new Date('1998.09.21'),
      startStudy: '2019',
      faculty: 'Филологический',
    },
    {
      name: 'Иван',
      surname: 'Бахтин',
      patronymic: 'Евгеньевич',
      birthday: new Date('1998.09.22'),
      startStudy: '2003',
      faculty: 'Педагогический',
    },
    {
      name: 'Юрий',
      surname: 'Ревенко',
      patronymic: 'Александрович',
      birthday: new Date('1998.09.20'),
      startStudy: '2021',
      faculty: 'Химический',
    },
    {
      name: 'Виктор',
      surname: 'Курзаев',
      patronymic: 'Сергеевич',
      birthday: new Date('1998.12.05'),
      startStudy: '2024',
      faculty: 'Инженерный',
    },
    {
      name: 'Валентин',
      surname: 'Дьяконов',
      patronymic: 'Викторович',
      birthday: new Date('1993.01.18'),
      startStudy: '2022',
      faculty: 'Инженерный',
    },
    {
      name: 'Петр',
      surname: 'Антропов',
      patronymic: 'Иванович',
      birthday: new Date('2002.01.18'),
      startStudy: '2021',
      faculty: 'Биологический',
    },
    {
      name: 'Дмитрий',
      surname: 'Кузнецов',
      patronymic: 'Алексеевич',
      birthday: new Date('1998.03.12'),
      startStudy: '2023',
      faculty: 'Инженерный',
    },
    {
      name: 'Алексей',
      surname: 'Щербинин',
      patronymic: 'Викторович',
      birthday: new Date('2000.09.22'),
      startStudy: '2020',
      faculty: 'Инженерный',
    },
    {
      name: 'Виктор',
      surname: 'Антипов',
      patronymic: 'Иванович',
      birthday: new Date('2001.05.12'),
      startStudy: '2020',
      faculty: 'Химический',
    },
    {
      name: 'Иван',
      surname: 'Петров',
      patronymic: 'Николаевич',
      birthday: new Date('1996.11.07'),
      startStudy: '2016',
      faculty: 'Педагогический',
    },
    {
      name: 'Николай',
      surname: 'Миронов',
      patronymic: 'Янович',
      birthday: new Date('1998.01.01'),
      startStudy: '2016',
      faculty: 'Биологический',
    },
    {
      name: 'Николай',
      surname: 'Бутаков',
      patronymic: 'Анатольевич',
      birthday: new Date('1995.02.01'),
      startStudy: '2023',
      faculty: 'Биологический',
    },
    {
      name: 'Даниил',
      surname: 'Смирнов',
      patronymic: 'Александрович',
      birthday: new Date('1991.06.11'),
      startStudy: '2023',
      faculty: 'Педагогический',
    },
    {
      name: 'Виктор',
      surname: 'Смирнов',
      patronymic: 'Викторович',
      birthday: new Date('1992.07.15'),
      startStudy: '2006',
      faculty: 'Педагогический',
    },
    {
      name: 'Данил',
      surname: 'Бутаков',
      patronymic: 'Анатольевич',
      birthday: new Date('1995.03.14'),
      startStudy: '2023',
      faculty: 'Биологический',
    },

//------------------------------------------
  ]

  function trasformArray(originalArray) {
    copyStudentsList = [];

    for (let copyStudent of originalArray){
        let copyStudentObject = {};
        Object.assign(copyStudentObject, copyStudent);

        let studentYearBirthday = copyStudentObject.birthday.getFullYear();
        let studentMonthBirthday = copyStudentObject.birthday.getMonth();
        let studentDayBirthday = copyStudentObject.birthday.getDate();
        let age = nowYear - studentYearBirthday;
        let well = nowYear - (copyStudentObject.startStudy) //Курс
        well >= 4 && nowMonth >= 9 ? copyStudentObject.startStudy = `Закончил` : copyStudentObject.startStudy = `${copyStudentObject.startStudy} (${++well} курс)`;

        nowMonth === studentMonthBirthday ? (nowDay >= stringDay(studentDayBirthday) ? age : age = --age) : (nowMonth < studentMonthBirthday) ? age = --age : age;

        copyStudentObject.age = String(age);
        copyStudentObject.birthdayString = `${stringDay(studentDayBirthday)}.${stringMonth(studentMonthBirthday)}.${studentYearBirthday}`;

        

        copyStudentObject.fullName = `${copyStudentObject.surname} ${copyStudentObject.name} ${copyStudentObject.patronymic}`;
        copyStudentsList.push(copyStudentObject)
    };
    return copyStudentsList;
  }

  function stringDay(convertDay){ // Если день меньше 10, то поставится 0 перед цифрой день
    return convertDay <= 9 ? '0' + String(convertDay) : String(convertDay);
  }

  function stringMonth(convertMonth){ // Если месяц меньше 10, то поставится 0 перед цифрой месяца
    return convertMonth <= 8 ? '0' + String(convertMonth + 1) : String(convertMonth + 1);
  }

  function getStudentItem(studentObj) { // Функция вывода одного студента в таблицу.
    let row = document.createElement('tr');
    let cellAllName = document.createElement('th');
    let cellBirthday = document.createElement('th');
    let cellDateStartStudy = document.createElement('th');
    let cellFaculty = document.createElement('th');

    row.classList = 'row-student color-cell';
    cellAllName.classList = 'cell-students cell-name';
    cellBirthday.classList = 'cell-students cell-birthday'
    cellDateStartStudy.classList = 'cell-students start-study'
    cellFaculty.classList = 'cell-students faculty'
    cellBirthday.textContent = `${studentObj.birthdayString} ` + `(${studentObj.age} лет)`;
    cellAllName.textContent = studentObj.fullName;
    cellFaculty.textContent = studentObj.faculty;
    cellDateStartStudy.textContent = studentObj.startStudy

    row.append(cellAllName,cellFaculty,cellBirthday,cellDateStartStudy);
    return row
  }

  function renderStudentsTable(studentsArray) { // Функция отрисовки всех студентов.
    studentsTabel.innerHTML = '';
    for(let student of studentsArray){
      studentsTabel.append(getStudentItem(student));
    };
  }

  // Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.
  // Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.

  let form = document.querySelector('.form')
  let addStudent = document.querySelector('.form__button')
  let error = document.querySelector('.form__error')
  let facultyList = [];
  let facultyItem = document.querySelectorAll('.form__option')

  for(let item of facultyItem){
    if(item.value !== 'none'){
      facultyList.push(item.value)
    }
  }

  let notSurname = document.getElementById('surname');
  let notName = document.getElementById('name');
  let notPatronymic = document.getElementById('patronymic');
  let notBirthday = document.getElementById('birthday');
  let notStartStudy = document.getElementById('startStudy');
  let notFaculty = document.getElementById('faculty');
  notFaculty.value = ''
  notBirthday.min = '1900-01-01'
  notBirthday.max = `${nowYear}-${stringMonth(nowMonth)}-${stringDay(nowDay)}`

  function transformString(stringProp){
    let firstSymbol = stringProp.substring(0, 1).toUpperCase();
    let lastSymbols = stringProp.substring(1).toLowerCase();
    return firstSymbol+lastSymbols
  }

  form.addEventListener('input', function() {
    if (notSurname.value.trim() === '' || notName.value.trim() === '' || notPatronymic.value.trim() === '' || notBirthday.value.trim() === '' || notStartStudy.value.trim() === '' ||  notFaculty.value.trim() === '') { // Проверка, есть ли внутри инпута что-то
      addStudent.disabled = true;
    }
    else{
      addStudent.disabled = false;
    }
  })


  document.querySelector('.form__button').addEventListener('click', function(event) {
    event.preventDefault();

    let register = /^[-а-яА-ЯёЁa-zA-Z\u0410-\u044F\s`]+$/; // Только буквы
    let newStudent = {
      name: checkInputValue(notName.value),
      surname: checkInputValue(notSurname.value),
      patronymic: checkInputValue(notPatronymic.value),
      birthday:  new Date(notBirthday.value),
      startStudy: checkStartStudy(notStartStudy.value),
      faculty: NaN,
    }

    function checkStartStudy(valueString){
      if(valueString.length !== 4 || Number(valueString) > nowYear || 2000 > Number(valueString)){
        error.textContent = 'Некорректный год начала обучения';
        error.style.display = 'block';
        return NaN;
      }
      else{
        return valueString;
      }
    }

    function checkInputValue(value){
      if(register.test(value)){
        return transformString(value);
      }
      else{
        error.textContent = 'В полях Ф.И.О недопустимы цифры'
        error.style.display = 'block'
        return NaN;
      }
    }

    if(notBirthday.value < notBirthday.min || notBirthday.value > notBirthday.max){
      error.textContent = 'Дата рождения от 01.01.1900 до сегодняшней';
      error.style.display = 'block';
      newStudent.birthday = NaN;
    }

    if(facultyList.includes(notFaculty.value) === true) {
      newStudent.faculty = notFaculty.value;
    }
    else{
      newStudent.faculty = NaN;
      error.style.display = 'block'
    }

    let newStudentKeys = Object.values(newStudent)

    if(newStudentKeys.includes(NaN) === false) {
      studentsList.unshift(newStudent);
      notSurname.value = '';
      notName.value = '';
      notPatronymic.value = '';
      notBirthday.value = '';
      notStartStudy.value = '';
      notFaculty.value = '';
      error.style.display = 'none';
      addStudent.disabled = true;
      renderStudentsTable(trasformArray(studentsList));
    }
  })


  //-------------------------------------------------------------------------
  function sortingStudent(array, prop, dir){ //Функция сортировки массива студентов и добавьте события кликов на соответствующие колонки.
    error.style.display = 'none'
    if(dir === false && sortingDate === prop){
      dir = true;
      sortingDate = null;
    }
    else{
      sortingDate = prop;
    }

    return array.sort((a,b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 1);
  }

  function checkFilterArray(){
    if(result.length === 0){
      return trasformArray(studentsList)
    }
    else{
      return result
    }
  }

  headCELLname.addEventListener('click', () => renderStudentsTable(sortingStudent(checkFilterArray(), 'fullName', direction)));
  headCELLfaculty.addEventListener('click', () => renderStudentsTable(sortingStudent(checkFilterArray(), 'faculty', direction)));
  headCELLstartStudy.addEventListener('click', () => renderStudentsTable(sortingStudent(checkFilterArray(), 'startStudy', direction)));
  headCELLbirthday.addEventListener('click', () => renderStudentsTable(sortingStudent(checkFilterArray(), 'birthday', direction)));

  function filter(arr, prop, value){
    error.style.display = 'none'
    result = [];
      let copy = [...arr];
      for (let item of copy) {
        if(String(item[prop]).includes(value) == true) {
          result.push(item)
        };
      };
    return result;
  };

  document.querySelector('.filter').addEventListener('input', function(event) {
    event.preventDefault();
    error.style.display = 'none'
    let filterSurname = document.getElementById('filter-surname').value;
    let filterName = document.getElementById('filter-name').value;
    let filterPatronymic = document.getElementById('filter-patronymic').value;
    let filterBirthday = document.getElementById('filter-birthday').value;
    let filterStartStudy = document.getElementById('filter-startStudy').value;
    let filterFaculty = document.getElementById('filter-faculty').value;

    sortingDate = null

    let filterArray = [...copyStudentsList];

    if(filterSurname !== '') filterArray = filter(filterArray, 'surname', transformString(filterSurname));
    if(filterName !== '') filterArray = filter(filterArray, 'name', transformString(filterName));
    if(filterPatronymic !== '') filterArray = filter(filterArray, 'patronymic', transformString(filterPatronymic));
    if(filterBirthday !== '') filterArray = filter(filterArray, 'birthdayString', transformString(filterBirthday));
    if(filterStartStudy !== '') filterArray = filter(filterArray, 'startStudy', transformString(filterStartStudy));
    if(filterFaculty !== '') filterArray = filter(filterArray, 'faculty', transformString(filterFaculty));

    if(filterSurname === '' && filterName === '' && filterPatronymic === '' && filterBirthday === '' && filterStartStudy === '' && filterFaculty === ''){
      result = [];
    }

    renderStudentsTable(filterArray);
    console.log(result)
  })

  resetFilter.addEventListener('click', function(){
    renderStudentsTable(trasformArray(studentsList));
  });

  renderStudentsTable(trasformArray(studentsList));
});

function toggleTheme() {
  let bodyDom = document.getElementById('body');
  let themeButton = document.getElementById('theme-button');
  let buttonAnim = document.getElementById('button-anim');

  bodyDom.classList.contains('light-theme') 
  ? animateItems(bodyDom, themeButton, buttonAnim, 'toDark') 
  : animateItems(bodyDom, themeButton, buttonAnim, 'toLight');
}

//called onload in body of html
function setTheme(){
  let bodyDom = document.getElementById('body');
  let themeButton = document.getElementById('theme-button');

  let dateObj = new Date();
  let hour = dateObj.getHours();
  //light theme 7AM - 5:59 PM ... dark theme 6:PM - 6:59AM
  hour >= 18 || hour < 7 ? bodyDom.classList.add('dark-theme') : bodyDom.classList.add('light-theme')
  bodyDom.classList.contains('light-theme') ? themeButton.innerHTML = 'Dark' : themeButton.innerHTML = 'Light';
}

function updateTime(){
  let timeDom = document.getElementById('time');
  let dateObj = new Date();
  let hour = dateObj.getHours();
  let minute = dateObj.getMinutes();
  let meridiem = hour >= 12 && !(hour == 24) ? 'PM' : 'AM';
  hour = hour > 12 ? hour - 12 : hour;
  minute = minute < 10 ? '0' + minute: minute; //adds '0' when there's only a single integer
  let time = (hour + ':' + minute + ' ' + meridiem);
  timeDom.innerHTML = time;
  setTimeout(updateTime, 1000);
}

function animateItems(bodyDom, themeButton, buttonAnim, animation){
  if (animation == 'toDark'){
    buttonAnim.classList.add('anim-enlarge');
    buttonAnim.classList.add('anim-dark-to-light');
    themeButton.classList.add('anim-dark-to-light');
    if (buttonAnim.classList.contains('anim-fade-in')) { buttonAnim.classList.remove('anim-fade-in'); }

    setTimeout(function () {
      buttonAnim.classList.remove('anim-enlarge');
      buttonAnim.classList.remove('anim-dark-to-light');
      themeButton.classList.remove('anim-dark-to-light');
      buttonAnim.classList.remove('anim-fade-in');

      buttonAnim.classList.add('anim-light-to-dark');
      themeButton.classList.add('anim-light-to-dark');
      buttonAnim.classList.add('anim-fade-in');
      themeButton.classList.add('anim-fade-in');

      //recolor
      themeButton.innerHTML = "Light";
      bodyDom.classList.remove('light-theme');
      bodyDom.classList.add('dark-theme');
    }, 1000);
  } else {
    /* To Light Theme */
    buttonAnim.classList.add('anim-enlarge');
    buttonAnim.classList.add('anim-light-to-dark');
    themeButton.classList.add('anim-light-to-dark');

    buttonAnim.classList.remove('anim-fade-in');
    themeButton.classList.remove('anim-fade-in');

    setTimeout(function () {
      buttonAnim.classList.remove('anim-enlarge');
      buttonAnim.classList.remove('anim-light-to-dark');
      themeButton.classList.remove('anim-light-to-dark');
      buttonAnim.classList.remove('anim-fade-in');

      buttonAnim.classList.add('anim-dark-to-light');
      themeButton.classList.add('anim-dark-to-light');
      buttonAnim.classList.add('anim-fade-in');
      themeButton.classList.add('anim-fade-in');

      //recolor
      themeButton.innerHTML = "Dark";
      bodyDom.classList.remove('dark-theme');
      bodyDom.classList.add('light-theme');
    }, 1000);
  }
}
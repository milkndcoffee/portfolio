function toggleTheme() {
  let containerDom = document.getElementById('container');
  let themeButton = document.getElementById('theme-button');
  let buttonAnim = document.getElementById('button-anim');

  if (containerDom.classList.contains('light-theme')) {
    /* To Dark Theme */
    //animation
    buttonAnim.classList.add('anim-enlarge');
    buttonAnim.classList.add('anim-dark-to-light');
    buttonAnim.classList.add('anim-fade-in');
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

      //recolor
      themeButton.innerHTML = "Light";
      containerDom.classList.remove('light-theme');
      containerDom.classList.add('dark-theme');
    }, 1000);



  } else {
    /* To Light Theme */
    //animation
    buttonAnim.classList.add('anim-enlarge');
    buttonAnim.classList.add('anim-light-to-dark');
    themeButton.classList.add('anim-light-to-dark');
    buttonAnim.classList.add('anim-fade-in');


    buttonAnim.classList.remove('anim-fade-in');

    setTimeout(function () {
      buttonAnim.classList.remove('anim-enlarge');
      buttonAnim.classList.remove('anim-light-to-dark');
      themeButton.classList.remove('anim-light-to-dark');
      buttonAnim.classList.remove('anim-fade-in');

      buttonAnim.classList.add('anim-dark-to-light');
      themeButton.classList.add('anim-dark-to-light');
      buttonAnim.classList.add('anim-fade-in');

      //recolor
      themeButton.innerHTML = "Dark";
      containerDom.classList.remove('dark-theme');
      containerDom.classList.add('light-theme');
    }, 1000);


  }
}
function toggleTheme() {
  let containerDom = document.getElementById('container');

  if (containerDom.classList.contains('light-theme')) {
    containerDom.classList.remove('light-theme');
    containerDom.classList.add('dark-theme');
  } else{
    containerDom.classList.remove('dark-theme');
    containerDom.classList.add('light-theme');
  }
}
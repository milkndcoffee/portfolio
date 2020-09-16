function updateTime(){
  let timeDom = document.getElementById('time');
  let dateObj = new Date();
  let hour = dateObj.getHours(); 
  let minute = dateObj.getMinutes();
  let meridiem = hour >= 12 && !(hour == 24) ? 'PM' : 'AM';
  if (hour > 12){
    hour -= 12;
  } else {
    hour = hour == 0 ? 12 : hour;
  }
  minute = minute < 10 ? '0' + minute: minute; //adds '0' when there's only a single integer
  let time = (hour + ':' + minute + ' ' + meridiem);
  timeDom.innerHTML = time;
  setTimeout(updateTime, 1000);
}

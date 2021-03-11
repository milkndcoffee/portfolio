function collapseContent(a, content){
  if (a == true){
    window.alert('not active');
  } else {
    content.classList.remove('active');

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  }
}

function toggleCollapse(){
  let content = document.getElementsByClassName("collapse-content");
  content[0].classList.contains('active') ? collapseContent(true, content[0]) : collapseContent(false, content[0]);
}

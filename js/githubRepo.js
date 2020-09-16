function getAllData() {
  let projectApiLinks = [
    'https://api.github.com/repos/milkndcoffee/milkndcoffee.github.io', //my first ever project on github
    'https://api.github.com/repos/milkndcoffee/bs-healthcare',
    'https://api.github.com/repos/milkndcoffee/react-issues-page',
    'https://api.github.com/repos/milkndcoffee/simple-twitterapi-on-flask'
  ];

  let promises = projectApiLinks.map(link =>
    fetch(link)
      .then(res => res.json()
        .then(data => {
          return data;
        })));

  Promise.allSettled(promises)
    .then(datas => {
      //console.log(datas);
      datas.map((data, i) => createProject(data.value, i));
    })
    .catch(err => {
      console.log(err);
    });

}

getAllData();

function createProject(data, i) {
  
  let projectSect = document.getElementById('project-sect');
  let project = [];
  let title = data.name;
  let description = data.description;
  let url = data.html_url;
  let languages;
  /*
    parameter i will allow me to
    manipulate a certain project.
  */
  switch(i){
    case 0:
      languages = 'Vanilla HTML5, CSS3, JS';
      break;
    case 1:
      languages = 'HTML5, CSS3, SCSS, Bootstrap4';
      break;
    case 2:
      languages = 'React, JS, HTML5, CSS3, '
      break;
    case 3:
      languages = 'HTML5, Python, Flask, CSS3'
      break;
    default:
      languages = '???'
      break;
  }
  /*
  let languages = fetch(data.languages)
    .then(res => res.json()
      .then(data => {
        return data;
      }));
  */
  console.log(project, i);
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  cardDiv.innerHTML = `
  <div>
    <h3>${title}</h3>
    <div class="under-title">
      <p>${languages}</p>
      <a href="${url}">source</a>
    </div>
  </div>
  <img style=" background-color: gray;">
  </img>
  <p>${description}</p>
  `
  projectSect.appendChild(cardDiv);
}

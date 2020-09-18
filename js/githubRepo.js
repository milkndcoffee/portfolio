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
  let cardsContainer = document.getElementById('cards');
  let project = [];
  let title, description, languages; 
  
  title = title !== 'undefined' ? data.name.replace(/-/g,' ') : 'ERROR!: rate limit exceeded';
  description = description !== 'undefined' ? data.description : 'ERROR!: rate limit exceeded';
  let repo = data.html_url;
  /*
    parameter i will allow me to
    manipulate a certain project.
  */
  switch(i){
    case 0:
      languages = 'Vanilla HTML5, CSS3, JS';
      title = 'NaRSS';
      url = 'https://milkndcoffee.github.io/merch-shop/index.html';
      img = 'https://raw.githubusercontent.com/milkndcoffee/portfolio/master/img/NaRSS2.png';
      break;
    case 1:
      languages = 'HTML5, CSS3, SCSS, Bootstrap4';
      url = 'https://milkndcoffee.github.io/bs-healthcare/';
      img = 'https://raw.githubusercontent.com/milkndcoffee/portfolio/master/img/bs-healthcare.png';
      break;
    case 2:
      languages = 'React, JS, HTML5, CSS3, '
      url = 'https://milkndcoffee.github.io/react-issues-page/';
      img = 'https://raw.githubusercontent.com/milkndcoffee/portfolio/master/img/react-issues-page.png';
      break;
    case 3:
      languages = 'Python, Flask, HTML5, CSS3'
      url = repo;
      img = 'https://raw.githubusercontent.com/milkndcoffee/portfolio/master/img/twitter-flask2.png';
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
    <h3 class="capitalize"><a href="${url}">${title}</a></h3>
    <div class="under-title">
      <p>${languages}</p>
      <a href="${repo}">repo</a>
    </div>
  </div>
  <img alt="project-img" src="${img}" style=" background-color: gray;">
  </img>
  <p>${description}</p>
  `
  cardsContainer.appendChild(cardDiv);
}


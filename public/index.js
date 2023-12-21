// Declare variables
const cardImg1 = document.querySelector("#card-img-1");
const title1 = document.querySelector("#title-1");
const subTitle1 = document.querySelector("#subtitle-1");
const content1 = document.querySelector("#content-1");

const cardImg2 = document.querySelector("#card-img-2");
const title2 = document.querySelector("#title-2");
const subTitle2 = document.querySelector("#subtitle-2");
const content2 = document.querySelector("#content-2");

const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", getIdea);

/**!SECTION Scope of project
 * 1. Fetch photos from two APIs and place them in cardImg
 * 2. Fetch Chuck Norris quotes and another quotes API and render them to contentX
 */

function getIdea() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      content1.textContent = data.value;
      console.log(data.value);
    });

  fetch("	https://yesno.wtf/api")
    .then((res) => res.json())
    .then((data) => {
      cardImg1.src = data.image;
      console.log(data);
    });

  fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    .then((res) => res.json())
    .then((data) => {
      data.forEach(function (element) {
        element.quote;
        title2.textContent = element.author;
        subTitle2.textContent = `@${element.author}`;
        content2.textContent = element.quote;
        console.log(data);
        console.log(element.quote);
      });
    });

  fetch("https://nekos.best/api/v2/neko")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((item) => {
        const imgUrl = item.url;
        cardImg2.src = imgUrl;
        console.log(item.url);
      });
<<<<<<< HEAD
// Corrected!!!
=======
>>>>>>> 7ac4f588c32ef62f6e461ceef1762a68437cae87
      fetch("https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=e3adcb87-3cbc-4966-bcc2-0437afdc00e3")      
        .then((res) => res.json())
        .then((data) => {
          const results = data.response.results;
          results.forEach((item) => {
            console.log(item);
          });

          console.log(data);
        });
    });
}

getIdea();

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // add attributes to the article object
  
  const headline = article.headline;
  const authorPhoto = article.authorPhoto;
  const authorName = article.authorName;


  
  
  
  

// instantiating the elements
const newsCard = document.createElement('div');
const newsHeadline = document.createElement('div');
const newsAuthor = document.createElement('div');
const newsImgContainer = document.createElement('div');
const newsImgSrc = document.createElement('img');
const newsAuthorName = document.createElement('span');


// create class names, attributes and text
newsCard.classList.add('card');
newsHeadline.classList.add('headline');
newsHeadline.textContent = `${article.headline}`;
newsAuthor.classList.add('author');
newsImgContainer.classList.add = ('img-container');
newsImgSrc.src = `${article.authorPhoto}`;
newsAuthorName.textContent = `By ${article.authorName}`;


// create the hierarchy
newsCard.appendChild(newsHeadline);
newsCard.appendChild(newsAuthor);
newsAuthor.appendChild(newsImgContainer);
newsImgContainer.appendChild(newsImgSrc);
newsAuthor.appendChild(newsAuthorName);



// click event
newsCard.addEventListener('click', () => {
  console.log(headline);
})
// return something
return newsCard;



}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }

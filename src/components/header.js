const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

// instantiating the elements
const newsHeader = document.createElement('div');
const newsDate = document.createElement('span');
const newsHeading = document.createElement('h1');
const newsTemp = document.createElement('span');

// create class names, attributes and text
newsHeader.classList.add('header');
newsDate.classList.add('date');
newsDate.textContent = `${date}`;
newsHeading.textContent = `${title}`;
newsTemp.classList.add('temp');
newsTemp.textContent = `${temp}`;

// create the hierarchy
newsHeader.appendChild(newsDate);
newsHeader.appendChild(newsHeading);
newsHeader.appendChild(newsTemp);

// return something
return newsHeader;
}


const container = document.querySelector('.header-container');
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
// console.log(Header);
// return Header(selector)
// }
// Header.forEach(elem => {
// const linkElem = headerAppender(elem);
// container.appendChild(linkElem);
// })

// const newsArray = [];
// for(let i = 0; i < 3; i++){
//   newsArray.push(selector);
// }
}
  
  
export { Header, headerAppender }

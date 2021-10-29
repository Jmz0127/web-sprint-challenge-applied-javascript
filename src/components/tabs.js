const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //


// instantiating the elements
const newsTopics = document.createElement('div');
const newsTab1 = document.createElement('div');
const newsTab2 = document.createElement('div');
const newsTab3 = document.createElement('div');

// create class names, attributes and text
newsTopics.classList.add('topics');
newsTab1.classList.add('tab');
newsTab2.classList.add('tab');
newsTab3.classList.add('tab');
newsTab1.textContent = 'javascript';
newsTab2.textContent = 'bootstrap';
newsTab3.textContent = 'technology';

// create the hierarchy
newsTopics.appendChild(newsTab1);
newsTopics.appendChild(newsTab2);
newsTopics.appendChild(newsTab3);

// return something
return newsTopics;
}




const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }

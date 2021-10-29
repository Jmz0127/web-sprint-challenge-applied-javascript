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
// const newsTopics = document.createElement('div');
// const newsTab = document.createElement('div');


// create class names, attributes and text
// newsTopics.classList.add('topics');
// newsTab.classList.add('tab');



// create the hierarchy
// newsTopics.appendChild(newsTab);



// topic add function

function createTopic(){
  const newsTopics = document.createElement('div');
  newsTopics.classList.add('topics');

 

  const tTags = [];
  for(let i = 0; i < 7; i++){
    tTags.push(document.createElement('div'));
  }

  tTags[0].textContent = 'javascript';
  tTags[0].classList.add('tab');
  tTags[1].textContent = 'bootstrap';
  tTags[1].classList.add('tab');
  tTags[2].textContent = 'technology';
  tTags[2].classList.add('tab');

newsTopics.appendChild('.tab');
tTags.forEach(div => newsTopics.appendChild(div.div));


}

// return something
return createTopic;


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

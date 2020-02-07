//grabbing the comments section in the html file and storing it in a variable
const commentsSection = document.querySelector(".comments");

//creating and appending an outputs section
const commentsOutputs = document.createElement('div');
commentsOutputs.classList.add('comments__outputs');
commentsSection.appendChild(commentsOutputs);

let arrUserNames = ['Daniil Molodkov','Rakesh Mistry','Joshua Taguicana'];
let arrComments = ["Wow! This band is great, but their website is even better! I love the animation on the navigation links!","I came for the music but I stayed for the responsive design. It even looks good in between breakpoints!","There\'s no way I\'m giving this site anything less than a 100%. Whoever made this knows what they\'re doing!"];
let arrDates = ['12/18/2018','12/12/2018','11/15/2018'];
let arrSrcs = ["./assets/images/comment1.jpeg", "./assets/images/comment2.jpeg", "./assets/images/comment3.jpeg"];

//creating a function for creating each individual comment 'card' and filling it with the data from the web API
const createCard = function (userNames, comments, dates) {

    //first creating and appending all the needed elements, plus the classes used to style them
    const commentsCard = document.createElement('div');
    commentsCard.classList.add('comments__card');
    commentsOutputs.appendChild(commentsCard);

    const nameDate = document.createElement('div');
    nameDate.classList.add('comments__namedate');
    commentsCard.appendChild(nameDate);

    const userName = document.createElement('p');
    userName.classList.add('comments__outusername');
    userName.textContent = (userNames);
    nameDate.appendChild(userName);

    const date = document.createElement('p');
    date.classList.add('comments__outdate');
    date.textContent = (dates);
    nameDate.appendChild(date);

    const commentText = document.createElement('p');
    commentText.classList.add('comments__outtext');
    commentText.textContent = (comments);
    commentsCard.appendChild(commentText);
}

//a for loop used for inputting the data from web API. 
//It iterates through each of the indexes values at the same time, creating one comment card at a time
for (var i = 0; i <= arrUserNames.length-1; i++) {
    createCard(arrUserNames[i],arrComments[i],arrDates[i]);
}

//need to change the event listener to the entire form, not just the button
const commentButton = document.querySelector('.comments__button');
commentButton.addEventListener("click", function(event){
    event.preventDefault()
});

//event handler that actually posts the comment on the click of the button
commentButton.onclick = function clickHandler () {

    //grabs the value in the input fields on the website
    var username = document.querySelector(".comments__username").value;
    var comment = document.querySelector(".comments__text").value;

    //aborts execution if the comment or username input is empty
    if (username=== "" || comment === "") {
        return alert('Please enter a username');
    }
    
    //adds the grabbed values to the beginning of the array
    arrUserNames.unshift(username);
    arrComments.unshift(comment);
    arrDates.unshift('Now');
    arrSrcs.unshift('./assets/images/profile.jpg')

    console.log(arrUserNames);
    console.log(arrComments);
    console.log(arrDates);
    console.log(arrSrcs);

    //clears the output section to provide a clean slate for reproducing all elements with the new data
    commentsOutputs.innerHTML = "";

    //iterates through each array and executes the createCard function from before
    for (var i = 0; i <= arrUserNames.length-1; i++) {
        createCard(arrUserNames[i],arrComments[i],arrDates[i],arrSrcs[i]);
    }

    //clears the form after submission
    document.querySelector(".comments__form").reset()
}

//acquiring an api key
const apiKeyRequest = axios.get ('https://project-1-api.herokuapp.com/register');

//storing the API key that I grabbed from the browser, in a variable
const apiKey = "234dfbdf-20c1-4168-b9b3-08ec038c0e1a";
const keyAffix = "?api_key=" + apiKey;

//retrieving comments
const comments = axios.get ("https://project-1-api.herokuapp.com/comments" + keyAffix);

var arrNewUserNames = [];
var arrNewComments = [];

console.log(comments)

comments.then(result => {
    console.log(result)
    result.data.children.forEach (innerResult => {
        // console.log(innerResult)
        arrNewUserNames.push(result.data.name)
    })
    result
})

            





    















const commentsSection = document.querySelector(".comments");

const commentsOutputs = document.createElement('div');
commentsOutputs.classList.add('comments__outputs');
commentsSection.appendChild(commentsOutputs);

let arrUserNames = ['Daniil Molodkov','Rakesh Mistry','Joshua Taguicana'];
let arrComments = ["Wow! This band is great, but their website is even better! I love the animation on the navigation links!","I came for the music but I stayed for the responsive design. It even looks good in between breakpoints!","There\'s no way I\'m giving this site anything less than a 100%. Whoever made this knows what they\'re doing!"];
let arrDates = ['12/18/2018','12/12/2018','11/15/2018'];
let arrSrcs = ["./assets/images/comment1.jpeg", "./assets/images/comment2.jpeg", "./assets/images/comment3.jpeg"];

const createCard = function (userNames, comments, dates, sources) {
    const commentsCard = document.createElement('div');
    commentsCard.classList.add('comments__card');
    commentsOutputs.appendChild(commentsCard);

    const userPicture = document.createElement('img');
    userPicture.classList.add('comments__outpicture');
    userPicture.src = (sources);
    commentsCard.appendChild(userPicture);

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

for (var i = 0; i <= arrUserNames.length-1; i++) {
    createCard(arrUserNames[i],arrComments[i],arrDates[i],arrSrcs[i]);
}

const commentButton = document.querySelector('.comments__button');
commentButton.addEventListener("click", function(event){
    event.preventDefault()
});

commentButton.onclick = function clickHandler () {
    var username = document.querySelector(".comments__username").value;
    var comment = document.querySelector(".comments__text").value;
    
    arrUserNames.unshift(username);
    arrComments.unshift(comment);
    arrDates.unshift('Now');
    arrSrcs.unshift('./assets/images/profile.jpg')

    console.log(arrUserNames);
    console.log(arrComments);
    console.log(arrDates);
    console.log(arrSrcs);

    commentsOutputs.innerHTML = "";

    for (var i = 0; i <= arrUserNames.length-1; i++) {
        createCard(arrUserNames[i],arrComments[i],arrDates[i],arrSrcs[i]);
    }

    document.querySelector(".comments__form").reset()
}

//acquiring an api key
const apiKeyRequest = axios.get ('https://project-1-api.herokuapp.com/register');
api_key.then(result => {
    console.log(result);
});

//storing the API key, that I grabbed from the browser, in a variable
const apiKey = "234dfbdf-20c1-4168-b9b3-08ec038c0e1a";

//retrieving comments
const comments = axios.get (`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`);













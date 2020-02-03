const commentsSection = document.querySelector(".comments");

const commentsOutputs = document.createElement('div');
commentsOutputs.classList.add('comments__outputs');
commentsSection.appendChild(commentsOutputs);

let arrUserNames = ['Daniil Molodkov','Rakesh Mistry','Joshua Taguicana'];
let arrComments = ["Wow! This band is great, but their website is even better! I love the animation on the navigation links!","I came for the music but I stayed for the responsive design. It even looks good in between breakpoints!","There\'s no way I\'m giving this site anything less than a 100%. Whoever made this knows what they\'re doing!"];
let arrDates = ['12/18/2018','12/12/2018','11/15/2018','Now'];
let arrSrcs = ["./assets/images/comment1.jpeg", "./assets/images/comment2.jpeg", "./assets/images/comment3.jpeg","./assets/images/profile.jpg"];

const createCard = function (arrUserNames,arrComments, arrDates, arrSrcs) {
    const commentsCard = document.createElement('div');
    commentsCard.classList.add('comments__card');
    commentsOutputs.appendChild(commentsCard);

    const userPicture = document.createElement('img');
    userPicture.classList.add('comments__outpicture');
    // userPicture.src = "./assets/images/comment1.jpeg";
    userPicture.src = (arrSrcs[i]);
    commentsCard.appendChild(userPicture);

    const nameDate = document.createElement('div');
    nameDate.classList.add('comments__namedate');
    commentsCard.appendChild(nameDate);

    const userName = document.createElement('p');
    userName.classList.add('comments__outusername');
    userName.textContent = (arrUserNames[i]);
    nameDate.appendChild(userName);

    const date = document.createElement('p');
    date.classList.add('comments__outdate');
    date.textContent = (arrDates[i]);
    nameDate.appendChild(date);

    const commentText = document.createElement('p');
    commentText.classList.add('comments__outtext');
    commentText.textContent = (arrComments[i]);
    commentsCard.appendChild(commentText);
}

for (var i = 0; i <= arrUserNames.length-1; i++) {
    createCard(arrUserNames,arrComments,arrDates,arrSrcs);
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

    console.log(arrUserNames);



    // for (var i = 0; i <= arrUserNames.length-1; i++) {
    //     createCard(arrUserNames,arrComments,arrDates,arrSrcs);
    // }
}






//acquiring an api key
const apiKeyRequest = axios.get ('https://project-1-api.herokuapp.com/register');

//storing the API key that I grabbed from the browser, in a variable
const apiKey = "234dfbdf-20c1-4168-b9b3-08ec038c0e1a";
const keyAffix = "?api_key=" + apiKey;

//grabbing the comments section and form in the html file and storing them in a variable
const commentsSection = document.querySelector(".comments");
const commentForm = document.querySelector('.comments__form');

let commentsOutputs = document.createElement('div');
commentsOutputs.classList.add('comments__outputs');

//function to convert timestamps into amount of time elapsed
function timeElapsed(postTime){
    var now = new Date();
    secondsAgo = (now.getTime() - postTime)/1000;

    if (secondsAgo < 60) {
        return Math.floor(secondsAgo) + ' seconds ago';
    }

    if (secondsAgo < (60*60)) {
        return Math.floor(secondsAgo/(60)) + ' minutes ago';
    }

    if (secondsAgo < (60*60*24)) {
        return Math.floor(secondsAgo/(60*60)) + ' hours ago';
    }

    if (secondsAgo < (60*60*24*365)) {
        return Math.floor(secondsAgo/(60*60*24)) + ' days ago';
    }

    if (secondsAgo > (60*60*24*365)) {
        return Math.round(secondsAgo/(60*60*24*365)) + ' years ago';
    }
}

//function for retrieving and displaying comments
function displayComments() {

    const comments = axios.get ("https://project-1-api.herokuapp.com/comments" + keyAffix, {
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    comments.then(result => {
        result.data.forEach (item => {

            console.log(item);

            commentsSection.appendChild(commentsOutputs);

            const commentsCard = document.createElement('div');
            commentsCard.classList.add('comments__card');
            //the insertbefore function lets the newest comments post first
            commentsOutputs.insertBefore(commentsCard,commentsOutputs.firstChild);

            const nameDate = document.createElement('div');
            nameDate.classList.add('comments__namedate');
            commentsCard.appendChild(nameDate);

            const userName = document.createElement('p');
            userName.classList.add('comments__outusername');
            userName.textContent = (item.name);
            nameDate.appendChild(userName);

            var displayTime = timeElapsed(item.timestamp);
            
            const date = document.createElement('p');
            date.classList.add('comments__outdate');
            date.textContent = (displayTime);
            nameDate.appendChild(date);

            const commentText = document.createElement('p');
            commentText.classList.add('comments__outtext');
            commentText.textContent = (item.comment);
            commentsCard.appendChild(commentText);

            const commentImg = document.createElement('img');
            commentImg.classList.add('comments__outpicture');
            commentImg.src = "./assets/images/placeholderimage.jpg"
            commentsCard.appendChild(commentImg);

            const bottomButtons = document.createElement('div');
            bottomButtons.classList.add('comments__bottom');
            commentsCard.appendChild(bottomButtons);

            const likeButton = document.createElement('button');
            likeButton.classList.add('comments__like');
            likeButton.innerHTML = "Like"
            likeButton.setAttribute("data-id",item.id);
            bottomButtons.appendChild(likeButton);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('comments__delete');
            deleteButton.innerHTML = "Delete";
            deleteButton.setAttribute("data-id",item.id);
            bottomButtons.appendChild(deleteButton);

            const likeDisplay = document.createElement('div');
            likeDisplay.classList.add('comments__display');
            bottomButtons.appendChild(likeDisplay);

            const likeIcon = document.createElement('img');
            likeIcon.classList.add('comments__icon');
            likeIcon.src= "./assets/images/likeicon.png";
            likeDisplay.appendChild(likeIcon);

            const likeCount = document.createElement('p');
            likeCount.classList.add('comments__count');
            likeCount.innerHTML = item.likes;
            likeDisplay.appendChild(likeCount);
        })

        var deleteNodeList = document.querySelectorAll(".comments__delete");
        deleteNodeList.forEach (button => {
            button.addEventListener("click", function(event){
                const id = button.getAttribute("data-id");
                const deleting = axios.delete ("https://project-1-api.herokuapp.com/comments/"+id+keyAffix);
                deleting.then(result =>{
                    commentsOutputs.innerHTML = "";
                    displayComments();
                })
            })
        })

        var likeNodeList = document.querySelectorAll(".comments__like");
        likeNodeList.forEach (button => {
            button.addEventListener("click", function(event){
                const id = button.getAttribute("data-id");
                const liking = axios.put ("https://project-1-api.herokuapp.com/comments/"+id+"/like"+keyAffix);
                liking.then(result =>{
                    button.style.color = '#0065AD';
                    button.style.fontFamily = "Avenir-Bold";
                    commentsOutputs.innerHTML = "";
                    displayComments();
                })
            })  
        })
    })
}

//calling on the function above
displayComments();

//the function that executes on form submit
commentForm.addEventListener("submit", function(event){

    //prevents refresh on submit
    event.preventDefault()

    //grabs the value in the input fields
    var username = document.querySelector(".comments__username").value;
    var comment = document.querySelector(".comments__text").value;

    // console.log(username + comment);

    //aborts execution if the comment or username input is empty
    if (username === "") {
        return alert('Please enter a username');
    }

    if (comment === "") {
        return alert('Please enter a comment');
    }

    //posts the comment to the server
    const posting = axios.post ("https://project-1-api.herokuapp.com/comments" + keyAffix, {
        name: username,
        comment: comment
    })

    //clears the output section 
    commentsOutputs.innerHTML = "";

    //calling the displayComments function in the promise will force it to wait until the posting has been completed before executing
    posting.then(result =>{
        displayComments();
    })

    //clears the form fields
    document.querySelector(".comments__form").reset()
});





            





    















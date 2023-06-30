/* TODO: fill the divs with data, depending on which button is pressed. 
At minimum:
    Categories require a user with an Admin role to be logged in and a category name.
    Topics require a user with an Admin role to be logged in and a topic name and in which category it belongs.
    Posts require the user to be logged in, a title and description. */

// TODO: when creating a category, check if a category with the same name already exists. If yes, inform the user. If not, inform the user.
// TODO: when creating a topic, check if a topic with the same name already exists within the same category. Inform user.
// TODO: when a category, topic or post is succesfully created, all relevant data should be sent to the database.

// TODO: when a category, topic or post is created, all input fields should be sanitized / checked for injection / exploits.

const CategoryAdd = document.querySelector(".add-category");
const TopicAdd = document.querySelector(".add-topic");

const DivContainer = document.getElementById("div-container");

CategoryAdd.addEventListener("click", AddCategory);
TopicAdd.addEventListener("click", AddTopic);

function AddCategory(){
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <script src="../components/category-table.js" type="text/javascript" defer></script>
    <category-table-component></category-table-component>
    `;
    DivContainer.appendChild(newDiv);
}

function AddTopic(){
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <script src="../components/topic-table.js" type="text/javascript" defer></script>
    <topic-table-component></topic-table-component>
    `;
    DivContainer.appendChild(newDiv);
}

function postComment() {
    const commentText = document.getElementById("commentArea").value;
    if (commentText.trim() === "") {
      alert("Please enter a comment.");
      return;
    }

    const comment = createCommentElement(commentText);
    commentsContainer.appendChild(comment);
    document.getElementById("commentArea").value = "";
}

function createCommentElement(commentText) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment", "card", "mt-3");

    const commentBody = document.createElement("div");
    commentBody.classList.add("card-body", "d-flex", "flex-start", "align-items-center");

    const profileImage = document.createElement("img");
    profileImage.classList.add("square", "rounded", "p-10", "shadow-1-strong", "me-3");
    profileImage.src = "https://ionicframework.com/docs/img/demos/avatar.svg";
    profileImage.alt = "avatar";
    profileImage.width = "60";
    profileImage.height = "60";

    const commentDetails = document.createElement("div");

    const username = document.createElement("h6");
    username.classList.add("fw-bold", "text-primary", "mb-1");
    username.textContent = "Username";

    const postDate = document.createElement("p");
    postDate.classList.add("text-muted", "small", "mb-0");
    postDate.textContent = getCurrentDate(); // Replace with actual post date

    const commentContent = document.createElement("p");
    commentContent.classList.add("mt-3", "mb-4", "px-3");
    commentContent.textContent = commentText;

    commentDetails.appendChild(username);
    commentDetails.appendChild(postDate);

    commentBody.appendChild(profileImage);
    commentBody.appendChild(commentDetails);

    commentElement.appendChild(commentBody);
    commentElement.appendChild(commentContent);

    return commentElement;
}
 
function getCurrentDate() {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
}
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const skills = ["HTML", "CSS", "JS"];
const skillsSection = document.getElementById("skills");
const ul = skillsSection.querySelector("ul");

for (let i = 0; i<skills.length; i++) {
    const skill = skills[i]
    const item = document.createElement("li");
    item.innerText = skill 
    ul.appendChild(item);
}


copyright.innerHTML = (`&copy Tisha Davis ${thisYear}`);
    footer.appendChild(copyright);

//Using "DOM Selection", select the "leave_message" form by `name` attribute and store it in a variable named `messageForm`
const messageForm = document.getElementsByName('leave_message')[0]
console.log(messageForm)
//Add an event listener to the `messageForm` element that handles the "submit" event
messageForm.addEventListener('submit', (event) => {
    //inside the callback function, create a new variable for each of the three form fields
    event.preventDefault()
    const name = event.target.name
    const email = event.target.email
    const textarea = event.target.message
    //select the #messages section by `id` and store it in a variable named `messageSection`
    const messageSection = document.getElementById("messages")
    //query the `messageSection` to find the `<ul>` element and store it in a variable named `messageList`
    const messageList = messageSection.querySelector("ul")
    //Create a new list item (`li`) element and store it in a variable named `newMessage`
    const newMessage = document.createElement("li")
    //set the inner HTML of your `newMessage` element with the following information:
    //`<a>` element that displays the "name" and links to the "email" (hint: use the `mailto:` prefix)
    //`<span>` element that displays the "message"
    newMessage.innerHTML = `<a href="mailto:${email.value}" target="_blank">${name.value}</a><span> Message: ${textarea.value}</span>`
    //Create a new `<button>` element and store it in a variable named `removeButton`
    const removeButton = document.createElement("button")
    //Set the inner text to "remove"
    removeButton.innerText="remove"
    //Set the `type` attribute to "button"
    removeButton.type="button"
    //Append the `removeButton` to the `newMessage` element
    newMessage.appendChild(removeButton)
    //Append the `newMessage` to the `messageList` element
    messageList.appendChild(newMessage)
    //Add an event listener to the `removeButton` element that handles the "click" event
    removeButton.addEventListener("click", (event)=>{
    //Inside the callback function, find the button's parent element using DOM Traversal and store it in a variable named `entry`      
    const entry = event.target.parentNode
    //Remove the `entry` element from the DOM
    entry.remove()
    //add a new line of code to clear the form
    })
    messageForm.reset()
})
var githubRequest = new XMLHttpRequest ();
githubRequest.open('GET', 'https://api.github.com/users/tisha1203/repos')
githubRequest.send();

//var response;

githubRequest.addEventListener('load', () => {
    const repositories = JSON.parse(githubRequest.response);
    console.log(repositories, "This is a test");

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement("li")
        project.innerText = repositories[i].name;
        projectList.appendChild(project)
    }
});
//githubRequest.onreadystatechange = function () {    
// if (githubRequest.readyState == 4) {
// response = JSON.parse(githubRequest.response)
// }
// console.log(response);
// var projectSelection = document.getElementById('projects');
// console.log(projectSelection);
// var projectList = projectSelection.querySelector('ul');
// console.log(projectList);
// for (var i = 0; i<response.length; i++){ 
//    var project = document.createElement('li');
//    project.innerHTML = response[i].name;
//    projectList.appendChild(project);
// }

// githubRequest.open('GET', 'https://api.github.com/users/tisha1203/repos')
// githubRequest.send();

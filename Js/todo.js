const input = document.querySelector("input[type ='text']");
const ul = document.querySelector("ul");
const lists = document.querySelectorAll("li");
const spans = document.getElementsByTagName("span");
const pencil = document.querySelector("#pencil");

function deleteToDo() {
    for (let span of spans) {
        span.addEventListener("click", function () {
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
};

const addTask = function (keyPressed) {
    if (keyPressed.which === 13) {
        const li = document.createElement("li");
        const spanElement = document.createElement("span");
        const icon = document.createElement("i");

        const newTodo = this.value;
        this.value = " ";

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);

        deleteToDo();
    }
};
input.addEventListener("keypress", addTask);


ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

pencil.addEventListener('click', function () {
    input.classList.toggle('display');
});
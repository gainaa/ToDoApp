const input = document.querySelector("input[type ='text']");
const ul = document.querySelector('ul');



input.addEventListener("keypress", function (keyPressed) {
    if (keyPressed.which === 13) {
        const li = document.createElement("li");
        const spanElement = document.createElement("span");
        const icon = document.createElement("i");

        let newTodo = this.value;
        this.value = " ";

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);

        deleteToDo();
    }
});
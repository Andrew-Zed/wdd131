// Get references to DOM elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {

    if (input.value.trim() !== "") {
        // Create new list item
        const li = document.createElement("li");

        // Create delete button
        const deleteButton = document.createElement("button");

        // Set the text content of the list item to the input value
        li.textContent = input.value;

        // Set delete button text and add ARIA label for accessibility
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label", `Remove ${input.value}`);

        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        // Append delete button to list item
        li.append(deleteButton);

        // Append list item to unordered list
        list.append(li);

        // Clear the input field
        input.value = '';
    }

        // Set focus back to input field
        input.focus();

});


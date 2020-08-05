function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    const fields = newFieldContainer.querySelectorAll('input');

    /* for (input of fields) {
        input.value = "";
    } */

    fields.forEach((field) => {
        field.value = "";
    });

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

document.querySelector("#add-time").addEventListener('click', cloneField);
const inputContainer = document.querySelector('.inputcontainer');
const input = document.querySelector('.input');
const appendable = document.querySelector('.appendme');
const taskSubmit = document.querySelector('.submitForm');
const cb = document.getElementById('id-checkbox');


taskSubmit.addEventListener('submit', (e) => {

    e.preventDefault();


    if (input.value == '') {

        document.createElement('p');
        let warning = document.createElement('p');
        console.log(warning);
        warning.classList.add('warningsign');
        warning.innerText = 'Cannot add a blank task!';
        inputContainer.prepend(warning);




    } else {


        if (document.contains(document.querySelector('.warningsign'))) {

            document.querySelector('.warningsign').remove();


        } else {

            console.log(input.value);

        }


        let newDiv = document.createElement('div');
        appendable.prepend(newDiv);
        newDiv.classList.add('task');

        if (cb.checked == true) {
            newDiv.classList.add('urgent')
            cb.checked = false;
        }

        let h2 = document.createElement('h2');
        newDiv.prepend(h2);
        h2.innerText = input.value;

        let newSpan = document.createElement('span');
        newDiv.append(newSpan);

        let xItem = document.createElement('img');
        newSpan.append(xItem);
        xItem.src = ('x-square-fill.svg');

        xItem.addEventListener('click', () => {

            xItem.parentElement.parentElement.remove();

        })

        input.value = ''

    }

})



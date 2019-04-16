const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const location = searchElement.value;

    // fetch allows us to get data from a url and do something with it
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.address);
                console.log(data.forecast);
                console.log(data.location);
            }
        })
    })
})
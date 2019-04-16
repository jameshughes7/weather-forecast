// fetch allows us to get data from a url and do something with it
fetch('http://localhost:3000/weather?address=!').then((response) => {
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
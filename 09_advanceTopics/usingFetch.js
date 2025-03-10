// fetch is exciting feature in js
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// logRocket article can be read
// fetch() method starts the process of fetching a resource from the network, returning a promise which fulfilled once the response is available

// refer mdn docs for it 
// refer video for further things
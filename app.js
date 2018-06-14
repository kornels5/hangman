const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const game1 = new Hangman('Cat smell', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode) 
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage

})

getPuzzleAsync((error, puzzle) => {
    if(error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

// const puzzle = getPuzzleSync()
// console.log(puzzle)
// console.log('Do something else')


//making an HTTP request

// //making http request
// const countryRequest = new XMLHttpRequest()
// const countryCode = "PL"

// countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200) {        
//         const data = JSON.parse(e.target.responseText)
//         //const country = data.filter((country) => {return country.alpha2Code === countryCode})
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country)
        
//     } else if (e.target.readyState === 4) {
//         console.log('error');
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()



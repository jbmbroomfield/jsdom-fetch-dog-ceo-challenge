console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const body = document.querySelector('body')
const ul = document.getElementById('dog-breeds')
const dropdown = document.getElementById('breed-dropdown')

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
        for (src in json.message) {
            const img = document.createElement('img')
            img.src = json.message[src]
            img.alt = 'Dog image'
            body.appendChild(img)
        }
    })
}

function fetchBreeds() {
    return fetch(breedUrl)
    .then (resp => resp.json())
    .then(json => {
        console.log(json.message)
        for (dogBreed in json.message) {
            const li = document.createElement('li')
            li.innerText = dogBreed
            li.addEventListener('click', e => {
                li.className = 'clicked'
            })
            ul.appendChild(li)
        }
    })
}

function filterBreeds(letter) {
    for (li of ul.children) {
        if (li.innerText[0] === letter) {
            li.classList.remove('hide')
        } else {
            li.classList.add('hide')
        }
    }
}

dropdown.addEventListener('change', function() {
    console.log('changed')
    console.log(dropdown.value)
    filterBreeds(dropdown.value)
})

fetchBreeds()
fetchImages()
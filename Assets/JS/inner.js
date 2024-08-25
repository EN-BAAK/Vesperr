//!     Variables
let firstImage = document.querySelector('.scrolling .first') | null
let inputs = document.querySelectorAll('.scrolling .bullets input')
let sliders = document.querySelector('.scrolling .sliders')
let arrayOfClasses = ['one', 'two', 'three', 'four']
let currentIndex = 0
//!     Main
scrolling()
document.addEventListener('click', e => {
    if(e.target.nodeName === 'INPUT') {
        replaceFirstClass(arrayOfClasses[currentIndex], e.target.getAttribute('id'))
        currentIndex = arrayOfClasses.indexOf(e.target.getAttribute('id'))
    }
})
//!     Functions
function scrolling() {
    if(currentIndex == 0) {
        createSlides()
    }
    const intereval = setInterval(() => {
        var lastIndex = currentIndex
        currentIndex++
        replaceFirstClass(arrayOfClasses[lastIndex], arrayOfClasses[currentIndex])
        inputs[currentIndex%3].checked = true
        currentIndex = currentIndex % 3
        if(currentIndex == 0) {
            clearInterval(intereval)
            setTimeout(() => {
                scrolling()
                }, 500)
        }
    }, 3000);
}
function createSlides() {
    for(index in arrayOfClasses) {
        var slider = bCreateElement('div', 'slider', null, null)
        var img = bCreateElement('img', null, null, null)
        img.src = `./Assets/Images/portfolio/portfolio-details-${(+index%3) + 1}.jpg`
        slider.appendChild(img)
        if(arrayOfClasses[index] == 'one') {
            slider.classList.add('first')
            firstImage = slider
        }
        sliders.appendChild(slider)
    }
    removeLastImages()
}
function removeLastImages() {
    var currentSLiders = document.querySelectorAll('.scrolling .sliders .slider')
    var innerIndex = -1
    while(innerIndex++ < currentSLiders.length - 5) {
        currentSLiders[innerIndex].remove()
    }
}
function replaceFirstClass(lastClass, newClass) {
    firstImage.classList.remove(lastClass)
    firstImage.classList.add(newClass)
}
//!     Template Functions
function bCreateElement(element, className, id, text) {

    var newElement = document.createElement(element)
    className !== null ? newElement.className = className : null;
    id !== null ? newElement.id = id : null;
    if(text !== null) {

        newElement.appendChild(document.createTextNode(text))

    }

    return newElement
}
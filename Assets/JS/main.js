//!     Variables
let imagesSet = []
let nameSet = ["Jhon Larson", "Lorah", "Jonson", "Smith Man", 'Jhon Larson', 'Lorah']
let labels = document.querySelectorAll('.testi .labels label')
let sliders = document.getElementById('sliders')
let textPost = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum ducimus, eaque optio labore inventore. Minus maxime ut error magnam modi assumenda fugiat distinctio rerum.'
let indexScroller = 1
let windowHeight = this.innerHeight
const animationRL = `loadingRL 1s ease-out forwards`
const animationLR = `loadingLR 1s ease-out forwards`
const animationBT = `loadingBT 1s ease-out forwards`
const animationL = `loadingLarge 1s ease-out forwards`
let aboutSection = document.getElementById('about'), aboutOpened = false
let servicesSection = document.getElementById('services'), servicesOpened = false
let featureSection = document.getElementById('feature'), featureOpened = false
let portSection = document.getElementById('port'), portOpened = false
let teamSection = document.getElementById('team'), teamOpened = false
let priceSection = document.getElementById('price'), priceOpened = false
let queSection = document.getElementById('que'), queOpened = false
let classSlider = [null, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let contactSection = document.getElementById('contact'), contactOpened = false
let testSection = document.getElementById('test'), testOpened = false
let arrayOfClasses = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
let inputs = document.querySelectorAll('.test input')
let indexSilder = 0, currentIndex = 0
let firstImage = document.querySelector('test .sliders .first')

//!     Get Elements
//!     Main

scrolling()

document.addEventListener('click', e => {

    //  Open Bars
    if(e.target.classList.contains('bars')) {

        e.target.previousElementSibling.classList.toggle('opened')

    }

    if(e.target.classList.contains('image-input')) {
        replaceFirstClass(arrayOfClasses[currentIndex], e.target.getAttribute('id'))
        currentIndex = arrayOfClasses.indexOf(e.target.getAttribute('id'))
    }

    if(e.target.classList.contains('open-img')) {

        CreateImageSection()
        var imageHolder = document.querySelector('.image-holder.first')
        indexSilder = +e.target.getAttribute('data-number')
        imageHolder.classList.add(classSlider[indexSilder])

    }

    if(e.target.classList.contains('next')) {
        var imageHolder = document.querySelector('.overllay .first')
        indexSilder = (indexSilder + 1) % 10
        imageHolder.classList.remove(classSlider[indexSilder-1])
        imageHolder.classList.add(classSlider[indexSilder])
        if(indexSilder == 1) {
            document.querySelector('.overllay .pre').classList.add('stop')
        } else {
            document.querySelector('.overllay .pre').classList.remove('stop')
        }
        if(indexSilder == 9) {
            document.querySelector('.overllay .next').classList.add('stop')
        } else {
            document.querySelector('.overllay .next').classList.remove('stop')
        }
    }

    if(e.target.classList.contains('pre')) {
        var imageHolder = document.querySelector('.overllay .first')
        indexSilder = (indexSilder - 1) % 10
        imageHolder.classList.remove(classSlider[indexSilder+1])
        imageHolder.classList.add(classSlider[indexSilder])
        if(indexSilder == 1) {
            document.querySelector('.overllay .pre').classList.add('stop')
        } else {
            document.querySelector('.overllay .pre').classList.remove('stop')
        }
        if(indexSilder == 9) {
            document.querySelector('.overllay .next').classList.add('stop')
        } else {
            document.querySelector('.overllay .next').classList.remove('stop')
        }
    }

    if(e.target.classList.contains('exite')) {
        e.target.parentElement.style.cssText = `transform: scale(0); opacity: 0;`
        setTimeout(() => {
            e.target.parentElement.remove()
        }, 300);
    }

})

    // Portfolio Choocen
    document.querySelectorAll('.portfolio input').forEach(element => {
        element.onclick = _ => {
            var image = document.querySelectorAll(`.portfolio .image`)
            if(element.id === 'all') {
                console.log(element.dataset)
                image.forEach(e => {
                    setTimeout(() => {
                        e.style.transform = 'scale(1)'
                    }, 150);
                    e.style.display = `block`
                })
            } else {
                image.forEach(e => {
                    if(e.dataset.type === element.id) {
                        e.style.display = `block`
                        setTimeout( _ => {
                            e.style.transform = `scale(1)`
                        }, 300)
                    } else {
                        e.style.transform = `scale(0)`
                        setTimeout(() => {
                            e.style.display = `none`
                        }, 300);
                    }
                })
            }
        }
    }); 

window.onscroll = _ => {

    if(bReachSection(aboutSection, windowHeight) && !aboutOpened) {
        setLoadingAnimation('about')
        aboutOpened = true
    }
    if(bReachSection(servicesSection, windowHeight) && !servicesOpened) {
        setLoadingAnimation('services')
        servicesOpened = true
    }
    if(bReachSection(featureSection, windowHeight) && !featureOpened) {
        setLoadingAnimation('feature')
        featureOpened = true
    }
    if(bReachSection(portSection, windowHeight) && !portOpened) {
        setLoadingAnimation('port')
        portOpened = true
    }
    if(bReachSection(teamSection, windowHeight) && !teamOpened) {
        setLoadingAnimation('team')
        teamOpened = true
    }
    if(bReachSection(priceSection, windowHeight) && !priceOpened) {
        setLoadingAnimation('price')
        priceOpened = true
    }
    if(bReachSection(queSection, windowHeight) && !queOpened) {
        setLoadingAnimation('que')
        queOpened = true
    }
    if(bReachSection(contactSection, windowHeight) && !contactOpened) {
        setLoadingAnimation('contact')
        contactOpened = true
    }
    if(bReachSection(testSection, windowHeight) && !testOpened) {
        setLoadingAnimation('test')
        testOpened = true
    }

}
//!     Functions

function setLoadingAnimation(section) {
    var title = document.querySelector(`#${section} .title`)
    title !== null ? title.style.animation = animationBT: null
    var text = document.querySelector(`#${section} .flash-text`)
    text !== null ? text.style.animation = animationBT: null
    var bt = document.querySelectorAll(`#${section} [data-order = bt]`)
    if(bt.length > 0) {
        bt.forEach( e => {
            e.style.animation = animationBT
        })
    }
    var lr = document.querySelectorAll(`#${section} [data-order = lr]`)
    if(lr.length > 0) {
        lr.forEach( e => {
            e.style.animation = animationLR
        })
    }
    var rl = document.querySelectorAll(`#${section} [data-order = rl]`)
    if(rl.length > 0) {
        rl.forEach( e => {
            e.style.animation = animationRL
        })
    }
    var l = document.querySelectorAll(`#${section} [data-order = l]`)
    if(l.length > 0) {
        l.forEach( e => {
            e.style.animation = animationL
        })
    }
}

function CreateImageSection() {

    var overllay = bCreateElement('div', 'overllay overflow-hidden w-100 h-100', null, null)
    var content = bCreateElement('div', 'content d-flex h-100', null, null)
    var exiteIcon = bCreateElement('span', 'exite position-absolute', null, null)
    var exite = bCreateElement('i', 'fa-solid  fa-xmark', null, null)
    var next = bCreateElement('span', 'next position-absolute', null, null)
    var nextIcon = bCreateElement('i', 'fa-solid fa-arrow-right', null, null)
    var pre = bCreateElement('span', 'pre position-absolute', null, null)
    var preIcon = bCreateElement('i', 'fa-solid fa-arrow-left', null, null)
    var key = false

    exiteIcon.appendChild(exite)
    next.appendChild(nextIcon)
    pre.appendChild(preIcon)
    document.querySelectorAll('.image .info > span').forEach(e => {

        var imageHolder = bCreateElement('div', 'image-holder d-flex justify-content-center align-items-center flex-column', null, null)
        if(!key) {
            imageHolder.classList.add('first')
            key = true
        }
        var p = bCreateElement('p', null, null, e.getAttribute('data-details'))
        var img = bCreateElement('img', 'overImage', null, null)
        img.src = `./Assets/Images/portfolio/portfolio-${e.getAttribute('data-number')}.jpg`
        img.alt = 'image-portfolio'
        imageHolder.appendChild(img)
        imageHolder.appendChild(p)
        content.appendChild(imageHolder)
    })
    
    overllay.appendChild(content)
    overllay.appendChild(exiteIcon)
    overllay.appendChild(next)
    overllay.appendChild(pre)

    document.body.appendChild(overllay)

}

function scrolling() {
    if(currentIndex == 0) {
        createSlides()
    }
    const intereval = setInterval(() => {
        var lastIndex = currentIndex
        currentIndex++
        replaceFirstClass(arrayOfClasses[lastIndex], arrayOfClasses[currentIndex])
        inputs[currentIndex%5].checked = true
        currentIndex = currentIndex % 5
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
        var content = bCreateElement('div', 'content position-relative', null, null)
        var img = bCreateElement('img', null, null, null)
        img.src = `./Assets/Images/testimonials/testimonials-${+index%5}.jpg`
        var h3 = bCreateElement('h3', 'fw-bold', null, null)
        var p1 = bCreateElement('p', 'work', null, null)
        var text = 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
        var p2 = bCreateElement('p', 'desc fs-5', null, text)
        content.appendChild(img)
        content.appendChild(h3)
        content.appendChild(p1)
        content.appendChild(p2)
        slider.appendChild(content)
        if(arrayOfClasses[index] == 'one') {
            slider.classList.add('first')
            firstImage = slider
        }
        sliders.appendChild(slider)
    }
    removeLastImages()
}
function removeLastImages() {
    var currentSLiders = document.querySelectorAll('.test .sliders .slider')
    var innerIndex = -1
    while(innerIndex++ < currentSLiders.length - 8) {
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

function bReachSection(element, window) {

    var elementOffsetTop =  element.offsetTop,
    elementOuterHeight = element.offsetHeight,
    windowScollTop = this.pageYOffset
    return windowScollTop >= elementOffsetTop + elementOuterHeight - window*1.7 ? true: false
}

function bSetClass(container, element, className) {

    container.forEach(e => {

        e.classList.remove(className)

    })

    element.classList.add(className)

}
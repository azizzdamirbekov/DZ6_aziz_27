const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}


const showModal = (callback) => {
    setTimeout(callback, 10000)
}
showModal(openModal)


modalTrigger.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal() 


const scrollHendler = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', scrollHendler)
    }
}
window.addEventListener('scroll', scrollHendler)


// let isModalShown = false

// const scrollEnd = () =>{
//     const equalAngles = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight

//     if (equalAngles && !isModalShown) {
//         openModal()
//         isModalShown = true
//     }
// }

// window.addEventListener('scroll', scrollEnd)

// const form = document.querySelector('form')




// const postData = (form) => {
//     form.addEventListener('submit', () => {
//         event.preventDefault()

//         const request = new XMLHttpRequest()
//         request.open("POST","server.php")
//         request.setRequestHeader("Content-type","application/json")
//         const formData = new formData(form)
//         const obj = {}
//         formData.forEach((item, i) => {
//             obj[i] = item
//         })
        
//         const json = JSON.stringify(obj)
//         request.send()
//         request.onload = () => {
            
//         }
//     })
// }

// postData(form)

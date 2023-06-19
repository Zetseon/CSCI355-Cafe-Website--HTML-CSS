/* CART */

function toggleCart() {
    const cart = document.querySelector('.cart');
    cart.classList.toggle('open');
}


/* CONTACT US */
const toggles = document.querySelectorAll('.faq-toggle')
toggles.forEach((toggle) =>{
    toggle.addEventListener('click', ()=>{
        toggle.parentNode.classList.toggle('active')
    })
})


/* HOME SUBSCRIBE */
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwX4hXnlIcccbLpl3cof1Ir0BrJEgHpRTs3O2XRC4Yjmr-rluGQOIIBWn2vN6jZaTmb_Q/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Welcome to the 355 Family!"
          setTimeout(function(){
            msg.innerHTML = ""
          },5000)
          form.reset()
        } )
        .catch(error => console.error('Error!', error.message))
    })

// function toggleFAQ() {
//     const faq = document.querySelector('.faq-toggle')
//     faq.parentNode.classList.toggle('active');
// }

// const faqs = document.querySelectorAll('.faq'); 

// faqs.forEach(faq => {     
//     faq.addEventListener('click', () => {         
//         faq.classList.toggle('active'); 
//     }) 
// });
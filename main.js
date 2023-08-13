//change nav style on scroll

window.addEventListener('scroll', () =>
{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0)
})


//love button (circular)

const textbutton = document.querySelectorAll('.contact_btn');

textbutton.forEach(textbutton => {
    let text = textbutton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style = 'transform: rotate(${index * 12}deg)'>${character}</span>`).join('')
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }
  });


  const nav = document.querySelector('.nav_links');
  const opennavbtn = document.querySelector('#nav_toggle-open');
  const closenavbtn = document.querySelector('#nav_toggle-close');

  const openNav = () => {
    nav.style.display = 'flex';
    opennavbtn.style.display = 'none'
    closenavbtn.style.display = 'inline-block'
  }

  opennavbtn.addEventListener('click', openNav)



  const closeNav = () => {
    nav.style.display = 'none';
    opennavbtn.style.display = 'inline-block'
    closenavbtn.style.display = 'none'
  }

  closenavbtn.addEventListener('click', closeNav)

  nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
  })
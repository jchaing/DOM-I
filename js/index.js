const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const navItem = document.querySelectorAll('nav a');
navItem[0].textContent = siteContent.nav['nav-item-1'];
navItem[1].textContent = siteContent.nav['nav-item-2'];
navItem[2].textContent = siteContent.nav['nav-item-3'];
navItem[3].textContent = siteContent.nav['nav-item-4'];
navItem[4].textContent = siteContent.nav['nav-item-5'];
navItem[5].textContent = siteContent.nav['nav-item-6'];

const ctaH1 = document.querySelector('.cta .cta-text h1');
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta['img-src']);

const topH4 = document.querySelectorAll(
  '.main-content .top-content .text-content h4'
);
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];

const topP = document.querySelectorAll(
  '.main-content .top-content .text-content p'
);
topP[0].textContent = siteContent['main-content']['features-content'];
topP[1].textContent = siteContent['main-content']['about-content'];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const bottomContent = document.querySelectorAll(
  '.main-content .bottom-content .text-content'
);
bottomContent[0].firstElementChild.textContent =
  siteContent['main-content']['services-h4'];
bottomContent[0].lastElementChild.textContent =
  siteContent['main-content']['services-content'];
bottomContent[1].firstElementChild.textContent =
  siteContent['main-content']['product-h4'];
bottomContent[1].lastElementChild.textContent =
  siteContent['main-content']['product-content'];
bottomContent[2].firstElementChild.textContent =
  siteContent['main-content']['vision-h4'];
bottomContent[2].lastElementChild.textContent =
  siteContent['main-content']['vision-content'];

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact['contact-h4'];

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

// Task 3: Add new content

// Change the color of the navigation text to be green
navItem.forEach(a => (a.style.color = 'green'));

// Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
const nav = document.querySelector('nav');

const a7 = document.createElement('a');
a7.textContent = 'Help';
a7.style.color = 'Green';
nav.appendChild(a7);

const a8 = document.createElement('a');
a8.textContent = 'Login';
a8.style.color = 'Blue';
nav.appendChild(a8);

//Stretch Goals
const header = document.querySelector('header');
console.log(header.style);
header.style.background = '#f2f2f2';
header.style.width = '880px';
header.style.overflow = 'hidden';
header.style.position = 'fixed';
header.style.top = '0';
header.style.display = 'flex';
header.style.alignItems = 'center';

const cta = document.querySelector('.cta');
console.log(cta.style);
cta.style.marginTop = '200px';

nav.style.paddingBottom = '10px';

logo.style.paddingBottom = '10px';

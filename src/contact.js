function createE(elementName, content, className, href) {
  const element = document.createElement(elementName);

  if (content) {
    element.innerHTML = content;
  }

  if (className) {
    element.classList.toggle(className);
  }

  if (href) {
    element.href = href;
  }
  return element;
}

function createContact() {
  const contact = createE('div', false, 'container');
  contact.classList.add('background-image');
  const contact1 = createE('div', false, 'contact1');
  const contact1H3 = createE('h3', 'Contact us');
  const contactDiv1 = createE('div');
  const contactDiv1Span1 = createE('span', '8 71 210 89 06');
  const contactDiv1Icon1 = createE('i', false, 'fas');
  contactDiv1Icon1.classList.add('fa-mobile-alt');
  const contactDiv2 = createE('div');
  const contactDiv2Span2 = createE('span', '2, Islam Karimov Street Floor 21, Tashkent 100027');
  const contactDiv1Icon2 = createE('i', false, 'fas');
  contactDiv1Icon2.classList.add('fa-map-marker-alt');
  contactDiv1.appendChild(contactDiv1Icon1);
  contactDiv1.appendChild(contactDiv1Span1);
  contactDiv2.appendChild(contactDiv1Icon2);
  contactDiv2.appendChild(contactDiv2Span2);
  contact1.appendChild(contact1H3);
  contact1.appendChild(contactDiv1);
  contact1.appendChild(contactDiv2);
  contact.appendChild(contact1);

  const contact2 = createE('div', false, 'contact2');
  const contact2h3 = createE('h3', 'Find and Follow us on social media');
  const contact2Social = createE('div', false, 'social');
  const a1 = createE('a', false, false, 'https://www.hilton.com/en/hotels/tastchi-hilton-tashkent-city/dining/');
  a1.setAttribute('target', '_blank');
  const contactIcon1 = createE('i', false, 'fas');
  contactIcon1.classList.add('fa-external-link-square-alt');
  a1.appendChild(contactIcon1);
  contact2Social.appendChild(a1);

  const a2 = createE('a', false, false, 'https://www.facebook.com/City21restaurant/');
  a2.setAttribute('target', '_blank');
  const contactIcon2 = createE('i', false, 'fab');
  contactIcon2.classList.add('fa-facebook-square');
  a2.appendChild(contactIcon2);
  contact2Social.appendChild(a2);

  const a3 = createE('a', false, false, 'https://www.tripadvisor.com/Restaurant_Review-g293968-d21200578-Reviews-City_21_Pan_Asian_Restaurant_Lounge-Tashkent_Tashkent_Province.html');
  a3.setAttribute('target', '_blank');
  const contactIcon3 = createE('i', false, 'fab');
  contactIcon3.classList.add('fa-tripadvisor');
  a3.appendChild(contactIcon3);
  contact2Social.appendChild(a3);

  const a4 = createE('a', false, false, 'https://www.instagram.com/hiltontashkentcityhotel/?hl=en');
  a4.setAttribute('target', '_blank');
  const contactIcon4 = createE('i', false, 'fab');
  contactIcon4.classList.add('fa-instagram');
  a4.appendChild(contactIcon4);
  contact2Social.appendChild(a4);

  contact2.appendChild(contact2h3);
  contact2.appendChild(contact2Social);
  contact.appendChild(contact2);

  return contact;
}

function loadContact() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;
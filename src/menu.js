function createMenu() {
  const menu = createE('div', false, 'menu');
  const chef = createE('div', false, 'chef');
  const chefH2 = createE('h2', 'Rusnadin Mukhtar: "I love challenges"');
  const chefP = createE('p', 'The magician responsible for the gastronomic delights of the guests is the chef Rusnadin Mukhtar, specially invited to Tashkent.');
  const chefText = createE('div', false, 'chef-text');
  const chefImg = createImg('../src/images/menu.jpg');
  chefText.appendChild(chefH2);
  chefText.appendChild(chefP);
  chef.appendChild(chefText);
  chef.appendChild(chefImg);
  menu.appendChild(chef);

  const menuCards = createE('div', false, 'menu-cards');
  const card1 = createE('div', false, 'card');
  const card1Img = createImg('../src/images/menu01.jpg');
  const card1Text = createE('div', false, 'card-text');
  const card1H5 = createE('h5', 'Spicy beef salad');
  const card1P = createE('p');
  card1P.innerHTML = "Where to start your meal if not with a hearty salad, perfect for whetting your appetite. It is based on tender beef cooked over low heat for a long time, as well as crispy fresh vegetables and a spicy Pan-Asian sauce of chili and lime. It tastes just fiery, while any guest will enjoy the dish and even require additives. It is not surprising that this is an absolute favorite among salads due to the extraordinary juiciness of the beef and the 'brightness' of the sauce.";
  card1.appendChild(card1Img);
  card1Text.appendChild(card1H5);
  card1Text.appendChild(card1P);
  card1.appendChild(card1Text);
  menuCards.appendChild(card1);

  const card2 = createE('div', false, 'card');
  const card2Img = createImg('../src/images/menu02.jpg');
  const card2Text = createE('div', false, 'card-text');
  const card2H5 = createE('h5', 'Nasi Goreng');
  const card2P = createE('p');
  card2P.innerHTML = 'Many have heard about one of the signature dishes of Pan-Asian cuisine, which is very popular all over the world, have tried it in Southeast Asia and would like to re-experience the unusual taste at home. It has many varieties, and Rusnadin Mukhtar offers his own proprietary approach. First, vegetables and eggs are fried in a traditional wok, then chili paste, soy sauce and chicken with shrimps are added. When everything is browned, put the pre-cooked rice in the pan and mix its contents. Nasi goreng at City 21 is served with shrimp kebabs, grilled chicken, crackers and vegetable salad. The traditional dish is spicy, but at the request of the guests, it can be muted or removed altogether.';
  card2.appendChild(card2Img);
  card2Text.appendChild(card2H5);
  card2Text.appendChild(card2P);
  card2.appendChild(card2Text);
  menuCards.appendChild(card2);

  const card3 = createE('div', false, 'card');
  const card3Img = createImg('../src/images/menu03.jpg');
  const card3Text = createE('div', false, 'card-text');
  const card3H5 = createE('h5', 'Shrimp with wasabi');
  const card3P = createE('p');
  card3P.innerHTML = "Guests of City 21 will enjoy a real treat - juicy and crunchy tiger prawns, fried in hot oil and seasoned with a hot wasabi sauce prepared according to the chef's original recipe. What gives rise to such a combination is a surprisingly contrasting taste, built on a mixture of milky sweet and spicy. A hot appetizer is served with Japanese radish - daikon, chukka salad and red roe of flying fish - tobiko. ";
  card3.appendChild(card3Img);
  card3Text.appendChild(card3H5);
  card3Text.appendChild(card3P);
  card3.appendChild(card3Text);
  menuCards.appendChild(card3);

  menu.appendChild(menuCards);
  return menu;
}

function createE(elementName, content, className, href) {
  const element = document.createElement(elementName);
  if (content) { element.innerHTML = content; }
  if (className) { element.classList.toggle(className); }
  if (href) { element.href = href; }
  return element;
}

function createImg(source, className) {
  const photo = new Image();
  photo.src = source;
  photo.classList.add(className);

  return photo;
}

function loadMenu() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
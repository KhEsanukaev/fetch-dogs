/**
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 */

document.addEventListener('DOMContentLoaded', () => {
  const IMAGES_COUNT = 4;

  const IMAGES_URL = `https://dog.ceo/api/breeds/image/random/${IMAGES_COUNT}`;

  const BREEDS_URL = "https://dog.ceo/api/breeds/list";

  const imagesContainer = document.querySelector('.images');

  const breedsContainer = document.querySelector('.breeds');

  const button = document.querySelector('button');

  fetchAndRenderImages();

  fetchBreedsList();

  button.addEventListener('click', fetchAndRenderImages);

  function renderImage(imageUrl) {
    const imageContainer = document.createElement('div');
    const imageElement = document.createElement('img');

    imageContainer.classList.add('images__item');

    imageElement.src = imageUrl;
    imageElement.alt = "image of dog";

    imageContainer.append(imageElement);

    imagesContainer.append(imageContainer);
  }

  function renderImagesOnDOM(json) {
    imagesContainer.textContent = "";

    for(let i = 0; i < json.message.length; i++) {
      renderImage(json.message[i]);
    }
  }

  function fetchAndRenderImages() {
    fetch(IMAGES_URL)
      .then(res => res.json())
      .then(json => {
        renderImagesOnDOM(json);
      })
  }

  function fetchBreedsList() {
    fetch(BREEDS_URL)
      .then(res => res.json())
      .then(json => {
        renderBreedsOnDOM(json);
      })
  }

  function renderBreedItem(breedName) {
    const breedListItemNode = document.createElement('li');

    breedListItemNode.textContent = breedName;

    breedsContainer.append(breedListItemNode);
  }

  function renderBreedsOnDOM(json) {
    breedsContainer.textContent = "";

    const breedsList = json.message;

    for(let i = 0; i < breedsList.length; i++) {
      renderBreedItem(breedsList[i]);
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // количество загружаемых изображений
  const IMAGES_COUNT = 4;

  // ссылка для загрузки изображений
  const IMAGES_URL = `https://dog.ceo/api/breeds/image/random/${IMAGES_COUNT}`;

  // ссылка для загрузки списка пород
  const BREEDS_URL = "https://dog.ceo/api/breeds/list";

  // узел, в котором будет список изображений
  const imagesContainer = document.querySelector('.images');

  // узел, в котором будет список пород
  const breedsContainer = document.querySelector('.breeds');

  // узел кнопки обновления
  const button = document.querySelector('button');

  // сразу загружаем изображения
  fetchAndRenderImages();

  // загружаем список пород
  fetchBreedsList();

  // еще раз загружаем изображения, если кликнули на кнопку обновления
  button.addEventListener('click', () => {
    fetchAndRenderImages();
  });

  // ТВОЙ КОД
  function fetchAndRenderImages() {
    fetch(IMAGES_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        imagesContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых изображений
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imagesContainer.appendChild(imgElement);
        });
      })
      .catch(error => console.error('Ошибка при загрузке изображений:', error));
  }

  // Функция для загрузки и рендеринга списка пород
  function fetchBreedsList() {
    fetch(BREEDS_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        breedsContainer.innerHTML = ''; // Очищаем контейнер перед добавлением нового списка пород
        const breedsList = data.message;
        const breedsListItems = breedsList.map(breed => `<li>${breed}</li>`);
        breedsContainer.innerHTML = `<ul>${breedsListItems.join('')}</ul>`;
      })
      .catch(error => console.error('Ошибка при загрузке списка пород:', error));
  }

  // Загружаем изображения сразу при загрузке страницы
  fetchAndRenderImages();

  // Загружаем изображения и обновляем список пород при клике на кнопку "Обновить"
  button.addEventListener('click', () => {
    fetchAndRenderImages();
    fetchBreedsList();
  });
});



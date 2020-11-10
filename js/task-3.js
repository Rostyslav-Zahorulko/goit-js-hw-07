const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGalleryItem = item => {
  const galleryItemRef = document.createElement('li');
  const galleryItemImageRef = document.createElement('img');

  galleryItemImageRef.classList.add('gallery-item-image');
  galleryItemImageRef.src = item.url;
  galleryItemImageRef.alt = item.alt;

  galleryItemRef.appendChild(galleryItemImageRef);

  return galleryItemRef;
};

const galleryItemsArr = images.map(image => createGalleryItem(image));

const galleryRef = document.querySelector('#gallery');

galleryRef.classList.add('gallery');
galleryRef.append(...galleryItemsArr);

console.log('Динамически созданная галерея изображений: ', galleryRef);

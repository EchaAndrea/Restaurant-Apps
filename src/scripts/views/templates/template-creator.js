import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
    <div class="restaurant-header">
    <img class="lazyload" alt="${restaurant.name || '-'}" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous">
      <div class="restaurant-rating">
        <p>⭐️<span class="restaurant-rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-info">
      <h3 class="restaurant-title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <h4 class="restaurant-city">${restaurant.city}</h4>
      <p class="restaurant-description">${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="content__heading">Detail Restaurant</h2>
<div class="detail">
    <h1 class="restaurant-title" id="restaurant-title">
      ${restaurant.name}
    </h1>
    <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />

    <div class="info">
      <h2>Information</h2>
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${restaurant.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${restaurant.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${restaurant.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${restaurant.description}</p>
    </div>

  </div>
  
`;

const createRestaurantReviewTemplate = (reviews) => `
  <div class="review">
    <p><span class="name">${reviews.name}</span></p>
    <p><span class="date">${reviews.date}</span></p>
    <p>${reviews.review}</p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line import/prefer-default-export
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};

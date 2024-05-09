import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">List Restaurant</h2>
            <div id="restaurant-list" class="restaurant-list">
            </div>
        </div>
    `;
  },

  async afterRender() {
    const mainContent = await RestaurantDbSource.listRestaurant();
    const contentContainer = document.querySelector('#restaurant-list');
    mainContent.forEach((restaurant) => {
      contentContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;

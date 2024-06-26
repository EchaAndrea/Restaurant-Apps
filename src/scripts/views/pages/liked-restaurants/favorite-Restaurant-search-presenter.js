class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurant(latestQuery);
    });
  }

  async _searchRestaurant(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestaurant;
    if (this.latestQuery.length > 0) {
      foundRestaurant = await this._favoriteRestaurants.searchRestaurant(this.latestQuery);
    } else {
      foundRestaurant = await this._favoriteRestaurants.getAllRestaurant();
    }

    this._showFoundRestaurant(foundRestaurant);
  }

  _showFoundRestaurant(restaurants) {
    if (!restaurants) return;

    this._view.showFavoriteRestaurant(restaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;

class HeroApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
        <div class="hero-image"></div>
        <div class="hero-description">
        <h2 tabindex="0">Welcome to the Restaurant Apps</h2>
        <p tabindex="0">Provide various kinds of restaurant recommendations from various cities in Indonesia</p>
        <span class="btn-hero-section">
            <a tabindex="0" class="btn-hero" href="#mainContent">SEARCH</a>
        </span>
        </div>
    </div>
      `;
  }
}

customElements.define('hero-app', HeroApp);

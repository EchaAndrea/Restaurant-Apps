class BarApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="nav" class="menu">
    <h1>
      <a href="/" title="Navbar Brand">Restaurant Apps</a>
    </h1>
    <button class="menu-button" title="off canvas button" aria-label="off canvas button">
        <i class="fa fa-times"></i>
        <i class="fa fa-bars"></i>
    </button>
    <ul class="menu-list">
        <li><a href="#/home" title="Menuju ke halaman home">Home</a></li>
        <li><a href="#/favorite" title="Menuju ke halaman favorite">Favorite</a></li>
        <li><a href="https://www.linkedin.com/in/echa-andrea-gustiar-436657252" title="Menuju ke halaman about" target="_blank" rel="noreferrer">About Us</a></li>
    </ul>
  </nav>
        `;
  }
}

customElements.define('bar-app', BarApp);

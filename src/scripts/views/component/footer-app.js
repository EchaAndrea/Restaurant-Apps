class FooterApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>Copyright &copy; 2023 - <a href="https://www.linkedin.com/in/echa-andrea-gustiar-436657252">Echa Andrea Gustiar</a></p>
    `;
  }
}

customElements.define('footer-app', FooterApp);

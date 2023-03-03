import Header from "./components/Header";

class App {
  constructor ($body) {
    this.$body = $body
    this.render()
  }

  render() {
    const header = new Header(this.$body);
    header.render()

    const main = document.createElement("main")
    main.setAttribute("id", "page_content")
    this.$body.appendChild(main)
  }
}

export default App;

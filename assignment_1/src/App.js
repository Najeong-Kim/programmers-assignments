import Header from "./components/Header";
import HomePage from "./page/HomePage";
import SignupPage from "./page/SignupPage";
import { setPersonalInfo } from "./Storage";

class App {
  constructor ($body) {
    this.$body = $body
    this.render()
  }

  async render() {
    await setPersonalInfo()

    const header = new Header(this.$body);
    header.render()

    const main = document.createElement("main")
    main.setAttribute("id", "page_content")
    this.$body.appendChild(main)

    const homePage = new HomePage(main)
    const signupPage = new SignupPage(main)

    homePage.render()

    document.addEventListener("urlchange", (e) => {
      let pathname = e.detail.href

      switch(pathname) {
        case "/web/":
          homePage.render()
          break
        case "/web/signup":
          signupPage.render()
          break
        default:
      }
    })
  }
}

export default App;

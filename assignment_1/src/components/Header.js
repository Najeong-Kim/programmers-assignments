class Header {
  constructor($body) {
    this.$body = $body;

  }

  createMenuItem(divClass, spanClass, spanId, menuText) {
    const div = document.createElement("div")
    div.setAttribute("class", divClass)

    const span = document.createElement("span")
    span.setAttribute("class", spanClass)
    span.setAttribute("id", spanId)

    span.appendChild(document.createTextNode(menuText))
    div.appendChild(span)

    return div
  }
  
  render() {
    const home_menu = this.createMenuItem("header header_left", "menu_name", "menu_home", "HOME")
    const signup_menu = this.createMenuItem("header header_right", "menu_name", "menu_signup", "SIGNUP")

    const header = document.createElement("header")
    header.appendChild(home_menu)
    header.appendChild(signup_menu)

    this.$body.appendChild(header)

    home_menu.addEventListener("click", () => {
      window.history.pushState("", "", "/web/")
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/web/" }
      });
      document.dispatchEvent(urlChange)
    })

    signup_menu.addEventListener("click", () => {
      window.history.pushState("", "", "/web/signup")
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/web/signup" }
      });
      document.dispatchEvent(urlChange)
    })
  }
}

export default Header;

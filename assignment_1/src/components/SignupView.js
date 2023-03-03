class SignupView {
	constructor($main) {
    this.$main = $main
  }

	render() {
    const containerDiv = document.createElement("div")
    containerDiv.setAttribute("id", "form_container")
    this.$main.appendChild(containerDiv)

    const form = document.createElement("form")
    form.setAttribute("id", "grepp_form")
    containerDiv.appendChild(form)
	}
}
export default SignupView

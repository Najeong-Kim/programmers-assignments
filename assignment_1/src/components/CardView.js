import { setCardStatus } from "../Storage";
import { cardPlane } from "./Card";

class CardView {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "cards_container");
    this.$main.appendChild(containerDiv);

    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"))

    for(let i = 0; i < personalInfo.length; i++) {
      const card = cardDiv(i)
      card.appendChild(cardPlane("front", personalInfo[i].nickname))
      card.appendChild(cardPlane("back", personalInfo[i].mbti))
      containerDiv.appendChild(card)
    }

    setCardStatus()

  }
}
export default CardView;

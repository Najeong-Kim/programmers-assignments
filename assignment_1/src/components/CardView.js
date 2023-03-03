import { setCardStatus } from "../Storage";
import { cardPlane } from "./Card";

class CardView {
  constructor($main) {
    this.$main = $main;
  }

  // 무한스크롤 구현 미완료
  infiniteScroll(container, localStorage) {
    let target = document.getElementById("card").lastChild

    const io = new IntersectionObserver((entry, observer) => {
      if(entry[0].isIntersecting) {
        // io.unobserve()
      }

    }, {
      threshold: 0.7
    })

    io.observe(target)
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

    this.infiniteScroll(containerDiv, personalInfo)
  }
}
export default CardView;

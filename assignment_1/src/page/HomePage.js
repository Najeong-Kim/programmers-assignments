import CardView from "../components/CardView";
import ContentTitle from "../components/ContentTitle";


class HomePage {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const title = new ContentTitle(this.$main, "Great People")
    title.render();

    const cardView = new CardView(this.$main)
    cardView.render()
  }
}

export default HomePage;

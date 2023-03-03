import ContentTitle from "../components/ContentTitle";


class HomePage {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const title = new ContentTitle(this.$main, "Great People")
    title.render();
  }
}

export default HomePage;

export default class TabNav {
  constructor(menu, conteudo) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(conteudo);
    this.activeClass = "ativo";
  }
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(
      this.activeClass,
      this.tabContent[index].dataset.anime
    );
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}

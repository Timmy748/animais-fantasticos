export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  if (tooltips) {
    function criarTooltipBox(element) {
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("aria-label");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }

    const onMouseLeave = {
      tooltipBox: "",
      element: "",
      handleEvent() {
        this.tooltipBox.remove();
        this.removeEventListener("mouseleave", onMouseLeave);
        this.removeEventListener("mousemove", onMouseMove);
      },
    };

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 10}px`;
        this.tooltipBox.style.left = `${event.pageX + 10}px`;
      },
    };

    function onMouseOver() {
      const tooltipBox = criarTooltipBox(this);

      onMouseMove.tooltipBox = tooltipBox;

      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener("mouseleave", onMouseLeave);
      this.addEventListener("mousemove", onMouseMove);
    }

    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
    });
  }
}

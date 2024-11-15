export default class Funcionamento {
  constructor(funcionamento, activeClass = "aberto") {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diaSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberta = this.diaSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora > this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberta && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
      this.funcionamento.innerText += " Aberto";
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

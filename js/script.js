import ScrollAnima from "./modules/scroll-anima.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/scroll-suave.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/drop-down-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import fecthAnimais from "./modules/fecth-animais.js";
import initFecthBitcoin from "./modules/fecth-bitcoin.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#'");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabnav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabnav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollanima = new ScrollAnima("[data-anime='scroll']");
scrollanima.init();

const dropdownmenu = new DropdownMenu("[data-dropdown]");
dropdownmenu.init();

const menumobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menumobile.init();

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();

fecthAnimais("./animaisapi.json", ".numeros-grid");

initFecthBitcoin("https://blockchain.info/ticker", ".btc-preco");



import initAnimacaoScroll from "./modules/scroll-animacao.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/drop-down-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFecthAnimais from "./modules/fecth-animais.js";
import initFecthBitcoin from "./modules/fecth-bitcoin.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#'");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabnav = new TabNav("[data-tab='menu'] li","[data-tab='content'] section");
tabnav.init();

initMenuMobile();
initAnimacaoScroll();

initModal();
initTooltip();
initDropdownMenu();
initFecthAnimais();
initFuncionamento();
initFecthBitcoin();

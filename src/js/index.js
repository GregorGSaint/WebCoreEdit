import '../scss/style.scss';
import {feedback} from "./feedback";
import {main} from "./main";
import {menu} from "./menu";
import {repair} from "./repair"
import {prices} from "./prices"
import {slider} from "./slider"
import {brands} from "./brands"
import {call} from "./call"
import {width} from "./width"

width();
slider(1.15);
main();
menu();
repair();
prices();
brands();
call();
feedback();
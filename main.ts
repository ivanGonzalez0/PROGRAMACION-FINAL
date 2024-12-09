import * as rls from 'readline-sync';
import { Ruleta } from "./ruleta";
import { Joker } from './joker';
import { SuperSiete } from './superSiete';
import { RuedaDeLaFortuna } from './ruedaDeLaFortuna';

let juego1 = new Joker();
let juego2 = new Ruleta();
let juego3 = new SuperSiete();
let juego4 = new RuedaDeLaFortuna()

console.error("------------------------------------------------------------------------------------");
console.error("                                      *       *       ");
console.error("                                  *                 *     ");
console.error("\x1b[32m                              * BIENVENIDOS AL CASINO *       \x1b[0m");
console.error("                                 *                    *     ");
console.error("                                       *       *           ");
console.error("------------------------------------------------------------------------------------");

let bienvenido: number = rls.questionInt("Ingrese el numero 1 para abrir el menu de juegos: ");
while (true) {
    if (bienvenido < 2) {
        if (bienvenido == 1) {
            console.error("-----------------------------------------------------------");
            console.log("1_ Joker 's Jewels");
            console.log("2_ Ruleta Americana");
            console.log("3_ Super Siete");
            console.log("4_ Rueda de la Fortuna");
            console.error("-----------------------------------------------------------");
        }
    } else {
        console.error("Ingrese nuevamente 1.");
    }
    // MENU PRINCIPAL 
    let menu: number = rls.questionInt("Ingrese un numero del menu para empezar a jugar: ");
    switch (menu) {
        case 1:
            console.error("-----------------------------------------------------------");
            juego1.leerInstrucciones();
            console.error("\x1b[32m-------------------------------------------------------------------------------\x1b[0m");
            juego1.iniciar();
            console.error("\x1b[32m-------------------------------------------------------------------------------\x1b[0m");
            juego1.mostrarCredito();
            console.error("-----------------------------------------------------------");
            juego1.apostar();
            console.error("-----------------------------------------------------------");
            juego1.jugar();
            console.error("-----------------------------------------------------------");
            juego1.finalizar();
            console.error("-----------------------------------------------------------");
            break;
        case 2:
            console.error("-----------------------------------------------------------");
            juego2.leerInstrucciones();
            console.error("\x1b[32m-------------------------------------------------------------------------------\x1b[0m");
            juego2.iniciar();
            console.error("\x1b[32m-------------------------------------------------------------------------------\x1b[0m");
            juego3.mostrarCredito();
            console.error("-----------------------------------------------------------");
            juego2.jugar();
            console.error("-----------------------------------------------------------");
            juego2.finalizar();
            console.error("-----------------------------------------------------------");
            break;
        case 3:
            juego3.leerInstrucciones();
            console.error("\x1b[32m-------------------------------------------------------------------------------\x1b[0m");
            juego3.iniciar();
            console.error("\x1b[32m-------------------------------------------------------------------------------\x1b[0m");
            juego3.mostrarCredito();
            console.error("-----------------------------------------------------------");
            juego3.apostar();
            console.error("-----------------------------------------------------------");
            juego3.jugar();
            console.error("-----------------------------------------------------------");
            juego3.finalizar();
            console.error("-----------------------------------------------------------");
            break;
        case 4:
            juego4.leerInstrucciones();
            console.error("\x1b[32m-------------------------------------------------------------------------------\x1b[0m");
            juego4.iniciar();
            console.error("\x1b[32m-------------------------------------------------------------------------------\x1b[0m");
            juego4.mostrarCredito();
            console.error("-----------------------------------------------------------");
            juego4.apostar();
            console.error("-----------------------------------------------------------");
            juego4.jugar();
            console.error("-----------------------------------------------------------");
            juego4.finalizar();
            console.error("-----------------------------------------------------------");
            break;
    }

    // VUELVE AL MENU PRINCIPAL / SALE DEL JUEGO
    let menu2: number;
    while (true) {
        menu2 = rls.questionInt("Ingrese 1 para volver al menu principal o 2 para salir del juego: ");
        if (menu2 == 1 || menu2 == 2) {
            break;
        } else {
            console.error("Ingrese un valor válido (1 o 2).");
        }
    }

    if (menu2 == 1) {
        console.log(menu);
    } else {
        console.error("-------------------------------------------------------------------------------");
        console.log("\x1b[31m               Usted salió del Casino  \x1b[0m");
        console.error("-------------------------------------------------------------------------------");
        break;
    }
}

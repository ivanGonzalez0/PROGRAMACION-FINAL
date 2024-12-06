"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuedaDeLaFortuna = void 0;
var rls = require("readline-sync");
var fs = require("fs");
var RuedaDeLaFortuna = /** @class */ (function () {
    function RuedaDeLaFortuna() {
        this.segmentos = [
            "100", "200", "300", "400", "500",
            "Pierde un Turno", "600", "700", "800",
            "900", "1000", "Bancarrota"
        ];
        this.puntosActuales = 0;
        this.credito = 50000;
    }
    RuedaDeLaFortuna.prototype.iniciar = function () {
        console.log("Bienvenido al juego de la Rueda de la Fortuna");
    };
    RuedaDeLaFortuna.prototype.jugar = function () {
        var jugar = rls.question("Presione 'A' para girar la Rueda: ");
        if (jugar.toUpperCase() === "A") {
            console.log("La Rueda está girando");
            var indiceAleatorio = Math.floor(Math.random() * this.segmentos.length);
            var resultado = this.segmentos[indiceAleatorio];
            if (resultado === "Pierde un Turno" || resultado === "Bancarrota") {
                this.manejarSegmentoEspecial(resultado);
            }
            else {
                this.puntosActuales += parseInt(resultado);
                console.log("\u00A1Ganaste ".concat(resultado, " puntos! Puntos totales: ").concat(this.puntosActuales));
            }
        }
        else {
            console.log("Opción inválida. Por favor, presione 'A' para girar la Ruleta.");
        }
    };
    RuedaDeLaFortuna.prototype.finalizar = function () {
        console.log("Gracias por jugar. Tu puntaje final es de " + this.puntosActuales + " puntos.");
    };
    RuedaDeLaFortuna.prototype.apuesta = function () {
        var creditoUser = rls.questionInt("ingrese su apuesta: ");
        if (creditoUser <= this.credito) {
            this.credito -= creditoUser;
            console.log("Apuesta realizada con éxito. Tu credito restante es de $" + this.credito);
        }
        else {
            console.log("No tienes suficiente credito para realizar esta apuesta.");
        }
    };
    RuedaDeLaFortuna.prototype.mostrarCredito = function () {
        console.log("Tu credito actual es de $" + this.credito);
    };
    RuedaDeLaFortuna.prototype.leerInstrucciones = function () {
        try {
            var instrucciones = fs.readFileSync("Ruedadelafortuna.txt", "utf8"); //lee archivo superSiete inmediatamente x eso es sincronica
            console.log(instrucciones);
        }
        catch (error) { //try-catch si hay un error al leer el archivo se muestra mensaje de error y evita q el programa se detenga
            console.log('Error al leer el archivo de instrucciones');
        }
    };
    RuedaDeLaFortuna.prototype.manejarSegmentoEspecial = function (segmento) {
        if (segmento === "Pierde un Turno") {
            console.log("¡Perdiste tu turno!");
        }
        else if (segmento === "Bancarrota") {
            console.log("¡Te declaraste en bancarrota! Todos los puntos perdidos.");
            this.puntosActuales = 0;
        }
    };
    RuedaDeLaFortuna.prototype.apostar = function () {
        console.log("");
    };
    return RuedaDeLaFortuna;
}());
exports.RuedaDeLaFortuna = RuedaDeLaFortuna;

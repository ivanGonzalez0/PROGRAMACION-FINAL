import { JuegosDeCasino } from "./JuegosdeCasino";
import * as rls from 'readline-sync';
import * as fs from 'fs';

export class RuedaDeLaFortuna implements JuegosDeCasino {
    private segmentos: string[];
    private puntosActuales: number;
    private credito: number;

    constructor() {
        this.segmentos = [
            "100", "200", "300", "400", "500",
            "Pierde un Turno", "600", "700", "800",
            "900", "1000", "Bancarrota"
        ];
        this.puntosActuales = 0;
        this.credito = 50000;
    }

    public iniciar(): void {
        console.log("Bienvenido al juego de la Rueda de la Fortuna");
    }

    public jugar(): void {
        let jugar: string = rls.question("Presione 'A' para girar la Rueda: ");
        if (jugar.toUpperCase() == "A") {
            console.log("La Rueda está girando");
            const indiceAleatorio = Math.floor(Math.random() * this.segmentos.length);
            const resultado = this.segmentos[indiceAleatorio];

            if (resultado == "Pierde un Turno" || resultado == "Bancarrota") {
                this.manejarSegmentoEspecial(resultado);
            } else {
                this.puntosActuales += parseInt(resultado);
                console.log(`¡Ganaste ${ resultado } puntos! Puntos totales: ${ this.puntosActuales }`);
            }
        } else {
            console.log("Opción inválida. Por favor, presione 'A' para girar la Ruleta.");
        }
    }

    public finalizar(): void {
        console.log("Gracias por jugar. Tu puntaje final es de " + this.puntosActuales + " puntos.");
    }


    public apuesta(): void {
        let creditoUser:number=rls.questionInt("ingrese su apuesta: ");
        if (creditoUser <= this.credito) {
            this.credito -= creditoUser;
            console.log("Apuesta realizada con éxito. Tu credito restante es de $" + this.credito);
        } else {
            console.log("No tienes suficiente credito para realizar esta apuesta.");
        }
    }

    public mostrarCredito(): void {
        console.log("Tu credito actual es de $" + this.credito);
    }

    public leerInstrucciones(): void {
        try {
            const instrucciones = fs.readFileSync('ruleta.txt', 'utf8');
            console.log(instrucciones);
        } catch (error) {
            console.log('Error al leer el archivo de instrucciones');
        }
    }

    private manejarSegmentoEspecial(segmento: string): void {
        if (segmento == "Pierde un Turno") {
            console.log("¡Perdiste tu turno!");
        } else if (segmento == "Bancarrota") {
            console.log("¡Te declaraste en bancarrota! Todos los puntos perdidos.");
            this.puntosActuales = 0;
        }
    }

    public apostar(): void {
        console.log("")
    }
}
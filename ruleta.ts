import * as rls from 'readline-sync';
import { JuegosDeCasino } from "./juego";
import * as fs from 'fs';

export class Ruleta implements JuegosDeCasino {
    private numeroGanador: number = -1;
    private colorGanador: string = '';
    private credito: number = 100000;
    private apuestaUser: number = 0;
    private apuestaMin: number = 2000;
    private apuestaMax: number = 50000;

    public constructor() {
    }

    public iniciar(): void {
        while (true) { 
            let bienvenido: string = rls.question(`Presione 1 para iniciar la Ruleta: `);
            if (bienvenido == "1") { 
                console.log(`¡Bienvenido al juego! `);
                break; 
            }
        }
    }

    
    // Método para realizar una apuesta
    public apostar(): number {
        while (true) {
        this.apuestaUser = rls.questionInt("Ingrese su apuesta entre " + this.apuestaMin + " y " + this.apuestaMax + ": ");
            if (this.apuestaUser >= this.apuestaMin && this.apuestaUser <= this.apuestaMax) {
                return this.apuestaUser;
            } else {
                console.log("Ingrese una apuesta válida.");
            }
        }
    }

    // metodo para jugar
    public jugar(): void {
        let fichaNumero: number = rls.questionInt("Seleccione un numero entre 0 y 36: ");
        let jugar: string = rls.question("Presione 'A' para girar la Ruleta: ");
        if (jugar.toUpperCase() == "A") {
            console.log("La Ruleta está girando");
        } else {
            console.log("Opción inválida. Por favor, presione 'A' para girar la Ruleta.");
        }

     // genera un numero aleatorio entre el 0 y el 36
        if (fichaNumero >= 0 && fichaNumero <= 36) {
            this.numeroGanador = Math.floor(Math.random() * 37);
            this.colorGanador = this.mostrarColor(this.numeroGanador);
            console.log(`El número ganador es: ${ this.numeroGanador }(${ this.colorGanador })`);

     // muestra si perdiste o ganaste 
            if (fichaNumero == this.numeroGanador) { 
                console.log("¡Ganaste!");
                this.credito += this.apuestaUser;
            } else {
                console.log("Perdiste");
                this.credito -= this.apuestaUser;
            }
            this.mostrarCredito();
        } else {
            console.log("Número inválido. Debe estar entre 0 y 36.");
        }
    }
    // Método que devuelve el color del número
    private mostrarColor(numero: number): string {
        if (numero == 0) { 
            return 'verde';
        } else if (numero % 2 == 0) {
            return 'rojo'; 
        } else {
            return 'negro';
        }
    }
    public leerInstrucciones(): void {
        try {
            const instrucciones = fs.readFileSync('ruleta.txt', 'utf8');
            console.log(instrucciones);
        } catch (error) { 
            console.log('Error al leer el archivo de instrucciones');
        }
    }

    public finalizar(): void {
        console.log("GRACIAS POR JUGAR A LA RULETA");
    }

    public mostrarCredito(): void {
        console.log(`Tu crédito actual es: $${ this.credito }`);
    }
}
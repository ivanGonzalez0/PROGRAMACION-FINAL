
import  * as rls from 'readline-sync';
import { JuegosDeCasino } from "./juegoDeCasino";

export abstract class Tragamonedas implements JuegosDeCasino {
    protected simbolos: string[];
    protected carrete: string[];
    protected credito: number;
    protected apuestaUser: number = 0;
    protected nombre:string;
    protected apuestaMin: number;
    protected apuestaMax: number;


      public constructor( nombre:string, min: number, max:number) {
        this.simbolos = ["🚀", "🤡", "🎃", "🎇", "👑","💰"];
      //  this.simbolos=["💰","💰","💰"];
        this.carrete = [];
        this.credito = 100000;
        this.nombre=nombre;
        this.apuestaMin = min;
        this.apuestaMax = max;
      }



    public iniciar(): void {
        console.log("¡Bienvenido al juego de Tragamonedas  " + this.nombre +"!");
    }



    public apostar(): number {
        while (true) {
        this.apuestaUser = rls.questionInt("Ingrese su apuesta entre " + this.apuestaMin + " y " + this.apuestaMax + ": ");
            if (this.apuestaUser >= this.apuestaMin && this.apuestaUser <= this.apuestaMax) {
                return this.credito -= this.apuestaUser;;
            } else {
                console.log("Ingrese una apuesta válida.");
            }
        }
    }

    public jugar(): void {
        let jugar: string = rls.question("presione 'A' para girar el carrete: ");
        if (jugar == "A") {
            console.log("Los carretes estan girando");
        }
        this.girarCarrete();
        console.log(`Carrete: ${ this.carrete.join(', ') }`);
        if (this.carrete[0] == this.carrete[1] && this.carrete[1] == this.carrete[2]) {
            console.log("¡Ganaste en el " + this.nombre + "!" );
          
        } else {
            console.log("¡Perdiste en el " + this.nombre + "!");
             this.mostrarCredito();
        }
       

    }
    
    public girarCarrete(): void {
        this.carrete = [];
        for (let i = 0; i < 3; i++) { 
            const indice = Math.floor(Math.random() * this.simbolos.length);
            this.carrete.push(this.simbolos[indice]);
        }
    }


    public finalizar(): void {
        console.log("¡Gracias por jugar a " + this.nombre +"!");
    }
  

    public leerInstrucciones(): void {
    }

    
    public mostrarCredito(): void { 
        console.log(`Tu credito es de: ${ this.credito }`);
    }
}
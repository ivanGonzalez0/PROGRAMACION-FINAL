import { Tragamonedas } from './tragamonedas';
import * as fs from 'fs'; 

export class Joker extends Tragamonedas { 
    private bonus: string[];
 

    public constructor() {
        super("Joker Jewells",3000, 10000);
        this.bonus = ["💰", "💰", "💰"];
    }
    

 public jugar(): void {
   super.jugar();
    if (this.carrete[0] == this.carrete[1] && this.carrete[1] == this.carrete[2]) {
        this.ganarBonus();
    }
}

public ganarBonus(): void {
    console.log("\x1b[34m ¡FELICIDADES GANASTE EL BONUS! \x1b[0m");
    const multiplicador = this.bonus.length;
    this.credito *= multiplicador;
    console.log(`Tu crédito se ha multiplicado por ${multiplicador} y ahora es: ${this.credito}`);
}


public leerInstrucciones(): void {
    try {
        const instrucciones = fs.readFileSync('joker.txt', 'utf8');
        console.log(instrucciones);
    } catch (error) { 
        console.log('Error al leer el archivo de instrucciones');
    }
  }
}
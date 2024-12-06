import { Tragamonedas } from './tragamonedas';
import * as fs from 'fs'; 

export class SuperSiete extends Tragamonedas {
         private tiradasGratis:number=0
 
    
      public constructor() {
        super("Super Siete", 1000,5000);
        this.simbolos = ["💯", "🍒", "🍀", "🌟", "💰"];
        //this.simbolos = ["💯", "💯","💯"];
        this.tiradasGratis=0;
      }

     /* public getTiradasGratis(): number {
        return this.tiradasGratis;
    }*/

    public jugar(): void {

      // Girar el carrete
      super.jugar();
      
      // Verificar si el jugador ganó
      if (this.carrete[0] == this.carrete[1] && this.carrete[1] ==this.carrete[2]) {
        console.log("\x1b[32m ¡Ganaste 3 Tiradas gratis! \x1b[0m");
        this.tiradasGratis = 3;
        this.realizarTiradasGratis();
      }
    } 

      
    public realizarTiradasGratis(): void {
      while (this.tiradasGratis > 0) {
        console.log(`¡Tirada gratis número ${3 - this.tiradasGratis + 1}!`);
        console.log(`Tu crédito es de : ${this.credito}`);
        
        // Girar el carrete
        super.jugar();
        
        // Verificar si se ganó la tirada gratis
        if (this.carrete[0] == this.carrete[1] && this.carrete[1] == this.carrete[2]) {
          console.log("\x1b[32m ¡Ganaste la tirada gratis! \x1b[0m");
          
          // Aumentar el crédito
          this.credito += this.apuestaUser * 2; // Premio de 2 veces la apuesta
          console.log(`Tu nuevo crédito es de : ${this.credito}`);
        }  
        // Decrementar el valor de this.tiradasGratis
        this.tiradasGratis--;
      }
      console.log("¡No te quedan más tiradas gratis!");
    }



      public leerInstrucciones(): void {
        try {
          const instrucciones = fs.readFileSync('./superSiete.txt', 'utf8');
          console.log(instrucciones);
        } catch (error) {
          console.log('Error al leer el archivo de instrucciones');
        }
 }
 }
    
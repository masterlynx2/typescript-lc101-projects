import { Astronaut } from "./Astronaut"
import { Cargo } from "./Cargo"
import { Payload } from "./Payload"
export class Rocket {
    name: string
    totalCapcityKg : number
    cargoItems: Cargo[] = []
    astronauts: Astronaut[] = []
    constructor(name: string, totalCapcityKg: number){
      this.name= name
      this.totalCapcityKg = totalCapcityKg
    }
    sumMass ( items: Payload[] ): number{
        let sum: number = 0

        for(let i = 0; i < items.length; i++){
          sum += items[i].massKg  
         
        }
        return sum  
    }
    currentMassKg(): number{
        let mass : number = 0
        mass =this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
        return mass
    }
    canAdd(item: Payload) : boolean{
       if(this.currentMassKg() + item.massKg <= this.totalCapcityKg){
        return true
       }
       return false
     }

     addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo)
            return true
        }
        else {return false
        }
    }
            addAstronaut(astronaut: Astronaut): boolean{
            if(this.canAdd(astronaut)){
                this.astronauts.push(astronaut)
                return true
            }
            else {return false
            }
     }

}
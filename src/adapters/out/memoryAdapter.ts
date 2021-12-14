import { Hero } from "../../core/domain/hero";
import { DatabasePort } from "../../core/port/databasePort";
import { v4 as uuidv4 } from 'uuid';

export class MemoryAdapter implements DatabasePort {
    
    heroes: Hero[] = [
        new Hero(uuidv4(), 'Flash', 'Velocidade'),
        new Hero(uuidv4(), 'Lanterna Verde', 'Anel')
    ]    
    
    findAll(filter: any, limit: number, offset: number): Promise<Hero[]> {
        return new Promise(resolve => {
            resolve(this.heroes)
        })  
    }
    

}
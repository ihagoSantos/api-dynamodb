import { Hero } from "../domain/hero";

export interface DatabasePort {
    findAll(filter: any, limit: number, offset: number): Promise<any>;
    // findById(id: string): Promise<any>;
    // create(hero: Hero): Promise<any>;
    // update(id: string, hero: Hero): Promise<any>;
    // delete(id: string): Promise<any>;
}
import { DatabasePort } from "../port/databasePort";

export class FindAllHeroes {
    constructor( private readonly databaseAdapter: DatabasePort ) {}

    execute( filter: any, limit: number, offset: number): Promise<any> {
        return this.databaseAdapter.findAll(filter, limit, offset)
    }
}
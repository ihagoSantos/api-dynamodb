import { Hero } from "../../../../core/domain/hero";
import { FindAllHeroes } from "../../../../core/useCase/findAllHeroes";
import { MemoryAdapter as DatabaseAdapter } from "../../../out/memoryAdapter";
export class HeroesController {

    async healthycheck(request, response) {
        response.status(200).json({
            message: `the server is runing at port ${process.env.SERVER_PORT}`
        })
    }

    async findAll(request, response): Promise<any> {
        try {
            const { filter, limit, offset } = request.query;

            const databaseAdapter = new DatabaseAdapter();
            const findAllHeroes = new FindAllHeroes(databaseAdapter);
            
            const result = await findAllHeroes.execute(filter, limit, offset);
            response.status(200).json(result)

        } catch (error) {
            response.status(500).json()
        }
    }



}
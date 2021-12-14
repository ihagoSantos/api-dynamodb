import { FindAllHeroes } from "../../../../core/useCase/findAllHeroes";
import { MemoryAdapter as DatabaseAdapter } from "../../../out/memoryAdapter";
export class HeroesController {

    async healthycheck(request: any, response: any) {
        response.status(200).json({
            message: `the server is runing at port ${process.env.SERVER_PORT}`
        })
    }

    async findAll(request: any, response: any): Promise<any> {
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
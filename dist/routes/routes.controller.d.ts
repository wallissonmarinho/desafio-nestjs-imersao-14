import { Routes } from '@prisma/client';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
export declare class RoutesController {
    private readonly routesService;
    constructor(routesService: RoutesService);
    create(createRouteDto: CreateRouteDto): Promise<Routes>;
    getAll(): Promise<Routes[]>;
}

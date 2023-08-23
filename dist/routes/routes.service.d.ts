import { Routes } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRouteDto } from './dto/create-route.dto';
export declare class RoutesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateRouteDto): Promise<Routes>;
    getAll(): Promise<Routes[]>;
}

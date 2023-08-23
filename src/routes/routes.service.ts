import { Injectable } from '@nestjs/common';
import { Routes } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRouteDto } from './dto/create-route.dto';

@Injectable()
export class RoutesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateRouteDto): Promise<Routes> {
    return this.prismaService.routes.create({ data: data });
  }

  getAll(): Promise<Routes[]> {
    return this.prismaService.routes.findMany();
  }
}

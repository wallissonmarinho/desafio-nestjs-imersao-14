import { Body, Controller, Get, Post } from '@nestjs/common';
import { Routes } from '@prisma/client';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';

// @Controller path api/routes
@Controller('api/routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto): Promise<Routes> {
    return this.routesService.create(createRouteDto);
  }

  @Get()
  getAll(): Promise<Routes[]> {
    return this.routesService.getAll();
  }
}

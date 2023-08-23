import { IsNotEmpty, IsString, IsObject, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class CoordDto {
  @IsNotEmpty()
  @IsNumber()
  readonly lat: number;

  @IsNotEmpty()
  @IsNumber()
  readonly lng: number;
}

export class CreateRouteDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => CoordDto)
  readonly source: CoordDto;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => CoordDto)
  readonly destination: CoordDto;
}

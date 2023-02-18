import { Controller, Get, Param, ParseIntPipe, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(":id")
  @UsePipes(parseInt)
  getNoString(@Param('id') id : number):string{
    return "the number parseed into string "+ id;
  }
}

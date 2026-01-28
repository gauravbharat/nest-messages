import { Controller, Get, Post, Headers, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages(@Headers() header: any) {
    console.log('Header', header);
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log('Body', body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
  }
}

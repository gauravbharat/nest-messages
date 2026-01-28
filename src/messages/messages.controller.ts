import { Controller, Get, Post, Headers, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages(@Headers() header: any) {
    console.log('Header', header);
  }

  /** Applied validation class to the request handler.
   *
   * Validation Pipe working explained:
   * STEP 1. Here our server uses the class-transformer package to transform the request body i.e. a literal object
   * into an instance of the CreateMessageDto DTO class i.e. constructor or a class object
   *
   * STEP 2. Uses class-validator pkg to validate the instance
   *
   * STEP 3. If there are validation errors, respond immediately, otherwise provide body to request handler
   */
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('Body', body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
  }
}

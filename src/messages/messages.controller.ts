import {
  Controller,
  Get,
  Post,
  Headers,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // TEMP CODE: DO NOT CREATE OWN DEPENDENCIES, use Dependency Injection (DI) later
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages(@Headers() header: any) {
    console.log('Header', header);
    return this.messagesService.findAll();
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
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string): Promise<any> {
    console.log('id', id);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found.');
    }

    return message;
  }
}

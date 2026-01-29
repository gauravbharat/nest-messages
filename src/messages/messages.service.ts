import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    // TEMP CODE: DO NOT CREATE OWN DEPENDENCIES, use Dependency Injection (DI) later
    this.messagesRepo = new MessagesRepository();
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

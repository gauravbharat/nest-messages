import { randomUUID } from 'crypto';
import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findAll(): Promise<any> {
    const contents = await readFile('messages.json', 'utf8');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const messages = JSON.parse(contents);

    return messages;
  }

  async findOne(id: string): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const messages = await this.findAll();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return messages?.[id];
  }

  async create(content: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const messages = await this.findAll();

    const id: string = randomUUID().toString();
    console.log('randomUUID', id);
    if (id) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      messages[id] = { id, content };
    }

    await writeFile('messages.json', JSON.stringify(messages));
  }
}

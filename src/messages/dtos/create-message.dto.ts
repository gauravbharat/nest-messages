/** CREATE MESSAGE: DATA TRANSFER OBJECT
 * 1. Create a class that describes the different properties that the request body should have.
 * 2. Add validation rules to the class. */

import { IsString } from 'class-validator';

export class CreateMessageDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  content: string;
}

import { randomUUID } from 'crypto';
import { ValueObject } from './value-object.interface';

export class ID implements ValueObject {
  private _id: string;

  constructor(id?: string) {
    this._id = id ?? randomUUID();
  }

  get value(): string {
    return this._id;
  }
}

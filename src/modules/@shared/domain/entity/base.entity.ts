import EventDispatcher from '../events/event-dispatcher';
import { ID } from '../value-object';

export class BaseEntity extends EventDispatcher {
  private _id: ID;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor() {
    super();
    this._id = new ID();
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  get id(): ID {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
}

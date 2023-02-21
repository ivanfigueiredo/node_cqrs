import IDomainEvent from './idomain-events';
import IEventDispatcher from './ievent.dispatcher';
import IHandle from './ihandle';

export default class EventDispatcher implements IEventDispatcher {
  private readonly eventHandlers: { [eventName: string]: IHandle[] } = {};

  get getEventHandlers(): { [eventName: string]: IHandle[] } {
    return this.eventHandlers;
  }

  register(eventName: string, handle: IHandle): void {
    this.eventHandlers[eventName] = [];
    this.eventHandlers[eventName].push(handle);
  }

  notify(event: IDomainEvent): void {
    const eventName = event.constructor.name;
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach((handler) =>
        handler.dispatch(event),
      );
    }
  }
}

import IDomainEvent from './idomain-events';
import IHandle from './ihandle';

export default interface IEventDispatcher {
  register(eventName: string, handle: IHandle): void;
  notify(event: IDomainEvent): void;
}

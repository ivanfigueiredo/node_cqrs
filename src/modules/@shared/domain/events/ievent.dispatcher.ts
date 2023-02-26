import IDomainEvent from './idomain-events';
import IHandle from './ihandle';

export default interface IEventDispatcher {
  publish(eventName: string, handle: IHandle, event: IDomainEvent): void;
}

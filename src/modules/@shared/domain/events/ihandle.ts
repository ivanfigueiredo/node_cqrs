import IDomainEvent from './idomain-events';

export default interface IHandle<T extends IDomainEvent = IDomainEvent> {
  dispatch(event: T): void;
}

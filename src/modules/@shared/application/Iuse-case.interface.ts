/* istanbul ignore next */
export default interface IUseCase {
  execute: (dto: unknown) => Promise<unknown>;
}

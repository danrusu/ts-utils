export default class FluentApi {
  private x = 0;

  move(x: number): this {
    this.x += x;
    return this;
  }

  get xValue(): number {
    return this.x;
  }
}

export default class Player {
  private current;
  private name;

  constructor(name: string) {
    this.name = name;
    this.current = -1;
  }

  public getName() {
    return this.name;
  }
}

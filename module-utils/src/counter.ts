export class Counter {
  private static _count = 0;

  static getCount() {
    return Counter._count;
  }

  static increment() {
    Counter._count++;
  }
}

export default Counter;

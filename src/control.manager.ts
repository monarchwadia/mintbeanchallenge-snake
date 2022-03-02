export default class ControlManager {
  public onUp: Function;
  public onDown: Function;
  public onLeft: Function;
  public onRight: Function;

  constructor(private el: HTMLElement) {
    el.addEventListener("keydown", (evt: KeyboardEvent) => {
      this.handle(evt.key);
    })
  }

  private handle(key: string) {
    switch(key) {
      case "ArrowUp":
        this.onUp?.();
        break;
      case "ArrowRight":
        this.onRight?.();
        break;
      case "ArrowDown":
        this.onDown?.();
        break;
      case "ArrowLeft":
        this.onLeft?.();
        break;
    }
  }
}
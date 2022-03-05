export default class ControlManager {
  public onUp: Function;
  public onDown: Function;
  public onLeft: Function;
  public onRight: Function;
  public onReset: Function;
  public onTogglePause: Function;

  constructor(private el: HTMLElement) {
    el.addEventListener("keydown", (evt: KeyboardEvent) => {
      this.handle(evt);
    })
  }

  private handle(evt: KeyboardEvent) {
    const { key } = evt;

    switch(key) {
      case "ArrowUp":
        evt.preventDefault();
        this.onUp?.();
        break;
      case "ArrowRight":
        evt.preventDefault();
        this.onRight?.();
        break;
      case "ArrowDown":
        evt.preventDefault();
        this.onDown?.();
        break;
      case "ArrowLeft":
        evt.preventDefault();
        this.onLeft?.();
        break;
      case "R":
      case "r":
        evt.preventDefault();
        this.onReset?.();
        break;
      case " ":
      case "Spacebar":
        evt.preventDefault();
        this.onTogglePause?.();
        break;
    }
  }
}
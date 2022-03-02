export default class RenderloopManager {
  private previous;
  private fps = 60;

  constructor(private func: Function) {
    const step = () => {
      this.func();
      window.requestAnimationFrame(step);
    }
    
    window.requestAnimationFrame(step);
  }

  private step() {
    console.log("STEP", this);
    this.func();
    window.requestAnimationFrame(this.step);
  }
}
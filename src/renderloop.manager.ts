export default class RenderloopManager {
  private previous;
  private fps = 480;
  private isPaused = false;

  constructor(private func: Function) {
    let previous;

    const step = (time) => {
      console.log("step");
      if (previous === undefined) {
        previous = time;
      }

      if (time - previous > (60000 / this.fps)) { 
        previous = time;

        if (!this.isPaused) {
          this.func();
        }
      }

      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }

  pause() {
    this.isPaused = true;
  }

  continue() {
    this.isPaused = false;
  }
}
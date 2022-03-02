export default class RenderloopManager {
  private previous;
  private fps = 60;

  constructor(private func: Function) {
    let previous;

    const step = (time) => {
      console.log("step");
      if (previous === undefined) {
        previous = time;
      }

      if (time - previous > 1000) { 
        previous = time;
        this.func();
      }
      
      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }
}
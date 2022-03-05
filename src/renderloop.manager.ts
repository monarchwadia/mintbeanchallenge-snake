export default class RenderloopManager {
  
  constructor(private func: Function) {
    const fps = 480;
    let previous;

    const step = (time) => {
      console.log("step");
      if (previous === undefined) {
        previous = time;
      }

      if (time - previous > (60000 / fps)) { 
        previous = time;
        this.func();
      }

      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }
}

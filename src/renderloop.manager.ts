export default class RenderloopManager {
  
  constructor(private func: (time: number, previous: number) => void) {
    const fps = 480;
    let timePrev;

    const step = (timeNow) => {
      if (timePrev === undefined) {
        timePrev = timeNow;
      }

      if (timeNow - timePrev > (60000 / fps)) { 
        timePrev = timeNow;
        this.func(timeNow, timePrev);
      }

      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }
}

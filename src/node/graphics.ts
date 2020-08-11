import Node from './node';

interface assMapInterface {
  [x: string]: boolean;
}

const assMap: assMapInterface = {
  fillStyle: true,
  strokeStyle: true,
  lineWidth: true,
  lineCap: true,
  lineDashOffset: true,
  lineJoin: true,
  miterLimit: true
};

class Graphics extends Node {
  cmds: Array<Array<any>>;
  currentGradient: any;
  constructor() {
    super();
    this.cmds = [];
    this.currentGradient = null;
  }

  clearRect(...params: any[]) {
    this.cmds.push(['clearRect', arguments]);
    return this;
  }

  rect(...params: any[]) {
    this.cmds.push(['rect', arguments]);
    return this;
  }

  clear(...params: any[]) {
    this.cmds.length = 0;
    return this;
  }

  setLineDash(...params: any[]) {
    this.cmds.push(['setLineDash', arguments]);
    return this;
  }

  strokeRect(...params: any[]) {
    this.cmds.push(['strokeRect', arguments]);
    return this;
  }

  fillRect(...params: any[]) {
    this.cmds.push(['fillRect', arguments]);
    return this;
  }

  beginPath(...params: any[]) {
    this.cmds.push(['beginPath', arguments]);
    return this;
  }

  arc(...params: any[]) {
    this.cmds.push(['arc', arguments]);
    return this;
  }

  closePath(...params: any[]) {
    this.cmds.push(['closePath', arguments]);
    return this;
  }

  fillStyle(...params: any[]) {
    this.cmds.push(['fillStyle', arguments]);
    return this;
  }

  fill(...params: any[]) {
    this.cmds.push(['fill', arguments]);
    return this;
  }

  strokeStyle(...params: any[]) {
    this.cmds.push(['strokeStyle', arguments]);
    return this;
  }

  lineWidth(...params: any[]) {
    this.cmds.push(['lineWidth', arguments]);
    return this;
  }

  lineCap(...params: any[]) {
    this.cmds.push(['lineCap', arguments]);
    return this;
  }

  lineDashOffset(...params: any[]) {
    this.cmds.push(['lineDashOffset', arguments]);
    return this;
  }

  lineJoin(...params: any[]) {
    this.cmds.push(['lineJoin', arguments]);
    return this;
  }

  miterLimit(...params: any[]) {
    this.cmds.push(['miterLimit', arguments]);
    return this;
  }

  stroke(...params: any[]) {
    this.cmds.push(['stroke', arguments]);
    return this;
  }

  moveTo(...params: any[]) {
    this.cmds.push(['moveTo', arguments]);
    return this;
  }

  lineTo(...params: any[]) {
    this.cmds.push(['lineTo', arguments]);
    return this;
  }

  bezierCurveTo(...params: any[]) {
    this.cmds.push(['bezierCurveTo', arguments]);
    return this;
  }

  quadraticCurveTo(...params: any[]) {
    this.cmds.push(['quadraticCurveTo', arguments]);
    return this;
  }

  createRadialGradient(...params: any[]) {
    this.cmds.push(['createRadialGradient', arguments]);
    return this;
  }

  createLinearGradient(...params: any[]) {
    this.cmds.push(['createLinearGradient', arguments]);
    return this;
  }

  addColorStop(...params: any[]) {
    this.cmds.push(['addColorStop', arguments]);
    return this;
  }

  fillGradient(...params: any[]) {
    this.cmds.push(['fillGradient']);
    return this;
  }

  arcTo(...params: any[]) {
    this.cmds.push(['arcTo', arguments]);
    return this;
  }

  render(ctx: any) {
    this.cmds.forEach(cmd => {
      const methodName = cmd[0];
      if (assMap[methodName]) {
        ctx[methodName] = cmd[1][0];
      } else if (methodName === 'addColorStop') {
        this.currentGradient && this.currentGradient.addColorStop(cmd[1][0], cmd[1][1]);
      } else if (methodName === 'fillGradient') {
        ctx.fillStyle = this.currentGradient;
      } else {
        let result = ctx[methodName].apply(ctx, Array.prototype.slice.call(cmd[1]));
        if (methodName === 'createRadialGradient' || methodName === 'createLinearGradient') {
          this.currentGradient = result;
        }
      }
    });
  }
}

export default Graphics;

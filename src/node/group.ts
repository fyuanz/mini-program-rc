import Node from './node';

export default class Group extends Node {
  children: Array<any>;
  
  constructor() {
    super();
    this.children = [];
  }

  add() {
    const len = arguments.length;
    for (let i = 0; i < len; i++) {
      const c = arguments[i];
      const parent = c.parent;
      if (parent) {
        parent.removeChildAt(parent.children.indexOf(c));
      }
      this.children.push(c);
      c.parent = this;
    }
  }

  addChildAt(child: any, index: number) {
    let par = child.parent;
    par && par.removeChildAt(par.children.indexOf(child));
    child.parent = this;
    this.children.splice(index, 0, child);
  }

  removeChildAt(index: number) {
    let child = this.children[index];
    if (child) {
      child.parent = null;
    }
    this.children.splice(index, 1);
  }

  replace(current: number, pre: any) {
    const index = pre.parent.children.indexOf(pre);
    this.removeChildAt(index);
    this.addChildAt(current, index);
  }

  remove(child: any) {
    const len = arguments.length;
    let cLen = this.children.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < cLen; j++) {
        if (child.id === this.children[j].id) {
          child.parent = null;
          this.children.splice(j, 1);
          j--;
          cLen--;
        }
      }
    }
  }

  empty() {
    this.children.forEach(child => {
      child.parent = null;
    });
    this.children.length = 0;
  }

  destroy() {
    this.empty();
    this.parent && this.parent.destroy();
  }
}

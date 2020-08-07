import { ScriptEvent } from '../event/event';

const _eventListeners: unique symbol = Symbol('eventListeners');
const _captureEventListeners: unique symbol = Symbol('captureEventListeners');

interface EventListeners {
  [key: string]: Array<{ listener: (event: ScriptEvent) => void; once?: boolean }>;
}

interface EventOptions {
  capture: boolean;
  once?: boolean;
}

export default class Node {
  parent: Node | null;
  [_eventListeners]: EventListeners;
  [_captureEventListeners]: EventListeners;

  constructor() {
    this[_eventListeners] = {};
    this[_captureEventListeners] = {};
    this.parent = null;
  }

  addEventListener(
    type: string,
    listener: (event: ScriptEvent) => void,
    options?: EventOptions | boolean
  ): this {
    if (typeof options === 'boolean') options = { capture: options };
    const { capture, once } = options || {};
    const eventListeners = capture ? _captureEventListeners : _eventListeners;
    this[eventListeners][type] = this[eventListeners][type] || [];
    this[eventListeners][type].push({ listener, once });
    return this;
  }

  removeEventListener(
    type: string,
    listener: (event: ScriptEvent) => void,
    options?: EventOptions | boolean
  ): this {
    if (typeof options === 'boolean') options = { capture: options };
    const { capture } = options || {};
    const eventListeners = capture ? _captureEventListeners : _eventListeners;

    if (this[eventListeners][type]) {
      const listeners = this[eventListeners][type];
      for (let i = 0; i < listeners.length; i++) {
        const { listener: _listener } = listeners[i];
        if (listener === _listener) {
          this[eventListeners][type].splice(i, 1);
          break;
        }
      }
    }
    return this;
  }

  dispatchEvent(event: ScriptEvent) {
    event.target = this;
    const type = event.type;
    const elements: Array<Node> = [this];
    let parent = this.parent;
    while (event.bubbles && parent) {
      elements.push(parent);
      parent = parent.parent;
    }

    // capture phase
    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];
      const listeners = element[_captureEventListeners] && element[_captureEventListeners][type];
      if (listeners && listeners.length) {
        listeners.forEach(({ listener, once }) => {
          listener.call(this, event);
          if (once) {
            element.removeEventListener(event.type, listener, { capture: true });
          }
        });
      }
      if (!event.bubbles && event.cancelBubble) break;
    }

    // bubbling
    if (!event.cancelBubble) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const listeners = element[_eventListeners] && element[_eventListeners][type];
        if (listeners && listeners.length) {
          listeners.forEach(({ listener, once }) => {
            listener.call(this, event);
            if (once) {
              element.removeEventListener(event.type, listener, { capture: false });
            }
          });
        }
        if (!event.bubbles || event.cancelBubble) break;
      }
    }
  }
}

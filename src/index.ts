import Render from './render/index';
import State from './node/state';
import Event from './event/event';

const mprc: Object = {
  Render,
  State
};

const state = new State();
state.addEventListener(
  'click',
  () => {
    console.log('state click e1');
  },
  true
);

const state2 = new State();
state2.addEventListener(
  'click',
  () => {
    console.log('state2 click e1');
  },
  true
);

state2.parent = state;



const e1 = new Event();

e1.type = 'click';

state2.dispatchEvent(e1);

export default mprc;

interface UID {
  _nextID: number;
  get: () => number;
}

let UID: UID = {
  _nextID: 0,
  get: function () {
    return UID._nextID++;
  }
};

export default UID;

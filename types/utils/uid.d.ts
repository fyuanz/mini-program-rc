interface UID {
    _nextID: number;
    get: () => number;
}
declare let UID: UID;
export default UID;

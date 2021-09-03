import Matrix2D from './matrix2d';
import { Shadow } from '../node/node';
export default class DisplayProps {
    visible: boolean;
    alpha: number;
    shadow: Shadow | null;
    compositeOperation: string | null;
    matrix: Matrix2D;
    constructor(visible?: boolean, alpha?: number, shadow?: Shadow, compositeOperation?: string, matrix?: Matrix2D);
    setValue(visible?: boolean, alpha?: number, shadow?: Shadow, compositeOperation?: string, matrix?: Matrix2D): this;
    append(visible: boolean, alpha: number, shadow: Shadow, compositeOperation: string, matrix?: Matrix2D): this;
    prepend(visible: boolean, alpha: number, shadow: Shadow | null, compositeOperation: string | null, matrix?: Matrix2D): this;
    identity(): this;
}

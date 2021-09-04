"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./render/index"));
const stage_1 = __importDefault(require("./node/stage"));
const group_1 = __importDefault(require("./node/group"));
const bitmap_1 = __importDefault(require("./node/bitmap"));
const text_1 = __importDefault(require("./node/text"));
const graphics_1 = __importDefault(require("./node/graphics"));
const shape_1 = __importDefault(require("./node/shape/shape"));
const rect_1 = __importDefault(require("./node/shape/rect"));
const circle_1 = __importDefault(require("./node/shape/circle"));
const rounded_rect_1 = __importDefault(require("./node/shape/rounded-rect"));
const arrow_path_1 = __importDefault(require("./node/shape/arrow-path"));
const ellipse_1 = __importDefault(require("./node/shape/ellipse"));
const polygon_1 = __importDefault(require("./node/shape/polygon"));
const sector_1 = __importDefault(require("./node/shape/sector"));
const equilateral_polygon_1 = __importDefault(require("./node/shape/equilateral-polygon"));
const utils = __importStar(require("./utils/util"));
const cax = {
    Render: index_1.default,
    Stage: stage_1.default,
    Group: group_1.default,
    Bitmap: bitmap_1.default,
    Text: text_1.default,
    Graphics: graphics_1.default,
    Shape: shape_1.default,
    Rect: rect_1.default,
    Circle: circle_1.default,
    RoundedRect: rounded_rect_1.default,
    ArrowPath: arrow_path_1.default,
    Ellipse: ellipse_1.default,
    Polygon: polygon_1.default,
    Sector: sector_1.default,
    EquilateralPolygon: equilateral_polygon_1.default,
    loadImage: utils.loadImage,
};
exports.default = cax;

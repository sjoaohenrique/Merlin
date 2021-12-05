"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var Merlin = /** @class */ (function () {
    function Merlin() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    Merlin.prototype.run = function () {
        console.log(Reflect.getMetadata('path', this.app));
        this.app.listen(3000);
    };
    return Merlin;
}());
exports.default = Merlin;
//# sourceMappingURL=merlin.js.map
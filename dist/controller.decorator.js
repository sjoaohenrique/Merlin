"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
function Controller(path) {
    return function (target) {
        Reflect.defineMetadata('path', path ? path : '/', target);
    };
}
exports.Controller = Controller;
//# sourceMappingURL=controller.decorator.js.map
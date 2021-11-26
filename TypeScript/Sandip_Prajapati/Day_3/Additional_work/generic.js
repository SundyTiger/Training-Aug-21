"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purge = void 0;
function purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.purge = purge;

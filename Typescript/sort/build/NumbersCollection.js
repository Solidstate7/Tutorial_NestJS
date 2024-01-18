"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(left, right) {
        return this.data[left] > this.data[right];
    }
    swap(left, right) {
        const leftHand = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;

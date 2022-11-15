"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharecterCollections = void 0;
class CharecterCollections {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const charecters = this.data.split('');
        const leftHand = charecters[leftIndex];
        charecters[leftIndex] = charecters[rightIndex];
        charecters[rightIndex] = leftHand;
        this.data = charecters.join('');
    }
}
exports.CharecterCollections = CharecterCollections;

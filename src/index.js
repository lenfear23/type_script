"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_golokSzama, _Football_masikGolokSzama, _Marathon_futottIdő;
class Football {
    constructor(winner, golokSzama, masikGolokSzama, csapat1, csapat2) {
        _Football_golokSzama.set(this, void 0);
        _Football_masikGolokSzama.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Football_golokSzama, golokSzama, "f");
        __classPrivateFieldSet(this, _Football_masikGolokSzama, masikGolokSzama, "f");
        this.csapat1 = csapat1;
        this.csapat2 = csapat2;
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        if (__classPrivateFieldGet(this, _Football_golokSzama, "f") > __classPrivateFieldGet(this, _Football_masikGolokSzama, "f")) {
            return "Winner: " + this.csapat1 + " Football match: " + __classPrivateFieldGet(this, _Football_golokSzama, "f") + "-" + __classPrivateFieldGet(this, _Football_masikGolokSzama, "f");
        }
        else {
            return "Winner: " + this.csapat2 + " Football match: " + __classPrivateFieldGet(this, _Football_masikGolokSzama, "f") + "-" + __classPrivateFieldGet(this, _Football_golokSzama, "f");
        }
    }
}
_Football_golokSzama = new WeakMap(), _Football_masikGolokSzama = new WeakMap();
class Marathon {
    constructor(winner, futottIdő) {
        _Marathon_futottIdő.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Marathon_futottIdő, Math.floor(futottIdő), "f");
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Marathon: " + this.winner + " result:" + __classPrivateFieldGet(this, _Marathon_futottIdő, "f") % 60 + "min " + Math.floor(__classPrivateFieldGet(this, _Marathon_futottIdő, "f") / 60) + "s";
    }
}
_Marathon_futottIdő = new WeakMap();
class Calvinball {
    constructor(winner, random) {
        this.winner = winner;
        this.random = Math.floor(Math.random() * 90) + 11;
    }
    get Winner() {
        return this.winner;
    }
    set Winner(winner) {
        if (this.winner == "Calvin" || this.winner == "Hobbes") {
            this.winner = winner;
        }
        else {
            throw new Error("Hiba nem eggyezik");
        }
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Calvinball: " + this.Winner + " " + this.random + " points";
    }
}
let upload = [
    new Football("Winner", 6, 3, "Barcelone", "Fradi"),
    new Football("Winner", 1, 3, "Real", "Vasas"),
    new Marathon("Alma László", 20000),
    new Marathon("Körte Alma", 10000),
    new Calvinball("Calvin", 30),
    new Calvinball("Laci", 30),
];
upload.forEach(e => {
    e === null || e === void 0 ? void 0 : e.result();
});

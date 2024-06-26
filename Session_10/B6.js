"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    set name1(name) {
        this.name = name;
    }
    set length1(length) {
        this.length = length;
    }
}
let song1 = new Song(1, "ez", 2323);
song1.name1 = "GG";
song1.length1 = 123123;
console.log(song1);

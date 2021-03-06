var Note = require('./note.js');

var Chord = function(root, keyName, detune1, detune2, detune3) {
  var octaveDown = root - 1200;
  this.note1 = new Note(octaveDown + detune1, keyName);
  this.note2 = new Note(octaveDown + detune2, keyName);
  this.note3 = new Note(octaveDown + detune3, keyName);
}

Chord.prototype.start = function() {
  this.note1.start();
  this.note2.start();
  this.note3.start();
}

Chord.prototype.stop = function() {
  this.note1.stop();
  this.note2.stop();
  this.note3.stop();
}

Chord.prototype.changeTone = function(keyCode) {
  this.note1.changeTone(keyCode);
  this.note2.changeTone(keyCode);
  this.note3.changeTone(keyCode);
}

module.exports = Chord;
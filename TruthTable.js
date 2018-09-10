/*
This is a JavaScript library based on truth tables. This means you can create
gates with objects. To use this, you need to know how truth tables and binary
work. To define a truth table, you need to calculate the output of all of the
following combinations:
[A | B]
-------
[0 | 0]
[0 | 1]
[1 | 0]
[1 | 1]

A NAND truth table would look like this:

[A | B]
-------
[0 | 0] = 1
[0 | 1] = 1
[1 | 0] = 1
[1 | 1] = 0

Putting the results in base 10 would be 14, so, to make a NAND gate with this,
you would have to say:
new TruthTable(x, y, 14);

The TripleTruthTables are a little different, but just because they have an
extra input. The truth table now looks like this:

[A | B | C]
-------
[0 | 0 | 0]
[0 | 0 | 1]
[0 | 1 | 0]
[0 | 1 | 1]
[1 | 0 | 0]
[1 | 0 | 1]
[1 | 1 | 0]
[1 | 1 | 1]

Of course, now, the values can be bigger. Instead of 14 being a NAND gate, it's
now 254. The same goes for TruthTable4, but a NAND gate is now 32766.

*/
var TruthTable;
var AndGate;
var OrGate;
var NotGate;
var XorGate;
var NandGate;
var NorGate;
var XnorGate;
var Edu; //Stands for Easy Decision Unit
var TripleTruthTable

TruthTable = function (a, b, table) {
  this.a = a;
  this.b = b;
  this.table = table;
  this.result = null;
  this.newTable = null;
  this.notAsNew = null;

  this.notAsNew = this.table.toString(2); //Turn the number into binary
  this.notAsNew = this.notAsNew.split(""); //Split the binary number into an array
  this.newTable = new Array();
  for (var i = 0; i < 3 || i === 3; i++) {
    if (this.notAsNew[i] === "1") {
      this.newTable.push(true);
    } else {
      this.newTable.push(false);
    }
    /*
    Turn the array of 1s & 0s into trues & falses
    1 = true, 0 = false, just like in binary
    */
  }

  if (!this.a && !this.b) { //Evaluate the data & generate a logic gate
    this.result = this.newTable[0];
  } else if (!this.a && this.b) {
    this.result = this.newTable[1];
  } else if (this.a && !this.b) {
    this.result = this.newTable[2];
  } else if (this.a && this.b) {
    this.result = this.newTable[3];
  }
}

AndGate = function (a, b) {
  this.a = a;
  this.b = b;
  this.prem = new TruthTable(this.a, this.b, 1);
  this.result = this.prem.result;
}

OrGate = function (a, b) {
  this.a = a;
  this.b = b;
  this.prem = new TruthTable(this.a, this.b, 7);
  this.result = this.prem.result;
}

NotGate = function (a) {
  this.a = a;
  this.b = b;
  this.result = !this.a;
}

XorGate = function (a, b) {
  this.a = a;
  this.b = b;
  this.prem = new TruthTable(this.a, this.b, 6);
  this.result = this.prem.result;
}

NandGate = function (a, b) {
  this.a = a;
  this.b = b;
  this.prem = new TruthTable(this.a, this.b, 14);
  this.result = this.prem.result;
}

NorGate = function (a, b) {
  this.a = a;
  this.b = b;
  this.prem = new TruthTable(this.a, this.b, 8);
  this.result = this.prem.result;
}

XnorGate = function (a, b) {
  this.a = a;
  this.b = b;
  this.prem = new TruthTable(this.a, this.b, 9);
  this.result = this.prem.result;
}

Edu = function (a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.value = '';
  if (a === true) {
    this.value = this.value + "1";
  } else {
    this.value = this.value + "0";
  }
  if (b === true) {
    this.value = this.value + "1";
  } else {
    this.value = this.value + "0";
  }
  if (c === true) {
    this.value = this.value + "1";
  } else {
    this.value = this.value + "0";
  }
}

Edu4 = function (a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.value = '';
  if (a === true) {
    this.value = this.value + "1";
  } else {
    this.value = this.value + "0";
  }
  if (b === true) {
    this.value = this.value + "1";
  } else {
    this.value = this.value + "0";
  }
  if (c === true) {
    this.value = this.value + "1";
  } else {
    this.value = this.value + "0";
  }
  if (d === true) {
    this.value = this.value + "1";
  } else {
    this.value = this.value + "0";
  }
}

TripleTruthTable = function (a, b, c, table) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.table = table;
  this.result = null;
  this.newTable = null;
  this.notAsNew = null;
  this.preEase = new Edu(this.a, this.b, this.c)
  this.ease = this.preEase.value;

  this.notAsNew = this.table.toString(2); //Turn the number into binary
  this.notAsNew = this.notAsNew.split(""); //Split the binary number into an array
  this.newTable = new Array();
  for (var i = 0; i < 7 || i === 7; i++) {
    if (this.notAsNew[i] === "1") {
      this.newTable.push(true);
    } else {
      this.newTable.push(false);
    }
    /*
    Turn the array of 1s & 0s into trues & falses
    1 = true, 0 = false, just like in binary
    */
  }

  if (this.ease === "000") { //Evaluate the data & generate a logic gate
    this.result = this.newTable[0];
  } else if (this.ease === "001") {
    this.result = this.newTable[1];
  } else if (this.ease === "010") {
    this.result = this.newTable[2];
  } else if (this.ease === "011") {
    this.result = this.newTable[3];
  } else if (this.ease === "100") {
    this.result = this.newTable[4];
  } else if (this.ease === "101") {
    this.result = this.newTable[5];
  } else if (this.ease === "110") {
    this.result = this.newTable[6];
  } else if (this.ease === "111") {
    this.result = this.newTable[7];
  }
}

TruthTable4 = function (a, b, c, d, table) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.table = table;
  this.result = null;
  this.newTable = null;
  this.notAsNew = null;
  this.preEase = new Edu4(this.a, this.b, this.c, this.d)
  this.ease = this.preEase.value;

  this.notAsNew = this.table.toString(2); //Turn the number into binary
  this.notAsNew = this.notAsNew.split(""); //Split the binary number into an array
  this.newTable = new Array();
  for (var i = 0; i < 15 || i === 15; i++) {
    if (this.notAsNew[i] === "1") {
      this.newTable.push(true);
    } else {
      this.newTable.push(false);
    }
    /*
    Turn the array of 1s & 0s into trues & falses
    1 = true, 0 = false, just like in binary
    */
  }

  if (this.ease === "0000") { //Evaluate the data & generate a logic gate
    this.result = this.newTable[0];
  } else if (this.ease === "0001") {
    this.result = this.newTable[1];
  } else if (this.ease === "0010") {
    this.result = this.newTable[2];
  } else if (this.ease === "0011") {
    this.result = this.newTable[3];
  } else if (this.ease === "0100") {
    this.result = this.newTable[4];
  } else if (this.ease === "0101") {
    this.result = this.newTable[5];
  } else if (this.ease === "0110") {
    this.result = this.newTable[6];
  } else if (this.ease === "0111") {
    this.result = this.newTable[7];
  } else if (this.ease === "1000") {
    this.result = this.newTable[8]
  } else if (this.ease === "1001") {
    this.result = this.newTable[9];
  } else if (this.ease === "1010") {
    this.result = this.newTable[10];
  } else if (this.ease === "1011") {
    this.result = this.newTable[11];
  } else if (this.ease === "1100") {
    this.result = this.newTable[12];
  } else if (this.ease === "1101") {
    this.result = this.newTable[13];
  } else if (this.ease === "1110") {
    this.result = this.newTable[14];
  } else if (this.ease === "1111") {
    this.result = this.newTable[15];
  }
}

var i;
for (var i = 5; i <= 120; i += 10) {
    console.log(i);
}

var j;
for (var j = 4096; j >= 1; j /= 2) {
    console.log(j);
}

var presidents = [`Washington`, `Adams`, `Jefferson`, `Madison`, `JQ Adams`];
for (var i = 0; i < presidents.length; i++) {
    console.log(`President #` + (i + 1) + ` was ` + presidents[i] + `.`)
}

var antSpecies = {
    argentine: {},
    army: {},
    bigHeaded: {},
    black: {},
    bull: {},
    carpenter: {},
    crazy: {},
    fire: {},
    glider: {},
    honeyPot: {},
    jackJumper: {}
}


for (var key in antSpecies) {
  console.log(`key is equal to`, key);
  console.log(`These are not the ` + key + `s you are looking for.` );
}


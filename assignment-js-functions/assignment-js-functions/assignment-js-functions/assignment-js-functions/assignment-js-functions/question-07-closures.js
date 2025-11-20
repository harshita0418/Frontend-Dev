function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

function demonstrateClosures() {
    const output = document.getElementById('output');
    const double = makeMultiplier(2);
    const triple = makeMultiplier(3);
    const quadruple = makeMultiplier(4);
    const result = `Closure Example:\n\nconst triple = makeMultiplier(3);\ntiple(5) = ${triple(5)}\ntiple(10) = ${triple(10)}\n\nOther Examples:\ndouble(5) = ${double(5)}\nquadruple(5) = ${quadruple(5)}\n\nHow Closures Work:\n1. makeMultiplier returns a function\n2. Returned function has access to 'multiplier'\n3. 'multiplier' is captured in closure\n4. Each closure remembers its own 'multiplier'\n5. Even after makeMultiplier returns`;
    output.textContent = result;
}

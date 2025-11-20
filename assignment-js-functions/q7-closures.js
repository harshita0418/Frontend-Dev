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
    const result = `triple(5) = ${triple(5)}\ntriple(10) = ${triple(10)}\ndouble(5) = ${double(5)}\nquadruple(5) = ${quadruple(5)}`;
    output.textContent = result;
}

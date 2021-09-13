const numberStrings = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
];

export function shouldDisplayValue(value) {
    cy.get('#display').should(($display) => {
        expect($display.eq(0)).to.contain(value);
    });
}

export function clickNumber(number) {
    cy.get(`#${numberStrings[number]}`).click();
}

export function clickOperator(operator) {
    cy.get(`#${operator}`).click();
}

export function clickEquals() {
    cy.get('#equals').click();
}

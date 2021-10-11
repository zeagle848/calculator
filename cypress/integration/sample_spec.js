import { shouldDisplayValue, clickNumber, clickOperator, clickEquals } from '../utils';

describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html');
    });
    it('Clicks and reflects value', () => {
        clickNumber(4);
        clickNumber(5);

        shouldDisplayValue('45');
    });
    it('Adds values correctly', () => {
        clickNumber(4);
        clickNumber(5);

        // clickOperator('add');
        clickOperator('add');
        clickNumber(5);

        clickEquals();

        shouldDisplayValue('50');
    });
    it('Minuses values correctly', () => {
        clickNumber(4);
        clickNumber(5);

        clickOperator('minus');
        clickNumber(5);

        clickEquals();

        shouldDisplayValue('40');
    });
    it('Multiplies values correctly', () => {
        clickNumber(4);
        clickNumber(5);

        clickOperator('multiply');
        clickNumber(2);

        clickEquals();

        shouldDisplayValue('90');
    });
    it('Divides values correctly', () => {
        clickNumber(4);
        clickNumber(5);

        clickOperator('divide');
        clickNumber(5);

        clickEquals();

        shouldDisplayValue('9');
    });
    it('Can use points', () => {
        clickOperator('point');
        clickNumber(5);

        clickOperator('multiply');
        clickNumber(1);
        clickNumber(0);

        clickEquals();

        shouldDisplayValue('5');
    });
    it('Can use percentage', () => {
        clickNumber(5);
        clickNumber(0);
        cy.get('#percentage').click();

        clickOperator('multiply');
        clickNumber(1);
        clickNumber(0);

        clickEquals();

        shouldDisplayValue('5');
    });
    it('Can handle large numbers', () => {
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);

        clickOperator('multiply');
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);
        clickNumber(9);

        clickEquals();

        shouldDisplayValue('1.00e+18');
    });
    it('Can handle exponentials with point precision', () => {
        clickNumber(1);
        clickNumber(0);
        clickNumber(8);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);

        clickOperator('multiply');

        clickNumber(1);
        clickNumber(0);
        clickNumber(0);

        clickEquals();

        shouldDisplayValue('1.08e+10');
    });
    it('Can go back and forth between exponential and normal form', () => {
        clickNumber(1);
        clickNumber(0);
        clickNumber(8);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);

        clickOperator('multiply');

        clickNumber(1);
        clickNumber(0);
        clickNumber(0);

        clickOperator('divide');

        clickNumber(1);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);

        clickEquals();

        shouldDisplayValue('10800000');
    });
    it('Can handle negative exponentials', () => {
        clickNumber(1);
        clickNumber(0);
        clickNumber(8);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);
        clickNumber(0);
        clickOperator('toggle-sign');

        clickOperator('multiply');

        clickNumber(1);
        clickNumber(0);
        clickNumber(0);

        clickEquals();

        shouldDisplayValue('-1.08e+10');
    });
    it('Can handle decimals', () => {
        clickNumber(1);
        clickNumber(0);

        clickOperator('divide');

        clickNumber(3);

        clickEquals();

        shouldDisplayValue('3.33');
    });
    it('Clears previous calculation', () => {
        clickNumber(5);
        clickNumber(0);
        cy.get('#percentage').click();

        clickOperator('multiply');
        clickNumber(1);
        clickNumber(0);

        clickEquals();

        shouldDisplayValue('5');

        cy.get('#clear').click();

        clickNumber(5);
        clickNumber(0);
        cy.get('#percentage').click();

        clickOperator('multiply');
        clickNumber(1);
        clickNumber(0);

        clickEquals();

        shouldDisplayValue('5');
    });
    it('Works when a operation is clicked multiple times', () => {
        clickNumber(9);

        clickOperator('multiply');
        clickOperator('multiply');
        clickOperator('multiply');
        clickOperator('multiply');

        clickNumber(9);

        clickEquals();

        shouldDisplayValue('81');
    });
    it('Uses first number as second number when no second number is given', () => {
        clickNumber(9);

        clickOperator('multiply');

        clickEquals();

        shouldDisplayValue('81');
    });
    it('Can toggle sign', () => {
        clickNumber(9);

        clickOperator('multiply');
        clickNumber(9);
        clickOperator('toggle-sign');
        clickEquals();

        shouldDisplayValue('-81');
    });
    it('Can work with negative results', () => {
        clickNumber(9);

        clickOperator('minus');
        clickNumber(9);
        clickNumber(9);

        clickEquals();

        shouldDisplayValue('-90');
    });
    it('Uses last operator selected', () => {
        clickNumber(9);

        clickOperator('multiply');
        clickOperator('minus');
        clickNumber(5);

        clickEquals();

        shouldDisplayValue('4');
    });
    it('Dynamically updates display when stringing operations without clicking equals', () => {
        clickNumber(3);
        clickOperator('add');

        clickNumber(3);
        clickOperator('add');

        clickNumber(3);
        clickOperator('add');

        clickNumber(3);
        clickOperator('add');

        shouldDisplayValue('12');
    });
});

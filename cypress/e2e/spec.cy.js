describe('BMI-Rechner', ()=> {
    it('should display the result of calculation', () => {
    const height = '180';
    const weight = '85';
    let bmi = Math.round(weight / ((height/100) * (height/100)))

    // write the weigth and height value
    cy.get('#weight').type(weight);
    cy.get('#height').type(height);
    // click the button
    cy.get('berechnung').click;

    cy.get('result').should('have.text', `Das Ergebnis: ${bmi}`);
    });
});
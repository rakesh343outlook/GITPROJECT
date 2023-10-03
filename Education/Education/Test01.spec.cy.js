describe('Automate CURA WebApp', () => {
  it('Launching CURA app', () => {
    //Launching webapp
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    // Click on make appointment button
    //id = btn-make-appointment
    cy.get('#btn-make-appointment').click();

    //Type John Doe as username
    //id = txt-username
    cy.get('#txt-username').type('John Doe');
    //Type ThisIsNotAPassword as password
    //id = txt-password
    cy.get('#txt-password').type('ThisIsNotAPassword');
    //Click on login button
    //id = btn-login
    cy.get('#btn-login').click();

    //Click on the checkbox
    //id = chk_hospotal_readmission
    cy.get('#chk_hospotal_readmission').click();

    //Click on health program as None
    //id = radio_program_none
    cy.get('#radio_program_none').click();
    //Select appointment date
    //id = txt_visit_date
    cy.get('#txt_visit_date').type('01/10/2023');
    //Write comment in comment box
    //id = txt_comment
    cy.get('#txt_comment').click({force:true});
    cy.get('#txt_comment').type('Medical examination');
    //Click to book appointment
    //id = btn-book-appointment
    cy.get('#btn-book-appointment').click();

    //Validations on appointment confirmation
    cy.get('h2').contains('Appointment Confirmation');
    cy.get('#comment').contains('Medical examination');
  })

})

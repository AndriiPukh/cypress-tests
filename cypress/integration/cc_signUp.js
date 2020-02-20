let patName = "0011patient";
let patEmail = "1sreampjc@laste.ml";
let patPassword = "112345@Abc";
let patClinicId = "xclinic";

describe('signUp', function () {
    it('signUpUser', function () {
        cy.visit('https://stage-anywhere.careclix.com/register');
        cy.get('[name="username"]').type(patName);
        cy.get('[name="email"]').type(patEmail);
        cy.get('[name="password"]').type(patPassword);
        cy.get('[name="confirmPassword"]').type(patPassword);
        cy.get('[name="clinicId"]').type(patClinicId);
        cy.get('[name="title"]').select('Mr');
        cy.get('[name="firstName"]').type(patName);
        cy.get('[name="lastName"]').type(patName);
        cy.get('[value="Male"]').click({force: true});
        cy.get('[name="dateOfBirth"]').type('10/10/10');
        cy.get("#countryCode").select(" 1");
        cy.get('[name="number"]').type("0987654321");
        cy.get('[name="country"]').select("United States");
        cy.get('[name="state"]').select("DC");
        cy.get('[name="zipCode"]').type("12345");
        cy.get('[name="street"]').type("avenue 9991");
        cy.get('[name="city"]').type("Washington");
        cy.get('[name="language"]').type("English").type('{enter}');
        cy.get('[name="terms"]').check({force: true});
        cy.get('.confirm-btn').click();

        //cy.get('[name="language"]').type("English").click();











    })
});
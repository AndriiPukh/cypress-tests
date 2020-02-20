let superadminName = "thesuperadmin";
let patientName = "patientJohn";
let password = "12345@Abc";
let patientEmail = "uelalwzqb@emlpro.com";

describe ("create patient", function () {
    it("create patient", function () {
        cy.visit('https://stage-anywhere.careclix.com/login');
        //log in as SA
        cy.get('.login-form').within(() => {
            cy.get('input[name ="username"]')
            }).type(superadminName);
        cy.get('.login-form').within(() => {
            cy.get('input[name ="password"]')
        }).type(password);
        cy.get('.btn').contains('LOG IN').should('have.class', 'btn').click();

        //moving to create patient page
        cy.get('ul.sidebar-nav').contains('Patient').click();
        cy.wait(15000);

        cy.get('.create-patient-form .form-group').within(() => {
            cy.get('input[name ="username"]').click({ multiple: true, force: true}).type(patientName);
        });
        cy.get('.create-patient-form .form-group').within(() => {
            cy.get('input[name ="email"]').click({ multiple: true, force: true}).type(patientEmail);
        });
        cy.get('.create-patient-form .form-group').within(() => {
            cy.get('input[name ="password"]').clear().click().type(password);
        });
        cy.get('.create-patient-form .form-group').within(() => {
            cy.get('input[name ="confirmPassword"]').clear().click().type(password);
        });
         cy.get('[name=clinicIds]').within ( () => {
             cy.get('.dropdown-toggle').within ( () => {
                 cy.get('.vs__selected-options').find('input[aria-label="Search for option"]').first().click().type('xclinic')
                 // cy.get('input[type="search"]').find('input').click({force: true, multiple: true}).type('xclinic').type('{enter}')
                 // });
             });
             cy.get('ul[role="listbox"]', { timeout: 15000 }).find('li').first().click()
         });
         cy.get('[name= "firstName"]').type(patientName);
         cy.get('[name= "lastName"]').type(patientName);
         cy.get('[name="dateOfBirth"]').first().click().type('10/10/1990');
         cy.get('[value="Male"]').click({force: true});
         cy.get("#countryCode").select(" 1");
         cy.get('[name="phoneNumber"]').type("0987654321");
         cy.get('[name="country"]').select("United States");
         cy.get('[name="state"]').select("DC");
         cy.get('[name="zipCode"]').type("12345");
         cy.get('[name="street"]').type("avenue 9991");
         cy.get('[name="city"]').type("Washington");
         cy.get('[name="language"]').type("English").type('{enter}');
         cy.get('.btn').contains('Create').click();


        // .click({multiple: true}).type('xclinic').type('{enter}');



        // cy.get('.form-group').within(() => {
        //     cy.get('input[name ="username"]').click({ multiple: true, force: true}).type(patientName);
        // })

        // cy.get('.form-group').within ( () => {
        //     cy.get('input.form-control[name ="username"]')
        // }).click({force:true}).type(patientName);



        // cy.get('.form-group').within ( () => {
        //     cy.get('input.form-control[name ="username"]').invoke('val').then((text) => {
        //       cy.log(text)
        //     })
        // });




    })
});
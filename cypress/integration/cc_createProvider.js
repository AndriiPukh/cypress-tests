let superadminName = "thesup";
let password = "12345@Abc";
let providerName = "KyleProvider";
let providerEmail = "qhfahttk@supere.ml";
let defaultValue = "1234567890";


describe("create provider", function () {
    it("create provider", function () {
        cy.visit('https://stage-anywhere.careclix.com/login');
        //log in as SA
        cy.get('.login-form').within(() => {
            cy.get('input[name ="username"]')
        }).type(superadminName);
        cy.get('.login-form').within(() => {
            cy.get('input[name ="password"]')
        }).type(password);
        cy.get('.btn').contains('LOG IN').should('have.class', 'btn').click();
        cy.wait(12000);

        //moving to create patient page
        cy.get('ul.sidebar-nav').contains('Provider').click();
        cy.wait(15000);

        //filling in a provider's data

        cy.get('.form-group').within(() => {
            cy.get('input[name ="username"]').first().click({ multiple: true, force: true}).type(providerName);
        });
        cy.get('.form-group').within(() => {
            cy.get('input[name ="email"]').first().click({ multiple: true, force: true}).type(providerEmail);
        });
        cy.get('[name= "title"]').select('Mr');
        cy.get('[name= "firstName"]').type(providerName);
        cy.get('[name= "lastName"]').type(providerName);
        cy.get('[name= "password"]').type(password);
        cy.get('[name= "confirmPassword"]').first().type(password);
        //clinic Id
        cy.get('[name=clinicIds]').within (() => {
            cy.get('.dropdown-toggle').within (() => {
                cy.get('.vs__selected-options').find('input[aria-label="Search for option"]').first().click().type('xclinic')
                // cy.get('input[type="search"]').find('input').click({force: true, multiple: true}).type('xclinic').type('{enter}')
                // });
            });
            cy.get('ul[role="listbox"]', { timeout: 15000 }).find('li').first().click()
        });

        cy.get('[name = "npi"]').type(defaultValue);
        cy.get('[name = "resourceId"]').type(defaultValue);
        cy.get('[name = "medicalSchool"]').type(defaultValue);
        cy.get('[name = "doctorResidency"]').type(defaultValue);
        cy.get('[name = "doctorFellowship"]').type(defaultValue);

        cy.get('.btn').contains("Add speciality").click();
        cy.wait(1500);
        cy.get('[name = "doctorSpeciality"]').first().click();
        // cy.get('datalist[id ="speciality-ids"]', { timeout: 2000 }).find('option').first().click({force: true} );
        cy.get('datalist[id ="speciality-ids"] > option:nth-child(1)', { timeout: 2000 }).click({ multiple: true  });
    
        

        // cy.xpath('//*[@id="app"]/div[1]/div/div/form/div[8]/div[2]/button').click();
        // cy.wait(2000);
    




        // cy.xpath('//*[@id="__BVID__873"]').click().contains('Cardiology');
        // cy.xpath('//*[@id="__BVID__524"]').first().click();
        // cy.xpath('//*[@id="__BVID__526"]').type('12434mjjfjfjfk');
        // cy.xpath('//*[@id="__BVID__527"]/div/div/div[1]/input').click().type().xpath('//*[@id="__BVID__527"]/div/div/div[2]/div/span[14]');

















    });

});
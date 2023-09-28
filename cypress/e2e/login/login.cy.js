/<reference types = "Cypress"/>


describe('Teste Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://magento2-demo.magebit.com/") 

        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type("roni_cost@example.com")
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("roni_cost3@example.com")

        cy.pause(); // pauso o teste e preencho o captcha manualmente

        // O capctha não permitiu a finalização do teste
       

       // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        //cy.get(':nth-child(2) > .greet > .logged-in').should('contain','Welcome, Veronica Costello!')
    });
});


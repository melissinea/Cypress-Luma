/<reference types = "Cypress"/>


describe('Teste Funcional de Cadastro', () => {
    it('Deve realizar o cadastro com sucesso', () => {
        cy.visit("https://magento2-demo.magebit.com/customer/account/create/") 
        cy.get('#firstname').type("Melissa")
        cy.get('#lastname').type("Lara")
        cy.get('#email_address').type("testemel@gmail.com")
        cy.get('#password').type("@Teste14042")
        cy.get('#password-confirmation').type("@Teste14042")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.base').should('contain','My Account')
    });
});


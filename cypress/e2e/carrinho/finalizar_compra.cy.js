/<reference types = "Cypress"/>
describe('Teste Funcional Finalizar Compra', () => {
    it('Finalizar compra', () => {
        cy.visit("https://magento2-demo.magebit.com/") 
        cy.get(':nth-child(1) > .product-item-info > .product-item-details').click()
        cy.get('#option-label-size-157-item-170').click()
        cy.get('#option-label-color-93-item-56').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success').should('contain','You added Radiant Tee to your shopping cart.')
      

//Checagem de produtos adicionados ao carrinho
cy.get('.counter-number').should('have.text','1')

// Visualizar o carrinho 

cy.get('.showcart').click()
cy.get(':nth-child(7) > .secondary > .action > span').click()

//Verificar nome do produto no carrinho

cy.get('.item > .product-item-details > .product-item-name > a').should('have.text','Radiant Tee')


//Verificar tamanho do produto no carrinho

cy.get('.item-options > :nth-child(2)').should('contain','XS')

//Verificar cor do produto no carrinho

cy.get('.item-options > :nth-child(4)').should('contain','Orange')




   // Ir para o checkout do carrinho

    
  cy.get('.checkout-methods-items > :nth-child(1) > .action').click()
  cy.get('.checkout-methods-items > :nth-child(1) > .action').click()
  


 cy.get('#customer-email-fieldset > .required > .control > #customer-email').type("teste@example.com")

 cy.get('input[name="firstname"]').type("Melissa");

 cy.get('input[name="lastname"]').type("Lara");
 cy.get('input[name="street[0]"]').type("Rua Olinda 233");
 cy.get('select[name="country_id"]').select('BR');
 cy.get('select[name="region_id"]').select('Bahia');
 cy.get('#checkoutSteps').click()
 cy.get('input[name="city"]').type('Porto Seguro');
 cy.get('input[name="postcode"]').type('30441114');
 cy.get('input[name="telephone"]').type('+5531982151672');
 cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
 cy.get('.button').click()



 // Tela de pagamento

 cy.get('#billing-address-same-as-shipping-checkmo').click()
 cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
 cy.get('.checkout-success > .actions-toolbar > div.primary > .action > span').should('contain','Continue Shopping')
});


    });





 
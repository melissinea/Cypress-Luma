/<reference types = "Cypress"/>


describe('Teste Funcional Adicionar produto ao carrinho', () => {
    it('Adicionar produto ao carrinho', () => {
        cy.visit("https://magento2-demo.magebit.com/") 
        cy.get(':nth-child(1) > .product-item-info > .product-item-details').click()
        cy.get('#option-label-size-157-item-170').click()
        cy.get('#option-label-color-93-item-56').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success > div').should('contain','You added Radiant Tee to your shopping cart.')


//Checagem de produtos adicionados ao carrinho
cy.get('.counter-number').should('have.text','1')
    });


    });

# Cypress-Luma

End-to-end tests written with [Cypress](https://www.cypress.io) for the **Luma** Magento 2 demo store ([magento2-demo.magebit.com](https://magento2-demo.magebit.com/)).

## Scenarios

| Spec | Flow | Checks |
|---|---|---|
| `cadastro/cadastro.cy.js` | Customer sign-up | Account is created and *My Account* is shown |
| `carrinho/adicionar_produto.cy.js` | Add product to cart | Size and color selection, success message, cart counter = 1 |
| `carrinho/finalizar_compra.cy.js` | Full checkout | Product name, size and color in the cart, shipping form, payment, order confirmation |
| `login/login.cy.js` | Login | Fills credentials; final step is paused because the store shows a CAPTCHA |

## Running

```bash
npm install
npx cypress open   # interactive
npx cypress run    # headless
```

## Notes

- The login test stops at `cy.pause()` because the demo store protects login with a CAPTCHA, which should not be bypassed in automation.
- This was an early study project (2023). My current Playwright work, with Page Objects, fixtures and CI, is in **[playwright-qa-portfolio](https://github.com/melissinea/playwright-qa-portfolio)**.

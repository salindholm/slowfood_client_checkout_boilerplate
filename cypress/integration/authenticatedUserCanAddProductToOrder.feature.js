describe('Adding a product to an order', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth',
      response: "fixture:successful_sign_up.json",
      headers: {
        uid: 'thomas@craft.com',
        access_token: 'whatever',
        client: '12345',
        token_type: "Bearer",
        expiry: 1699999
      }
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/products',
      response: 'fixture:product_data.json'
    })
    cy.visit('/')
    cy.get('[data-cy="register-cta"]').click()
      cy.get('[data-cy="email"]').type('thomas@craft.com')
      cy.get('[data-cy="password"]').type('password')
      cy.get('[data-cy="password-confirmation"]').type('password')
      cy.get('[data-cy="register"]').click()
  })
  it('', () => {
    cy.get('[data-cy="product-1"]').within(()=>{
      cy.get('button').click()
    })
  })
})
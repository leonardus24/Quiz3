Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('OrangeHRM - Login Feature', () => {

  it('TC01 - Login dengan username dan password valid', () => {
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]').should('be.visible').type('Admin');
    cy.get('input[name="password"]').should('be.visible').type('admin123');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.url().should('include', '/dashboard');

    cy.get('.oxd-userdropdown-tab').should('be.visible').click();
    cy.contains('Logout').should('be.visible').click();
    cy.url().should('include', '/auth/login');
  });

  it('TC02 - Login dengan username salah dan password benar', () => {
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]').should('be.visible').type('sanbercode');
    cy.get('input[name="password"]').should('be.visible').type('admin123');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.get('.oxd-alert-content-text').should('contain.text', 'Invalid credentials');
  });

  it('TC03 - Login dengan username benar dan password salah', () => {
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]').should('be.visible').type('Admin');
    cy.get('input[name="password"]').should('be.visible').type('afmin123');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.get('.oxd-alert-content-text').should('contain.text', 'Invalid credentials');
  });

  it('TC04 - Login tanpa mengisi username dan password', () => {
    cy.visit('/web/index.php/auth/login');

    cy.get('button[type="submit"]').should('be.visible').click();

    cy.get('.oxd-input-group__message').should('contain.text', 'Required');
  });

  it('TC05 - Login tanpa mengisi username', () => {
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="password"]').should('be.visible').type('admin123');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.get('.oxd-input-group__message').should('contain.text', 'Required');
  });

  it('TC06 - Login tanpa mengisi password', () => {
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]').should('be.visible').type('Admin');
    cy.get('button[type="submit"]').should('be.visible').click();

    cy.get('.oxd-input-group__message').should('contain.text', 'Required');
  });

});

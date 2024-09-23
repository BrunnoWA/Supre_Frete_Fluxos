Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorne false para evitar que o Cypress falhe o teste devido a um erro uncaught
    return false;
  });
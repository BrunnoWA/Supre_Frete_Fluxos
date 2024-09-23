/// <reference  types="Cypress"/>

beforeEach(() => {
    // Limpa todos os cookies
    cy.clearAllCookies();

    // Visita a página e espera 10 segundos
    cy.visit("https://web.superfrete.com/");
    cy.wait(10000);
  });

describe('Teste Fluxo Faltante ', () => {

    it('Deve gerar erro no calculo ', () => {
        //Alterando resolução de tela.
        cy.viewport(1366, 768);
        //Validando campo 'CEP'.
        cy.get('#originPostcode').type('05407-002');
        //Apagando 'CEP'.
        cy.get('.css-tuxzvu > :nth-child(3) > .MuiButtonBase-root').click();
        //Click na seleção de pacotes.
        cy.get('#object_format').click();
        //Mapeamento de variaveis.
        cy.get('[class*="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters"]')
         .should('be.visible') // Aguarde até que o menu esteja visível.
         //Seleciono o pacote .
         .contains('Envelope').click();
         //Seleção de peso.
        cy.get('#weight').click();
        cy.get('[class*="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-fqokft"]')
         .should('be.visible') // Aguarde até que o menu esteja visível.
         //Seleciono o peso.
         .contains('Até 300g').click();
         //Informar 'cm' de largura.
         cy.get('[data-cy="calculator-envelopeWidth"]').click().type('60');
         //informar 'cm' de comprimento.
         cy.get('[data-cy="calculator-envelopDepth"]').click().type('40');
         //Visualizar campo de "Seguros".
         cy.get('.MuiAccordionSummary-content > .MuiTypography-root').click();
         //Selecionar Flag .
         cy.get('[data-cy="calculator-selfHand"] > .PrivateSwitchBase-input').click();
         //Informar 'CEP' Destino .
         cy.get('#destinationPostcode').click().type('05407-455');
         //Calcular .
         cy.get('[data-cy="calculator-submit"]').click();
       
    });    
});


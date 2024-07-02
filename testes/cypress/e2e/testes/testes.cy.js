/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('testes E2E', () => {
    it('displays login button', () => {
        cy.visit('https://caminhos-do-frio.vercel.app')
        cy.contains('Login').should('have.length', 1)
    })
    it('testar login button e formularios', () => {
        cy.visit('https://caminhos-do-frio.vercel.app')
        cy.contains('Login').click()
        cy.url().should('include', '/login')
        cy.get('input[type="email"]').type('teste@gmail.com')
        cy.get('input[type="password"]').type('senha123')
        cy.get('select').select('Areia')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/admin')
    })
})

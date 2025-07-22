/// <reference types="cypress" />

describe('Todo App UI Tests', () => {
  it('Logs in with valid credentials', () => {
    cy.visit('http://localhost:5173');
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('password');
    cy.get('button').click();
    cy.contains('Todo List').should('exist');
  });
});
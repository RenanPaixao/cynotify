/// <reference types="cypress" />
export {}

declare global {
  namespace Cypress {
    interface Chainable {
      notify: () => Promise<any>;
    }
  }
}

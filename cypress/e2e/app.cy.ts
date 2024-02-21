/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

import dayjs from "dayjs";

const currentDay = dayjs().day();

// Cypress E2E Test
describe("Navigation", () => {
  it("should navigate to the home page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Time Before Christmas");
  });

  it("Test theme switch", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-cy-switchtheme="true"]').click();
    cy.getAllLocalStorage().should((storageMap) => {
      expect(storageMap).to.deep.equal({
        // other origins will also be present if localStorage is set on them
        "http://localhost:3000": {
          theme: "dark",
        },
      });
    });

    cy.get('[data-cy-switchtheme="true"]').click();
    cy.getAllLocalStorage().should((storageMap) => {
      expect(storageMap).to.deep.equal({
        // other origins will also be present if localStorage is set on them
        "http://localhost:3000": {
          theme: "light",
        },
      });
    });
  });

  it("Test navigate button and calender", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy-simplebutton="true"]').click();
    cy.get('[data-cy-calender="true"]');
    cy.get('[data-cy-calenderbutton="1"]').click();
    cy.get("img");
    cy.get('.visible > [data-cy-simplebutton="true"]').click();
  });

  it("Test more then one picture", () => {
    if (currentDay > 1) {
      cy.visit("http://localhost:3000/");
      cy.get('[data-cy-simplebutton="true"]').click();
      cy.get('[data-cy-calender="true"]');
      cy.get(`[data-cy-calenderbutton="${currentDay}"]`).click();
      cy.get("img");
      cy.get('.visible > [data-cy-simplebutton="true"]').click();
    }
  });

  it("Test not allow", () => {
    if (currentDay < 24) {
      cy.visit("http://localhost:3000/dev/24");
      cy.get('[data-cy-notnow="true"]').should(
        "have.text",
        "You are notready for this",
      );
      return;
    }
    cy.log(`Current day i month is ${currentDay} TEST NOT RUN`);
  });
});

// Prevent TypeScript from reading file as legacy script
export {};

// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18'
import '../../src/styles/globals.css'
import dayjs from 'dayjs';
import duration from "dayjs/plugin/duration";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import getConfig from "next/config";

dayjs.extend(duration);
dayjs.extend(duration);
dayjs.extend(isSameOrBefore);
dayjs.extend(weekOfYear);
dayjs.extend(utc)
dayjs.extend(timezone)

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(<MyComponent />)
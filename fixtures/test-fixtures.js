import { test as base } from 'playwright-bdd';
import { LoginPage } from '../Pages/LoginPage.js';
import { DashboardPage } from '../Pages/DashboardPage.js';


export const test = base.extend({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    dashboardPage: async ({ page }, use) => {

        const dashboardPage = new DashboardPage(page);

        await use(dashboardPage);

    },

});
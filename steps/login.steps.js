import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test-fixtures.js';
//import { LoginPage } from '../Pages/LoginPage.js';
import loginData from '../test-data/LoginData.json';


const { Given, When, Then } = createBdd(test);

Given('I am on the OrangeHRM login page', async ({ loginPage }) => {

    await loginPage.navigate('/');

    console.log('Given: Navigate to OrangeHRM login page');

});
When('I login with valid credentials', async ({ loginPage }) => {

    await loginPage.Login(
        loginData.validLogin.username,
        loginData.validLogin.password
    );

    console.log('When: Login with valid credentials');

});

Then('I should be redirected to the Dashboard page', async ({ dashboardPage }) => {

    const dashboardUrl = await dashboardPage.verifyDashboardUrl();

    if (!dashboardUrl) {
        throw new Error('Dashboard URL validation failed');
    }

    console.log('Then: Dashboard URL is validated');

});

Then('the Dashboard header should be displayed', async ({ dashboardPage }) => {

    const headerDisplayed = await dashboardPage.verifyHeaderDisplayed();

    if (!headerDisplayed) {
        throw new Error('Dashboard header is not displayed');
    }

    console.log('Then: Dashboard header is displayed');

});

Then('the Dashboard menu should be displayed', async ({ dashboardPage }) => {

    const menuDisplayed = await dashboardPage.verifyDashboardmenu();

    if (!menuDisplayed) {
        throw new Error('Dashboard menu is not displayed');
    }

    console.log('Then: Dashboard menu is displayed');

});
import{test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import loginData from '../test-data/loginData.json';

test("Verify valid Login", async ({page}) => {


const loginPage = new LoginPage(page);

//navigate to the login page
await loginPage.navigate("/");

//Url validation
expect(await loginPage.getURL()).toContain('auth/login');
console.log("login url validated");

//Titile validation

//expect(await loginPage.getTitle()).toBe('Google');
expect(await loginPage.getTitle()).toBe('OrangeHRM');
console.log("login page title valuidated");


//verify  loginpage logo 

expect(await loginPage.verifyLogoDisplayed()).toBeTruthy();
console.log("Login page logo is displayed.");

//verify loginpage footer 


expect(await loginPage.verifyFooterDisplayed()).toBeTruthy();
console.log("Login page and dashboard page footer is displayed.");


// perform login with valid crendentials

const dashboardpage = await loginPage.Login(loginData.validLogin.username,
    loginData.validLogin.password
) ;


//verify dashboard page 

    expect(await dashboardpage.verifyDashboardUrl()).toBeTruthy();


console.log("dashboardurl is validated");


expect(await dashboardpage.verifyHeaderDisplayed()).toBeTruthy();

console.log(" Dashboard header is displayed.");

    expect(await dashboardpage.verifyDashboardmenu()).toBeTruthy();
console.log(" Dashboard sidemenu is displayed.");

}




);
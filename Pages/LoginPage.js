import { BasePage } from "./BasePage";
import {DashboardPage} from "./DashboardPage";
export class LoginPage extends BasePage
{

constructor(page){
super(page);

this.usernameTextbox= page.getByPlaceholder('Username');
this.passwordTextbox = page.getByPlaceholder('Password');
this.loginbutton = page.getByRole('button', {name : 'Login'});  
this.applicationLogo = page.locator('.orangehrm-login-branding');


}
async Login(username,password)
{

await this.fill(this.usernameTextbox, username);
await this.fill(this.passwordTextbox, password);
await this.click(this.loginbutton);

await this.page.waitForURL(/dashboard/);


return new DashboardPage(this.page);
}

async verifyLogoDisplayed()
{

    return await this.isElementDisplayed(this.applicationLogo);

}




}
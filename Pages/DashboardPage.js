import{BasePage} from "./BasePage";
export class DashboardPage extends BasePage{

constructor(page)
{

super(page);

this.dashboardmenu= page.getByRole('link', {name : 'Dashboard'});
this.header =   page.locator("header");

}


async verifyDashboardUrl(){

    const currentUrl = await this.getURL();

    console.log("Current Dashboard URL:", currentUrl);

    return currentUrl.includes('dashboard');

}


async verifyDashboardmenu(){

await this.dashboardmenu.waitFor();
return await this.dashboardmenu.isVisible();

}

async verifyHeaderDisplayed()
{
    return await this.isElementDisplayed(this.header);
}


}
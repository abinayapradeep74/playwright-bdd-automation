import{BasePage} from "./BasePage";
import logger from '../utils/logger.cjs';
export class DashboardPage extends BasePage{

constructor(page)
{

super(page);

this.dashboardmenu= page.getByRole('link', {name : 'Dashboard'});
this.header =   page.locator("header");

}


async verifyDashboardUrl(){

    const currentUrl = await this.getURL();

    logger.info(`Current Dashboard URL: ${currentUrl}`);

    return currentUrl.includes('/dashboard/index');

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
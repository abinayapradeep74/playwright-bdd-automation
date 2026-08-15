

export class BasePage
{


    constructor(page)

{

    this.page =page;



            this.footer = page.locator('.orangehrm-copyright-wrapper');

}

async navigate(url)
{
    await this.page.goto(url);
}

async click(locator)
{
    await locator.click();
}
async fill(locator,value)   
{

    await locator.fill(value);
}

async getTitle()
{
    return await this.page.title();
}
 async getURL()
    {
        return await this.page.url();
    }

async isElementDisplayed(locator)
{
await locator.waitFor();
return await locator.isVisible();

}

    async verifyFooterDisplayed(){

        return await this.isElementDisplayed(this.footer);

    }


}
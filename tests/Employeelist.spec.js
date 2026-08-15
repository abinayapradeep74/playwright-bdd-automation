import { test, expect } from '@playwright/test';
test(' employee list', async ({page}) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//login scenario
const loginuser ={username : "Admin",
    password : "admin123"
};

await page.getByPlaceholder('Username').fill(loginuser.username);
await page.getByPlaceholder('Password').fill(loginuser.password);

await page.getByRole('button', {name : ' Login '}).click();

//click pim menu
await page.getByRole('link', {name: 'PIM'}).click();

//validation
//Employee information heading is visible
await expect(page.getByRole('heading', {name : 'Employee Information'})).toBeVisible();
console.log("user can able to view the Employee information heading");

//  Reset button is visible 

await expect(page.getByRole('button', {name : 'Reset'})).toBeVisible();
console.log("User can able to view the Reset button");

// search button is visible 

await expect(page.getByRole('button', {name : 'Search'})).toBeVisible();
console.log("Usercan able to view search button");

//  Add link is visible 

await expect(page.getByRole('button', {name: 'Add'})).toBeVisible();
console.log("Usercan able to view add link");

//search employee

await page.getByPlaceholder('Type for hints...').first().fill('Joy Smith');
await page.getByRole('button', {name : 'Search'}).click();

const recordText = await page
    .locator('.oxd-text.oxd-text--span')
    .filter({ hasText: 'Records Found' })
    .textContent();

const count = Number(recordText?.match(/\d+/)?.[0]);

if (count > 0) {
    console.log(`${count} record(s) found for Joy`);
} else {
    console.log("No records found for Joy");
}




}
);
import { test, expect } from '@playwright/test';
test('Add employee', async ({page}) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//login scenario
const loginuser ={username : "Admin",
    password : "admin123"
};

await page.getByPlaceholder('Username').fill(loginuser.username);
await page.getByPlaceholder('Password').fill(loginuser.password);

await page.getByRole('button', {name : ' Login '}).click();

//validation
await expect(page).toHaveURL(/dashboard/);
console.log("URL validation passed");

await expect(page).toHaveTitle('OrangeHRM');
console.log("Login validation passed")

await expect(page.getByRole('link', {name: 'Dashboard'})).toBeVisible();
console.log("User profile is visible");



//Add employee

await page.getByRole('link', {name: 'PIM'}).click();
await page.getByRole('button', {name: ' Add '}).click();

//Usimg template literals for handling dynamic test data

const employeedetails = {
FirstName : `Abi${Date.now()}`,
LastName : "Pardeep",
EmployeeId : `${Date.now()}`


};

async function addEmployee() {

    await page.getByPlaceholder('First Name').fill(employeedetails.FirstName);
    await page.getByPlaceholder('Last Name').fill(employeedetails.LastName);
await page.getByRole('button', {name : 'Save'}).click();

    
}

await  addEmployee() 

//validation 
await expect(page).toHaveURL(/viewPersonalDetails/);
console.log("Employee created sucessfully");


}


);
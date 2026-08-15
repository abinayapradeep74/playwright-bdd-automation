import { test, expect } from '@playwright/test';

test('Verify GET users API', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2');

    console.log('Status Code:', response.status());

const responseBody = await response.json();

console.log(responseBody);
    expect(response.status()).toBe(200);

});
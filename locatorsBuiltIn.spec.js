const {test, expect} = require('@playwright/test');

test('built in locators',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   

                             // Using built-in locator to find the username input field and type in it


    // page.getByAltText            to locate an element, usually image also to find the logo and check if it's visible
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();


    // page.getByPlaceholder        to locate an input field by its placeholder text and type in it
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');


    // page.getByRole               to locate a button by its role and name and click on it
    await page.getByRole('button', {name: 'Login'}).click();
 

    const textElement = await page.getByText('firstNameTest lastNameTest');
    await expect(textElement).toBeVisible();

 });
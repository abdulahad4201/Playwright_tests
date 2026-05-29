const {test , expect}= require ("@playwright/test");

test('Assertions', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');


    //1. Assert URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/');

    //2. Assert Title
    await expect(page).toHaveTitle(' nopCommerce demo store. Home page title');

    //3. Assert Element Visible
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();

    //4. Assert Radio/Checkbox is checked

    // Radio Button
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    const male_gen= page.locator('#gender-male');
    await male_gen.click();
    await expect(male_gen).toBeChecked();

    // Checkbox
    const newslatter = page.locator('#NewsLetterSubscriptions_0__IsActive');
    await expect(newslatter).toBeChecked();


    //5. Assert Element has Attribute
    const register=page.locator("#register-button");
    await expect(register).toHaveAttribute('type','submit');


    //6. Assert Element has Text
    const register_header= page.locator('.page-title');
    await expect(register_header).toHaveText('Register');


    //7. Assert Element contains Text
    const first_name= page.locator('.page-title');
    await expect(first_name).toContainText('Reg');


    //8. Assert Element has Value
    const email=page.locator('#Email');
    await email.fill('ahad@test.com')
    await expect(email).toHaveValue('ahad@test.com');


    //9. Assert Count of Elements
    const count=page.locator('.menu div');
    await expect(count).toHaveCount(22);
    
})
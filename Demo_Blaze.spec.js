const {test, expect}= require('@playwright/test');

test('complete flow', async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    const title =  await page.locator("id=nava");
    await expect(title).toBeVisible();

    await page.locator('text="Samsung galaxy s6"').click();

    const product=await page.locator('.name')
    await expect(product)
    .toHaveText('Samsung galaxy s6');

    // Handle alert popup
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator('.btn.btn-success.btn-lg').click();

    await page.locator('#cartur').click();


    const check=await page.locator('//td').nth(1);
    await expect(check).toHaveText('Samsung galaxy s6');

    await page.locator('text="Place Order"').click();

    const visi = await page.locator('text="Place Order"')
    await expect(visi).toBeVisible();


    await expect(page.locator('text="Total: 360"')).toHaveText('Total: 360');

    await expect(page.locator('#name')).toBeVisible();

    await page.locator('#name').fill('Abdul Ahad');
    await page.locator('#country').fill('Pakistan');
    await page.locator('#city').fill('Karachi');
    await page.locator('#card').fill('123456789');
    await page.locator('#month').fill('05');
    await page.locator('#year').fill('2026');

    await page.locator('text="Purchase"').click();



    const che= await page.locator('text="Thank you for your purchase!"');
    await expect(che).toBeVisible();

    await page.locator('text="OK"').click();


    const check2=await page.locator('.navbar-brand');
    await expect(check2).toHaveText('PRODUCT STORE');

})
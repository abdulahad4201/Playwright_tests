import {test,expect} from '@playwright/test';
import {LoginPage}   from '../POM_Pages/LoginPage';
import {HomePage}    from '../POM_Pages/HomePage';
import {CartPage}    from '../POM_Pages/CartPage';

test('Demo test', async({page})=>{


    //login
    const loginpage = new LoginPage(page);
    await loginpage.gotoPage();
    await loginpage.login('ahadi','1234');  
    await page.waitForTimeout(3000);

    //add product to cart
    const homepage = new HomePage(page);
    await homepage.addproduct('Samsung galaxy s6');
    await page.waitForTimeout(3000);
    await homepage.gotocart();


    //check product in cart
    const cartpage = new CartPage(page);
    await page.waitForTimeout(3000);
    const result = await cartpage.checkproduct('Samsung galaxy s6');
    expect(await result).toBe(true);


})
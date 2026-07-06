exports.HomePage = 
class HomePage{
    constructor(page)
    {
        this.page=page;
        this.list='//div[@id="tbodyid"]/div/div/div/h4/a'
        this.addtocartbtn='//a[contains(text(),"Add to cart")]';
        this.cartlink='#cartur';
    }

    async addproduct(productname)
    {
        const products = await this.page.$$(this.list);
        for(const product of products){
            if(productname===await product.textContent()){
                await product.click();
                break;
            }
        }

        await this.page.on('dialog', dialog => dialog.accept());

        await this.page.locator(this.addtocartbtn).click();
    }

    async gotocart()
    {
        await this.page.locator(this.cartlink).click();
    }
}

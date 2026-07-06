exports.CartPage =
class CartPage 
{
    constructor(page) 
    {
        this.page=page;
        this.noofproducts='//tbody[@id="tbodyid"]/tr/td[2]';
    }


    async checkproduct(productname)
    {
        const products = await this.page.$$(this.noofproducts);
        for(const product of products)
        {
          console.log(await product.textContent());
            if(productname===await product.textContent())
            {
                return true;
                break;
            }
        }
        return false;
    }

}

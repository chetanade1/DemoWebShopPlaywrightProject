import { expect } from "allure-playwright"; 
exports.ShoppingCart = class ShoppingCart
{
    constructor(page)
    {
        this.page = page;
        this.shoppingCart = "//span[contains(text(),'Shopping cart')]";
        this.pageTitle = ".page-title";

    }

    async clickOnShoppingCartButtonLink()
    {
        const shoppingCart = await this.page.locator(this.shoppingCart);
        await shoppingCart.click();
        console.log("shopping cart lick Clicked");

    }

    async getPageHeadingOfShoppingCart()
    {
        const pageHeading = await this.page.locator(this.pageTitle);
        const heading = await pageHeading.textContent();
        console.log("Page heading is :", heading);

    }
}
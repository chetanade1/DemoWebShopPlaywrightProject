import { expect } from "allure-playwright"; 
exports.ShoppingCart = class ShoppingCart
{
    constructor(page)
    {
        this.page = page;
        this.shoppingCart = "//span[contains(text(),'Shopping cart')]";
        this.pageTitle = ".page-title";
        this.cartTable = page.locator("table.cart");
        this.cartRows = page.locator("table.cart tbody tr");
        this.removeItem = "//input[@name='removefromcart']";
        this.updateCart = "//input[@name='updatecart']";
        this.cartMessage = ".order-summary-content";

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
        //const head = heading.map(item => item.trim());
        //console.log("Heading is:", head);
        console.log("Page heading is :", await heading.trim());

    }

    async printCartItems() 
    {
        const rowCount = await this.cartRows.count();
        console.log(`Total items in cart: ${rowCount}`);

        for (let i = 0; i < rowCount; i++) {
            const row = this.cartRows.nth(i);

            const productName = await row.locator("td.product a.product-name").textContent();
            const unitPrice = await row.locator("td.unit-price").textContent();
            const quantity = await row.locator("input.qty-input").inputValue();
            const total = await row.locator("td.subtotal").textContent();

            console.log(`\nItem ${i + 1}`);
            console.log("Product Name:", productName.trim());
            console.log("Unit Price:", unitPrice.trim());
            console.log("Quantity:", quantity);
            console.log("Total:", total.trim());
        }
    }

    async removeTheItemFromCart()
    {
        const removeItem = await this.page.locator(this.removeItem);
        await removeItem.check();
        console.log("remove checkbox clicked")

    }

    async clickOnUpdateShoppingCart()
    {
        const updateCart = await this.page.locator(this.updateCart);
        await updateCart.click();
        console.log("update shopping cart button clicked");

        const cartMsg = await this.page.locator(this.cartMessage);
        console.log("the message is :", await cartMsg.textContent());
        const text = await cartMsg.textContent();
        console.log("text is :", text.trim());

    }
}
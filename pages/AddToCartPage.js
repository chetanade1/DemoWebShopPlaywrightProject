import {expect} from '@playwright/test'
exports.AddToCartPage = class AddToCartPage{

    constructor(page)
    {
        this.page = page;
        this.headerMenu = "//div[@class='header-menu']/ul/li/a";
        this.camera = "//h2/a[contains(text(),'Camera')]";
        this.cell = "//h2/a[contains(text(),'cell')]";
        this.heading = "//h1";
        this.elctronicsList = "//h2[@class='title']";
        this.pageHeading = "//div[@class='page-title']/h1";
        this.totalCameraAssests = "//div[@class='product-grid']/div";
        this.totalApprail = "//h2[@class='product-title']/a";
        this.over = "//div[@class='overview']";
        this.productName = "//div[@class='product-name']/h1[contains(text(),'Polka')]";
        this.stock = "//div/span[@class='value']";
        this.size = "#product_attribute_5_7_1";
        this.productPrice = ".product-price";
        this.prodQuantity = "#addtocart_5_EnteredQuantity";
        this.addToWishList = "#add-to-wishlist-button-5";
        this.addToFriend = "//input[@value='Email a friend']";
        this.addToCompare = "//input[@value='Add to compare list']";
        this.addToCart = "#add-to-cart-button-5";
        this.contentMsg = "//p[contains(text(),'The product has been added to your ')]";



    }

    async selectTheHeaderMenu(HeaderName)
    {
        const HeaderMenuList = await this.page.$$(this.headerMenu);
        //const menuList = await HeaderMenuList.count();
        //console.log(menuList);

        for (const menu of HeaderMenuList)
        {
            //console.log(await menu.textContent());
            //console.log("Total item list : ", await menu.count());
           
            const value = await menu.textContent();
            console.log(value);

            if(value.includes(HeaderName))
            {
                await Promise.all([
                    this.page.waitForNavigation(), // ✅ waits for navigation safely
                    menu.click()
                ]);
                console.log("item selected");
                break; // stop after clicking
            }
                

        }

    }

    async getPageTitle()
    {
        const title = await this.page.title();
        console.log("the page title is :", title);
    }

    async selectTheElectronicsList()
    {
        const EleList = await this.page.locator("//h2[@class='title']");
        const count = await EleList.count();
        console.log("Number of electronics items:", count);
 
    }

    async clickOnCameraItem()
    {
        const camera = await this.page.locator(this.camera);
        await camera.click();
        console.log("camera item selected");
    }

    async getPageTitleHeading()
    {
        const pageHeading = await this.page.locator(this.pageHeading);
        console.log(await pageHeading.textContent());
        const text = await pageHeading.textContent();
        
        if (text) {
            console.log(text.trim());
        } else {
            console.log("Element not found or textContent is null");
        }

    }

    async selectTheCamerasProduct()
    {
        const cam = await this.page.locator(this.totalCameraAssests);
        const camAsset = await this.page.$$(this.totalCameraAssests);
        console.log(await cam.count());
        const camList = await cam.allTextContents();
        console.log(camList);

        for (const text of camList) {
            console.log(text.trim());
        }

        for(const option of camAsset)
        {
            const value = await option.textContent();
            console.log(value);
        

        if(value.includes("Camcorder"))
            {
            
                await option.click();
                console.log("camcorder clicked")
                break;
            
            
            }
        }
    }

    async selectTheApparelAndShoesProduct()
    {
        const totalProduct = await this.page.locator(this.totalApprail);
        console.log(await totalProduct.count());
        const prod =await totalProduct.allTextContents();
        console.log(prod);
    }

    async clickOnPolkaDotTopProduct()
    {

        const totalProduct1 = await this.page.$$(this.totalApprail);

        for(const option of totalProduct1)
        {
            const value = await option.textContent();
            console.log(value);

            if(value.includes("Polka"))
            {
                await option.click();
                console.log("options clicked");
                break;
            }
        }
    }

    async getAllTheOverview()
    {
        const overText = await this.page.locator(this.over);
        console.log(await overText.allTextContents());
        //console.log(await overText.textContent().trim());
    }

    async getProductDetailsOverview()
    {
        //Product Name
        const productName = await this.page.locator(this.productName);
        const prodName = await productName.textContent();
        console.log("Product name is :" ,await productName.textContent());
        console.log("Product name is :", await prodName.trim());

        // Check availability
        const avail = await this.page.locator(this.stock);
        console.log("The availability is :", await avail.textContent());

        //Select the Size
        const size = await this.page.locator(this.size);
        await size.selectOption({value: "4"})
        console.log("Size selected");

        // Get the Product size
        
        /*

        const priceElement = this.page.locator(this.price);
        const priceText = await priceElement.textContent();

        if (priceText) {
            const numericPrice = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            console.log("Product price is:", numericPrice);
            return numericPrice;
        } else {
            throw new Error('Price text not found on the page');
        }

        */

        //Enter the Quantity of product
        const productQuantity = await this.page.locator(this.prodQuantity);
        await productQuantity.fill("4");
        console.log("Quantity entered" );

        //check whether add to wish cart visible or not
        const addtowish = await this.page.locator(this.addToWishList);
        await expect(addtowish).toBeVisible();
        console.log("Add to wish cart button displayed");

        //Check whether add to friend button visibled or not
        const addToFriend = await this.page.locator(this.addToFriend);
        await expect(addToFriend).toBeVisible();
        console.log("Add to Friend button displayed");

        //Check whether add to compare button visible or not
        const addToCompare = await this.page.locator(this.addToCompare);
        await expect(addToCompare).toBeVisible();
        console.log("Add to compared button displayed");

        //chech whether add to cart button visibled or not and click
        const addToCartButton = await this.page.locator(this.addToCart);
        await expect(addToCartButton).toBeVisible();
        console.log("Add to Console button Visibled");
        await addToCartButton.click();
        console.log("Add to Cart Button Clicked");

        //Verify Successfull msg
        const successMsg = await this.page.locator(this.contentMsg);
        const ContMsg = await successMsg.textContent();
        console.log("The Content Msg is :", ContMsg.trim())



    }
}
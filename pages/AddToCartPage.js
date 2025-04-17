exports.AddToCartPage = class AddToCartPage{

    constructor(page)
    {
        this.page = page;
        this.headerMenu = "//div[@class='header-menu']/ul/li/a";

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
}
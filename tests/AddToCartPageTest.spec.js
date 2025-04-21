import { test } from '@playwright/test'
import { AddToCartPage } from '../pages/AddToCartPage'
import { LoginPage } from '../pages/LoginPage'
import { UIcomponents } from '../pages/UIcomponents'
import { ShoppingCart } from '../pages/ShoppingCart'

test("Add to Cart", async ({page}) => {

    const login = new LoginPage(page);
    const ui = new UIcomponents(page);
    const add = new AddToCartPage(page);
    const shop = new ShoppingCart(page);

    await ui.gotoTheBrowserPage();
    await ui.clickOnLoginButton();

    await login.login("mrchetanade@gmail.com", "test@123");
    await page.waitForTimeout(5000);
    await add.selectTheHeaderMenu("Apparel & Shoes");
    await page.waitForTimeout(5000);
    await add.getPageTitle();
    //await add.selectTheElectronicsList();
    //await add.clickOnCameraItem();
    await add.selectTheApparelAndShoesProduct();
    await add.getPageTitleHeading();
    await add.clickOnPolkaDotTopProduct();
    //await add.selectTheCamerasProduct();
    await page.waitForTimeout(5000);
    await add.getAllTheOverview();
    await add.getProductDetailsOverview();

    //shoping cart
    await shop.clickOnShoppingCartButtonLink();
    
    await shop.getPageHeadingOfShoppingCart();





})
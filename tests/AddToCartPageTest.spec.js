import { test } from '@playwright/test'
import { AddToCartPage } from '../pages/AddToCartPage'
import { LoginPage } from '../pages/LoginPage'
import { UIcomponents } from '../pages/UIcomponents'

test("Add to Cart", async ({page}) => {

    const login = new LoginPage(page);
    const ui = new UIcomponents(page);
    const add = new AddToCartPage(page);

    await ui.gotoTheBrowserPage();
    await ui.clickOnLoginButton();

    await login.login("mrchetanade@gmail.com", "test@123");
    await page.waitForTimeout(5000);


})
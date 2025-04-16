import { test } from '@playwright/test'
import { UIcomponents } from '../pages/UIcomponents'
import { LoginPage } from '../pages/LoginPage'

test("Valid Login The page", async ({page}) => {
    
    const ui = new UIcomponents(page);
    const login = new LoginPage(page);

    await ui.gotoTheBrowserPage();
    await page.waitForTimeout(3000);
    await ui.clickOnLoginButton();
    await login.getLoginPageTitle();
    await login.getLoginPageUrl();
    await login.getLoginPageHeaderText();
    await login.enterTheEmailId("mrchetanade@gmail.com");
    await login.enterThePassword("test@123");
    await login.clickOnRememberMeCheckbox();
    await login.clickOnLoginButton();
    await page.waitForTimeout(5000);

})

test("Invalid Login The page", async ({page}) => {

    const ui = new UIcomponents(page);
    const login = new LoginPage(page);

    await ui.gotoTheBrowserPage();
    await page.waitForTimeout(3000);
    await ui.clickOnLoginButton();
    await login.getLoginPageTitle();
    await login.getLoginPageUrl();
    await login.getLoginPageHeaderText();
    await login.enterTheEmailId("chetanade@gmail.com");
    await login.enterThePassword("test@1234");
    await login.clickOnRememberMeCheckbox();
    await login.clickOnLoginButton();
    await login.getErrorMessage();
    await login.getErrorMessageText();
    await page.waitForTimeout(5000);

})
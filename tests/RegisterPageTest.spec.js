import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { UIcomponents } from '../pages/UIcomponents';

test("Register Page Test", async ({page}) => {

    const reg = new RegisterPage(page);
    const ui = new UIcomponents(page);
    await ui.gotoTheBrowserPage();
    await page.waitForTimeout(5000);
    await reg.clickOnRegisterButton();
    await reg.clickOnGenderMaleButton();
    await reg.fillFirstName();
    await reg.fillLastName();
    await reg.fillEmail();
    //await reg.fillTelephone();
    await reg.fillPassword();
    await reg.fillConfirmPassword();
    await reg.clickOnRegisterButton();


})
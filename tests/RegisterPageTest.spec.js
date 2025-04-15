import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { UIcomponents } from '../pages/UIcomponents';

test("Valid Register Page Test", async ({page}) => {

    const reg = new RegisterPage(page);
    const ui = new UIcomponents(page);
    await ui.gotoTheBrowserPage();
    await page.waitForTimeout(5000);
    await reg.clickOnRegisterButton();
    await reg.clickOnGenderMaleButton();
    await reg.fillFirstName("John");
    await reg.fillLastName("Wright");
    await reg.fillEmail("mumbaiindians@ipl.com");
    //await reg.fillTelephone();
    await reg.fillPassword("test@123");
    await reg.fillConfirmPassword("test@123");
    await reg.clickOnRegButton();

})

test("Invalid Register Page Test", async ({page})=> {

    const reg = new RegisterPage(page);
    const ui = new UIcomponents(page);

    await ui.gotoTheBrowserPage();
    await page.waitForTimeout(5000);
    await reg.clickOnRegisterButton();
    await reg.clickOnGenderMaleButton();
    await reg.clickOnRegisterButton();
    await reg.getFirstNameErrorValidation();
    await reg.getLastNameErrorValidation();
    await reg.getEmailErrorValidation();
    await reg.getPasswordErrorValidation();
    await reg.getConfirmPasswordErrorValidation();

})
exports.RegisterPage = class RegisterPage 
{
    constructor(page) 
    {
        this.page = page;
        this.registerButton = "//a[contains(text(),'Register')]"
        this.malegen = "#gender-male";
        this.femalegen = "#gender-female";
        this.firstNameInput = "#FirstName"
        this.lastNameInput = "#LastName"
        this.emailInput = "#Email"
        this.telephoneInput = "#telephone"
        this.passwordInput = "#Password"
        this.confirmPasswordInput = "#ConfirmPassword"
        this.register = "#register-button"
        this.subscribeRadioButton = "//label[contains(text(),'Yes')"
        this.privacyPolicyCheckbox = "//label[contains(text(),'I have read and agree to the Privacy Policy')]"
        this.continueButton = "//input[@value='Continue']"
        this.successMessage = "//h1[contains(text(),'Your Account Has Been Created!')]"

    }

    async clickOnRegisterButton() 
    {
        await this.page.waitForSelector(this.registerButton, { state: 'visible' });
        await this.page.locator(this.registerButton).click();
        await this.page.waitForTimeout(2000);
        console.log("Register button clicked")
    }

    async clickOnGenderMaleButton()
    {
        await this.page.locator(this.malegen).click();
        await this.page.waitForTimeout(2000);
        console.log("gender clicked")
    }

    
    async fillFirstName() 
    {
        await this.page.locator(this.firstNameInput).fill("John");
        await this.page.waitForTimeout(2000);
        console.log("First name filled")
    }

    async fillLastName() 
    {
        await this.page.locator(this.lastNameInput).fill("wright");
        await this.page.waitForTimeout(2000);
        console.log("Last name filled")
    }

    async fillEmail() 
    {
        await this.page.locator(this.emailInput).fill("mumbaiindians@ipl.com");
        await this.page.waitForTimeout(2000);
        console.log("Email filled")
    }

    
    async fillTelephone() 
    {
        await this.page.locator(this.telephoneInput).fill("1234567890");
        await this.page.waitForTimeout(2000);
        console.log("Telephone filled")
    }

    async fillPassword() 
    {
        await this.page.locator(this.passwordInput).fill("Password123");
        //await this.page.waitForTimeout(2000);
        console.log("Password filled")
    }

    async fillConfirmPassword() 
    {
        await this.page.locator(this.confirmPasswordInput).fill("password123");
        await this.page.waitForTimeout(2000);
        console.log("Confirm Password filled")
    }

    async clickOnRegButton()
    {
        await this.page.locator(this.register).click();
        await this.page.waitForTimeout(2000);
        console.log("Register button clicked")
    }

}
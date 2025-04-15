exports.RegisterPage = class RegisterPage 
{
    constructor(page) 
    {
        this.page = page;
        this.registerButton = "//a[contains(text(),'Register')]"
        this.malegen = "#gender-male";
        this.femalegen = "#gender-female";
        this.firstNameInput = "#FirstName"
        this.firstNameError = "//span[@class='field-validation-error' and @data-valmsg-for='FirstName']";
        this.lastNameInput = "#LastName"
        this.lastNameError = "//span[@class='field-validation-error' and @data-valmsg-for='LastName']";
        this.emailInput = "#Email"
        this.emailError = "//span[@class='field-validation-error' and @data-valmsg-for='Email']";
        this.telephoneInput = "#telephone"
        this.passwordInput = "#Password"
        this.passwordError = "//span[@class='field-validation-error' and @data-valmsg-for='Password']";
        this.confirmPasswordInput = "#ConfirmPassword"
        this.confirmPasswordError = "//span[@class='field-validation-error' and @data-valmsg-for='ConfirmPassword']";
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

    
    async fillFirstName(FirstName) 
    {
        await this.page.locator(this.firstNameInput).fill(FirstName);
        await this.page.waitForTimeout(2000);
        console.log("First name filled")
    }

    async getFirstNameErrorValidation()
    {
        const errorMessage = await this.page.locator(this.firstNameError);
        //console.log("First name error messsage is: " , await errorMassage.textContent());
        console.log("First name error message is: " + errorMessage);
        return errorMessage;
    }

    async fillLastName(Lastname) 
    {
        await this.page.locator(this.lastNameInput).fill(Lastname);
        await this.page.waitForTimeout(2000);
        console.log("Last name filled")
    }

    async getLastNameErrorValidation()
    {
        const errorMessage = await this.page.locator(this.lastNameError);
        console.log("Last name error message is: " + errorMessage);
        return errorMessage;
    }


    async fillEmail(email) 
    {
        await this.page.locator(this.emailInput).fill(email);
        await this.page.waitForTimeout(2000);
        console.log("Email filled")
    }

    async getEmailErrorValidation()
    {
        const errorMessage = await this.page.locator(this.emailError);
        console.log("Email error message is: " + errorMessage);
        return errorMessage;
    }

    
    async fillTelephone() 
    {
        await this.page.locator(this.telephoneInput).fill("1234567890");
        await this.page.waitForTimeout(2000);
        console.log("Telephone filled")
    }

    async fillPassword(password) 
    {
        await this.page.locator(this.passwordInput).fill(password);
        //await this.page.waitForTimeout(2000);
        console.log("Password filled")
    }

    async getPasswordErrorValidation()
    {
        const errorMessage = await this.page.locator(this.passwordError);
        console.log("Password error message is: " + errorMessage);
        return errorMessage;
    }


    async fillConfirmPassword(confiPassword) 
    {
        await this.page.locator(this.confirmPasswordInput).fill(confiPassword);
        await this.page.waitForTimeout(2000);
        console.log("Confirm Password filled")
    }

    async getConfirmPasswordErrorValidation()
    {
        const errorMessage = await this.page.locator(this.confirmPasswordError);
        console.log("error message is : " , await errorMessage.textContent());
        console.log("Confirm Password error message is: " + errorMessage);
        return errorMessage;
    }

    async clickOnRegButton()
    {
        await this.page.locator(this.register).click();
        console.log("Register button clicked")
    }



}
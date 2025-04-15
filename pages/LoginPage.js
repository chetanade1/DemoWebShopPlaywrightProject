exports.LoginPage = class LoginPage 
{
    constructor(page)
    {
        this.page = page;
        this.emailInput = "#Email";
        this.passwordInput = "#Password";
        this.rememberMeCheckbox = "#RememberMe";
        this.loginButton = "//input[@value='Log in']";
        this.errorMessage = ".validation-summary-errors span "
        this.errorMessageText = "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found";

    }

    async enterTheEmailId(emailID)
    {
        //await this.page.waitForTimeout(2000);
        await this.page.waitForSelector(this.emailInput);
        console.log("Email ID locator is present in the DOM")
        const email = await this.page.locator(this.emailInput);
        await email.fill(emailID);
        console.log("Email ID filled");

    }

    async enterThePassword(password)
    {
        //await this.page.waitForTimeout(2000);
        await this.page.waitForSelector(this.passwordInput);
        console.log("Password locator is present in the DOM")
        const passwordField = await this.page.locator(this.passwordInput);
        await passwordField.fill(password);
        console.log("Password filled");
    }

    async clickOnRememberMeCheckbox()
    {
        await this.page.waitForSelector(this.rememberMeCheckbox);
        console.log("Remember Me locator is present in the DOM")
        const rememberMe = await this.page.locator(this.rememberMeCheckbox);
        await rememberMe.click();
        console.log("Remember Me checkbox clicked");
    }

    async clickOnLoginButton()
    {
        await this.page.waitForSelector(this.loginButton);
        console.log("Login button locator is present in the DOM")
        const loginButton = await this.page.locator(this.loginButton);
        await loginButton.click();
        console.log("Login button clicked");
    }

    async getLoginPageTitle()
    {
        const title = await this.page.title();
        console.log("Login page title is: " + title);
        return title;
    }

    async getLoginPageUrl()
    {
        const url = await this.page.url();
        console.log("Login page URL is: " + url);
        return url;
    }

    async getLoginPageHeaderText()
    {
        const headerText = await this.page.locator("//h1[contains(text(),'Welcome, Please Sign In!')]").innerText();
        console.log("Login page header text is: " + headerText);
        return headerText;
    }

    async getErrorMessage()
    {
        await this.page.waitForSelector(this.errorMessage);
        const errorMessage = await this.page.locator(this.errorMessage).innerText();
        console.log("Error message is: " + errorMessage);
        //console.log("Error message is :" , await errorMessage.allTextContents());
        //console.log("Error message is :" + this.errorMessageText);
        return errorMessage;
    }

    async getErrorMessageText()
    {
        const errorMessageText = await this.page.locator(this.errorMessage).innerText();
        console.log("Error message text is: " + errorMessageText);
        return errorMessageText;
    }

    async login(email,password)
    {
        await this.page.locator(this.emailInput).fill(email);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.rememberMeCheckbox).click();
        await this.page.locator(this.loginButton).click();
        console.log("Login Successfully")
    }









}
import { expect } from '@playwright/test';
exports.UIcomponents = class UIcomponents {
    
    constructor(page)
    {
        this.page = page;
        this.logo = "img[alt='Tricentis Demo Web Shop']"
        this.searchBox = "#small-searchterms";
        this.searchButton = "//input[@value='Search']";
        this.registerButton = "//a[text()='Register']";
        this.loginButton = "//a[text()='Log in']";
        this.cartButton = "//a[text()='Shopping cart']";
        this.wishlistButton = "//a[text()='Wishlist']";
        this.catagoryText = "//div[@class='title']/strong[text()='Categories']";
        this.catagoryList = "//div[@class='listbox']/ul/li/a";
        this.ManufacturersText = "//div[@class='title']/strong[text()='Manufacturers']";
        this.ManufacturersList = "//div[@class='block block-manufacturer-navigation']//div[@class='listbox']";
        this.HeaderManuFeatureList = "//div[@class='header-menu']/ul/li/a";
        this.NewsletterText = "//div[@class='title']/strong[text()='Newsletter']";
        this.newsletterLabelText = "//div/span[text()='Sign up for our newsletter:']";
        this.newslatterInputs = "#newsletter-email";
        this.newslatterButton = "#newsletter-subscribe-button";
        this.newslatterResult = "#newsletter-result-block";
        this.CommunityPollText = "//div[@class='title']/strong[text()='Community poll']";
        this.CommunityPollList = "//div[@id='poll-block-1']/ul/li/label";
        this.CommunityPollVoteButton = "//input[@id='vote-poll-1']";
        this.CommunityPollResult = "//div[@class='poll-answers']";
        this.CommunityPollResultText = "//div[@class='poll-answers']/div[@class='poll-answer']";
        this.WelcomeText = "//h2[contains(text(),'Welcome')]";
        this.FeaturedProductsText = "//div[@class='title']/strong[text()='Featured products']";
        this.FeaturedProductsList = "//div[@class='product-item']/div/h2/a";
        this.infoText = "//div[@class='column information']/h3";
        this.infoList = "//div[@class='column information']/ul/li/a";
        
    }

    async gotoTheBrowserPage()
    {
        await this.page.goto("https://demowebshop.tricentis.com/");
        console.log("Page Loaded");
        await this.page.waitForTimeout(3000);
    }

    async getLogo()
    {
        await this.page.waitForSelector(this.logo);
        const Logo = await this.page.locator(this.logo);
        await expect(Logo).toBeVisible();
        console.log("Logo is visible");
        const LogoText = await Logo.getAttribute("alt");
        console.log("Logo Text: ", LogoText);
        return LogoText;
    }

    async getSearchBox()
    {
        await this.page.waitForSelector(this.searchBox);
        const searchBox = await this.page.locator(this.searchBox);
        await expect(searchBox).toBeVisible();
        console.log("Search Box is visible");

    }

    async getSearchButton()
    {
        await this.page.waitForSelector(this.searchButton);
        const searchButton = await this.page.locator(this.searchButton);
        await expect(searchButton).toBeVisible();
        console.log("Search Button is visible");
    }
}
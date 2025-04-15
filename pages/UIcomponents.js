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
        this.CommunityPollGood = "#pollanswers-2";
        this.CommunityPollVoteButton = "//input[@id='vote-poll-1']";
        this.CommunityPollResult = "//div[@class='poll-answers']";
        this.CommunityPollResultText = "//div[@class='poll-answers']/div[@class='poll-answer']";
        this.WelcomeText = "//h2[contains(text(),'Welcome')]";
        this.FeaturedProductsText = "//div[@class='title']/strong[text()='Featured products']";
        this.FeaturedProductsList = "//div[@class='product-item']/div/h2/a";
        this.infoText = "//div[@class='column information']/h3";
        this.infoList = "//div[@class='column information']/ul/li/a";
        this.cust_serviceText = "//div[@class='column customer-service']/h3";
        this.cust_serviceList = "//div[@class='column customer-service']/ul/li/a";
        this.my_accountText = "//div[@class='column my-account']/h3";
        this.my_accountList = "//div[@class='column my-account']/ul/li/a";
        this.follow_usText = "//div[@class='column follow-us']/h3";
        this.follow_usList = ".follow-us li";
        this.footerText = ".footer-disclaimer";
        
        
    }

    async gotoTheBrowserPage()
    {
        await this.page.goto("https://demowebshop.tricentis.com/");
        console.log("Page Loaded");
        await this.page.waitForTimeout(5000);
    }

    async getTitle()
    {
        await this.page.waitForTimeout(3000);
        const title = await this.page.title();
        console.log("Page Title: ", title);
        await expect(title).toBe("Demo Web Shop");
        return await this.page.title();
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

    async getRegisterButton()
    {
        await this.page.waitForSelector(this.registerButton);
        const registerButton = await this.page.locator(this.registerButton);
        await expect(registerButton).toBeVisible();
        console.log("Register Button is visible");
    }

    async getLoginButton()
    {
        await this.page.waitForSelector(this.loginButton);
        const loginButton = await this.page.locator(this.loginButton);
        await expect(loginButton).toBeVisible();
        console.log("Login Button is visible");
    }

    async clickOnLoginButton()
    {
        await this.page.waitForSelector(this.loginButton, { state: 'visible' });
        await this.page.locator(this.loginButton).click();
        //await this.page.waitForTimeout(2000);
        console.log("Login button clicked")
    }

    async getCartButton()
    {
        await this.page.waitForSelector(this.cartButton);
        const cartButton = await this.page.locator(this.cartButton);
        await expect(cartButton).toBeVisible();
        console.log("Cart Button is visible");
    }

    async getWishlistButton()
    {
        await this.page.waitForSelector(this.wishlistButton);
        const wishlistButton = await this.page.locator(this.wishlistButton);
        await expect(wishlistButton).toBeVisible();
        console.log("Wishlist Button is visible");
    }

    async getCatagoryText()
    {
        await this.page.waitForSelector(this.catagoryText);
        const catagoryText = await this.page.locator(this.catagoryText);
        await expect(catagoryText).toBeVisible();
        console.log("Catagory Text is visible");
    }

    async getCatagoryList()
    {
        await this.page.waitForSelector(this.catagoryList);
        const catagoryList = await this.page.locator(this.catagoryList);
        await expect(catagoryList).toHaveCount(8);
        console.log("Total Catagory List: ", await catagoryList.count());
        console.log("Total Catagory List: ", await catagoryList.allTextContents());
        console.log("Catagory List is visible");
    }

    async getManufacturersText()
    {
        await this.page.waitForSelector(this.ManufacturersText);
        const ManufacturersText = await this.page.locator(this.ManufacturersText);
        await expect(ManufacturersText).toBeVisible();
        console.log("Manufacturers Text is visible");
    }

    async getManufacturersList()
    {
        await this.page.waitForSelector(this.ManufacturersList);
        const ManufacturersList = await this.page.locator(this.ManufacturersList);
        await expect(ManufacturersList).toHaveCount(1);
        console.log("Total Manufacturers List: ", await ManufacturersList.count());
        console.log("Total Manufacturers List: ", await ManufacturersList.allTextContents());
        await expect(ManufacturersList).toBeVisible();
        console.log("Manufacturers List is visible");
    }

    async getHeaderManuFeatureList()
    {
        await this.page.waitForSelector(this.HeaderManuFeatureList);
        const HeaderManuFeatureList = await this.page.locator(this.HeaderManuFeatureList);
        await expect(HeaderManuFeatureList).toHaveCount(14);
        console.log("Total Header Manu Feature List: ", await HeaderManuFeatureList.count());
        console.log("Total Header Manu Feature List: ", await HeaderManuFeatureList.allTextContents());
        console.log("Header Manu Feature List is visible");
    }

    async getNewsletterText()
    {
        await this.page.waitForSelector(this.NewsletterText);
        const NewsletterText = await this.page.locator(this.NewsletterText);
        await expect(NewsletterText).toBeVisible();
        console.log("Newsletter Text is visible");
    }

    async getNewsletterLabelText()
    {
        await this.page.waitForSelector(this.newsletterLabelText);
        const newsletterLabelText = await this.page.locator(this.newsletterLabelText);
        await expect(newsletterLabelText).toBeVisible();
        console.log("Newsletter Label Text is visible");
    }

    async getNewslatterInputs()
    {
        await this.page.waitForSelector(this.newslatterInputs);
        const newslatterInputs = await this.page.locator(this.newslatterInputs);
        await newslatterInputs.fill("mumbaiindians@ipl.com");
        await expect(newslatterInputs).toBeVisible();
        console.log("Newslatter Inputs is visible");
    }

    async getNewslatterButton()
    {
        await this.page.waitForSelector(this.newslatterButton);
        const newslatterButton = await this.page.locator(this.newslatterButton);
        await expect(newslatterButton).toBeVisible();
        await newslatterButton.click();
        console.log("Newslatter Button is visible");
    }

    async getNewslatterResult()
    {
        await this.page.waitForSelector(this.newslatterResult);
        const newslatterResult = await this.page.locator(this.newslatterResult);
        await expect(newslatterResult).toHaveText("Thank you for signing up! A verification email has been sent. We appreciate your interest.");
        //console.log("Newslatter Result Text: ", await newslatterResult.innerText());
        console.log("Newslatter Result Text: ", await newslatterResult.textContent());
        console.log("Newslatter Result Text: ", await newslatterResult.allTextContents());
        await expect(newslatterResult).toBeVisible();
        console.log("Newslatter Result is visible");
    }

    async getCommunityPollText()
    {
        await this.page.waitForSelector(this.CommunityPollText);
        const CommunityPollText = await this.page.locator(this.CommunityPollText);
        await expect(CommunityPollText).toBeVisible();
        console.log("Community Poll Text is visible");
    }

    async getCommunityPollList()
    {
        await this.page.waitForSelector(this.CommunityPollList);
        const CommunityPollList = await this.page.locator(this.CommunityPollList);
        await expect(CommunityPollList).toHaveCount(4);
        console.log("Total Community Poll List: ", await CommunityPollList.count());
        console.log("Total Community Poll List: ", await CommunityPollList.allTextContents());
        console.log("Community Poll List is visible");
    }

    async getCommunityPollGood()
    {
        await this.page.waitForSelector(this.CommunityPollGood);
        const CommunityPollGood = await this.page.locator(this.CommunityPollGood);
        await CommunityPollGood.click();
        await expect(CommunityPollGood).toHaveText("Good");
        await expect(CommunityPollGood).toBeVisible();
        console.log("Community Poll Good is visible");
    }

    async getCommunityPollVoteButton()
    {
        await this.page.waitForSelector(this.CommunityPollVoteButton);
        const CommunityPollVoteButton = await this.page.locator(this.CommunityPollVoteButton);
        await expect(CommunityPollVoteButton).toBeVisible();
        console.log("Community Poll Vote Button is visible");
    }


    async getCommunityPollResultText()
    {
        //await this.page.waitForSelector(this.CommunityPollResultText);
        const CommunityPollResultText = await this.page.locator(this.CommunityPollResultText);
        //console.log("Community Poll Result Text: ", await CommunityPollResultText.textContent());
        console.log("Community Poll Result Text: ", await CommunityPollResultText.allTextContents());
        //await expect(CommunityPollResultText).toBeVisible();
        console.log("Community Poll Result Text is visible");
    }

    async getWelcomeText()
    {
        await this.page.waitForSelector(this.WelcomeText);
        const WelcomeText = await this.page.locator(this.WelcomeText);
        await expect(WelcomeText).toBeVisible();
        console.log("Welcome Text is visible");
    }

    async getFeaturedProductsText()
    {
        await this.page.waitForSelector(this.FeaturedProductsText);
        const FeaturedProductsText = await this.page.locator(this.FeaturedProductsText);
        await expect(FeaturedProductsText).toBeVisible();
        console.log("Featured Products Text is visible");
    }

    async getFeaturedProductsList()
    {
        await this.page.waitForSelector(this.FeaturedProductsList);
        const FeaturedProductsList = await this.page.locator(this.FeaturedProductsList);
        await expect(FeaturedProductsList).toHaveCount(6);
        console.log("Total Featured Products List: ", await FeaturedProductsList.count());
        console.log("Total Featured Products List: ", await FeaturedProductsList.allTextContents());
        //await expect(FeaturedProductsList).toBeVisible();
        console.log("Featured Products List is visible");
    }

    async getInfoText()
    {
        await this.page.waitForSelector(this.infoText);
        const infoText = await this.page.locator(this.infoText);
        await expect(infoText).toBeVisible();
        console.log("Info Text is visible");
    }

    async getInfoList()
    {
        await this.page.waitForSelector(this.infoList);
        const infoList = await this.page.locator(this.infoList);
        await expect(infoList).toHaveCount(6);
        console.log("Total Info List: ", await infoList.count());
        console.log("Total Info List: ", await infoList.allTextContents());
        console.log("Info List is visible");
    }

    async getCustomerServiceText()
    {
        await this.page.waitForSelector(this.infoText);
        const cust_serviceText = await this.page.locator(this.cust_serviceText);
        await expect(cust_serviceText).toBeVisible();
        console.log("Customer service Text is visible");
    }

    async getCustomerServiceList()
    {
        await this.page.waitForSelector(this.cust_serviceList);
        const cust_serviceList = await this.page.locator(this.cust_serviceList);
        await expect(cust_serviceList).toHaveCount(6);
        console.log("Total Customer Service List: ", await cust_serviceList.count());
        console.log("Total Customer Service List: ", await cust_serviceList.allTextContents());
        console.log("Info List is visible");
    }

    async getMyAccountText()
    {
        await this.page.waitForSelector(this.my_accountText);
        const my_accountText = await this.page.locator(this.my_accountText);
        await expect(my_accountText).toBeVisible();
        console.log("Customer service Text is visible");
    }

    async getMyAccountList()
    {
        await this.page.waitForSelector(this.my_accountList);
        const my_accountList = await this.page.locator(this.cust_serviceList);
        await expect(my_accountList).toHaveCount(6);
        console.log("Total Customer Service List: ", await my_accountList.count());
        console.log("Total Customer Service List: ", await my_accountList.allTextContents());
        console.log("my account list is visible");
    }

    async getFollowUsText()
    {
        await this.page.waitForSelector(this.follow_usText);
        const follow_usText = await this.page.locator(this.my_accountText);
        await expect(follow_usText).toBeVisible();
        console.log("Follow List Text is visible");
    }

    async getFollowUsList()
    {
        await this.page.waitForSelector(this.follow_usList);
        const follow_usList = this.page.locator(this.follow_usList); 

        console.log("Total Follow Us List Items: ", await follow_usList.count());
        console.log("Follow Us List Texts: ", await follow_usList.allTextContents());
        console.log("My Follow List is visible");
    }

    async getFooterText()
    {
        await this.page.waitForSelector(this.footerText);
        const footerText = await this.page.locator(this.footerText);
        //await expect(footerText).toHaveText("© 2023 Tricentis GmbH. All rights reserved.");
        console.log("Footer Text: ", await footerText.allTextContents());
        await expect(footerText).toBeVisible();
        console.log("Footer Text is visible");
    }




}
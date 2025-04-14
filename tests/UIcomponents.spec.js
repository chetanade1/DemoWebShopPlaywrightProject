import {test} from '@playwright/test';
import { UIcomponents } from '../pages/UIcomponents';

test("UI components test", async({page}) => {

    const ui = new UIcomponents(page);
    await ui.gotoTheBrowserPage();
    await page.waitForTimeout(5000);
    await ui.getTitle();
    await ui.getLogo();
    await ui.getSearchBox();
    await ui.getSearchButton();
    await ui.getRegisterButton();
    await ui.getLoginButton();
    await ui.getCartButton();
    await ui.getWishlistButton();
    await ui.getCatagoryText();
    await ui.getCatagoryList();
    await ui.getManufacturersText();
    await ui.getManufacturersList();
    await ui.getHeaderManuFeatureList();
    await ui.getNewsletterText();
    await ui.getNewsletterLabelText();
    await ui.getNewslatterInputs();
    await ui.getNewslatterButton();
    await ui.getNewslatterResult();
    await ui.getCommunityPollText();
    await ui.getCommunityPollList();
    await ui.getCommunityPollVoteButton();
    await ui.getCommunityPollResultText();
    await ui.getWelcomeText();
    await ui.getFeaturedProductsText();
    await ui.getFeaturedProductsList();
    await ui.getInfoText();
    await ui.getInfoList();
    await ui.getCustomerServiceText();
    await ui.getCustomerServiceList();
    await ui.getMyAccountText();
    await ui.getMyAccountList();
    await ui.getFollowUsText();
    await ui.getFollowUsList();
    await ui.getFooterText();
    


})
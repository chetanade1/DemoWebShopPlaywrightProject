import {test , expect} from '@playwright/test';
import { UIcomponents } from '../pages/UIcomponents';

test("UI components test", async({page}) => {

    const ui = new UIcomponents(page);
    await ui.gotoTheBrowserPage();
    await page.waitForTimeout(5000);
    await ui.getLogo();
    await ui.getSearchBox();
    await ui.getSearchButton();
    
    





})
import homePage from '../../../pages/home.page'
import cardLanding from '../../../pages/carddesigner/cardLanding.page'
import cardDesignerPage from '../../../pages/carddesigner/cardDesigner.page';
import previewCardPage from '../../../pages/carddesigner/previewCard.page';

const env = require('../../../config/environment');
const users = require('../../../config/users');

describe('Card designer tests', async() => {
    before('Login and navigate to card designer', async() =>{
        //Login and Navigate to Card designer
        await homePage.navigateTo(env.cards_home);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await homePage.waitFor(5000);
        await homePage.clickTile('Card');  
        await homePage.waitFor(5000);
    });
    it('TestID=9, TestName=Create new Payment Card', async() => {

        //Click on Create content and select template
        await cardLanding.clickCreateContent('Payment Cards','Blank Payment')

        //Add elements to payment card
        await cardDesignerPage.addElement("Card Number");
        await cardDesignerPage.addElement("Password");

        //Save payment card
        await cardDesignerPage.clickButton("SAVE");
    });
    it('TestID=10, TestName=Duplicate Payment Card', async() => {

        //Navigate back to card designer page
        await cardDesignerPage.clickOnCardDesignerLink();

        //Duplicate payment card
        await cardLanding.searchCard("UntitledPayment");
        await cardLanding.selectCardAction("UntitledPayment","Duplicate");
        
        //Add elements to duplicated card and save
        await cardDesignerPage.addElement("Card Number");
        await cardDesignerPage.addElement("Password");

        //click preview to check the fields and save
        await cardDesignerPage.clickButton("PREVIEW");
        await previewCardPage.clickBack();
        await cardDesignerPage.clickButton("SAVE");
    });
    it('TestID=11, TestName=Edit Payment Card', async() => {

        //Navigate back to card designer page
        await cardDesignerPage.clickOnCardDesignerLink();

        //Duplicate payment card
        await cardLanding.searchCard("UntitledPayment");
        await cardLanding.selectCardAction("UntitledPayment","Edit");
        
        //Add elements to duplicated card and save
        await cardDesignerPage.addElement("Card Number");
        await cardDesignerPage.addElement("Password");

        //click preview to check the fields and save
        await cardDesignerPage.clickButton("PREVIEW");
        await previewCardPage.clickBack();
        await cardDesignerPage.clickButton("SAVE");
    });
});
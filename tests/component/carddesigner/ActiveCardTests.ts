import homePage from "../../../pages/home.page";
import cardLanding from '../../../pages/carddesigner/cardLanding.page';
import cardDesignerPage from "../../../pages/carddesigner/cardDesigner.page";
import previewCardPage from "../../../pages/carddesigner/previewCard.page";


const env = require('../../../config/environment');
const user = require('../../../config/users');


describe ('Active card designer tests',async()=> {
    before('Login and navigate to card designer', async()=>{
        await homePage.navigateTo(env.cards_home);
        await homePage.login(user.okta.username,user.okta.password,user.okta.securityAnswer);
        await homePage.waitFor(5000);
        await homePage.clickTile('Card');  
        await homePage.waitFor(5000);
    });
    it("Creating new Active card",async()=>{

        //Click on Client and change the client to Salesdemo
        await cardLanding.chooseClient('Sales Demo');

        ////Click on Create content and select Active Card & Blank template
        await cardLanding.clickCreateContent('Active Cards','Blank Active Card');

        //Add element to Active card
        await cardDesignerPage.addElement("Full Name");
        await cardDesignerPage.addElement("Card Number");
        await cardDesignerPage.addElement("Password");

        //Save Active Card
        await cardDesignerPage.clickButton("SAVE");
        await cardDesignerPage.waitFor(5000);
    });
    it("Edit Active Card", async() =>{

        //Navigate back to card designer page
        await cardDesignerPage.clickOnCardDesignerLink();

        //Edit the newly created card
        await cardLanding.searchCard("UntitledActiveCard");
        await cardLanding.selectCardAction("UntitledActiveCard","Edit");

        //Add elements to duplicated card and save
        await cardDesignerPage.addElement("Email");
        await cardDesignerPage.addElement("Phone");
        await cardDesignerPage.clickButton("PREVIEW");
        await previewCardPage.clickBack();
        await cardDesignerPage.clickButton("SAVE");
    });
    it("Save as Template", async()=>{

        //Navigate back to card designer page
        await cardDesignerPage.clickOnCardDesignerLink();

        //Save As Template the newly created card
        await cardLanding.searchCard("UntitledActiveCard");
        await cardLanding.selectCardAction("UntitledActiveCard","Save As Template");
    });
    it('Duplicate Active Card', async() => {

        //Navigate back to card designer page
        await cardDesignerPage.clickOnCardDesignerLink();

        //Duplicate payment card
        await cardLanding.searchCard("UntitledActiveCard");
        await cardLanding.selectCardAction("UntitledActiveCard","Duplicate");
        
        //Add elements to duplicated card and save
        await cardDesignerPage.addElement("Date");

        //click preview to check the fields and save
        await cardDesignerPage.clickButton("PREVIEW");
        await previewCardPage.clickBack();
        await cardDesignerPage.clickButton("SAVE");
    });
    it("Delete Created Active card",async()=>{

        //Navigate back to card designer page
        await cardDesignerPage.clickOnCardDesignerLink();

        //Delete newly created Active card
        await cardLanding.searchCard("UntitledActiveCard");
        await cardLanding.selectCardAction("UntitledActiveCard","Delete");
        await cardLanding.deleteCard("CONFIRM");
        await cardDesignerPage.clickOnCardDesignerLink();
    })
});

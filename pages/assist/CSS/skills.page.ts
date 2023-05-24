import BasePage from "../../base.page";

const locators = require('../../../resources/locators/assist/CSS/SkillPage');

class SkillsPage extends BasePage{

    /**
     * Click on Create new skill button
     * @param create 
     */
    public async clickCreateButton(create){
        await this.click(locators.createButton,create);
    }

    /**
     * Creating new skills
     * @param skillName 
     * @param descValue 
     */
    public async createSkill(skillName:string, descValue:string){
        await this.setValue(locators.skillName,skillName);
        await this.setValue(locators.skillDescription,descValue);
        await browser.pause(3000);
        await this.click(locators.publishToTest);
        await this.click(locators.confirmButton);
        await this.waitFor(35000);
        await this.isVisible(locators.publishToLive);
        await this.waitFor(2000);
    }
}

export default new SkillsPage()
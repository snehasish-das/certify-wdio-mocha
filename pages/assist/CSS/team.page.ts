import BasePage from "../../base.page";

const env = require('../../../config/environment');
const users = require('../../../config/users');
const locators = require('../../../resources/locators/assist/CSS/TeamPage');

class TeamPage extends BasePage{
  
public async createButton(create){
    await this.click(locators.createButton,create);
    await this.waitFor(3000);
}    
/**
     * Creating new skills
     * @param teamName 
     */
public async CreatingTeamname(teamName:string){
    await this.setValue(locators.teamName,teamName);
    await this.waitFor(3000);
    await this.click(locators.publishToTest);
    await this.waitFor(2000);
    await this.click(locators.confirmButton);
    await this.waitFor(35000);
    await this.isVisible(locators.publishToLive);
    await this.waitFor(3000)
}
}
export default new TeamPage()
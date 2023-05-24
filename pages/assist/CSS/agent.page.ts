import BasePage from "../../base.page";

const locators = require('../../../resources/locators/assist/CSS/AgentPage');

class AgentPage extends BasePage{

    /**
     * Creting new agent
     */
    public async creatingAgent(loginId:string,firstName:string,lastName:string,displayName:string,email:string,team,...params){
        await this.click(locators.createButton);
        await this.setValue(locators.loginId,loginId);
        await this.setValue(locators.firstName,firstName);
        await this.setValue(locators.lastName,lastName);
        await this.setValue(locators.displayName,displayName);
        await this.setValue(locators.email,email);
        await this.click(locators.selectTeam,team);
        await params.forEach(param => {

            let fieldName = param.split(":")[0];
            let fieldValue = param.split(":")[1];

            if (fieldName == 'chatLimit') {
                this.click(locators.chatLimit,fieldValue);
                this.waitFor(2000);
            }
            else if (fieldName == "acceptChat") {
                this.click(locators.acceptChat,fieldValue);
                this.waitFor(2000);
            }
            else if (fieldName == "selectRole") {
                this.click(locators.role,fieldValue);
                this.waitFor(2000);
            }
            else if (fieldName == "status") {
                this.click(locators.status,fieldValue);
                this.waitFor(2000);
            }
            else if (fieldName == "userAuth") {
                this.click(locators.userAuthenticationType,fieldValue);
                this.waitFor(2000);
            }
            else if (fieldName == "passwordType") {
                this.click(locators.passwordType,fieldValue);
                this.waitFor(2000);
            }
            else if (fieldName == "skillTab") {
                this.click(locators.skillTab);
                this.waitFor(2000);
            }
            else if (fieldName == "assignSkill") {
                this.setValue(locators.assignSkill,fieldValue);
                this.waitFor(3000);
            }
            else if (fieldName == "selectSkill") {
                this.isVisible(locators.selectSkill,fieldValue);
                this.click(locators.selectSkill,fieldValue);
                this.waitFor(3000);
            }
            else if (fieldName == "addSkill") {
                this.click(locators.addSkill);
                this.waitFor(3000);
            }
            else if (fieldName == "addedSkill") {
                this.isVisible(locators.addedSkill,fieldValue);
            }  
        });
        await this.waitFor(3000);
        await this.click(locators.publishToTest);
        await this.click(locators.confirmButton);
        await this.waitFor(35000);
        await this.isVisible(locators.publishToLive);
    }

}

export default new AgentPage()
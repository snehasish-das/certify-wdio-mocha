import BasePage from "../../base.page";

const locators = require('../../../resources/locators/assist/CSS/CssHomePage');

/**
 * 
 */
class CssHomePage extends BasePage{
    /**
     * Select the client 
     * @param client 
     */
    public async chooseClient(client){
        await this.click(locators.client,client);
        await this.waitFor(3000);
    }

    public async assistHome(){
        await this.click(locators.assistTab);
        await this.waitFor(3000);
    }

    /**
     * Click on Skill
     * @param skill
     */
    public async clickSkills(skill){
        await this.click(locators.skills,skill);
        await this.waitFor(3000);
    }

    /**
     * Click on Team
     * @param teams 
     */
    public async clickTeams(teams){
        await this.click(locators.teams,teams);
        await this.waitFor(3000);
    }

    /**
     * Click on Agent Administration
     * @param agent 
     */
    public async clickAgent(agent){
        await this.click(locators.agentAdministration,agent);
        await this.waitFor(5000);
    }

    /**
     * Click on Queue
     * @param queues 
     */
    public async clickQueue(queues){
        await this.click(locators.queues,queues);
    }
    
}

export default new CssHomePage()

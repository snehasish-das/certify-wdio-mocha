import BasePage from "../../base.page";

const locators=require('../../../resources/locators/assist/CSS/QueuePage')

class queuePage extends BasePage{
    public async CreateingQueue(queueName:string,queueDec:string,skillName,...params){
        await this.click(locators.createButton)
        await this.setValue(locators.queueName,queueName);
        await this.setValue(locators.queueDescription,queueDec);
        await this.waitFor(2000);
        await this.click(locators.assistConfigTab);
        await this.click(locators.chooseSkillDropdown);
        await this.waitFor(1000);
        await this.click(locators.chooseSkills,skillName);
        await params.forEach(param => {
           
            let fieldName = param.split(":")[0];
            let fieldValue = param.split(":")[1];

            if (fieldName == 'Live Chat') {
                this.click(locators.queueSelection,fieldValue);
                this.waitFor(6000);
        }
           else if (fieldName == "Route On") {
                this.click(locators.routeOnValue,fieldValue);
                this.waitFor(2000);
                
            }
            else if (fieldName == "Enable Visitor Inactivity Time") {
                this.click(locators.enableVisitorInactivetimeValue,fieldValue);
                this.waitFor(2000);
                
            }
            else if (fieldName == "Enable Agent Response Time") {
                this.click(locators.enableAgentResponseTimeValue,fieldValue);
                this.waitFor(2000);
                
            }
            else if (fieldName == "Choose Disposition Form") {
                this.click(locators.dispositionValue,fieldValue);
                this.waitFor(2000);
                
            }
            else if (fieldName == "Typing Feature Enabled") {
                this.click(locators.typingFeatureValue,fieldValue);
                this.waitFor(2000);
                
            }

            else if (fieldName == "File Transfer for Visitor") {
                this.click(locators.fileTransferValue,fieldValue);
                this.waitFor(2000);
                
            }
            else if (fieldName == "Visitor Mailer Configurations") {
                this.click(locators.visitorMailerConfigValue,fieldValue);
                this.waitFor(2000);
                
            }
            else if (fieldName == "Agent Mailer Configurations") {
                this.click(locators.agentMailerConfigValue);
                this.waitFor(3000);
            }
             else if (fieldName == "Co-view Feature Enabled") {
                this.click(locators.coViewEnablementValue,fieldValue);
                this.waitFor(2000);              
            }  
            else if (fieldName == "Co-browsing Feature Enabled") {
                this.click(locators.coBrowseEnablementValue,fieldValue);
               
            }  
            else if (fieldName == "Enable Outbound transfer for LOB") {
                this.click(locators.enableOutboundLOBValueLive,fieldValue);
               
            }  
            else if (fieldName == "Accept InterLOB Chat") {
                this.click(locators.acceptInterLOBValueLive,fieldValue);
            }  
       });
     }     
//publishing to Test
    public async publishingToTest(){
    await this.click(locators.publishToTest)
    await this.click(locators.confirmButton)
    await this.waitFor(30000);
    await this.isVisible(locators.publishToLive);
    } 
}
export default new queuePage() 
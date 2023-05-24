module.exports={
    createButton:"//button[@title='Create']",
    queueName:"//input[@name='queueName']",
    queueDescription:"//input[@name='queueDesc']",
    assistConfigTab:"//li[contains(text(),'Assist Configuration')]",
    chooseSkillDropdown:"//div[@class='select-__value-container select-__value-container--is-multi css-1hwfws3']",
    chooseSkills:"//div[contains(text(),'<<param>>')]",
    queueType:"//select[@name='queueType']",
    queueSelection:"//option[contains(text(),<<param>>)]",// Live Chat or Messaging
    queueLength:"//input[@name='queueLength']",
    queueTimeout:"//input[@name='queueTimeOut']",
    routeOn:"//select[@name='routeOn']",
    routeOnValue:"//option[contains(text(),'<<param>>')]",//Dispose or Terminate
    enableVisitorInactivetime:"//select[@name='visitorInactivityEnabled']",
    enableVisitorInactivetimeValue:"(//option[contains(text(),'<<param>>')])[1]",//True or False
    enableAgentResponseTime:"//select[@name='agentResponseEnabled']",
    enableAgentResponseTimeValue:"(//option[contains(text(),'<<param>>')])[2]",//True or False
    dispositionForm:"//select[@name='useStandardWrapUp']",
    dispositionValue:"//option[contains(text(),'<<param>>')]",//Standard Disposition Form or Custom Disposition Form
    typingFeature:"//select[@name='typingEnabled']",
    typingFeatureValue:"(//option[contains(text(),'<<param>>')])[3]",//True or False
    accountLevelQueue:"//select[@name='isAccountQueue']",
    accountLevelQueueValue:"(//option[contains(text(),'<<param>>')])[4]",//True or False
    fileTransfer:"//select[@name='FTVisitor']",
    fileTransferValue:"//option[contains(text(),'<<param>>')]",// Deny  or Auto Accept
    visitorMailerConfig:"//select[@name='visitorConfig']",
    visitorMailerConfigValue:"(//option[contains(text(),'DEFAULT')])[1]",
    agentMailerConfig:"//select[@name='agentConfig']",
    agentMailerConfigValue:"(//option[contains(text(),'DEFAULT')])[2]",
    coViewEnablement:"//select[@name='coViewEnabled']",
    coViewEnablementValue:"(//option[contains(text(),'<<param>>')])[5]",//True or False
    coBrowseEnablement:"//select[@name='coBrowseEnabled']",
    coBrowseEnablementValue:"(//option[contains(text(),'<<param>>')])[6]",//True or False
    enableOutboundLOB:"//select[@name='outboundLob']",
    enableOutboundLOBValueLive:"(//option[contains(text(),'<<param>>')])[7]",//True or False
    enableOutboundLOBValueMessaging:"(//option[contains(text(),'<<param>>')])[5]",//True or False
    acceptInterLOB:"//select[@name='acceptInterLob']",
    acceptInterLOBValueLive:"(//option[contains(text(),'<<param>>')])[8]",//True or False
    acceptInterLOBValueMessaging:"(//option[contains(text(),'<<param>>')])[6]",//True or False
    publishToTest:"//button[contains(text(),'PUBLISH TO TEST')]",
    confirmButton:"//button[normalize-space()='CONFIRM']",
    publishToLive:"(//span[contains(text(),'Publish To Live')])[1]"
}
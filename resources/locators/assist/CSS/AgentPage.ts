module.exports={

    createButton:"//button[@title='Create']",//Create
    loginId:"//input[@name='userName']",//userName 
    firstName:"//input[@name='firstName']",//firstName
    lastName:"//input[@name='lastName']",//lastName
    displayName:"//input[@name='displayName']",//displayName
    email:"//input[@name='email']",//email
    activeChatLimit:"//select[@name='activeChatLimits']",//activeChatLimit
    chatLimit:"//option[@value='<<param>>']",
    autoAcceptChat:"//select[@name='autoAcceptChats']",//autoAcceptChats
    acceptChat:"//option[@value='<<param>>']",//true or false
    team:"//select[@name='teamId']",//teamId
    selectTeam:"//option[@value='<<param>>']",//team name
    selectRole:"//select[@name='roleId']",
    role:"//option[@value='<<param>>_role_id']",//agent//superagent//limitedlead//superlead//reportinglead
    status1:"//select[@name='status']",
    status:"//option[@value='<<param>>']",//ACTIVE
    userAuth:"//select[@name='authenticationType']",
    userAuthenticationType:"//option[@value='<<param>>']",//LOCAL_AUTH
    passwordType:"//span[normalize-space()='<<param>>'][1]",//Auto Generate Password or One Time Password
    skillTab:"(//li[@id='tab_1'])[1]",
    assignSkill:"(//input[@placeholder='Search'])[1]",
    selectSkill:"button[title='<<param>>']",
    addSkill:"//body//div[@id='app']//div[@id='tabpanel_1']//div[@data-radium='true']//div//div//div//div//div//div//div//div//div//div//div[2]//button[1]",
    addedSkill:"button[title='<<param>>']",
    publishToTest:"//button[contains(text(),'PUBLISH TO TEST')]",//PUBLISH TO TEST
    confirmButton:"//button[normalize-space()='CONFIRM']",
    publishToLive:"(//span[contains(text(),'Publish To Live')])[1]",

    locator: "//input[@name='<<param>>']"
}
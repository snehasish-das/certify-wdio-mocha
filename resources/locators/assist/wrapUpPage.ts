module.exports={
    intentDropdown: "//label[text()='<<param>>']/following-sibling::div//i",
    intentValue: "//span[text()='<<param>>']",
    intentDescription: "//label[text()='Intent Description']/following-sibling::textarea",
    intentResolvedYes: "//label[contains(text(),'Yes')]",
    intentResolvedDesc: "//textarea[contains(@placeholder,'Type Agent/Customer Outcome')]",
    endChatButton: "//button[@title='End chat']",
    noteTextarea: "//textarea[contains(@placeholder,'Please enter note')]",
    chatContainerFrame: "//iframe[@id='chatContainer']"
}
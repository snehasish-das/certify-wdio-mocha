module.exports={
    searchInput : "//input[contains(@placeholder,'Search Clients')]",
    createButton : "//div[contains(text(),'CREATE CLIENT')]",
    clientCard : "//div[contains(@name,'<<param>>')]",
    clientHeader : "//span[contains(text(),'<<param>>')]",
    clientAccountLink : "//a[contains(@href,'<<param>>')]",
    updateLink : "//a[contains(@href,'<<param>>') and @name='gotoLOB']",
    clientViewMoreLink : "//a[contains(@href,'<<param>>')]/span[contains(text(),'View more')]",
    clientActionsMenu : "//span[contains(text(),'<<param>>')]/following-sibling::div",
    clientFailureImage : "//a[contains(@href,'<<param>>')]/following-sibling::img",
    createLobLink : "//span[contains(text(),'Create LOB')]/parent::a"
}
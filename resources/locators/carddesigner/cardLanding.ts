module.exports={
    createButton : "//button[@id='createContentButton']",
    templateTab : "//span[contains(text(),'<<param>>')]/parent::button",
    template : "//div[contains(text(),'<<param>>')]/preceding-sibling::div",
    cardActionDropdown : "//span[contains(text(),'<<param>>')]/parent::div/following-sibling::div/button",
    cardAction : "//li[contains(text(),'<<param>>')]",
    searchInput : "//input[contains(@placeholder,'Search by Name')]",
    cardTitle : "//span[contains(text(),'<<param>>')]",
    chooseClient : "//div[@id='tfs-navbar-client']",
    client : "(//div[contains(text(),'<<param>>')])[1]",
    deleteCard : "//button[normalize-space()='<<param>>']"
  }
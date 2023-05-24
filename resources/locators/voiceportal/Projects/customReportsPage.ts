module.exports={
    viewClient : "//span[normalize-space()='Custom Reports for:']",
    viewProject : "//span[normalize-space()='Project:']",
    getClient : "//div[normalize-space()='<<param>>']",
    getProject : "//div[normalize-space()='<<param>>']",
    verifyTitle : "//div[@class='title']",
    tableHeader : "//div[@class='rt-resizable-header-content' and text() = '<<param>>']",
    folderPath : "//a[@class='link']//div[text() = '<<param>>']",
    filePath : "//div[contains(text(),'<<param>>')]",
    titleHyperlinkPath : "//div[@class='atitle']",
    nestedFolderPath : "//div[normalize-space()='<<param>>']",
}
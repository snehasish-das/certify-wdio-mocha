module.exports={
    svgIcon: "//div[@class='css-0']//*[name()='svg']",
    button: "//button[contains(text(), '<<param>>')]",
    removeAudio: "//a[contains(text(), '<<param>>')]//following::a[contains(text(), 'Remove')]",
    UploadAudio: "//span[normalize-space()='<<param>>']",
    uploadButton: "//input[@id='exampleFile']",
    uploadFileDesc: "//input[contains(@name, 'textfield')]",
    EditUpload: "//a[normalize-space()='<<param>>']",
    dropdown: "//div[@data-qa = 'dropDownControl']",
    clientMenu : "//div[@class='company-container']//div[@role='menu']//div[@role='menuitem' and @data-qa='<<param>>']",
}
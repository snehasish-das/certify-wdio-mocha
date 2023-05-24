import homePage from '../../../../pages/home.page'
import companyListPage from '../../../../pages/voiceportal/Admin/companyList.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Voice Portal Admin -> Company Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to admin >> company', async() =>{
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("Company");
        await homePage.waitFor(5000);
    });

    it('Verify Table Header columns', async() =>{
        await companyListPage.verifyHeader("Company").then(value => expect(value).toBe(true));
        await companyListPage.verifyHeader("Description").then(value => expect(value).toBe(true));
        await companyListPage.verifyHeader("Contracts").then(value => expect(value).toBe(true));
        await companyListPage.verifyHeader("Administrators").then(value => expect(value).toBe(true));
        await companyListPage.verifyHeader("[24]7 Support").then(value => expect(value).toBe(true));
        await companyListPage.verifyHeader("Priyanshu").then(value => expect(value).toBe(false));
    });

    it('Verify Tootips', async() =>{
        await companyListPage.verifyTooltip("247 inc","247 inc").then(value => expect(value).toBe(true));
        await companyListPage.verifyTooltip("247incQA","247incQA").then(value => expect(value).toBe(true));
        await companyListPage.verifyTooltip("Tellme QA","Tellme QA").then(value => expect(value).toBe(true));
        await companyListPage.verifyTooltip("withsingh.seema@gmail.com","withsingh.seema@gmail.com").then(value => expect(value).toBe(true));
        await homePage.waitFor(1000);
    });

    it('Verify Company Name Hyper link', async() =>{
        await companyListPage.verifyCompanyHyperlink("247 inc");
        await homePage.waitFor(8000);
        await companyListPage.verifyCompanyName("247 inc").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
        await voiceLandingPage.clickTab("Company");
        await homePage.waitFor(5000);
        await companyListPage.verifyCompanyHyperlink("AltranCap");
        await homePage.waitFor(8000);
        await companyListPage.verifyCompanyName("AltranCap").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
    })
    it('Verify Cancel Hyperlink', async() =>{
        await companyListPage.verifyButton("Cancel");
        await homePage.waitFor(5000);
    })
    it('Verify Add New Company', async() =>{
        await companyListPage.verifyAddNewCompanylink("Add New Company");
        await homePage.waitFor(7000);
    })
    it('List of Fields', async() =>{
        await companyListPage.verifyListOfFields("Name*").then(value => expect(value).toBe(true));
        await companyListPage.verifyListOfFields("Company Logo (JPEG)").then(value => expect(value).toBe(true));
        await companyListPage.verifyListOfFields("ID*").then(value => expect(value).toBe(true));
        await companyListPage.verifyListOfFields("Description").then(value => expect(value).toBe(true));
        await companyListPage.verifyListOfFields("Contracts").then(value => expect(value).toBe(true));
        await companyListPage.verifyListOfFields("Contract Name*").then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    })
    it('Verify all buttons', async() =>{
        await companyListPage.checkSaveButton("Save").then(value => expect(value).toBe(true));
        await companyListPage.verifyChoseFileButton();
        await companyListPage.verifyButton("Cancel");
        await homePage.waitFor(5000);
        await companyListPage.verifyAddNewCompanylink("Add New Company");        
    })
    it('Verify hint labels', async() =>{
        await homePage.waitFor(5000);
        await companyListPage.verifyHintLabel("CAUTION: Contracts should only be added or modified after conversation with Finance, to ensure correct billing.").then(value => expect(value).toBe(true));
        await homePage.waitFor(1000);
        await companyListPage.verifyHintLabel("Inbound VXML: Calls which end at a recognition engine.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabel("Outbound Web: Calls which begin at a recognition engine and go out via a carrier.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabel("Call Control: Calls which end at a call control application server(CCAS).NOTE: This functionality is prototype only.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabel("This identifier should be a short abbreviation used in Outbound Web provisioning as part of the SIP URI name.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabel("For Outbound Web: set the max ports allowed, to limit the number of simultaneous calls on the platform.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabel("This time zone will be the default suggestion when adding new numbers, but can be changed during provisioning.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabel("Enter [24]7 or Tellme or Microsoft e-mail addresses, separated by semicolons, to review invoices before external distribution.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabel("Enable or Disable Caller Verification feature.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabel("Caller Verification Vendor ID.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabel("Caller Verification Customer Billing ID.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelIP("Comma seperated list of CIDR-formatted addresses").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelAdmin("Call Detail Records (CDRs, ODRs, TDRs, EDRs). Access controlled via Web Services.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelAdmin("Call Search. Access controlled via Web Services.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelAdmin("Enable Call Recordings. Access controlled via Web Services.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelAdmin("Custom Reports. Access controlled via Web Services.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelAdmin("Custom Report Client Level. Access controlled via Web Services.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelAdmin("Offline Reports. Access controlled via Web Services.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelAdmin("Expose near-real time functionality (BETA) to this company. Should only be allowed with approval from Voices team for performance management.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelAdmin("Expose Experience Manager feature to this company. This can be updated only by COMs or by PDB Admins.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelA("Allows this company to access speaker verification.").then(value => expect(value).toBe(true));
        await companyListPage.verifyHintLabelA("Include [24]7 partner or client support aliases here. Please avoid promoting the NOC alias unless necessary for the client relationship.").then(value => expect(value).toBe(true));
    })
    it('Verify Warning Message', async() =>{
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Please enter company name.").then(value => expect(value).toBe(true));
        await companyListPage.nameInput("aaap","Name*");
        await companyListPage.verifyButton("Save");
        await homePage.waitFor(5000);
        await companyListPage.verifyWarningMessage("Please enter contract name.").then(value => expect(value).toBe(true));
        await companyListPage.verifyWarningMessage("Please select at least one service combination.").then(value => expect(value).toBe(true));
        await companyListPage.verifyWarningMessage("Please enter contract identifier.").then(value => expect(value).toBe(true));
        await companyListPage.verifyWarningMessage("Please select at least one country for outbound IVR dialing.").then(value => expect(value).toBe(true));
        await companyListPage.verifyWarningMessage("Please enter at least one Invoice Reviewer ([24]7 or Tellme or Microsoft e-mail address).").then(value => expect(value).toBe(true));
        await companyListPage.verifyWarningMessage("Please enter header for a support contact.").then(value => expect(value).toBe(true));
        await companyListPage.verifyWarningMessage("Please enter email for a support contact.").then(value => expect(value).toBe(true));    
    })   
    it('Verify the Warning Message when ‘Service Combinations’ field is Empty',async() =>{
        await companyListPage.verifyButton("Cancel");
        await homePage.waitFor(5000);
        await companyListPage.verifyAddNewCompanylink("Add New Company");
        await homePage.waitFor(5000);
        await companyListPage.nameInput("aaap","Name*");
        await companyListPage.nameInput("pk","Contract Name*");
        await companyListPage.nameInput("pk","Contract Identifier*");
        await companyListPage.verifyDropdown("United States of America - 1","Country List for Outbound IVR Dialing*");
        await companyListPage.verifyDropdown("Mexico - 52","Country List for Outbound IVR Dialing*");
        await companyListPage.nameInput("pk@247.ai","Invoice Reviewers (E-mail)*");
        await companyListPage.nameInput("priyanshu","Header*");
        await companyListPage.nameInput("pk@247.ai","Email*");
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Please select at least one service combination.").then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
    })
    it('Verify the Warning Message when ‘Contract Identifier’ field is Empty', async() =>{
        await companyListPage.verifyButton("Cancel");
        await homePage.waitFor(5000);
        await companyListPage.verifyAddNewCompanylink("Add New Company");
        await homePage.waitFor(5000);
        await companyListPage.nameInput("aaap","Name*");
        await companyListPage.nameInput("pk","Contract Name*");
        await companyListPage.verifyDropdown("Verizon IPTF(Manual)","Inbound VXML:");
        await companyListPage.verifyDropdown("United States of America - 1","Country List for Outbound IVR Dialing*");
        await companyListPage.nameInput("pk@247.ai","Invoice Reviewers (E-mail)*");
        await companyListPage.nameInput("priyanshu","Header*");
        await companyListPage.nameInput("pk@247.ai","Email*");
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Please enter contract identifier.").then(value => expect(value).toBe(true));
    })
    it('Verify the Warning Message when ‘Country List for Outbound IVR Dialing’ field is Empty', async() =>{
        await companyListPage.verifyButton("Cancel");
        await homePage.waitFor(5000);
        await companyListPage.verifyAddNewCompanylink("Add New Company");
        await homePage.waitFor(5000);
        await companyListPage.nameInput("aaap","Name*");
        await companyListPage.nameInput("pk","Contract Name*");
        await companyListPage.verifyDropdown("Verizon IPTF(Manual)","Inbound VXML:");
        await companyListPage.nameInput("pk","Contract Identifier*");
        await companyListPage.nameInput("pk@247.ai","Invoice Reviewers (E-mail)*");
        await companyListPage.nameInput("priyanshu","Header*");
        await companyListPage.nameInput("pk@247.ai","Email*");
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Please select at least one country for outbound IVR dialing.").then(value => expect(value).toBe(true));
        await homePage.waitFor(3000);
    })
    it('Validate Outbound Web Max Ports', async() =>{
        await companyListPage.verifyDropdown("Mexico - 52","Country List for Outbound IVR Dialing*");
        await companyListPage.descriptionAndOutboundPort("1251", "Outbound Web Max Ports*");
        await homePage.waitFor(3000);
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Outbound web max ports value is invalid. Enter an integer between 0 and 1250.");
        await companyListPage.descriptionAndOutboundPort("abc", "Outbound Web Max Ports*");
        await homePage.waitFor(3000);
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Outbound web max ports value is invalid. Enter an integer between 0 and 1250.").then(value => expect(value).toBe(true));
    })

    it('Add New Company',async() =>{
        await homePage.waitFor(3000);
        await companyListPage.descriptionAndOutboundPort("1250", "Outbound Web Max Ports*");
        await companyListPage.verifyDropdown("United States of America - 1","Country List for Outbound IVR Dialing*");
        await companyListPage.verifyButton("Save");
    })
    it('Verify non-mandatory Fields', async() => {
        await homePage.waitFor(5000);
        await companyListPage.verifyCompanyHyperlink("aaap");
        await homePage.waitFor(5000);
        await companyListPage.companyDescriptionInput("Adding Description for Company Field");
        await homePage.waitFor(1000);
        await companyListPage.clickContract("pk");
        await homePage.waitFor(2000);
        await companyListPage.descriptionAndOutboundPortEdit("This is the description for contracts", "Description");
        await companyListPage.verifyDropdownEdit("Microsoft DNN Speech Engine → Notifier (Stable SV2)","pk","Outbound Web:");
        await companyListPage.clickSomewhere("Outbound Web:");
        await companyListPage.verifyDropdownEdit("Tellme Internal → CCAS (Plat QA)","pk","Call Control:");
        await companyListPage.clickSomewhere("Outbound Web:");
        await companyListPage.verifyDropdownEdit("Speech Recognition","pk","Web Services");
        await companyListPage.clickSomewhere("Outbound Web:");
        await companyListPage.verifyDropdownEdit("Enabled per TFN","pk","Caller Verification");
        await companyListPage.verifyDropdownEdit("NextCaller","pk","Vendor ID");
        await homePage.waitFor(3000);
    })
    it('Verify all checkbox', async() =>{
        await companyListPage.clickCheckbox("Call Detail Records");
        await companyListPage.clickCheckbox("Call Search");
        await companyListPage.clickCheckbox("Whole Call Recording");
        await companyListPage.clickCheckbox("Custom Reports");
        await companyListPage.clickCheckbox("Client level");
        await companyListPage.clickCheckbox("Offline Reports");
        await companyListPage.clickCheckbox("Near Real-Time Summary");
        await companyListPage.clickCheckbox("Experience Manager Access");
        await companyListPage.clickCheckbox("Repository Access");
        await companyListPage.clickCheckbox("Speaker Verification Access");
        await companyListPage.verifyButton("Save");
    })
    it('Verify the ‘Name’ field', async() =>{
        await homePage.waitFor(5000);
        await companyListPage.verifyCompanyHyperlink("aaap");
        await homePage.waitFor(2000);
        await companyListPage.editInput("aaa-123@#$","Name*");
        await homePage.waitFor(5000);
        await companyListPage.verifyButton("Save");
        await homePage.waitFor(5000);
        await companyListPage.verifyCompanyHyperlink("aaa-123@#$");
        await homePage.waitFor(5000);
        await companyListPage.editInput("@#$","Name*");
        await homePage.waitFor(2000);
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Company name with only special characters is not valid.").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
        await companyListPage.editInput("aaap","Name*");
        await homePage.waitFor(2000);
        await companyListPage.verifyButton("Save");
    })
    it('Verify Header Name', async() =>{
        await homePage.waitFor(5000);
        await companyListPage.verifyCompanyHyperlink("aaap");
        await homePage.waitFor(5000);
        await companyListPage.editInput("test-123@#$","Header*");
        await companyListPage.verifyButton("Save");
    })
    it('Verify Header Email', async() =>{
        await homePage.waitFor(5000);
        await companyListPage.verifyCompanyHyperlink("aaap");
        await homePage.waitFor(5000);
        await companyListPage.editInput("email@123.123.123.123","Email*");
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Please enter valid email for a support contact.").then(value => expect(value).toBe(true));
        await companyListPage.editInput(" firstname.lastname@domain.com, email@subdomain.domain.com, firstname+lastname@domain.com, email@123.123.123.123","Email*");
        await homePage.waitFor(2000);
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Please enter valid email for a support contact.").then(value => expect(value).toBe(true));
        await companyListPage.editInput("firstname.lastname@domain.com; email@subdomain.domain.com; firstname+lastname@domain.com; email@123.123.123.123","Email*");
        await homePage.waitFor(2000);
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Please enter valid email for a support contact.").then(value => expect(value).toBe(true));
        await companyListPage.editInput(".email@domain.com","Email*");
        await homePage.waitFor(2000);
        await companyListPage.verifyButton("Save");
        await companyListPage.verifyWarningMessage("Please enter valid email for a support contact.").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
        await companyListPage.editInput("pk@247.ai","Email*");
        await homePage.waitFor(2000);
        await companyListPage.verifyButton("Save");
    })
    it('Add Another Contract', async() =>{
        await homePage.waitFor(5000);
        await companyListPage.verifyCompanyHyperlink("aaap");
        await homePage.waitFor(2000);
        await companyListPage.verifyAddAnotherLink("Add another contract");
        await homePage.waitFor(2000);
        await companyListPage.nameInput("pk1","Contract Name*");
        await companyListPage.descriptionAndOutboundPort("This is the description for another contracts", "Description");
        await homePage.waitFor(2000);
        await companyListPage.verifyDropdownSelectAll("Inbound VXML:","SELECT ALL");
        await companyListPage.clickSomewhere("Name*");
        await companyListPage.verifyDropdownSelectAll("Outbound Web:", "SELECT ALL");
        await companyListPage.clickSomewhere("Name*");
        await companyListPage.verifyDropdownSelectAll("Call Control:","SELECT ALL");
        await companyListPage.clickSomewhere("Name*");
        await companyListPage.verifyDropdown("Speech Recognition","Web Services");
        await companyListPage.verifyDropdown("Text to Speech","Web Services");
        await companyListPage.verifyDropdown("Large Grammar","Web Services");
        await companyListPage.verifyDropdown("Audio Synthesis","Web Services");
        await companyListPage.verifyDropdown("Audio Transcoding","Web Services");
        await companyListPage.verifyDropdown("Audio Buffering","Web Services");
        await companyListPage.clickSomewhere("Name*");
        await companyListPage.verifyDropdown("Enabled per TFN","Caller Verification");
        await companyListPage.verifyDropdown("NextCaller","Vendor ID");
        await homePage.waitFor(3000);
        await companyListPage.nameInput("pk1","Contract Identifier*");
        await homePage.waitFor(1000);
        await companyListPage.verifyDropdownSelectAll("Country List for Outbound IVR Dialing*","SELECT ALL");
        await companyListPage.clickSomewhere("Name*");
        await companyListPage.nameInput("pk@247.ai","Invoice Reviewers (E-mail)*");
        await homePage.waitFor(1000);
        await companyListPage.verifyButton("Save");
        await homePage.waitFor(5000);
    })
    it('Verify Remove Contract', async() =>{
        await companyListPage.verifyCompanyHyperlink("aaap");
        await homePage.waitFor(5000);
        await companyListPage.removeContract("pk1");
        await companyListPage.verifyButton("Save");
        await homePage.waitFor(5000);
    })
    it('Delete Company', async() =>{
        await companyListPage.verifyCompanyHyperlink("aaap");
        await homePage.waitFor(5000);
        await companyListPage.verifyButton("Delete Company");
        await homePage.waitFor(2000);
        await companyListPage.verifyButton("Yes");
        await homePage.waitFor(5000);
    })    
});

import { } from "@playwright/test";

export class EnterDetailsOnAssignTicketPage {

    constructor(page) {
        // Locators
        this.page = page;
        this.mainFrame = page.frameLocator("//*[@name='main']");
        this.masterProject = this.mainFrame.locator("//*[@id='ddlMasterProject']");
        this.project = this.mainFrame.locator("//*[@name='ddlProject']");
        this.feature = this.mainFrame.locator("//*[@id='ddlFeatures']");
        this.getTicket = this.mainFrame.locator("//*[@id='lbTicketInfo']");
        this.ticketId = this.mainFrame.locator("//*[@name='ddlTicketId']");
        this.complexity = this.mainFrame.locator("//*[@id='ddlComplexity']");
        this.assignedUser = this.mainFrame.locator("//*[@name='ddlAssigneduser']");
        this.priority = this.mainFrame.locator("//*[@id='ddlPriority']");
        this.remarks = this.mainFrame.locator("//*[@name='txtRemark']");
        this.saveButton = this.mainFrame.locator("//*[@id='btnSave']");

    }

    // Methods

    async enterDetailsOnAssignTicketScreen(masterProject, project, feature, ticketId, complexity, assignedUser, priority, remarks) {
        await this.masterProject.selectOption(masterProject);
        await this.page.waitForTimeout(3000);
        await this.project.selectOption(project);
        await this.page.waitForTimeout(3000);
        await this.feature.selectOption(feature);
        await this.page.waitForTimeout(3000);
        await this.getTicket.click();
        await this.page.waitForTimeout(3000);
        await this.ticketId.selectOption(ticketId);
        await this.page.waitForTimeout(3000);
        await this.complexity.selectOption(complexity);
        //await this.page.waitForTimeout(5000);
        //await this.complexity.selectOption(assignedUser);
        await this.page.waitForTimeout(3000);
        await this.priority.selectOption(priority);
        await this.page.waitForTimeout(3000);
        await this.remarks.fill(remarks);
        await this.page.waitForTimeout(3000);
        await this.saveButton.click();
        await this.page.waitForTimeout(30000);
    }
}
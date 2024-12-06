import { expect } from "@playwright/test";

export class AddAssignTicketPage {

    constructor(page) {
        // Locators
        this.page = page;
        this.mainFrame = page.frameLocator("//*[@name='main']");
        this.masterProject = this.mainFrame.locator("//*[@id='ddlMasterProject']");
        this.project = this.mainFrame.locator("//*[@name='ddlProject']");
        this.feature = this.mainFrame.locator("//*[@id='ddlFeatures']");
        this.getTicket = this.mainFrame.locator("//*[@id='lbTicketInfo']");
        this.ticketId = this.mainFrame.locator("//*[@name='ddlTicketId']");
        this.description = this.mainFrame.locator("//*[@name='txtTicketDcpn']");
        this.complexity = this.mainFrame.locator("//*[@id='ddlComplexity']");
        this.assignedUser = this.mainFrame.locator("//*[@name='ddlAssigneduser']");
        this.priority = this.mainFrame.locator("//*[@id='ddlPriority']");
        this.remarks = this.mainFrame.locator("//*[@name='txtRemark']");
        this.dueDate = this.mainFrame.locator("//*[@title='Select from date']");
        this.dueDateHighlighted = this.mainFrame.locator("//*[@id='ui-datepicker-div']//tbody//td//a[@class='ui-state-default ui-state-highlight ui-state-hover']");
        this.saveButton = this.mainFrame.locator("//*[@id='btnSave']");
    }

    // Methods

    async addDetailsOnAssignTicketScreen(masterProject, project, feature, ticketId, description, complexity, assignedUser, priority, remarks, confirmationMessage) {
        await this.masterProject.selectOption(masterProject);
        await this.page.waitForTimeout(2000);
        await this.project.selectOption(project);
        await this.page.waitForTimeout(2000);
        await this.feature.selectOption(feature);
        await this.page.waitForTimeout(2000);
        await this.getTicket.click();
        await this.page.waitForTimeout(2000);
        await this.ticketId.selectOption(ticketId);
        await this.description.fill(description);
        await this.complexity.selectOption(complexity);
        await this.assignedUser.selectOption(assignedUser);
        await this.page.waitForTimeout(2000);
        await this.priority.selectOption(priority);
        await this.remarks.fill(remarks);
        await this.dueDate.click();
        await this.dueDateHighlighted.click();
    }

    async clickSaveOnTicket() {
        await this.saveButton.click();
    }

    async verifyClickConfirmMsg() {
        this.page.on('dialog', async (messageDesc) => {
            expect(messageDesc.message()).toContain(confirmationMessage);
            await messageDesc.accept();
        })
    }
}
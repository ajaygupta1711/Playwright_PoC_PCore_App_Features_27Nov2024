import { } from "@playwright/test";

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
        this.saveButton = this.mainFrame.locator("//*[@id='btnSave']");
        this.dueDate = this.mainFrame.locator("//*[@title='Select from date']");
    }

    // Methods

    async addAssignTicketScreen(masterProject, project, feature, ticketId, description, complexity, assignedUser, priority, remarks) {
        await this.masterProject.selectOption(masterProject);
        await this.page.waitForTimeout(2000);
        await this.project.selectOption(project);
        await this.page.waitForTimeout(2000);
        await this.feature.selectOption(feature);
        await this.page.waitForTimeout(2000);
        await this.getTicket.click();
        await this.page.waitForTimeout(2000);
        await this.ticketId.selectOption(ticketId);
        await this.page.waitForTimeout(2000);
        await this.description.fill(description);
        await this.page.waitForTimeout(2000);
        await this.complexity.selectOption(complexity);
        await this.page.waitForTimeout(2000);
        await this.assignedUser.selectOption(assignedUser);
        await this.page.waitForTimeout(2000);
        await this.priority.selectOption(priority);
        await this.page.waitForTimeout(2000);
        await this.remarks.fill(remarks);
        //await this.dueDate.click(); // Pending for current date selection
        await this.saveButton.click();
    }
}
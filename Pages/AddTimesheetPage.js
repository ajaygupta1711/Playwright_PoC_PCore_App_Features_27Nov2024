import { } from "@playwright/test";

export class AddTimesheetPage {

    constructor(page) {
        // Locators
        this.page = page;
        this.mainFrame = page.frameLocator("//*[@name='main']");
        this.masterProject = this.mainFrame.locator("//*[@id='ddlMasterProject']");
        
    }

    // Methods

    async AddTimesheetScreen(masterProject, project, feature, ticketId, complexity, assignedUser, priority, remarks) {
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
        await this.page.waitForTimeout(3000);
        await this.assignedUser.selectOption(assignedUser);
        await this.page.waitForTimeout(3000);
        await this.priority.selectOption(priority);
        await this.page.waitForTimeout(3000);
        await this.remarks.fill(remarks);
        //await this.page.waitForTimeout(3000);
        //await this.dueDate.click(); // Pending for current date selection
        await this.page.waitForTimeout(3000);
        await this.saveButton.click();
        //await this.page.waitForTimeout(30000);
    }
}
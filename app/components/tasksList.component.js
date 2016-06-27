class TasksListController {
    constructor(tasksService) {
        this.tasks = tasksService.all();
    }
}

const tasksList = {
    controller: TasksListController,
    template: `
        <ol>
            <li ng-repeat="task in $ctrl.tasks">
                <task-item task="task"></task-item>
            </li>
        </ol>
    `
};

export default tasksList;

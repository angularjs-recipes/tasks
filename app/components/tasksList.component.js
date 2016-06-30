class TasksListController {
    /*@ngInject*/
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.tasks = tasksService.all();
    }

    onEdit(task) {
        this.tasksService.update(task.id, task.title);
        this.tasks = this.tasksService.all();
    }

    onDelete(task) {
        this.tasksService.delete(task);
        this.tasks = this.tasksService.all();
    }
}

const tasksList = {
    controller: TasksListController,
    template: `
        <h2 class="text-center">My Tasks List <a href="#/create" class="btn btn--success pull-right"><i class="fa fa-fw fa-plus"></i></a></h2>
        <hr>
        <h4 ng-if="!$ctrl.tasks.length" class="text-center">No tasks were found</h4>
        <ol ng-if="$ctrl.tasks.length">
            <li ng-repeat="task in $ctrl.tasks">
                <task-item task="task" on-delete="$ctrl.onDelete(task)" on-edit="$ctrl.onEdit(task)"></task-item>
            </li>
        </ol>
    `
};

export default tasksList;

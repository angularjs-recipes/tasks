class TasksAddController {
    /*@ngInject*/
    constructor(tasksService, $location) {
        this.tasksService = tasksService;
        this.$location = $location;
        this.newTask = {
            title: null
        };
    }

    submit(isValid) {
        if (isValid) {
            this.tasksService.put(this.newTask);
            this.newTask = {
                title: null
            };
            this.$location.path('/');
        }
    }
}

const tasksAdd = {
    controller: TasksAddController,
    template: `
        <h2 class="text-center">Add Task <a href="#/" class="pull-left btn btn--warning"><i class="fa fa-fw fa-chevron-left"></i></a></h2>
        <hr>
        <form name="$ctrl.addTaskForm" ng-submit="$ctrl.submit($ctrl.addTaskForm.$valid)">
            <input type="text" name="title" ng-model="$ctrl.newTask.title" class="form-control" placeholder="Enter task's title..." required />
            <button type="submit" class="btn btn--block btn--green form-control">Add</button>
        </form>
    `
};

export default tasksAdd;

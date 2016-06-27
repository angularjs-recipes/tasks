class TaskItemController {
    click() {
        console.log(this.task.title);
    }
}

const taskItem = {
    bindings: {
        task: '<'
    },
    controller: TaskItemController,
    template: `
        <a href="javascript:void(0)" ng-click="$ctrl.click()">
            {{ $ctrl.task.title }}
        </a>
    `
};

export default taskItem;

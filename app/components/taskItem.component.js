class TaskItemController {
    constructor() {
        this.editFlag = false;
        this.newTask = {
            title: this.task.title
        };
    }

    toggleEdit() {
        this.editFlag = !this.editFlag;
        this.newTask = {
            title: this.task.title
        };
    }

    save() {
        this.onEdit({
            task: {
                id: this.task.id,
                title: this.newTask.title
            }
        });
        this.editFlag = !this.editFlag;
    }

    delete() {
        this.onDelete(this.task);
    }
}

const taskItem = {
    bindings: {
        task: '<',
        onDelete: '&',
        onEdit: '&'
    },
    controller: TaskItemController,
    template: `
        <div class="task-item">
            <span class="task-item__title" ng-if="!$ctrl.editFlag">{{ $ctrl.task.title }}</span>
            <div class="pull-right" ng-if="!$ctrl.editFlag">
                <a href="javascript:void(0)" ng-click="$ctrl.toggleEdit()" class="btn btn--round btn--warning"><i class="fa fa-fw fa-pencil"></i></a>
                <a href="javascript:void(0)" ng-click="$ctrl.delete()" class="btn btn--round btn--danger"><i class="fa fa-fw fa-trash"></i></a>
            </div>

            <input ng-model="$ctrl.newTask.title" class="form-control task-item__editor" placeholder="Enter task's title..." ng-if="$ctrl.editFlag" />
            <div class="pull-right" ng-if="$ctrl.editFlag">
                <a href="javascript:void(0)" ng-click="$ctrl.save()" ng-disabled="!$ctrl.newTask.title" class="btn btn--round btn--success"><i class="fa fa-fw fa-check"></i></a>
                <a href="javascript:void(0)" ng-click="$ctrl.toggleEdit()" class="btn btn--round btn--danger"><i class="fa fa-fw fa-times"></i></a>
            </div>
        </div>
    `
};

export default taskItem;

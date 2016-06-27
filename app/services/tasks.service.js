class tasksService {
    constructor () {
        this.tasks = [
            {
                id: 1,
                title: 'Study hard'
            }, {
                id: 2,
                title: 'Master ES6'
            }
        ];
    }
    all() {
        return this.tasks;
    }

    get(id) {
        return this.tasks.find((task) => {
            return task.id == id;
        });
    }
}

export default tasksService;

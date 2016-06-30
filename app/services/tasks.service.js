class tasksService {
    all() {
        if (!angular.isDefined(localStorage.items)) {
            let items = [{
                id: 'as90e3',
                title: 'Study hard'
            }, {
                id: '89R341',
                title: 'Master ES6'
            }];
            this._save(items);
        }

        return angular.fromJson(localStorage.getItem('items'));
    }

    get(id) {
        return this.all().find(task => task.id == id);
    }

    put(item) {
        let items = this.all(),
        newItem = {
            id: this._randomID(6),
            title: item.title
        };
        items.push(newItem);
        this._save(items);
    }

    update(id, title) {
        let items = this.all(),
            item = items.find(task => task.id == id);
        item.title = title;
        this._save(items);
    }

    delete(item) {
        let items = this.all().filter(task => task.id != item.id);
        this._save(items);
    }

    _save(items) {
        localStorage.setItem('items', angular.toJson(items));
    }

    _randomID(length) {
        let result = '',
            chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    }
}

export default tasksService;

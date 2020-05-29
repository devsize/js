(function (ko) {
    const ChecklistViewModel = function (checkList) {
        const self = this;

        this.checklist = checkList;
        this.newTaskTitle = ko.observable('');
        this.tasks = ko.observableArray();
        this.completeTasks = ko.observableArray();

        this.addTask = function () {
            this.checklist.addTask(this.newTaskTitle());
            this.newTaskTitle(''); //очищаем
            this.tasks(this.checklist.tasks);
        };

        this.removeTask = function (taskObject, event) { //taskObject - это viewModel
            self.checklist.removeTask(taskObject.id);
            self.tasks(self.checklist.tasks); // обновляем tasks
        };

        this.checkTask = function (taskObject, event) {
            self.checklist.checkTask(taskObject.id);
            self.tasks(self.checklist.tasks);
            self.completeTasks(self.checklist.completeTasks);
        };

        this.undoTask = function (taskObject, event) {
            self.checklist.undoTask(taskObject.id);
            self.tasks(self.checklist.tasks);
            self.completeTasks(self.checklist.completeTasks);
        };
    };

    const Checklist = function () {
        this.tasks = [];
        this.completeTasks = [];

        this.addTask = function (taskTitle) {
            //db operations or
            //ajax requests

            this.tasks.push({
                id: this.tasks.length,
                title: taskTitle
            });
        };

        this.removeTask = function (id) {
            let tasksIndex = this.getIndexById(id, this.tasks);

            if (typeof tasksIndex !== 'undefined') {
                this.tasks.splice(tasksIndex, 1);
            }
        };

        this.checkTask = function (id) {
            let tasksIndex = this.getIndexById(id, this.tasks),
                task;

            if (typeof tasksIndex !== 'undefined') {
                task = this.tasks[tasksIndex];
                this.tasks.splice(tasksIndex, 1);
                this.completeTasks.push(task);
            }
        };

        this.undoTask = function (id) {
            let tasksIndex = this.getIndexById(id, this.completeTasks),
                task;

            if (typeof tasksIndex !== 'undefined') {
                task = this.completeTasks[tasksIndex];
                this.completeTasks.splice(tasksIndex, 1);
                this.tasks.push(task);
            }
        };

        this.getIndexById = function (id, tasks) {
            let index;

            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].id === id) {
                    index = i;
                    break;
                }
            }

            return index;
        }
    };

    const checkList = new Checklist();

    ko.applyBindings(new ChecklistViewModel(checkList), document.getElementById('todoList'))
})(ko);
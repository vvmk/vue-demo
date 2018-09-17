Vue.component('custom-display', {
    template: '<h1><slot></slot></h1>'
});

var app = new Vue({
    el: '#root',
    data: {
        newName: '',
        newTask: '',
        greeting: 'Hello World',
        names: ['Leo', 'Mikey', 'Raph', 'Don'],
        tasks: [
            { id: 1, description: 'Go to the store', completed: true },
            { id: 2, description: 'Take out the trash', completed: false },
            { id: 3, description: 'Organize the basement', completed: false },
            { id: 4, description: 'Finish the laundry', completed: false },
            { id: 5, description: 'Learn Vue', completed: false },
            { id: 6, description: 'Learn Laravel', completed: true },
            { id: 7, description: 'Replace electrical sockets', completed: true },
        ],
    },
    computed: {
        todoTasks() {
            return this.tasks.filter(task => !task.completed);
        },
        completedTasks() {
            return this.tasks.filter(task => task.completed);
        },
    },
    methods: {
        markCompleted(task) {
            const index = this.tasks.indexOf(task);
            this.tasks[index].completed = true;
        },
        addTask() {
            this.tasks.push({
                description: this.newTask, 
                completed: false
            });

            this.newTask = '';
        },
        addName() {
            this.names.push(this.newName);
            this.newName = '';
        },
        CtrlW() {
            console.log('Ctrl-W detected');
        },
    },
});

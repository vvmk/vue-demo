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
            { description: 'Go to the store', completed: true },
            { description: 'Take out the trash', completed: false },
            { description: 'Organize the basement', completed: false },
            { description: 'Finish the laundry', completed: false },
            { description: 'Learn Vue', completed: false },
            { description: 'Learn Laravel', completed: true },
            { description: 'Replace electrical sockets', completed: true },
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

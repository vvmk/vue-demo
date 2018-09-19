Vue.component('modal', {
    template: `<div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box">
                        <p>
                        <slot></slot>
                        </p>
                    </div>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="$emit('closed')"></button>
            </div>`
});

Vue.component('custom-display', {
    template: '<h1 class="title">The input value is <slot></slot></h1>',
});

Vue.component('task-list', {
    props: ['tasks', 'heading'],
    template: '<div><h3>{{ heading }}</h3><ul><task-item v-for="task in tasks" :task="task"></task-item></ul></div>',
});

Vue.component('task-item', {
    props: ['task'],
    template: '<li>{{ task.description }}</li>',
});

var app = new Vue({
    el: '#root',
    data: {
        showModal: false,
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

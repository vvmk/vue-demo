window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }

}

Vue.component('coupon-input', {
    props: ['value'],
    template: `
        <input id="customCouponInput" type="text" :value="value" @input="updateCode($event.target.value)" ref="input">
    `,
    data() {
        return {
            invalidCodes: [
                'ALLFREE',
                'JUNE',
            ]
        }
    },
    methods: {
        updateCode(code) {
            // Validation
            if (this.invalidCodes.includes(code)) {
                alert('This coupon is no longer valid');

                this.$refs.input.value = 'code';
            }

            // emit the input event required to use v-model
            this.$emit('input', code);
        }
    },
});


// example of an in-line template
Vue.component('progress-view', {
    data() {
        return { completion: '50%' };
    },
});


Vue.component('coupon', {
    template: '<input type="text" placeholder="Enter your coupon code here" @blur="onCouponApplied" />',
    methods: {
        onCouponApplied() {
            Event.fire('applied');
        },
    },
});

Vue.component('tabs', {
    template: `
<div>
    <div class="tabs">
        <ul>
            <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
            </li>
        </ul>
    </div>

    <div class="tabs-details">
        <slot></slot>
    </div>
</div>`,
    mounted() {
        console.log('tabs children: ', this.$children);
    },
    data() {
        return {
            tabs: [],
        }
    },
    created() {
        this.tabs = this.$children;
        Event.listen('applied', () => {
            this.couponApplied = true;
            //alert('Handling it!');
        });
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        },
    },
});

Vue.component('tab', {
    props: {
        name: { required: true },
        selected: { default: false },
    },
    template: `<div v-show="isActive"><slot></slot></div>`,
    data() {
        return {
            isActive: false,
        }
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        },
    },
    mounted() {
        this.isActive = this.selected;
    },
});

Vue.component('modal', {
    template: `<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">

        <slot name="header"></slot>

      </p>
      <button class="delete" aria-label="close" @click="$emit('closed')"></button>
    </header>
    <section class="modal-card-body">
        <slot name="content"></slot>
    </section>
    <footer class="modal-card-foot">
    <slot name="footer">
      <button class="button">Ok!</button>
    </slot>
    </footer>
  </div>
</div>`
});

Vue.component('custom-display', {
    template: '<h1 class="title">The input value is <slot></slot></h1>',
});

Vue.component('task-list', {
    props: ['tasks', 'heading'],
    template: `<div>
        <h3>{{ heading }}</h3>
        <ul>
            <task-item v-for="task in tasks" :task="task"></task-item>
        </ul>
    </div>`,
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
        couponCode: 'FREEBIE',
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
        onCouponApplied() {
            alert('coupon applied!');
        },
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

class Errors {
  constructor() {
    this.errors = {}
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  record(errors) {
    this.errors = errors;
  }

  clear(field) {
    this.errors[field] = null;
  }
}

new Vue({
  el: '#form',

  data: {
    name: '',
    description: '',
    skills: [],
    errors: new Errors(),
  },

  methods: {
    onSubmit() {
      axios.post('/projects', {
        name: this.name,
        description: this.description,
      })
      .then(response => alert('success'))
      .catch(error => this.errors.record(error.response.data.errors));
    },
  },

  mounted() {
    axios.get('/skills').then(response => this.skills = response.data);
  },
});

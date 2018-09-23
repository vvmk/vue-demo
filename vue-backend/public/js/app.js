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
    delete this.errors[field];
  }

  has(field) {
    return !!this.errors[field];
  }

  any() {
    return Object.keys(this.errors).length > 0;
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
      .then(response => this.onSuccess(response))
      .catch(error => this.errors.record(error.response.data.errors));
    },

    onSuccess(response) {
      alert(response.data.message);

      this.name = '';
      this.description = '';
    },
  },

  mounted() {
    axios.get('/skills').then(response => this.skills = response.data);
  },
});

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
    if (field) delete this.errors[field];
    else
      this.errors = {};
  }

  has(field) {
    return !!this.errors[field];
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }
}

class Form {
  constructor(data) {
    this.data = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors =  new Errors();
  }

  submit(requestType, url) {

    axios[requestType](url, this)
      .then(response => this.onSuccess(response))
      .catch(error => this.onFail(error));
  }

  onSuccess(response) {
    alert(response.data.message);

    this.clearErrors();
    this.reset();
  }

  onFail(error) {
    this.errors.record(error.response.data.errors);
  }

  clearErrors(field) {
    this.errors.clear(field);
  }

  reset() {
    for (let k in this.data) {
      delete this.data[k];
    }
  }

}

new Vue({
  el: '#form',

  data: {
    skills: [],
    form: new Form({
      name: '',
      description: '',
    }),
  },

  methods: {
    onSubmit() {
      this.form.submit('post', '/projects');
    },
  },

  mounted() {
    axios.get('/skills').then(response => this.skills = response.data);
  },
});

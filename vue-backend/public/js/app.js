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
    if (field) {
      delete this.errors[field];

      return;
    }

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
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors =  new Errors();
  }

  submit(requestType, url) {
    return new Promise((resolve, reject) => {

      axios[requestType](url, this.requestBody)
        .then(response => {
          const d = response.data;

          this.onSuccess(d);

          resolve(d);
        }).catch(error => {
          const e = error.response.data.errors;

          this.onFail(e);

          reject(e);
        });
    });
  }

  onSuccess(data) {
    alert(data.message);

    this.reset();
  }

  onFail(error) {
    this.errors.record(error);
  }

  clearErrors(field) {
    this.errors.clear(field);
  }


  get requestBody() {
    let d = {};

    for (const prop in this.originalData) {
      d[prop] = this[prop];
    }

    return d;
  }

  reset() {
    for (let k in this.originalData) {
      this[k] = '';
    }

    this.clearErrors();
  }

  post(url) {
    return this.submit('post', url);
  }

  delete(url) {
    return this.submit('delete', url);
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
      this.form.post('/projects')
        .then(response => console.log(response))
        .catch(errors => console.log(errors));
    },
  },

  mounted() {
    axios.get('/skills').then(response => this.skills = response.data);
  },
});

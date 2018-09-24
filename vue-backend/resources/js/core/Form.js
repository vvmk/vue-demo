import Errors from './Errors.js';

export class Form {
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


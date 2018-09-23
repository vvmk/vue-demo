new Vue({
  el: '#form',

  data: {
    name: '',
    description: '',
    skills: [],
  },

  methods: {
    onSubmit() {
      axios.post('/projects', {
        name: this.name,
        description: this.description,
      });
    },
  },

  mounted() {
    axios.get('/skills').then(response => this.skills = response.data);
  },
});

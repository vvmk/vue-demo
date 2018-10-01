<template>
    <div class="message">
        <div class="message-header">
            Push to the Stream...
        </div>

        <div class="message-body">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <p class="control">
                    <textarea class="textarea" placeholder="I have something to say..." v-model="form.body" @keydown="form.clearErrors()"></textarea>
                    <span class="help is-danger" 
                          v-if="form.errors.has('body')" 
                          v-text="form.errors.get('body')"></span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                    <button :disabled="form.errors.any()" class="button is-primary">Submit</button>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({ body: "" })
        };
    },
    methods: {
        onSubmit() {
            this.form
                .post("/statuses")
                .then(status => this.$emit("completed", status));
        }
    }
};
</script>

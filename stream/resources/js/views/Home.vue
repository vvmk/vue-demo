<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                        {{ status.user.name }} said...
                        </p>

                        <p>
                        {{ status.createdAt | ago | capitalize }}
                        </p>
                    </div>
                    <div class="message-body" v-text="status.body">
                    </div>
                </div>

                <add-to-stream @completed="addStatus"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import Status from "../models/Status";
import AddToStream from "../components/AddToStream";

export default {
    components: {
        AddToStream
    },
    data() {
        return {
            statuses: []
        };
    },
    created() {
        Status.all(statuses => (this.statuses = statuses));
    },
    methods: {
        postedOn(status) {
            return moment(status.created_at).fromNow();
        },
        addStatus(status) {
            this.statuses.unshift(status);

            alert("status added");

            window.scrollTo(0, 0);
        }
    },
    mounted() {
        console.log("Component mounted.");
    },
    filters: {
        ago(date) {
            return moment(date).fromNow();
        },
        capitalize(value) {
            return value.toUpperCase();
        }
    }
};
</script>

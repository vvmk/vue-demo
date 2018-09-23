@extends ('layouts.master')
@section ('content')
@include ('projects.list')
<div id="form">
    <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
        @csrf
        <div class="field">
            <label class="label" for="name">Name</label>
            <div class="control">
                <input class="input" id="name" type="text" name="name" v-model="name" >

                <span class="help is-danger" v-if="errors.has('name')" v-text="errors.get('name')"></span>
            </div>
        </div>
        <div class="field">
            <label class="label" for="description">Description</label>
            <div class="control">
                <input class="input" id="description" type="text" name="description" v-model="description" >

                <span class="help is-danger" v-if="errors.has('description')" v-text="errors.get('description')"></span>
            </div>
        </div>
        <button class="button is-primary" type="submit" :disabled="errors.any()">Create</button>
    </form>
</div>
@endsection

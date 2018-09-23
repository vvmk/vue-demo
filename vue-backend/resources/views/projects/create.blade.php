@extends ('layouts.master')
@section ('content')
<div id="form">
    <form method="POST" action="/projects" @submit.prevent="onSubmit">
        @csrf
        <div class="field">
            <label class="label" for="name">Name</label>
            <div class="control">
                <input class="input" id="name" type="text" name="name" v-model="name">
            </div>
        </div>
        <div class="field">
            <label class="label" for="description">Description</label>
            <div class="control">
                <input class="input" id="description" type="text" name="description" v-model="description">
            </div>
        </div>
        <button class="button is-primary" type="submit">Create</button>
    </form>
</div>
@endsection

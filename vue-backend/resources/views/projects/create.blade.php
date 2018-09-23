@extends ('layouts.master')
@section ('content')
<div>
    <form method="POST" action="/projects">
        @csrf
        <div class="field">
            <label class="label" for="name">Name</label>
            <div class="control">
                <input class="input" id="name" type="text" name="name">
            </div>
        </div>
        <div class="field">
            <label class="label" for="description">Description</label>
            <div class="control">
                <input class="input" id="description" type="text" name="description">
            </div>
        </div>
        <button class="button" type="submit">Create</button>
    </form>
</div>
@endsection

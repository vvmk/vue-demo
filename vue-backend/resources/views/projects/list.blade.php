<ul>
    @foreach ($projects as $project)
    <li>
        <div class="box">
        <h3 class="heading is-size-5 has-text-weight-bold">{{ $project->name }} :</h3><small>{{ $project->description }}</small>
        </div>
    </li>
    @endforeach
</ul>

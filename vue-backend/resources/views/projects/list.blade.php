<ul class="my-3">
    @foreach ($projects as $project)
    <li class="project-card my-2">
        <div class="card">
        <header class="card-header">
            <p class="card-header-title">{{ $project->name }}</p>
        </header>
        <div class="card-content">
            <div class="content">{{ $project->description }}</div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" href="#">Complete</a>
            <a class="card-footer-item" href="#">Edit</a>
            <a class="card-footer-item" href="#">Delete</a>
        </footer>
    </li>
    @endforeach
</ul>

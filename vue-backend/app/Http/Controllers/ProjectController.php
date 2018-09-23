<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Project;

class ProjectController extends Controller
{
    public function create() {
        return view('projects.create', [
            'projects' => Project::all()
        ]);
    }

    public function store(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
        ]);

        Project::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return ['message' => 'Project Created!'];
        /* return redirect()->route('home'); */
    }
}

<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel + Vue Demo</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css" />

        <style>
html, body {
    background-color: #fff;
    color: #636b6f;
    font-family: 'Nunito', sans-serif;
    font-weight: 200;
    height: 100vh;
    margin: 0;
}

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div id="app" class="container">
            <form method="POST" action="/projects" @submit.prevent="onSubmit()" @keydown="form.clearErrors($event.target.name)">
                @csrf
                <div class="field">
                    <label class="label" for="name">Name</label>
                    <div class="control">
                        <input class="input" id="name" type="text" name="name" v-model="form.name" >

                        <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="description">Description</label>
                    <div class="control">
                        <input class="input" id="description" type="text" name="description" v-model="form.description" >

                        <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
                    </div>
                </div>
                <button class="button is-primary" type="submit" :disabled="form.errors.any()">Create</button>
            </form>
        </div>

        @include ('projects.list')

        <script src="/js/app.js"></script>
    </body>
</html>

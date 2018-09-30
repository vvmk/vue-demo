<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Stream App</title>

        <link rel="stylesheet" href="./css/app.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css" />
    </head>
    <body>

        <div id="app">

            @include ('layouts.header')

            <section class="section">
                <div class="container">
                    <router-view></router-view>
                </div>
            </section>
        </div>

        <script src="./js/app.js"></script>
    </body>
</html>

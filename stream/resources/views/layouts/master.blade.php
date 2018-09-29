<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Stream App</title>

        <link rel="stylesheet" href="./css/app.css">
    </head>
    <body>
        <div id="app">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <script src="./js/app.js"></script>
    </body>
</html>

<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/app.css">

        <title>豆瓣App</title>
    </head>
    <body>
        <div class="container-fluid" id="app">
            <div class="row">
                <div class="col-md-12">
                    <navbar></navbar>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <router-view></router-view>  
                </div>
            </div>
        </div>
    </body>
    <script src="./js/app.js"></script>
</html>

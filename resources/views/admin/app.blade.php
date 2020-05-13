<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Uni Online Administration</title>

    <!-- BASE CSS -->
    <link href="{{mix('dist/css/admin-app.css')}}" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" type="image/png" href="{{asset('images/favicon.ico')}}"/>

    <!-- Page CSS -->
    @stack('styles')

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <div class="pt-2">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div class="container">
                <span class="navbar-brand">
                    ادارة المستخدمين
                </span>
                <a class="btn btn-sm btn-dark" href="#">
                    الخروج
                </a>
            </div>
        </nav>
    </div>
    <div class="container pt-5">
        <div class="row">
            <div class="col-12">
                @yield('content')
            </div>
        </div>
    </div>


    <script src="{{ mix('dist/js/admin-app.js') }}"></script>
    <script src="{{ asset('buttons.server-side.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
    @stack('scripts')
</body>
</html>

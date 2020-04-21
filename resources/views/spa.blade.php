<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>{{ config('app.name') }}</title>
  <link rel="stylesheet" href="/dist/css/app.css">
</head>
<body class="show-spinner">
  <div id="app"></div>

  {{-- Global configuration object --}}
  <script>
    window.config = {"appName":"Uni Registration","locale":"ar","locales":{"ar":"ar"}};;
  </script>

  {{-- Load the application scripts --}}
  <script src="/dist/js/app.js"></script>
</body>
</html>

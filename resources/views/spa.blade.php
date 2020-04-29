<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>{{ config('app.name') }}</title>
  <link rel="stylesheet" href="{{ mix('/dist/css/app.css')}}">
  <link rel="shortcut icon" href="/images/favicon.ico" />
</head>
<body id="app-container" class="menu-hidden show-spinner" style="padding-bottom: 50px">
  <div id="app"></div>

  {{-- Global configuration object --}}
  <script>
    window.config = {"appName":"Uni Portal","locale":"ar","locales":{"ar":"ar"}};
  </script>

  {{-- Load the application scripts --}}
  <script src="https://cdn.rawgit.com/cretueusebiu/412715093d6e8980e7b176e9de663d97/raw/aea128d8d15d5f9f2d87892fb7d18b5f6953e952/objectToFormData.js"></script>
  <script src="{{ mix('/dist/js/app.js') }}"></script>
</body>
</html>

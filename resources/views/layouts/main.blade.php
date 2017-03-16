<!DOCTYPE html>
<html>
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
<head>
    <title>Pack-Smart Inc. | @yield('title')</title>
    @include('partials.head_meta')
    @include('partials.head_scripts')
</head>

<body class="body en at page--674518">

@include('partials.NOT_USED')

<div id="ptr">
    <!-- Pull down arrow indicator -->
    <span class="genericon genericon-next"></span>

    <!-- CSS-based loading indicator -->
    <div class="loading">
        <span id="l1"></span>
        <span id="l2"></span>
        <span id="l3"></span>
    </div>
</div>

<div id="content">
    @include('partials.navigation')

    @yield('content')

    @include('partials.footer', ['copyright' => 'Pack-Smart Inc. 2017. All Rights Reserved'])
</div>

@include('partials.footer_scripts')

</body>
</html>

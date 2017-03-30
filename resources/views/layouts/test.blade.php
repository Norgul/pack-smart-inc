<!DOCTYPE html>
<html>
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
<head>
    <title>Pack-Smart Inc. | @yield('title')</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"/>
    <meta http-equiv="content-language" content="en"/>
    <meta name="language" content="en"/>
    <meta name="author" content="Pack-Smart Inc."/>
    <meta http-equiv="X-UA-Compatible" content="IE=11"/>

    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}"/>
    <link rel="stylesheet" href="{{asset('css/font-awesome.css')}}"/>
    <link rel="stylesheet" href="{{asset('css/animate.css')}}"/>
    <link rel="stylesheet" href="{{asset('css/carousel.css')}}"/>

    <script src="{{asset('js/jquery-3.1.1.min.js')}}" defer></script>
    <script src="{{asset('js/bootstrap.min.js')}}" defer></script>
    <script src="{{asset('js/carousel.js')}}" defer></script>
</head>
<body>


@yield('content')

<section class="footer section  section--green">
    <div class="uk-container uk-container-center">
        <div class="section__inside">
            <div class="paragraph  uk-margin-top uk-margin-bottom uk-text-center" style="color:#FFFFFF;">
                <p>Pack-Smart Inc. 2017. All Rights Reserved</p>
            </div>
        </div>
    </div>
</section>

</body>
</html>

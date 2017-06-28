@extends('layouts.main')
@section('title', 'Solutions')

@section('content')

    @include('sections.labeling_cartwheel')

    <section id="carousel">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="quote"><i class="fa fa-quote-left fa-4x"></i></div>
                    <div class="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval="3000">
                        <!-- Carousel indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#fade-quote-carousel" data-slide-to="0"></li>
                            <li data-target="#fade-quote-carousel" data-slide-to="1"></li>
                            <li data-target="#fade-quote-carousel" data-slide-to="2" class="active"></li>
                            <li data-target="#fade-quote-carousel" data-slide-to="3"></li>
                            <li data-target="#fade-quote-carousel" data-slide-to="4"></li>
                            <li data-target="#fade-quote-carousel" data-slide-to="5"></li>
                        </ol>
                        <!-- Carousel items -->
                        <div class="carousel-inner">
                            <div class="item">
                                <div class="profile-circle" style="background-color: rgba(0,0,0,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                            <div class="item">
                                <div class="profile-circle" style="background-color: rgba(77,5,51,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                            <div class="active item">
                                <div class="profile-circle" style="background-color: rgba(145,169,216,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                            <div class="item">
                                <div class="profile-circle" style="background-color: rgba(77,5,51,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                            <div class="item">
                                <div class="profile-circle" style="background-color: rgba(77,5,51,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                            <div class="item">
                                <div class="profile-circle" style="background-color: rgba(77,5,51,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="quote"><i class="fa fa-quote-left fa-4x"></i></div>
                    <div class="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval="3000">
                        <!-- Carousel indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#fade-quote-carousel" data-slide-to="0"></li>
                            <li data-target="#fade-quote-carousel" data-slide-to="1"></li>
                            <li data-target="#fade-quote-carousel" data-slide-to="2" class="active"></li>
                            <li data-target="#fade-quote-carousel" data-slide-to="3"></li>
                            <li data-target="#fade-quote-carousel" data-slide-to="4"></li>
                            <li data-target="#fade-quote-carousel" data-slide-to="5"></li>
                        </ol>
                        <!-- Carousel items -->
                        <div class="carousel-inner">
                            <div class="item">
                                <div class="profile-circle" style="background-color: rgba(0,0,0,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                            <div class="item">
                                <div class="profile-circle" style="background-color: rgba(77,5,51,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                            <div class="active item">
                                <div class="profile-circle" style="background-color: rgba(145,169,216,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                            <div class="item">
                                <div class="profile-circle" style="background-color: rgba(77,5,51,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                            <div class="item">
                                <div class="profile-circle" style="background-color: rgba(77,5,51,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                            <div class="item">
                                <div class="profile-circle" style="background-color: rgba(77,5,51,.2);"></div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla
                                        eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque
                                        molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div class="container">

        <div class="col-lg-12 text-center">
            <h1>Why should you care</h1>
        </div>
        <br><br><br><br><br><br>
        <div class="row">
            <div class="col-lg-6">
                <div class="col-lg-9">
                    text
                </div>
                <div class="col-lg-3">
                    picture
                </div>
            </div>
            <div class="col-lg-6">
                <div class="col-lg-3">
                    picture
                </div>
                <div class="col-lg-9">
                    text
                </div>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-6">
                <div class="col-lg-9">
                    text
                </div>
                <div class="col-lg-3">
                    picture
                </div>
            </div>
            <div class="col-lg-6">
                <div class="col-lg-3">
                    picture
                </div>
                <div class="col-lg-9">
                    text
                </div>
            </div>
        </div>
        <br><br>
    </div>


    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection


@section('extra_scripts')

    <style>
        /*-------------------------------*/
        /*      Code snippet by          */
        /*

        @maridlcrmn                */
        /*-------------------------------*/

        section {
            padding-top: 100px;
            padding-bottom: 100px;
        }

        .quote {
            color: rgba(0, 0, 0, .1);
            text-align: center;
            margin-bottom: 30px;
        }

        /*-------------------------------*/
        /*    Carousel Fade Transition   */
        /*-------------------------------*/

        #fade-quote-carousel.carousel {
            padding-bottom: 60px;
        }

        #fade-quote-carousel.carousel .carousel-inner .item {
            opacity: 0;
            -webkit-transition-property: opacity;
            -ms-transition-property: opacity;
            transition-property: opacity;
        }

        #fade-quote-carousel.carousel .carousel-inner .active {
            opacity: 1;
            -webkit-transition-property: opacity;
            -ms-transition-property: opacity;
            transition-property: opacity;
        }

        #fade-quote-carousel.carousel .carousel-indicators {
            bottom: 10px;
        }

        #fade-quote-carousel.carousel .carousel-indicators > li {
            background-color: #e84a64;
            border: none;
        }

        #fade-quote-carousel blockquote {
            text-align: center;
            border: none;
        }

        #fade-quote-carousel .profile-circle {
            width: 100px;
            height: 100px;
            margin: 0 auto;
            border-radius: 100px;
        }
    </style>
@stop
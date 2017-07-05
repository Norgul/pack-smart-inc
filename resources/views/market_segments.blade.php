@extends('layouts.main')
@section('title', 'Market segments')

@section('content')

    @include('sections.labeling_cartwheel')

    <section id="section-market_segments">
        <div class="uk-grid">
            <div class="uk-width-large-1-10">
            </div>
            <div class="uk-width-large-8-10">
                <div class="uk-grid" data-uk-grid-margin>
                    <div class="uk-width-large-2-10">
                    </div>
                    <div class="uk-width-large-6-10">
                        <h3 style="text-align: center; margin-top: 50px; ">Secure Payment, Identification and Telco</h3>
                    </div>
                    <div class="uk-width-large-2-10">
                    </div>
                </div>
                <div class="uk-grid" data-uk-grid-margin>
                    <div class="uk-width-small-1-10 uk-width-medium-1-10 uk-width-large-1-10">
                    </div>
                    <div class="uk-width-small-8-10 uk-width-medium-8-10 uk-width-large-8-10 uk-container-center"
                         style="padding-top: 25px; padding-bottom: 25px;">
                        <div class="uk-grid" data-uk-grid-margin>
                            <div class="uk-width-large-3-10">
                                <img src="{{asset('images/market_segments/ABM-exit-with-cards.png')}}">
                            </div>
                            <div class="uk-width-large-7-10" style="padding-top: 10px;padding-bottom: 10px;">
                                <p style="font-size: 20px; text-align: justify;">Pack-Smart's innovative solutions for
                                    the personalization and packaging of cards and documents in the Banking,
                                    Prepaid Gift Card and SIM Card industries are recognized world-wide for an approach
                                    that achieves complete automation
                                    and traceability with 0%-defect manufacturing. We offer systems with in-line duplex
                                    personalization (ink-Jet,
                                    Mag Stripe and Chip Encoding), labeling, carrier personalization and multiple fold
                                    and closure solutions. Our
                                    proprietary affixing systems with +/- placement tolerances of .018" and run speeds
                                    of 17,000 UPH (standard CR80 Card)
                                    are unmatched in the industry and recognized as the true best-in-class solution for
                                    speed and accuracy.</p>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-small-1-10 uk-width-medium-1-10 uk-width-large-1-10">
                    </div>
                </div>
            </div>
            <div class="uk-width-large-1-10">
            </div>
        </div>

        <div class="uk-grid">
            <div class="uk-width-large-1-10">
            </div>
            <div class="uk-width-large-8-10 uk-container-center">
                <div class="uk-grid" data-uk-grid-margin>
                    <div class="uk-width-small-1-10 uk-width-medium-1-10 uk-width-large-1-10">
                    </div>
                    <div class="uk-width-small-8-10 uk-width-medium-8-10 uk-width-large-8-10 uk-container-center"
                         style="padding-top: 25px; padding-bottom: 25px;">
                            <div class="uk-grid" data-uk-grid-margin style="margin-left: 20px;">
                                <div class="uk-container-center" style="display: flex;padding-left: 0;">
                                    <h3 class="uk-container-center" style="display: inline-block;text-align: center;margin-bottom: 50px;text-transform: uppercase;
                                    background-color: red;padding: 5px;padding-top: 20px;color: white;font-weight: bold;">
                                        Pack-smart advantage
                                    </h3>
                                </div>
                            </div>
                        <div class="uk-grid" data-uk-grid-margin style="margin-left: 20px;">
                            <div class="uk-width-large-1-3" style="padding-right:35px;">
                                <h4 style="font-weight: 900;">Personalization</h4>
                                <ul>
                                    <li>Duplex DOD with resolutions up to 600dpi</li>
                                    <li>Multiple applications of labels and scratch offs</li>
                                    <li>Mag stripe and chip encoding</li>
                                </ul>
                            </div>
                            <div class="uk-width-large-1-3 verticalBorders" style="
                            padding-right:35px;
                        ">
                                <h4 style="font-weight: 900;">Data Capturing & Tracking</h4>
                                <ul>
                                    <li>Multiple glue and fold configurations</li>
                                    <li>Placement accuracy for card and internal package components of .018"</li>
                                    <li>Production of multipack (multiple card packages)</li>
                                    <li>Complete in-line data verification and back-end reporting</li>
                                </ul>
                            </div>
                            <div class="uk-width-large-1-3" style="padding-right:35px;">
                                <h4 style="font-weight: 900;">Security</h4>
                                <ul>
                                    <li>Multiple secure sealing capabilities</li>
                                    <li>With active and Intelligent Packaging</li>
                                    <li>Components Available</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-small-1-10 uk-width-medium-1-10 uk-width-large-1-10">
                    </div>
                </div>
            </div>
            <div class="uk-width-large-1-10">
            </div>
        </div>

        {{--
        <div class="uk-grid" data-uk-grid-margin>
            <div class="uk-width-large-1-10"></div>
            <div class="uk-width-large-8-10">
                <div class="uk-grid uk-grid-collapse" data-uk-grid-margin>
                    <div class="uk-width-small-1-10 uk-width-medium-1-10 uk-width-large-1-10"></div>
                    <div class="uk-width-small-8-10 uk-width-medium-8-10 uk-width-large-8-10 uk-container-center"
                         style="padding-top: 25px; padding-bottom: 25px;">
                        <div class="uk-slidenav-position" data-uk-slider style="height: inherit;">
                            <div class="uk-slider-container" style="padding: 20px;">
                                <ul class="uk-slider uk-grid uk-grid-width-medium-1-3  uk-grid-width-large-1-5">
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="0"
                                            class="uk-slide-before hvr-grow">
                                            <img src="{{asset('images/market_segments/market_segment_1.png')}}"
                                                 draggable="true">
                                            <p>market_segment_1</p>
                                        </li>
                                    </a>
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="1"
                                            class="uk-slide-before hvr-grow">
                                            <img src="{{asset('images/market_segments/market_segment_2.png')}}"
                                                 draggable="true">
                                            <p>market_segment_2</p>
                                        </li>
                                    </a>
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="2"
                                            class="hvr-grow">
                                            <img src="{{asset('images/market_segments/market_segment_3.png')}}"
                                                 draggable="true">
                                            <p>market_segment_3</p>
                                        </li>
                                    </a>
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="3"
                                            class="uk-slide-after hvr-grow">
                                            <img src="{{asset('images/market_segments/market_segment_4.png')}}"
                                                 draggable="true">
                                            <p>market_segment_4</p>
                                        </li>
                                    </a>
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="4"
                                            class="uk-slide-after hvr-grow">
                                            <img src="{{asset('images/market_segments/market_segment_5.png')}}"
                                                 draggable="true">
                                            <p>market_segment_5</p>
                                        </li>
                                    </a>
                                </ul>

                                <a href="#"
                                   class="uk-slidenav uk-slidenav-contrast-labeling uk-slidenav-previous uk-slidenav-labeling"
                                   data-uk-slider-item="previous" draggable="false"></a>
                                <a href="#"
                                   class="uk-slidenav uk-slidenav-contrast-labeling uk-slidenav-next uk-slidenav-labeling"
                                   data-uk-slider-item="next" draggable="false"></a>

                            </div>
                        </div>
                    </div>
                    <div class="uk-width-small-1-10 uk-width-medium-1-10 uk-width-large-1-10"></div>
                </div>
                <div class="uk-width-large-1-10"></div>
            </div>
        </div>
        <div class="uk-grid" data-uk-grid-margin style="margin-top: -70px;">
            <div class="uk-width-large-1-10"></div>
            <div class="uk-width-large-8-10">
                <div class="uk-grid uk-grid-collapse" data-uk-grid-margin>
                    <div class="uk-width-small-1-10 uk-width-medium-1-10 uk-width-large-1-10"></div>
                    <div class="uk-width-small-8-10 uk-width-medium-8-10 uk-width-large-8-10 uk-container-center"
                         style="padding-top: 25px; padding-bottom: 25px;">
                        <div class="uk-slidenav-position" data-uk-slider style="height: inherit;">
                            <div class="uk-slider-container" style="padding: 20px;">
                                <ul class="uk-slider uk-grid uk-grid-width-medium-1-3  uk-grid-width-large-1-5">
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="0"
                                            class="uk-slide-before hvr-grow">
                                            <img src="{{asset('images/market_segments/market_sub_seg_1.png')}}"
                                                 draggable="true">
                                            <p>market_sub_seg_1</p>
                                        </li>
                                    </a>
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="1"
                                            class="uk-slide-before hvr-grow">
                                            <img src="{{asset('images/market_segments/market_sub_seg_2.png')}}"
                                                 draggable="true">
                                            <p>market_sub_seg_2</p>
                                        </li>
                                    </a>
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="2"
                                            class="hvr-grow">
                                            <img src="{{asset('images/market_segments/market_sub_seg_3.png')}}"
                                                 draggable="true">
                                            <p>market_sub_seg_3</p>
                                        </li>
                                    </a>
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="3"
                                            class="uk-slide-after hvr-grow">
                                            <img src="{{asset('images/market_segments/market_sub_seg_4.png')}}"
                                                 draggable="true">
                                            <p>market_sub_seg_4</p>
                                        </li>
                                    </a>
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="4"
                                            class="uk-slide-after hvr-grow">
                                            <img src="{{asset('images/market_segments/market_sub_seg_5.png')}}"
                                                 draggable="true">
                                            <p>market_sub_seg_5</p>
                                        </li>
                                    </a>
                                    <a href="#" class="slider-li">
                                        <li data-slider-slide="5"
                                            class="uk-slide-after hvr-grow">
                                            <img src="{{asset('images/market_segments/market_sub_seg_6.png')}}"
                                                 draggable="true">
                                            <p>market_sub_seg_6</p>
                                        </li>
                                    </a>
                                </ul>

                                <a href="#"
                                   class="uk-slidenav uk-slidenav-contrast-labeling uk-slidenav-previous uk-slidenav-labeling"
                                   data-uk-slider-item="previous" draggable="false"></a>
                                <a href="#"
                                   class="uk-slidenav uk-slidenav-contrast-labeling uk-slidenav-next uk-slidenav-labeling"
                                   data-uk-slider-item="next" draggable="false"></a>

                            </div>
                        </div>
                    </div>
                    <div class="uk-width-small-1-10 uk-width-medium-1-10 uk-width-large-1-10"></div>
                </div>
                <div class="uk-width-large-1-10"></div>
            </div>
        </div>
        --}}
    </section>

    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection

@section('extra_scripts')

    <style>
    .verticalBorders {
            border-left: solid;
            border-left-width: 2px;
            border-left-color: grey;
            border-right: solid;
            border-right-width: 2px;
            border-right-color: grey;
        }
    @media (max-width:960px){
        .verticalBorders {
            border-left: none;
            border-right: none;
        }
    }​
    @media (min-width:960px){
        .verticalBorders {
            border-left: solid;
            border-left-width: 2px;
            border-left-color: grey;
            border-right: solid;
            border-right-width: 2px;
            border-right-color: grey;
        }
    }​
    </style>

    <style>
        section {
            padding-top: 100px;
            padding-bottom: 100px;
        }

        p {
            text-align: justify;
        }

        .quote {
            color: rgba(0, 0, 0, .1);
            text-align: center;
            margin-bottom: 30px;
        }

        /*-------------------------------*/
        /*    Carousel Fade Transition   */
        /*-------------------------------*/

        .carousel {
            padding-bottom: 60px;
        }

        .carousel .carousel-inner .item {
            opacity: 0;
            -webkit-transition-property: opacity;
            -ms-transition-property: opacity;
            transition-property: opacity;
        }

        .carousel .carousel-inner .active {
            opacity: 1;
            -webkit-transition-property: opacity;
            -ms-transition-property: opacity;
            transition-property: opacity;
        }

        .carousel .carousel-indicators {
            bottom: 10px;
        }

        .carousel .carousel-indicators > li {
            background-color: #e84a64;
            border: none;
        }

        blockquote {
            text-align: center;
            border: none;
        }

        .profile-circle {
            width: 100px;
            height: 100px;
            margin: 0 auto;
            border-radius: 100px;
        }
    </style>
@stop
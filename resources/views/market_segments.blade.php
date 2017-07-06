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

    <div class="container">
        <div class="row">

            <div class="col-md-12">
                <div class="carousel slide" id="fade-quote-carousel-left" data-ride="carousel"
                     data-interval="false">
                    <!-- Carousel indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#fade-quote-carousel-left" data-slide-to="0"></li>
                        <li data-target="#fade-quote-carousel-left" data-slide-to="1"></li>
                        <li data-target="#fade-quote-carousel-left" data-slide-to="2"></li>
                        <li data-target="#fade-quote-carousel-left" data-slide-to="3" class="active"></li>
                        <li data-target="#fade-quote-carousel-left" data-slide-to="4"></li>
                        <li data-target="#fade-quote-carousel-left" data-slide-to="5"></li>
                    </ol>
                    <!-- Carousel items -->
                    <div class="carousel-inner">
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Secure Print and Card Packaging
                                    </h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h3>Secure Payment, Identification and Telco
                                    </h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Pack-Smart’s innovative solutions for the personalization and packaging of cards and documents in the Banking, Prepaid Gift Card and SIM Card industries are recognized world-wide for an approach that achieves complete automation and traceability with 0%-defect manufacturing. We offer systems with in-line duplex personalization (ink-Jet, Mag Stripe and Chip Encoding), labeling, carrier personalization and multiple fold and closure solutions. Our proprietary affixing systems with +/- placement tolerances of .018’’ and run speeds of 17,000 UPH (standard CR80 Card) are unmatched in the industry and recognized as the true best-in-class solution for speed and accuracy.

                                    </p>
                                    <strong>Personalization</strong>
                                    <p>Duplex DOD with resolutions up to 600dpi  and scratch offs.  Multiple applications of labels.  Mag stripe and chip encoding

                                    </p>
                                    <strong>Data Capturing & Tracking</strong>
                                    <p>Multiple glue and fold configurations.
                                        Placement accuracy for card and internal package components of .018’’
                                        Production of multipack (multiple card packages)
                                        Complete in-line data verification and back-end reporting

                                    </p>
                                    <strong>Security</strong>
                                    <p>Multiple secure sealing capabilities. With active and Intelligent Packaging. Components Available.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Specialty and Print Finishing Solutions
                                    </h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h3>Direct Mail, Promotional Materials and PIN Mailers
                                    </h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Pack-Smart’s proven modular solutions for print finishing applications can be operated as a stand-alone system or integrated into existing manufacturing systems and processes. Our solutions are recognized in the direct mail and specialty print finishing industries for fully integrating multiple processes in a single-pass, single-machine system design. Our end-to-end manufacturing solutions for affixing (3D and single-plane), scoring & slitting, and folding & gluing with in-line inkjet are recognized as world-class solutions for seamless, end-to-end production.

                                    </p>
                                    <strong>Speed</strong>
                                    <p>Process speeds up to 20,000 products per hour.

                                    </p>
                                    <strong>Accuracy</strong>
                                    <p>Component placement accuracy up to +-0.02" without sacrificing speed or quality.

                                    </p>
                                    <strong>Efficiency</strong>
                                    <p>Maximum efficiency with multi-job capabilities and quick changeovers.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="active item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Specialty and Premium Packaging
                                    </h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h3>Rigid Window, Hybrid Window & Transparent Packaging

                                    </h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>New, retail-ready packaging technology from Pack-Smart enables companies to sell more products with less waste and greater profit. Pack-Smart’s proven modular solutions for print finishing applications can be operated as stand-alone systems or integrated into existing manufacturing systems and processes. Our systems are built on a fiber optic network utilizing brushless, servo motor technology and precision motion control designed to deliver configurable, end-to-end manufacturing solutions.

                                    </p>
                                    <strong>Speed</strong>
                                    <p>Folding, gluing, and affixing at speeds up to 15,000 products per hour.

                                    </p>
                                    <strong>Accuracy</strong>
                                    <p>Affix rigid and hybrid windows, and multiple components with a placement accuracy of 0.02"

                                    </p>
                                    <strong>Quality</strong>
                                    <p>Perform multiple premium packaging jobs with 1 single system. Quick changeovers and machine uptimes upwards of 95% allow production facilities to produce non-stop high quality products at lower costs.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Active and Intelligent Packaging Technologies
                                    </h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h3>
                                    </h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>The Brand Protection landscape has been evolving substantially in the last few years, and it continues to do so. The scale and scope of the problem of counterfeiting continues to expand, primarily due to two forces that are causing a rapid, increasing influx of counterfeit parts into global supply chains. Pack-Smart ePedigree Solutions provide assurance to Brand Owners through highly integrated performance brand protection technologies: On-product anti-counterfeit solutions, Online brand monitoring solutions, Consumer-enabled brand protection via smart phone, Tamper evidence solutions. Packaging is already one of the most powerful marketing and brand protection tools in existence. Pack-Smart has pioneered the development of technologies that empower brand and packaging leaders with the control and protection they need. Our customers are discovering the benefits of this high-tech packaging in the Active and Intelligent Marketplace every day.

                                    </p>
                                    <strong>Quality</strong>
                                    <p>Deter grey market products by producing only the highest quality packaging, incorporated with Pack-Smart's active and intelligent packaging technologies.

                                    </p>
                                    <strong>Track and Trace</strong>
                                    <p>Our systems can be outfitted with data tracking and reporting, vision inspection, and state of the art defect detection systems.

                                    </p>
                                    <strong>Personalization</strong>
                                    <p>Pack-Smart systems DOD and printed electronic componentry allow for the personalization of each package. Each unique package's data is verified and stored for traceability.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Life Science and Healthcare Packaging
                                    </h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h3>Cosmetics, Healthcare & OTC Packaging

                                    </h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Pack-Smart offers revolutionary, configurable equipment and software for the Pharmaceutical and Healthcare packaging industry. We enable packaging manufacturers to meet ever-growing regulatory requirements while giving them the tools to deliver products with an unparalleled shelf presence. Value-added capabilities – such as in-line braille embossing and collation of booklets, leaflets, and guides – coupled with defect detection make Pack-Smart technology the most cost-effective solution available. Our systems are built on fiber optic networks utilizing brushless, servo motor technology and precision motion control designed to deliver configurable, end-to-end manufacturing solutions.

                                    </p>
                                    <strong>Speed</strong>
                                    <p>Kitting and package personalization at speeds upwards of 10,000 products per hour.

                                    </p>
                                    <strong>Quality</strong>
                                    <p>Pack-Smart's defect detection and divert systems ensure only 100% verified products reach the delivery conveyor.

                                    </p>
                                    <strong>Efficiency</strong>
                                    <p>Multi-component packaging and complex kitting are no match for Pack-Smart's automated solutions. All of our processes can be configured into a single system, eliminating the need for offline processes.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Technical Consulting Services
                                    </h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <h3>
                                    </h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>As the Pack-Smart team, we are truly many things- we are engineers, designers, machinists, builders, entrepreneurs and dreamers. What sets us apart from our competition is the ability to look at a challenge and deliver a solution that combines the best of what automated technology has to offer with innovation and cost effectiveness, delivering the best solutions imaginable.

                                    </p>
                                    <strong>Speed-to-market</strong>
                                    <p>With roles in over 70 product launches Pack-Smart can help improve your speed to market for your next big launch.

                                    </p>
                                    <strong>Technical Consulting Services
                                    </strong>
                                    <p>Our technical consulting services are aimed at improving your processes, packaging, and overall efficiency

                                    </p>
                                    <strong>Full Data Reporting
                                    </strong>
                                    <p>With Pack-Smart's integrated modules and verification systems our customers can increase efficiency by collecting data, resolving issues, and reducing was

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

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

        @media (max-width: 960px) {
            .verticalBorders {
                border-left: none;
                border-right: none;
            }
        }

        ​

        @media (min-width: 960px) {
            .verticalBorders {
                border-left: solid;
                border-left-width: 2px;
                border-left-color: grey;
                border-right: solid;
                border-right-width: 2px;
                border-right-color: grey;
            }
        }

        ​
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
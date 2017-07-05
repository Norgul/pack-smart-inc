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
                        <li data-target="#fade-quote-carousel-left" data-slide-to="6"></li>
                    </ol>
                    <!-- Carousel items -->
                    <div class="carousel-inner">
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Modular</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <h3>RP900 Rotary Pick and Place Feeder
                                    </h3>
                                </div>
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                    <img src="{{asset('images/solutions/modules/RP900 Rotary Pick and Place Feeder Main Image v2.png')}}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Inserting three dimensional products into a high speed production line is
                                        difficult. At Pack-Smart Inc. we understand your challenges. That is why we
                                        have developed what is now the industry standard feeding system, the Rotary
                                        Pick and Place 900 Series. Feeding the world since 1996 the RP900 Series has
                                        tipped and packed everything from soap, coffee, video games, CD/DVD box
                                        sets, secure cards and more. This module allows you to accurately place
                                        varying three dimensional shapes and sizes onto your production line with
                                        the unprecedented accuracy of ±1.6mm. You can now consistently do this at a
                                        rate of up to 250 products per minute. That’s 15,000 per hour! The
                                        articulating suction arms will rotate 360° and can be spaced to accommodate
                                        a wide range of sizes and with the self-contained, dual-vacuum system you
                                        can even manage objects weighing up to one pound.
                                    </p>
                                    <strong>Features and Specs</strong>
                                    <p>Speed: 15,000 u.p.h. <br>
                                        Placement accuracy: 0.015"" <br>
                                        Magazine height: 30" <br>
                                        Minimum material size: 1.25" x 1.25" x 0.01" <br>
                                        Maximum material size: 20" x 9" x 0.47" <br>
                                        Module width: 29.9" <br>
                                        Module length: 33.9" <br>
                                        Module length: 40.2" <br>
                                    </p>
                                    <strong>Benefits</strong>
                                    <p>Capable of handling 3dimensional products and placing them with precision
                                        while maintaining the highest throughputs available.
                                    </p>
                                    <strong>Available Functions/Add-Ons</strong>
                                    <p>Automatic bottom alignment module for improved placement accuracy. Inline
                                        mag-encoding. Built in camera read and verification system.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Modular</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <h3>RPS3000 Reciprocating Pick and Place
                                    </h3>
                                </div>
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                    <img src="{{asset('images/solutions/modules/RPS3000 Reciprocating Pick and Place.png')}}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>RPS3000 Series Reciprocating Pick and Place module has been designed with
                                        versatility and flexibility in mind. The robust design makes is an ideal
                                        solution for feeding: trays, leaflets, sachet, clam shells and other odd
                                        shaped materials and products. The advantage of using the RPS3000 is the
                                        opportunity to automate the slow and costly process of feeding odd shaped
                                        objects that may not be able to be fed through a Rotary Placer or
                                        conventional feeding applications. With an industry leading 80 C.P.M.
                                        (Cycles Per Minute), and multi stream setups the Pack-Smart Intermittent
                                        Motion Pick and Place is will reduce manual labour requirements while
                                        increasing throughput. Optional Servo drives are available on the RPS3000 to
                                        allow for quick integration with third party systems, improved control
                                        features, and an increased top speed to 90 C.P.M.
                                    </p>
                                    <strong>Features and Specs</strong>
                                    <p>Speed: 80-90 c.p.m. (cycles per minute) <br>
                                        Placement accuracy: +-0.02" <br>
                                        Magazine height: 30" <br>
                                        Drive: 100% servo driven <br>
                                        Dimensions: Application dependant <br>
                                    </p>
                                    <strong>Benefits</strong>
                                    <p>Designed for introducing large 3d objects into a production line. Ideal for
                                        multi-stream indexing applications.
                                    </p>
                                    <strong>Available Functions/Add-Ons</strong>
                                    <p>Multifold, coupons, plastic plates, plastic trays, corrugated trays ,
                                        styrofoam trays, thermoform trays, foil trays glassine, card stock, plastic
                                        cards, sachets, CDs, DVDs, pharmaceutical inserts, injection moulded parts
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Modular</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <h3>SF350 Smart Friction Feeder
                                    </h3>
                                </div>
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                    <img src="{{asset('images/solutions/modules/SF350 Smart Friction Feeder.png')}}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Our rugged, flexible, and extremely versatilte feeding modules are essential
                                        to any production line. Built with the customer in mind and boasting the
                                        most advanced control system on the market Pack-Smart Inc.’s feeding modules
                                        are incredibly accurate and efficient with unmatched reliability. Our
                                        Pack-Smart Inc. Smart Friction Feeders come with a built in motion
                                        controller. Motion controllers are equipped with customizable recipes which
                                        provide electronic accuracy to the thousands of an inch. They also have the
                                        capability to batch index, follow, and place multiple inserts on one host
                                        carrier. Seemless Integration with third party systems. External inputs
                                        outputs and RS232 available for quick setup and interface with third part
                                        controllers, such as, PLCs or computers. The machined body with hardened
                                        drive shafts is designed for 24/7 operation. With precision bearings and
                                        quick belt change features Pack-Smart Inc. has provided reliable solutions
                                        for the harshest environments.
                                    </p>
                                    <strong>Features and Specs</strong>
                                    <p>"Speed: 1000ft/min <br>
                                        Placement accuracy: 0.06"" <br>
                                        Magazine height: 18"" <br>
                                        Minimum material size: 1"" x 1.5"" x 0.0015"" <br>
                                        Maximum material size: 20"" x 16"" x 1""" <br>
                                    </p>
                                    <strong>Benefits</strong>
                                    <p>Cost effective, low maintenance, and incredibly reliable for tipping
                                        components, and feeding carriers.
                                    </p>
                                    <strong>Available Functions/Add-Ons</strong>
                                    <p>Autoloader up to 3m (10ft)
                                        Quick integration brackets
                                        Integrated mag encoding
                                        Integrated barcode scanner
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="active item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Modular</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <h3>FF500 Friction Feeder
                                    </h3>
                                </div>
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                    <img src="{{asset('images/solutions/modules/FF500 Friction Feeder Main Image v2.png')}}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Employed in a spectrum of converting markets, the friction feeder is
                                        generally utilized for host product feeding applications. The pack-Smart
                                        friction feeder is a cost effective solution for many industrial automation
                                        feeding and inserting projects. From inserting a coupon to collating
                                        signature or paint swatches the Pack-Smart friction feeder offers
                                        flexibility and reliability in the most demanding environments featuring a
                                        24/7 production schedule and Pack-Smart offers a number of sheet
                                        registration modules that are available to satisfy your needs. The feeding
                                        system is designed for high production speeds that demand equal spacing
                                        between products. The feeders are notably rugged paper feeding systems and
                                        the solid steel construction ensures stability and high performance even in
                                        the toughest environments, resulting in speeds of up to 600 products per
                                        minute. The pack-Smart feeders are capable of handling the lightest paper
                                        and are equally at home when dealing with heavy stock materials such as SBS
                                        board. They are also capable of feeding products in up to 4 continuous
                                        streams, are operator friendly and are ideal when product
                                        tracking/monitoring may be required in your production cycle.
                                    </p>
                                    <strong>Features and Specs</strong>
                                    <p>Speed: 200m.p.m. | 800u.p.m. <br>
                                        Placement accuracy: 0.08" <br>
                                        Magazine height: 15.7" <br>
                                        Minimum material size: 4.3" x 4.3" x 0.008" <br>
                                        Maximum material size: 19.7" x 27.6" x 2" <br>
                                        Allowable product distortion: 0.008 <br>
                                    </p>
                                    <strong>Benefits</strong>
                                    <p>Ideal for large sheet feeding and carton feeding for windowing applications.
                                    </p>
                                    <strong>Available Functions/Add-Ons</strong>
                                    <p>Extended magazine
                                        Integrated barcode scanner
                                        Quick integration brackets
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Modular</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <h3>PG900 Flexo Pattern Gluer
                                    </h3>
                                </div>
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                    <img src="{{asset('images/solutions/modules/PG900 Flexo Pattern Gluer.png')}}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Pack-Smart’s Flexo Pattern Gluer module applies metered glue coatings to
                                        sheets or webs. PG900 units are equipped with state of the art servo
                                        technology and registration systems for integration with Pack-Smart or third
                                        party equipment. The distinct advantage of using the Flexo Pattern Gluing
                                        technique is the ability to produce unlimited shapes of glue and coatings
                                        without changing sheet direction. The Flexo Pattern Gluer module consists of
                                        two rollers allowing for glue application, fragrances or coatings. Precision
                                        ground deep etched cylinders eliminate slinging and increase durability of
                                        the system. The Pack-Smart equipment has a 36” impression roller with a
                                        doctor (metering) roll. The gluing system has its own encoder that mounts,
                                        as well as, a product detection sensor. The system has available repeats of
                                        36”, 18”, 12 and 9” (914.4mm to 229mm). The metering roll and the impression
                                        roll are mechanically connected through gearing so that they both run at the
                                        same surface speed. In order to skip a carrier to be glued or to account for
                                        a missing carrier the drum lifts by way of electronic control.
                                    </p>
                                    <strong>Features and Specs</strong>
                                    <p>Speed: 200 m.p.m. <br>
                                        Accuracy: +-0.02" <br>
                                        Minimum material size: 1" x 1" x 0.003 <br>
                                        Maximum material size: 20" x 24" x 0.01" <br>
                                        Width: 40" <br>
                                        Length: 36" <br>
                                        Height: 25" <br>
                                    </p>
                                    <strong>Benefits</strong>
                                    <p>The PG900 Flexo Pattern Gluer reduces glue slinging, has lower consumable
                                        costs, and provides it's owners with the flexibility to produce an unlimited
                                        amount of glue patterns.
                                    </p>
                                    <strong>Available Functions/Add-Ons</strong>
                                    <p>Window affixing
                                        Media packaging
                                        Direct mail
                                        Burst and open sample fragrances
                                        Secure packaging
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Modular</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <h3>LB250 Label Applicator
                                    </h3>
                                </div>
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                    <img src="{{asset('images/solutions/modules/LB250 Label Applicator v2.png')}}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>"The Pack-Smart High Speed Label Applicator easily, and efficiently applies a
                                        wide range of label types with unprecedented speed and accuracy. The
                                        Pack-Smart Label Applicator is capable of run speeds up to 250 p.p.m. while
                                        maintaining accuracy up to +- 1/32”. It incorporates two sensors, one to
                                        detect the presence of an oncoming carrier and one to verify the presence of
                                        a label. The height of the brush assembly at the bottom of the labeller is
                                        adjusted according to the carrier/card thickness. The brush itself applies
                                        light pressure to the label to ensure adherence. By combining our
                                        proprietary engineering designs with brushless servo technology our
                                        Pack-Smart Label Applicators require minimal maintenance in full-time
                                        manufacturing settings. Progressive features include an Electronic Gearing
                                        Module which permits product surface cam profiling, ensuring smooth
                                        application without
                                        blisters or wrinkles, even with mini labels."
                                    </p>
                                    <strong>Features and Specs</strong>
                                    <p>Speed: 250p.p.m. <br>
                                        Accuracy: +-0.03" <br>
                                        Web width: 0.2" - 2.76" <br>
                                        Minimum label gap: 0.15" <br>
                                        Minimum label length: 0.4" <br>
                                        Minimum gap between web and label (on each side): 0.125" <br>
                                        Maximum product gauge: 0.25" <br>
                                        Core: 3" <br>
                                        Roll OD: 22" <br>
                                        Width: 19.7" <br>
                                        Length: 35.4" <br>
                                        Height: 27.6" <br>
                                    </p>
                                    <strong>Benefits</strong>
                                    <p>The LB250 Label Applicator is efficient, with low operating costs, and serves
                                        a variety of applications with a single module.
                                    </p>
                                    <strong>Available Functions/Add-Ons</strong>
                                    <p>RFID, EAS, mag stripe, Velcro, piggyback label, scratch off label, foam
                                        polygon hubs, pressure sensitive, scented labels, and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Modular</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <h3>VC800 Vacuum Transport Conveyor
                                    </h3>
                                </div>
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                    <img src="{{asset('images/solutions/modules/VC800 Vacuum Transport Conveyor v2.png')}}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>The VC800 Vacuum Transport Conveyor is ideal solutions for all custom
                                        tipping, folding and gluing applications. Fully adjustable and easy
                                        integration make it the ideal complement to any folder gluer, converting or
                                        web finishing line for the graphic arts and packaging industries; and with
                                        an industry best 500 FPM, Pack-Smart's vacuum conveyor is an essential part
                                        to any packing and printing finishing line. Equipped with 4 - 2000 CFM
                                        Vacuum Generators and selectable vacuum zones, the Pack-Smart conveyor
                                        system is a truly versatile transport module for the finishing industry. The
                                        vacuum conveyor is a servo driven conveyor and gets it velocity set point
                                        from the master
                                    </p>
                                    <strong>Features and Specs</strong>
                                    <p>Speed: 150m.p.m. <br>
                                        Allowable product distortion: 0.5mm <br>
                                        Selectable vacuum zones: 4 <br>
                                        CFM per zone: 2000 <br>
                                        Product length: 110-1200mm <br>
                                        Product width: 50-800mm <br>
                                        Product thickness: 0.1-50mm <br>
                                    </p>
                                    <strong>Benefits</strong>
                                    <p>Gentle on products while accurately maintaining their posititioning
                                        throughout the production process.
                                    </p>
                                    <strong>Available Functions/Add-Ons</strong>
                                    <p>Paperboard, corrugated board, polyester, PET, PVC, styrofoam, labels,
                                        glassine, sachets; CDs, DVDs, films, foils, laminates.
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
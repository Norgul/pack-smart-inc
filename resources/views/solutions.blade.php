@extends('layouts.main')
@section('title', 'Solutions')

@section('content')

    @include('sections.labeling_cartwheel')

    <section id="carousel">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center" style="margin-bottom:40px;">
                    <h1>Our Solutions</h1>
                </div>
                <div class="col-md-6">
                    <div class="carousel slide" id="fade-quote-carousel-left" data-ride="carousel"
                         data-interval="false">
                        <!-- Carousel indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#fade-quote-carousel-left" data-slide-to="0" class="active"></li>
                            <li data-target="#fade-quote-carousel-left" data-slide-to="1"></li>
                            <li data-target="#fade-quote-carousel-left" data-slide-to="2"></li>
                        </ol>
                        <!-- Carousel items -->
                        <div class="carousel-inner">
                            <div class="active item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="text-align:right;margin-bottom:20px;">Secure Print and Card
                                            Packaging</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-8">
                                        <h3>Secure Payment, Identification and Telco
                                        </h3>
                                    </div>
                                    <div class="col-md-4">
                                        PICTURE
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>Pack-Smart’s innovative solutions for the personalization and packaging of
                                            cards and documents in the Banking, Prepaid Gift Card and SIM Card
                                            industries are recognized world-wide for an approach that achieves complete
                                            automation and traceability with 0%-defect manufacturing. We offer systems
                                            with in-line duplex personalization (ink-Jet, Mag Stripe and Chip Encoding),
                                            labeling, carrier personalization and multiple fold and closure solutions.
                                            Our proprietary affixing systems with +/- placement tolerances of .018’’ and
                                            run speeds of 17,000 UPH (standard CR80 Card) are unmatched in the industry
                                            and recognized as the true best-in-class solution for speed and accuracy.
                                        </p>
                                        <strong>Personalization</strong>
                                        <p>Duplex DOD with resolutions up to 600dpi  and scratch offs. Multiple
                                            applications of labels. Mag stripe and chip encoding
                                        </p>
                                        <strong>Data Capturing & Tracking</strong>
                                        <p>Multiple glue and fold configurations.
                                            Placement accuracy for card and internal package components of .018’’
                                            Production of multipack (multiple card packages)
                                            Complete in-line data verification and back-end reporting"
                                        </p>
                                        <strong>Security</strong>
                                        <p>Multiple secure sealing capabilities.  With active and Intelligent Packaging.
                                            Components Available.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="text-align:right;margin-bottom:20px;">Specialty and Print Finishing
                                            Solutions</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-8">
                                        <h3>Direct Mail, Promotional Materials and PIN Mailers
                                        </h3>
                                    </div>
                                    <div class="col-md-4">
                                        PICTURE
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>Pack-Smart’s proven modular solutions for print finishing applications can be
                                            operated as a stand-alone system or integrated into existing manufacturing
                                            systems and processes. Our solutions are recognized in the direct mail and
                                            specialty print finishing industries for fully integrating multiple
                                            processes in a single-pass, single-machine system design. Our end-to-end
                                            manufacturing solutions for affixing (3D and single-plane), scoring &
                                            slitting, and folding & gluing with in-line inkjet are recognized as
                                            world-class solutions for seamless, end-to-end production.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>Process speeds up to 20,000 products per hour.

                                        </p>
                                        <strong>Accuracy</strong>
                                        <p>Component placement accuracy up to +-0.02" without sacrificing speed or
                                            quality.
                                        </p>
                                        <strong>Efficiency</strong>
                                        <p>Maximum efficiency with multi-job capabilities and quick changeovers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="text-align:right;margin-bottom:20px;">Specialty and Premium Packaging
                                        </h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-8">
                                        <h3>Rigid Window, Hybrid Window & Transparent Packaging
                                        </h3>
                                    </div>
                                    <div class="col-md-4">
                                        PICTURE
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>New, retail-ready packaging technology from Pack-Smart enables companies to
                                            sell more products with less waste and greater profit. Pack-Smart’s proven
                                            modular solutions for print finishing applications can be operated as
                                            stand-alone systems or integrated into existing manufacturing systems and
                                            processes. Our systems are built on a fiber optic network utilizing
                                            brushless, servo motor technology and precision motion control designed to
                                            deliver configurable, end-to-end manufacturing solutions.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>Folding, gluing, and affixing at speeds up to 15,000 products per hour.
                                        </p>
                                        <strong>Accuracy</strong>
                                        <p>Affix rigid and hybrid windows, and multiple components with a placement
                                            accuracy of 0.02"
                                        </p>
                                        <strong>Quality</strong>
                                        <p>Perform multiple premium packaging jobs with 1 single system. Quick
                                            changeovers and machine uptimes upwards of 95% allow production facilities
                                            to produce non-stop high quality products at lower costs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="carousel slide" id="fade-quote-carousel-right" data-ride="carousel"
                         data-interval="false">
                        <!-- Carousel indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#fade-quote-carousel-right" data-slide-to="0" class="active"></li>
                            <li data-target="#fade-quote-carousel-right" data-slide-to="1"></li>
                            <li data-target="#fade-quote-carousel-right" data-slide-to="2"></li>
                        </ol>
                        <!-- Carousel items -->
                        <div class="carousel-inner">
                            <div class="active item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Active and Intelligent Packaging
                                            Technologies
                                        </h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        PICTURE
                                    </div>
                                    <div class="col-md-8">
                                        <p>The Brand Protection landscape has been evolving substantially in the last
                                            few years, and it continues to do so. The scale and scope of the problem of
                                            counterfeiting continues to expand, primarily due to two forces that are
                                            causing a rapid, increasing influx of counterfeit parts into global supply
                                            chains. Pack-Smart ePedigree Solutions provide assurance to Brand Owners
                                            through highly integrated performance brand protection technologies:
                                            On-product anti-counterfeit solutions, Online brand monitoring solutions,
                                            Consumer-enabled brand protection via smart phone, Tamper evidence
                                            solutions. Packaging is already one of the most powerful marketing and brand
                                            protection tools in existence. Pack-Smart has pioneered the development of
                                            technologies that empower brand and packaging leaders with the control and
                                            protection they need. Our customers are discovering the benefits of this
                                            high-tech packaging in the Active and Intelligent Marketplace every day.
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <strong>Quality</strong>
                                        <p>Deter grey market products by producing only the highest quality packaging,
                                            incorporated with Pack-Smart's active and intelligent packaging
                                            technologies.
                                        </p>
                                        <strong>Track and Trace</strong>
                                        <p>Our systems can be outfitted with data tracking and reporting, vision
                                            inspection, and state of the art defect detection systems.
                                        </p>
                                        <strong>Personalization</strong>
                                        <p>Pack-Smart systems DOD and printed electronic componentry allow for the
                                            personalization of each package. Each unique package's data is verified and
                                            stored for traceability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Life Science and Healthcare
                                            Packaging

                                        </h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        PICTURE
                                    </div>
                                    <div class="col-md-8">
                                        <h3>Cosmetics, Healthcare & OTC Packaging
                                        </h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>Pack-Smart offers revolutionary, configurable equipment and software for the
                                            Pharmaceutical and Healthcare packaging industry. We enable packaging
                                            manufacturers to meet ever-growing regulatory requirements while giving them
                                            the tools to deliver products with an unparalleled shelf presence.
                                            Value-added capabilities – such as in-line braille embossing and collation
                                            of booklets, leaflets, and guides – coupled with defect detection make
                                            Pack-Smart technology the most cost-effective solution available. Our
                                            systems are built on fiber optic networks utilizing brushless, servo motor
                                            technology and precision motion control designed to deliver configurable,
                                            end-to-end manufacturing solutions.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>Kitting and package personalization at speeds upwards of 10,000 products per
                                            hour.
                                        </p>
                                        <strong>Quality</strong>
                                        <p>Pack-Smart's defect detection and divert systems ensure only 100% verified
                                            products reach the delivery conveyor.
                                        </p>
                                        <strong>Efficiency</strong>
                                        <p>Multi-component packaging and complex kitting are no match for Pack-Smart's
                                            automated solutions. All of our processes can be configured into a single
                                            system, eliminating the need for offline processes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Technical Consulting Services
                                        </h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        PICTURE
                                    </div>
                                    <div class="col-md-8">
                                        <p>As the Pack-Smart team, we are truly many things- we are engineers,
                                            designers, machinists, builders, entrepreneurs and dreamers. What sets us
                                            apart from our competition is the ability to look at a challenge and deliver
                                            a solution that combines the best of what automated technology has to offer
                                            with innovation and cost effectiveness, delivering the best solutions
                                            imaginable.
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <strong>Speed-to-market</strong>
                                        <p>With roles in over 70 product launches Pack-Smart can help improve your speed
                                            to market for your next big launch.
                                        </p>
                                        <strong>Technical Consulting Services
                                        </strong>
                                        <p>Our technical consulting services are aimed at improving your processes,
                                            packaging, and overall efficiency
                                        </p>
                                        <strong>Full Data Reporting</strong>
                                        <p>With Pack-Smart's integrated modules and verification systems our customers
                                            can increase efficiency by collecting data, resolving issues, and reducing
                                            was
                                        </p>
                                    </div>
                                </div>
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
                    <p>4x Faster: Our automation solutions run at 4x the industry standard.  We truly are dictating the speed of business.</p>
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
                    <p>3x Accuracy: Our solutions have 3x the accuracy when compared to the next closest competitor and we don’t sacrifice on speed.</p>
                </div>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-6">
                <div class="col-lg-9">
                    <p>98% Uptime: Our overall equipment effectiveness(OEE) is above world class.  No competitor even comes close to matching our capabilities.</p>
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
                    <p>Over 5Bn: Our commitment to speed, accuracy, and efficiency allows us to consistently produce brand changing product volumes.</p>
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












        @maridlcrmn                           */
        /*-------------------------------*/

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
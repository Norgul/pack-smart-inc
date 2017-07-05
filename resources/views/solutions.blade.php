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
                                        <h2 style=text-align:right;margin-bottom:20px;">Modular</h2>
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
                                        <h2 style=text-align:right;margin-bottom:20px;">Modular</h2>
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
                                        <h2 style=text-align:right;margin-bottom:20px;">Modular</h2>
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
                                        <h2 style=text-align:right;margin-bottom:20px;">Modular</h2>
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
                                        <h2 style=text-align:right;margin-bottom:20px;">Modular</h2>
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
                                        <h2 style=text-align:right;margin-bottom:20px;">Modular</h2>
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
                                        <h2 style=text-align:right;margin-bottom:20px;">Modular</h2>
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
                <div class="col-md-6">
                    <div class="carousel slide" id="fade-quote-carousel-right" data-ride="carousel"
                         data-interval="false">
                        <!-- Carousel indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#fade-quote-carousel-right" data-slide-to="0"></li>
                            <li data-target="#fade-quote-carousel-right" data-slide-to="1"></li>
                            <li data-target="#fade-quote-carousel-right" data-slide-to="2"></li>
                            <li data-target="#fade-quote-carousel-right" data-slide-to="3" class="active"></li>
                            <li data-target="#fade-quote-carousel-right" data-slide-to="4"></li>
                            <li data-target="#fade-quote-carousel-right" data-slide-to="5"></li>
                            <li data-target="#fade-quote-carousel-right" data-slide-to="6"></li>
                            <li data-target="#fade-quote-carousel-right" data-slide-to="7"></li>
                        </ol>
                        <!-- Carousel items -->
                        <div class="carousel-inner">
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Technology</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        <img src="{{asset('images/solutions/technologies/HB924-6 Batching Unit with Inline Wrapping System v2.png')}}">
                                    </div>
                                    <div class="col-md-8">
                                        <h3>The HB924-6 Batching Unit with Inline Wrapping System
                                        </h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>The HB924-6 Batching with Inline Wrapping System feeds and batches product at
                                            speeds up to 72,000 products per hour when running dual stream
                                            configuration. With Pack-Smart’s state of the art RP924-6 product is picked
                                            from the loader and placed with incredible accuracy into the batching unit
                                            below. The 6 x 360º articulating arms with suction cups are capable of
                                            handling a wide variety of 3 dimensional products from sachets, to paint
                                            swatches, inlays, CR80s, and rigid windows. At Pack-Smart our customers come
                                            first, that’s why we tailor each of our systems to our customers’ specific
                                            needs. We will never sacrifice the quality of your product for efficiency,
                                            instead we will work hand-in-hand with you to develop systems that deliver
                                            the highest quality products at the greatest speeds available in today’s
                                            market. Our modular approach to engineering allows our systems to be
                                            stand-alone as well as integrated into existing lines, with the flexibility
                                            to add and remove features with quick and easy changeovers. On-site training
                                            and remote diagnostics from Pack-Smart guarantee that your employees will
                                            have the resources they need to succeed, ensuring your customer’s
                                            satisfaction, and your accountant’s.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>Speeds up to 36,000 units per hour, 72,000 when utilizing dual stream.
                                        </p>
                                        <strong>Versatility</strong>
                                        <p>With the adjustable magazine and suction cups the system is capable of
                                            handling a variety of products at high speeds.
                                        </p>
                                        <strong>Quality</strong>
                                        <p>With Pack-Smart's self contained dual vacuum system the Rotary Pick and
                                            Place's suction cups are able to delicately handle product even at maximum
                                            speeds.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Technology</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        <img src="{{asset('images/solutions/technologies/SC500 Secure SIM Card Packaging  v2.png')}}">
                                    </div>
                                    <div class="col-md-8">
                                        <h3>SC500 Secure SIM Card Packaging System
                                        </h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>At the forefront of the Secure & SIM card packaging industry is the SC500
                                            Secure SIM Card Packaging System from Pack-Smart Inc. With speeds up to
                                            13,000 products per hour, placement accuracy of ±0.020”, and uptimes upwards
                                            of 95%, this system will redefine your business. Our end-to-end solutions
                                            will reduce your labour costs, increase your throughput, and improve the
                                            quality of your finished product. Pack-Smart’s full data capturing and
                                            reporting system allows for the tracking of your product throughout the
                                            entire run. Rejected products are tracked, diverted, and a report is created
                                            detailing the issue. This allows our customers to diagnose and adjust, while
                                            still running with a 100% guarantee only verified products reach the
                                            delivery area. Utilizing a virtual machine platform, the 100% servo driven
                                            system provides unmatched reliability and flexibility to accommodate your
                                            customers’ product’s needs. Multiple Component Inserting | Package and
                                            Component Personalization | Full Data Capturing, Tracking, and Reporting.
                                            Modular design is at the core of all Pack-Smart systems. This building block
                                            approach to design allows our customers to tailor their system to their
                                            specific needs at any point in time. Prior to purchase, or after owning a
                                            system for several years, Pack-Smart is ready to help integrate additional
                                            features into your production line. Whether it be personalization of cards,
                                            carriers, or both, we can offer that in-line in a single system pass. At
                                            Pack-Smart we work with our customers every step of the way, and provide
                                            continuing support long after the Pack-Smart system has been delivered to
                                            your facility.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>Speeds up to 13,000 units per hour. Optimize your process with our end-to-end
                                            solutions, including batching, wrapping, and labelling bundles.
                                        </p>
                                        <strong>Versatility</strong>
                                        <p>Card and component placement accuracy of 0.015" ensuring your finished
                                            product maintains it's high quality appearance.
                                        </p>
                                        <strong>Quality</strong>
                                        <p>With integrated verification systems your product is tracked throughout the
                                            production process. All errors are diverted, and remakes are initiated,
                                            guaranteeing a 100% verified product is delivered.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Technology</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        <img src="{{asset('images/solutions/technologies/CP2500-1 Card Personalization System v2.png')}}">
                                    </div>
                                    <div class="col-md-8">
                                        <h3>CP2500-1 Card Personalization System
                                        </h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>The CP2500-1 from Pack-Smart Inc. is the industry’s most robust and flexible
                                            card personalization solution. With speeds up to 30,000 products per hour it
                                            is ideal for all your closed, secure, and open loop needs. By combining
                                            advanced features, uncompromising quality, top throughput, reliable
                                            reporting, and an operator-friendly interface the CP2500-1 can achieve any
                                            goals. The CP2500-1 features a high-speed pick and place feeding system.
                                            This system allows for excellent handling of a diverse number of card
                                            formats; CR80s, M6 hang tags, and many custom shaped cards. It’s no surprise
                                            that it is the preferred choice of global leaders with complex and unique
                                            projects, substrates, shapes, and inline processes. The CP2500-1 runs on
                                            Pack-Smart Inc.’s Virtual Machine software/hardware platform, backed up by a
                                            rugged fibre-optic network and customizable report compliance interface.
                                            <br>
                                            Multiple Component Inserting | Package and Component Personalization | Full
                                            Data Capturing, Tracking, and Reporting Modular design is at the core of all
                                            Pack-Smart systems. This building block approach to design allows our
                                            customers to tailor their system to their specific needs at any point in
                                            time. Prior to purchase, or after owning a system for several years,
                                            Pack-Smart is ready to help integrate additional features into your
                                            production line. Whether it be personalization of cards, carriers, or both,
                                            we can offer that in-line in a single system pass. At Pack-Smart we work
                                            with our customers every step of the way, and provide continuing support
                                            long after the Pack-Smart system has been delivered to your facility.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>Speeds up to 30,000 units per hour. Optimize your process with our end-to-end
                                            solutions, including batching, wrapping, and labelling bundles.
                                        </p>
                                        <strong>Versatility</strong>
                                        <p>Personalization features include various magstripe label affixing, 1D and 2D
                                            barcode printing, and scratch off label application.
                                        </p>
                                        <strong>Quality</strong>
                                        <p>With integrated verification systems your product is tracked throughout the
                                            production process. All errors are diverted, and remakes are initiated,
                                            guaranteeing a 100% verified product is delivered.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="active item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Technology</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        <img src="{{asset('images/solutions/technologies/IIA-175 Inline Insert Affixing System v2.png')}}">
                                    </div>
                                    <div class="col-md-8">
                                        <h3>IIA-175 Inline Insert Affixing System
                                        </h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>The Pack-Smart IIA-175 Inline Insert Affixing System is fully integrated and
                                            the most successful way to combine multiple pre-folded Pharmaceutical
                                            inserts/outserts in variable stack counts. The system comes in two standard
                                            configurations, inline and hybrid, and employs Pack-Smart’s industry leading
                                            RP912 Series Rotary Pick and Place feeders. The IIA-175 fastens the multiple
                                            inserters together at speeds up to 13,000 finished products per hour. This
                                            incredible system is equipped with a barcode verification module coupled a
                                            with divert container to ensure inadequate or incorrect sets are quartered.
                                            For delivery users have the option between a shingled delivery module or
                                            vertical stackers with a tray loader to allow for easy loading at the
                                            discharge stage. Additionally systems can be fitted with auto-loaders and
                                            primary pick and place modules for offline applications.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>Speeds up to 13,000 units per hour. Optimize your process with inline folding
                                            & gluing.
                                        </p>
                                        <strong>Versatility</strong>
                                        <p>Place components with unparalled accuracy, +-0.02". Place cards, T&Cs,
                                            booklets, and 3d samples with ease.
                                        </p>
                                        <strong>Quality</strong>
                                        <p>With integrated verification systems your product is tracked throughout the
                                            production process. Maintain accuracy with version control, multiple
                                            language inserts, and other complex tracking requirements to ensure the
                                            right product ends up in the right package.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Technology</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        <img src="{{asset('images/solutions/technologies/SS-250 Barcode Verfication System v2.png')}}">
                                    </div>
                                    <div class="col-md-8">
                                        <h3>SS-250 Barcode Verification System
                                        </h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>When 100% identification, validation and recording of SKU/version control are
                                            a requirement, Pack-Smart’s Smart Scan 250 is the answer. Pack-Smart’s high
                                            speed continuous feed system with up to 60,000 u.p.h. delivers on capture,
                                            decoding, validating or diverting barcoded product. The Pack-Smart Barcode
                                            Scanner is capable of reading Code-128, DataMatrix, UPCA/B, EAN-13, PDF-417
                                            and QR-Code bar-codes. The SS-250 is an ideal solution for high speed
                                            barcode reading on a wide variety of products such as folding cartons,
                                            blister cards, pharmaceutical packaging, CR 80 cards and just about any
                                            other application that requires 100% product version accuracy.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>Verify products at the highest speeds available, 60,000 products per hour.
                                        </p>
                                        <strong>Versatility</strong>
                                        <p>Divert rejected product to ensure only 100% verified product reaches the
                                            delivery conveyor.
                                        </p>
                                        <strong>Quality</strong>
                                        <p>Pack-Smart's multiple feeding options allow for a wide range of different
                                            products to verified using a single system. Combined with a machine uptime
                                            of 98% this system is undeniably efficient.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Technology</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        <img src="{{asset('images/solutions/technologies/MM-1000 Mega Mailer v2.png')}}">
                                    </div>
                                    <div class="col-md-8">
                                        <h3>MM-1000 Mega Mailer
                                        </h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>Pack-Smart’s family of Mega Mailer systems are designed to give our customers
                                            the tools and flexibility they need to explore new manufacturing
                                            opportunities in the premium direct mail and specialty finishing world. By
                                            combining folding, gluing, sample and 3D object affixing and personalization
                                            in a single pass, our systems allow users to create unique and exciting
                                            direct mail and multi-substrate based direct mail projects. Built on a fiber
                                            optic network utilizing brushless servo-technology and state of the art
                                            motion control, our high-performance modular solutions enable unparalleled
                                            production flexibility and throughput. Our folding systems can be equipped
                                            with options that will produce folds in six directions without having to
                                            change orientation of the product at speeds of up to 30,000 units per hour.
                                            The six-shaft arrangement of the scoring/perforation module executes a
                                            directional perforating, scoring or slitting process in-line with Pack-Smart
                                            feeders and vacuum transports. Directional scoring, perforating, and
                                            slitting are achieved by employing three sets of independently adjustable
                                            precision ground, hardened shafts. Due to the high quality and precision of
                                            our scoring components our systems achieve scores that exceed the press
                                            quality of conventional letter-press applications. Scores formed on
                                            Pack-Smart systems are crisp and eliminate cracking after folding even on
                                            difficult stocks. The Pack-Smart VC Series vacuum transport is ideal for all
                                            custom tipping, folding & gluing and imaging applications. Fully adjustable
                                            vacuum volume, selectable zones and easy, proprietary belt tracking systems
                                            coupled with electronic gearing technology make setup a snap. Along with an
                                            industry best drive system capable of running at speeds of 200 mpm
                                            Pack-Smart’s vacuum transports are an essential part of your mail finishing
                                            solution. We also offer universal and automatic pile or shingled delivery
                                            systems for all Pack-Smart mailing systems. All units come with mechanical
                                            and electronic height adjustment and batch size control. Adjustable
                                            shingling rollers ensure that finished products are delivered in a perfect
                                            stack.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>Complete your specialty print finishing process at the highest speeds
                                            available, 30,000 products per hour.
                                        </p>
                                        <strong>Versatility</strong>
                                        <p>Personalize each piece with inline DOD ink jets with up to 600DPI, or
                                            generate print and apply labels for affixing during the production process.
                                        </p>
                                        <strong>Quality</strong>
                                        <p>With Pack-Smart's focus on modular design your system can complete all
                                            necessary processes in a single system pass; Folding, gluing, scoring,
                                            tipping, personalization, and more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Technology</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        <img src="{{asset('images/solutions/technologies/WA-800 Window Affixing System.png')}}">
                                    </div>
                                    <div class="col-md-8">
                                        <h3>WA-800 Window Affixing System
                                        </h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>Your WA Series - Rigid Window Affixing System is the most flexible machine
                                            available, letting you affix rigid windows to virtually any carton product
                                            available on the market today, from small cosmetic cartons to large liquor
                                            boxes; let your creativity become a reality. And because your WA Series -
                                            Rigid Window Affixing System is the fastest machine on the market you can
                                            produce rigid window cartons for any market that incorporates high
                                            visibility packaging at low ‘per-unit’ costs. There is more to your WA
                                            Series than just window affixing, because of a modular system approach it is
                                            ideally suited to simultaneously carry out other in-line processes such as
                                            folding and gluing, creasing, tipping, Braille inspection and digital
                                            imaging. Your WA Series - Rigid Window Affixing System comes with your
                                            choice of delivery options or bridging modules for integration with almost
                                            any folder gluer.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>Affix a variety of windowed substrates to your carton including; PVC, PET,
                                            PLA, polystyrene and more. Single stream capabilities up to 25,000 products
                                            per hour.
                                        </p>
                                        <strong>Versatility</strong>
                                        <p>Create crisp, visually stunning products thanks to Pack-Smart's incredible
                                            window placement accuracy, +-0.02". At Pack-Smart we don't sacrifice speed
                                            for accuracy.
                                        </p>
                                        <strong>Quality</strong>
                                        <p>With Pack-Smart's focus on modular design your system can complete all
                                            necessary processes in a single system pass; Folding, gluing, scoring,
                                            tipping, personalization, and more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="color:black;margin-bottom:20px;">Technology</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        <img src="{{asset('images/solutions/technologies/HS-750 Continuous Motion Heat Sealing System v2.png')}}">
                                    </div>
                                    <div class="col-md-8">
                                        <h3>HS-750 Continuous Motion Heat Sealing System
                                        </h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>Pack-Smart’s HS-750 Continuous Motion Heat Sealing System offers speed and
                                            versatility in high visibility packaging. Its unique design allows for the
                                            sealing of plastic-to-plastic clamshell, face seal blister, double card
                                            trapped blister, half-clamshell and club pack style packages with simple
                                            tooling changes. The HS 750 line of packaging machinery features heat fusion
                                            designed with ease-of-use in mind. All our HS 750 machines are rich in
                                            features based on our robust fiber optic servo drive system. To further
                                            enhance production efficiency and application usage, the HS-750 Heat Sealing
                                            System can be coupled with additional options such as Quick Change tooling,
                                            upstream and downstream automation. The HS 750 systems machines are ideal
                                            solutions for a broad range of blister or heat sealing applications in
                                            various industries, including health and beauty, household goods, gift card,
                                            medical device, Telco, pharma and accessories.
                                        </p>
                                        <strong>Speed</strong>
                                        <p>With up to 85 product cycles per minute the system outputs 5100 perfect
                                            packages per hour.
                                        </p>
                                        <strong>Versatility</strong>
                                        <p>Create crisp, visually stunning products thanks to Pack-Smart's incredible
                                            window placement accuracy. At Pack-Smart we don't sacrifice speed for
                                            accuracy.
                                        </p>
                                        <strong>Quality</strong>
                                        <p>Engineered with premium packages in mind the HS-750 is the ideal secure
                                            sealing solution for your high end products.
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
                    <p>4x Faster: Our automation solutions run at 4x the industry standard. We truly are dictating the
                        speed of business.</p>
                </div>
                <div class="col-xs34 col-sm-3 col-md-3 col-lg-3 text-center">
                    <img src="{{asset('images/solutions/4x Faster.jpg')}}">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="col-xs34 col-sm-3 col-md-3 col-lg-3 text-center">
                    <img src="{{asset('images/solutions/3x Accuracy.jpg')}}">
                </div>
                <div class="col-lg-9">
                    <p>3x Accuracy: Our solutions have 3x the accuracy when compared to the next closest competitor and
                        we don’t sacrifice on speed.</p>
                </div>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-6">
                <div class="col-lg-9">
                    <p>98% Uptime: Our overall equipment effectiveness(OEE) is above world class. No competitor even
                        comes close to matching our capabilities.</p>
                </div>
                <div class="col-xs34 col-sm-3 col-md-3 col-lg-3 text-center">
                    <img src="{{asset('images/solutions/98 Up Time.jpg')}}">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="col-xs34 col-sm-3 col-md-3 col-lg-3 text-center">
                    <img src="{{asset('images/solutions/Over 5bn.jpg')}}">
                </div>
                <div class="col-lg-9">
                    <p>Over 5Bn: Our commitment to speed, accuracy, and efficiency allows us to consistently produce
                        brand changing product volumes.</p>
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
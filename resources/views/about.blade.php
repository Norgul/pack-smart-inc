@extends('layouts.main')
@section('title', 'About us')

@section('content')

    @include('sections.labeling_cartwheel')

    {{--our story/history....light grey?--}}
    <br><br>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <h3>Our Purpose</h3>
                <p>
                    At Pack-Smart, we are dedicated to streamlining operations, creating speed, accuracy, quality and
                    profitability. We accomplish this through and by our ever-growing knowledge, utilizing innovative
                    technologies that support the most advanced manufacturing processes.
                </p>
                <h3>Our Mandate</h3>
                <p>By concentrating our focus and energy on superior designs and service, we accelerate the growth and
                    innovation objectives of our customers. In doing so, we aim to maintain our position as each
                    customer’s partner of choice and as the industry’s employer of choice, gaining and solidifying
                    greater levels of trust, respect and loyalty.</p>
                <h3>Our Vision</h3>
                <p>The inevitable change in the marketplace is a great opportunity for us to grow. To that end, we
                    engage our people and experience to develop groundbreaking solutions that meet the needs of our
                    customers and the emerging markets in need of support.</p>

            </div>
            <div class="col-lg-4">
                <p>Our past success is surely our pride, but never a hindrance to innovating beyond what we have already
                    done. At Pack-Smart, we are committed to building the foundations for sustainable growth. We
                    concentrate our participation in markets where our contribution will be invaluable. We aim to be of
                    extensive value to our customers by making a positive, prompt and measurable impact in their
                    operations.</p>
                <p>Our formula for diversity and focus ensures that we provide our customers with sustainable, long-term
                    growth and success, thereby establishing our own longevity and success as an industry leader.</p>
                <h3>Our Mission</h3>
                <p>Pack-Smart exists because of its loyal customers, whose needs are constantly evolving with the
                    marketplace. To that end, the Pack-Smart team understands the value of looking ahead and leading the
                    way to the future.</p>
                <p>We achieve our goals through the development individually tailored solutions, innovative
                    technologies, and enhanced adaptability, promoting greater efficiencies for our clients and their
                    production.</p>
                <p>We lend concerted effort to understanding the strategic and operational objectives of our customers,
                    thus delivering specific value in all our designs, products and services.</p>


            </div>
            <div class="col-lg-4">
                <p>We believe wholly in team collaboration and complete transparency with suppliers and partners. This
                    allows us to deliver superior innovation to our customers, which results in an unparalleled
                    competitive advantage.</p>
                <p>We embrace challenge, take full responsibility for our results with integrity, and welcome change and
                    improvement with courage, continuously gaining the trust of customers, employees and
                    stakeholders.</p>
                <h3>Our Commitment to Quality</h3>
                <p>We provide the epitome of quality, meeting or exceeding the needs and expectations of our customers.
                    Each employee takes ownership of and is held accountable for the quality of his/her product, service
                    and process. We achieve superior quality through comprehensive customer focus, effective
                    communication, quantifiable measurement, and continuous improvement. These are eminent in our
                    organization’s communications, working environment, needs, goals, processes and roadmaps.</p>
                <h3>Our People</h3>
                <p>Pack-Smart unites highly skilled design, operations, and support teams with leading expertise in
                    automation and integration. With these excellent people in place, we are able to leverage our
                    collective creativity and bring innovative ideas to life.</p>

            </div>
        </div>
    </div>
    <br><br>

    {{--timeline...should be red...maybe?--}}
    <style>
        .timeline {
            list-style: none;
            padding: 20px 0 20px;
            position: relative;
        }

        .timeline:before {
            top: 0;
            bottom: 0;
            position: absolute;
            content: " ";
            width: 3px;
            background-color: #eeeeee;
            left: 50%;
            margin-left: -1.5px;
        }

        .timeline > li {
            margin-bottom: 20px;
            position: relative;
        }

        .timeline > li:before,
        .timeline > li:after {
            content: " ";
            display: table;
        }

        .timeline > li:after {
            clear: both;
        }

        .timeline > li:before,
        .timeline > li:after {
            content: " ";
            display: table;
        }

        .timeline > li:after {
            clear: both;
        }

        .timeline > li > .timeline-panel {
            width: 46%;
            float: left;
            border: 1px solid #d4d4d4;
            border-radius: 2px;
            padding: 20px;
            position: relative;
            -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
        }

        .timeline > li > .timeline-panel:before {
            position: absolute;
            top: 26px;
            right: -15px;
            display: inline-block;
            border-top: 15px solid transparent;
            border-left: 15px solid #ccc;
            border-right: 0 solid #ccc;
            border-bottom: 15px solid transparent;
            content: " ";
        }

        .timeline > li > .timeline-panel:after {
            position: absolute;
            top: 27px;
            right: -14px;
            display: inline-block;
            border-top: 14px solid transparent;
            border-left: 14px solid #fff;
            border-right: 0 solid #fff;
            border-bottom: 14px solid transparent;
            content: " ";
        }

        .timeline > li > .timeline-badge {
            color: #fff;
            width: 50px;
            height: 50px;
            line-height: 50px;
            font-size: 1.4em;
            text-align: center;
            position: absolute;
            top: 16px;
            left: 50%;
            margin-left: -25px;
            background-color: #999999;
            z-index: 100;
            border-top-right-radius: 50%;
            border-top-left-radius: 50%;
            border-bottom-right-radius: 50%;
            border-bottom-left-radius: 50%;
        }

        .timeline > li.timeline-inverted > .timeline-panel {
            float: right;
        }

        .timeline > li.timeline-inverted > .timeline-panel:before {
            border-left-width: 0;
            border-right-width: 15px;
            left: -15px;
            right: auto;
        }

        .timeline > li.timeline-inverted > .timeline-panel:after {
            border-left-width: 0;
            border-right-width: 14px;
            left: -14px;
            right: auto;
        }

        .timeline-badge.primary {
            background-color: #2e6da4 !important;
        }

        .timeline-badge.success {
            background-color: #3f903f !important;
        }

        .timeline-badge.warning {
            background-color: #f0ad4e !important;
        }

        .timeline-badge.danger {
            background-color: #d9534f !important;
        }

        .timeline-badge.info {
            background-color: #5bc0de !important;
        }

        .timeline-title {
            margin-top: 0;
            color: inherit;
        }

        .timeline-body > p,
        .timeline-body > ul {
            margin-bottom: 0;
        }

        .timeline-body > p + p {
            margin-top: 5px;
        }

        @media (max-width: 767px) {
            ul.timeline:before {
                left: 40px;
            }

            ul.timeline > li > .timeline-panel {
                width: calc(100% - 90px);
                width: -moz-calc(100% - 90px);
                width: -webkit-calc(100% - 90px);
            }

            ul.timeline > li > .timeline-badge {
                left: 15px;
                margin-left: 0;
                top: 16px;
            }

            ul.timeline > li > .timeline-panel {
                float: right;
            }

            ul.timeline > li > .timeline-panel:before {
                border-left-width: 0;
                border-right-width: 15px;
                left: -15px;
                right: auto;
            }

            ul.timeline > li > .timeline-panel:after {
                border-left-width: 0;
                border-right-width: 14px;
                left: -14px;
                right: auto;
            }
        }
    </style>

    <div class="container">
        <div class="page-header">
            <h1 id="timeline">Timeline</h1>
        </div>
        <ul class="timeline">
            <li>
                <div class="timeline-badge"><i class="fa fa-university"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">2015.</h4>
                    </div>
                    <div class="timeline-body">
                        <img style="max-width: 50%;" src="{{asset('images/about/2015.jpg')}}">                    
                        <p>3rd Place innovative Packaging Company – Packaging Strategies of America</p>
                    </div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-badge warning"><i class="fa fa-building"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">2014.</h4>
                    </div>
                    <div class="timeline-body">
                        <img style="max-width: 50%;" src="{{asset('images/about/2014.png')}}">                    
                        <p>3rd Place Smart manufacturing of Ontario</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="timeline-badge danger"><i class="fa fa-globe"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">2012.</h4>
                    </div>
                    <div class="timeline-body">
                        <img style="max-width: 50%;" src="{{asset('images/about/2012.jpg')}}">                    
                        <p>Ontario Business Achievement Award</p>
                    </div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-badge success"><i class="fa fa-home"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">2010.</h4>
                    </div>
                    <div class="timeline-body">
                        <img style="max-width: 50%;" src="{{asset('images/about/2010.png')}}">                    
                        <p>Sony Green Partner Certification</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="timeline-badge info"><i class="fa fa-star-o"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">2008.</h4>
                    </div>
                    <div class="timeline-body">
                        <img style="max-width: 50%;" src="{{asset('images/about/2008.png')}}">                    
                        <p>Amis Advanced Manufacturing Award</p>
                    </div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-badge primary"><i class="fa fa-microchip"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">2005.</h4>
                    </div>
                    <div class="timeline-body">
                        <img style="max-width: 50%;" src="{{asset('images/about/2005.png')}}">                    
                        <p>Pack-Smart moved to new 18 000 SF facility on Milvan Dr.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="timeline-badge success"><i class="fa fa-road"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">2001.</h4>
                    </div>
                    <div class="timeline-body">
                        <img style="max-width: 50%;" src="{{asset('images/about/2001.png')}}">                    
                        <p>RP911 High Speed Servo Drive Pick and Place System is installed</p>
                    </div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-badge info"><i class="fa fa-pie-chart"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">1999.</h4>
                    </div>
                    <div class="timeline-body">
                        <img style="max-width: 50%;" src="{{asset('images/about/1999.png')}}">                    
                        <p>Pack-Smart is Incorporated , Derek Dlugosh-Ostap acquires Rexdale Tooling Industries</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="timeline-badge info"><i class="fa fa-suitcase"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">1998.</h4>
                    </div>
                    <div class="timeline-body">
                        <img style="max-width: 50%;" src="{{asset('images/about/1998.png')}}">                    
                        <p>Prototype of RP910   is developed and tested</p>
                    </div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-badge primary"><i class="fa fa-universal-access"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">1996.</h4>
                    </div>
                    <div class="timeline-body">
                        <img style="max-width: 50%;" src="{{asset('images/about/1996.png')}}">
                        <p>July Derek Dlugosh-Ostap becomes proprietor of Pack-Smart</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <br><br>

    {{--why pack smart--}}
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <img src="{{asset('images/about/first_bottom.png')}}">
            </div>
            <div class="col-lg-9">
                <p>A company doesn’t turn 20 every day. In fact, very few turn 20 at all. The reality is that a large
                    number of new companies fail in their very first year, while only about half make it past their
                    fifth birthday.</p>
                <p>In 1996, Derek Dlugosh-Ostap began to imagine a company that would build and provide industry leaders
                    with modular, innovative technology to solve their specific, unique problems, and in 1999,
                    Pack-Smart officially incorporated.</p>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-12">
                <p>Today, the Pack-Smart team is thrilled to be celebrating 20 years of growth, expansion, and
                    excellence
                    in the digital printing and packaging industries! For us, this major achievement is a chance to
                    celebrate what is means to be Pack-Smart, remembering where we’ve come from, taking pride in where
                    we are, and fixing our focus and determination on going farther than ever in the future.</p>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-9">
                <p>We are a team of dedicated, innovative individuals, doing work that truly matters every day.
                    We have grown from a single client to a globally recognized, award-winning leader in innovation and
                    engineering.</p>
                <p>We have a strong foundation, enjoy an excellent and hard-earned reputation, and do great things for
                    the right reasons.</p>
                <p>In a world that’s changing faster every day, we are staying ahead of its turns and surprises by
                    identifying what matters and finding ways to do it faster, with greater accuracy, and at a lower
                    cost.</p>

            </div>
            <div class="col-lg-3">
                <img src="{{asset('images/about/second_bottom.png')}}">
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-lg-12">
                <p>And finally…</p>
                <p>For all of the pride that we take in our ability to engineer new solutions with excellence, we know
                    that we owe it all to you, our loyal clients – the best, the brightest, and the most ambitious in
                    your respective fields – for whom we have the utmost gratitude.</p>
                <p>Thank you for our first 20. Here’s to our next.</p>

            </div>
        </div>
    </div>

    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection
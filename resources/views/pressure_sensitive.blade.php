@extends('layouts.main')
@section('title', 'Pressure sensitive')

@section('content')
    @include('sections.breadcrumbs_fake')


    <section id="section-technologies_labeling_tabs" class="section section--indented">

        <div class="uk-container uk-container-center">
            <div class="section__inside">
                <div class="uk-grid">
                    <div class="uk-width-1-1">
                        <div class="uk-grid">
                            <div class="uk-width-4-6">
                                <h3>Pack-Smart HSL-60 - Extreme Speed Label Applicator</h3>
                                <br>
                                <p>
                                    Pack-Smart HSL Series labelers complete the job seamlessly while running
                                    24 <br>
                                    hours a day, 7 days a week. By delivering placement accuracy of +/- 0.4
                                    mm, <br>
                                    the labelers can deliver high quality even when running at full capacity.
                                    The <br>
                                    labelers synchronize with the product speed and consistently deliver perfect
                                    results.
                                </p>
                                <br>
                                <h3>Highlights</h3>
                                <br>
                                <ul>
                                    <li>Apply 400 labels per minute with WZero Defects</li>
                                    <li>Stick Vecro buttons on any box with accuracy of .4 mm</li>
                                    <li>Don't stop your production for Roll Changes</li>
                                </ul>
                                <br>
                                <h3>Applications</h3>
                                <br>
                                <div class="uk-grid">
                                    <div class="uk-width-1-2">
                                        <ul>
                                            <li>Smart and Active Labels</li>
                                            <li>Plastic Card</li>
                                            <li>Scratch Off</li>
                                            <li>Magnetic Stripe</li>
                                            <li>Plastic Rigid Containers</li>
                                            <li>Paperboard</li>
                                            <li>Folding Carton</li>
                                            <li>Labeling on Corrugate</li>
                                        </ul>
                                    </div>
                                    <div class="uk-width-1-2">
                                        <ul>
                                            <li>Shrink Wrap</li>
                                            <li>Dairy</li>
                                            <li>Pharmaceutical and Medical Devices</li>
                                            <li>Tobacco</li>
                                            <li>Commercial Printing and Direct Mail</li>
                                            <li>Electrical Components and Electronics</li>
                                            <li>Reatail-Ready Packaging</li>
                                            <li>And Many More!</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-width-2-6" style="padding-left: 0px;">
                                <img src="{{asset('images/technologies_labeling.png')}}">
                            </diV>
                        </div>
                    </div>
                    <div class="uk-width-1-1" style="margin-top: 30px; margin-bottom: 30px;">
                        <div class="button__group">
                            <a href="{{url('not-set-yet')}}" class="uk-button uk-button-razor uk-button-primary"
                               style="text-transform: capitalize;">
                                <span class="button__label">Request Info</span>
                            </a>
                            <a href="#" class="scroll-to-contact uk-button uk-button-razor button--default"
                               style="text-transform: capitalize;">
                                <span class="button__label">Contact Us</span>
                            </a>
                        </div>
                    </div>
                    <div class="uk-width-1-1">

                        <style>
                            .nav-custom > li.active > a,
                            .nav-custom > li.active > a:hover,
                            .nav-custom > li.active > a:focus,
                            .nav-custom > div.active {
                                color: #fff;
                                background-color: #d31f26;
                            }

                            .nav-custom > div {
                                overflow-x: auto;
                                max-height: 700px;
                                padding: 30px;
                                margin-left: 0px;
                            }
                        </style>

                        <!-- start: TABS -->
                        <ul class="nav nav-tabs nav-justified nav-custom">
                            <li class="active">
                                <a data-toggle="tab" href="#overview">
                                    <strong>Overview</strong>
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#specifications">
                                    <strong>Specifications</strong>
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#applications">
                                    <strong>Applications</strong>
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#related_modules">
                                    <strong>Related Modules</strong>
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#brochures">
                                    <strong>Brochures</strong>
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#videos">
                                    <strong>Videos</strong>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content panel nav-custom">
                            <div id="overview" class="tab-pane fade active in uk-grid">
                                <div class="uk-width-2-6" style="padding-left: 0px;">
                                    <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                        <img src="{{asset('images/labeling/pressure-sensitive-tile.jpg')}}">
                                    </a>
                                </div>
                                <div class="uk-width-4-6">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        Performance
                                        <ul>
                                            <li>
                                                Brushless Servo driven, achieving speeds up to 30,000 products/hr
                                            </li>
                                            <li>
                                                Zero web tension with +/- 0.4 mm placement accuracy
                                            </li>
                                            <li>
                                                Automatic/On the fly synchronization of product and labeling speed
                                            </li>
                                            <li>
                                                IP66 rated for dust and water protection
                                            </li>
                                        </ul>
                                        Reliability
                                        <ul>
                                            <li>
                                                Automatic missing label compensation
                                            </li>
                                            <li>
                                                Hard Anodized aluminum servo drive roller
                                            </li>
                                            <li>
                                                Aluminum and stainless steel design
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        Efficiency
                                        <ul>
                                            <li>
                                                Low label, roll replacement warning
                                            </li>
                                            <li>
                                                Fast RunTM Dial indicators for repeatable setup
                                            </li>
                                            <li>
                                                Servo driven web rewind for energy conservation
                                            </li>
                                            <li>
                                                Integrated control panel for quick setup
                                            </li>
                                            <li>
                                                Up to 610 mm Roll Diameter
                                            </li>
                                        </ul>
                                        Compatibility
                                        <ul>
                                            <li>
                                                Universal rail mounts
                                            </li>
                                            <li>
                                                PLC network (Sercos III)
                                            </li>
                                            <li>
                                                Reads external encoder and sensor data
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div id="specifications" class="tab-pane fade uk-grid" style="margin-top: 0px;">
                                <div class="uk-width-1-3" style="padding-left: 0px;">
                                    <div class="uk-panel">
                                        <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48IS0tClNvdXJjZSBVUkw6IGhvbGRlci5qcy8xMDB4NTAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNS4yLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNy40Mjk2ODc1IiB5PSIyOS41IiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQiPjEwMHg1MDwvdGV4dD48L2c+PC9zdmc+"
                                                 alt="100x50" data-src="holder.js/100x50/auto"
                                                 data-holder-rendered="true">
                                        </a>
                                        <div class="uk-grid-margin"></div>
                                        <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48IS0tClNvdXJjZSBVUkw6IGhvbGRlci5qcy8xMDB4NTAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNS4yLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNy40Mjk2ODc1IiB5PSIyOS41IiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQiPjEwMHg1MDwvdGV4dD48L2c+PC9zdmc+"
                                                 alt="100x50" data-src="holder.js/100x50/auto"
                                                 data-holder-rendered="true">
                                        </a>
                                    </div>
                                </div>
                                <div class="uk-width-2-3">
                                    <ul>
                                        <li>
                                            Label widths: 12 to 153mm
                                        </li>
                                        <li>
                                            Core Diameter: 76mm
                                        </li>
                                        <li>
                                            Length/Width:
                                        </li>
                                        <li>
                                            Max. Material thickness: 3.2mm
                                        </li>
                                        <li>
                                            Servo Power: 3 phase 220V,
                                        </li>
                                        <li>
                                            Logic Power: 24V, 0.5A
                                        </li>
                                        <li>
                                            Stepper Motor: 48V, 0.5A
                                        </li>
                                        <li>
                                            Weight:
                                        </li>
                                    </ul>
                                    Options
                                    <ul>
                                        <li>
                                            Automatic switchover to a secondary labeler for Non Stop operation
                                        </li>
                                        <li>
                                            Mobile and wall mount stands
                                        </li>
                                        <li>
                                            HMI panel
                                        </li>
                                        <li>
                                            Stand-alone control module
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div id="applications" class="tab-pane fade uk-grid" style="margin-top: 0px;">
                                <div class="uk-width-1-3" style="padding-left: 0px;">
                                    <ul>
                                        <li>
                                            Velcro
                                        </li>
                                        <li>
                                            Smart and Active Labels
                                        </li>
                                        <li>
                                            Plastic Card
                                        </li>
                                        <li>
                                            Scratch off
                                        </li>
                                        <li>
                                            Magnetic Stripe
                                        </li>
                                        <li>
                                            Metal and Aluminum Cans
                                        </li>
                                        <li>
                                            Plastic Rigid Containers
                                        </li>
                                        <li>
                                            Flexible Film and Foils
                                        </li>
                                        <li>
                                            Glass Bottles and Containers
                                        </li>
                                        <li>
                                            Paperboard
                                        </li>
                                        <li>
                                            Folding Carton
                                        </li>
                                        <li>
                                            Labeling on Corrugate
                                        </li>
                                        <li>
                                            Retail-Ready Packaging
                                        </li>
                                        <li>
                                            Shrink Wrap
                                        </li>
                                        <li>
                                            Printed Labels
                                        </li>
                                        <li>
                                            Extrusions
                                        </li>
                                        <li>
                                            Wood
                                        </li>
                                    </ul>
                                </div>
                                <div class="uk-width-1-3">
                                    <ul>
                                        <li>
                                            Eggs
                                        </li>
                                        <li>
                                            Metal Parts
                                        </li>
                                        <li>
                                            Plastic and Rubber Part
                                        </li>
                                        <li>
                                            Baked Goods and Cereal
                                        </li>
                                        <li>
                                            Beverages
                                        </li>
                                        <li>
                                            Candy and Confectionery
                                        </li>
                                        <li>
                                            Dairy
                                        </li>
                                        <li>
                                            Egg
                                        </li>
                                        <li>
                                            Fruits and Vegetables
                                        </li>
                                        <li>
                                            Meat and Poultry
                                        </li>
                                        <li>
                                            Pet Food and Animal Feed
                                        </li>
                                        <li>
                                            Cosmetics, Personal and Home Care
                                        </li>
                                        <li>
                                            Pharmaceutical and Medical Devices
                                        </li>
                                        <li>
                                            Tobacco
                                        </li>
                                        <li>
                                            Automotive and Aerospace
                                        </li>
                                        <li>
                                            Building Materials
                                        </li>
                                        <li>
                                            Chemicals
                                        </li>
                                    </ul>
                                </div>
                                <div class="uk-width-1-3">
                                    <ul>
                                        <li>
                                            Commercial Printing and Direct Mail
                                        </li>
                                        <li>
                                            Electrical Components and Electronics
                                        </li>
                                        <li>
                                            Wire, Cable and Pipe
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div id="related_modules" class="tab-pane fade" style="margin-top: 0px;">
                                <div class="uk-grid" style="padding-left: 0px;">
                                    <div class="uk-width-1-4 uk-row-first">
                                        <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48IS0tClNvdXJjZSBVUkw6IGhvbGRlci5qcy8xMDB4NTAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNS4yLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNy40Mjk2ODc1IiB5PSIyOS41IiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQiPjEwMHg1MDwvdGV4dD48L2c+PC9zdmc+"
                                                 alt="100x50" data-src="holder.js/100x50/auto"
                                                 data-holder-rendered="true">
                                        </a>
                                    </div>
                                    <div class="uk-width-1-4">
                                        <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48IS0tClNvdXJjZSBVUkw6IGhvbGRlci5qcy8xMDB4NTAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNS4yLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNy40Mjk2ODc1IiB5PSIyOS41IiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQiPjEwMHg1MDwvdGV4dD48L2c+PC9zdmc+"
                                                 alt="100x50" data-src="holder.js/100x50/auto"
                                                 data-holder-rendered="true">
                                        </a>
                                    </div>
                                    <div class="uk-width-1-4">
                                        <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48IS0tClNvdXJjZSBVUkw6IGhvbGRlci5qcy8xMDB4NTAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNS4yLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNy40Mjk2ODc1IiB5PSIyOS41IiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQiPjEwMHg1MDwvdGV4dD48L2c+PC9zdmc+"
                                                 alt="100x50" data-src="holder.js/100x50/auto"
                                                 data-holder-rendered="true">
                                        </a>
                                    </div>
                                    <div class="uk-width-1-4">
                                        <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48IS0tClNvdXJjZSBVUkw6IGhvbGRlci5qcy8xMDB4NTAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNS4yLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNy40Mjk2ODc1IiB5PSIyOS41IiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQiPjEwMHg1MDwvdGV4dD48L2c+PC9zdmc+"
                                                 alt="100x50" data-src="holder.js/100x50/auto"
                                                 data-holder-rendered="true">
                                        </a>
                                    </div>

                                    <div class="uk-width-1-4 uk-grid-margin uk-row-first">
                                        <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48IS0tClNvdXJjZSBVUkw6IGhvbGRlci5qcy8xMDB4NTAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNS4yLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNy40Mjk2ODc1IiB5PSIyOS41IiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQiPjEwMHg1MDwvdGV4dD48L2c+PC9zdmc+"
                                                 alt="100x50" data-src="holder.js/100x50/auto"
                                                 data-holder-rendered="true">
                                        </a>
                                    </div>
                                    <div class="uk-width-1-4 uk-grid-margin">
                                        <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48IS0tClNvdXJjZSBVUkw6IGhvbGRlci5qcy8xMDB4NTAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNS4yLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNy40Mjk2ODc1IiB5PSIyOS41IiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQiPjEwMHg1MDwvdGV4dD48L2c+PC9zdmc+"
                                                 alt="100x50" data-src="holder.js/100x50/auto"
                                                 data-holder-rendered="true">
                                        </a>
                                    </div>
                                    <div class="uk-width-1-4 uk-grid-margin">
                                        <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48IS0tClNvdXJjZSBVUkw6IGhvbGRlci5qcy8xMDB4NTAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNS4yLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNy40Mjk2ODc1IiB5PSIyOS41IiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQiPjEwMHg1MDwvdGV4dD48L2c+PC9zdmc+"
                                                 alt="100x50" data-src="holder.js/100x50/auto"
                                                 data-holder-rendered="true">
                                        </a>
                                    </div>
                                    <div class="uk-width-1-4 uk-grid-margin">
                                        <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48IS0tClNvdXJjZSBVUkw6IGhvbGRlci5qcy8xMDB4NTAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNS4yLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnMvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNy40Mjk2ODc1IiB5PSIyOS41IiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQiPjEwMHg1MDwvdGV4dD48L2c+PC9zdmc+"
                                                 alt="100x50" data-src="holder.js/100x50/auto"
                                                 data-holder-rendered="true">
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div id="brochures" class="tab-pane fade uk-grid" style="margin-top: 0px;">

                            </div>

                            <div id="videos" class="tab-pane fade uk-grid" style="margin-top: 0px;"
                                 data-uk-grid-match="{target:'.uk-panel'}">
                                <div id="video" class="uk-panel uk-width-1-6 uk-height-1-1" style="padding-left: 0px;">
                                    <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                        <img src="https://img.youtube.com/vi/4c0eBTSiYbI/hqdefault.jpg">
                                    </a>
                                    Magnetic Stripe Application
                                    <div class="uk-grid-margin"></div>
                                    <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                        <img src="https://img.youtube.com/vi/I6sk_SC-Bas/hqdefault.jpg">
                                    </a>
                                    Velcro Application
                                    <div class="uk-grid-margin"></div>
                                    <a class="uk-thumbnail uk-thumbnail-expand" href="#">
                                        <img src="https://img.youtube.com/vi/lCxFRCnACe4/hqdefault.jpg">
                                    </a>
                                    Source Tag, Check Point Tag and RFID Application
                                </div>
                                <div class="uk-width-5-6 uk-height-1-1">
                                    <div id="video-url" style="min-height:inherit;">
                                        <iframe id="video-iframe" class="uk-panel uk-width-1-1 uk-height-1-1"
                                                style="min-height:inherit;"
                                                src="https://www.youtube.com/embed/4c0eBTSiYbI"></iframe>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection
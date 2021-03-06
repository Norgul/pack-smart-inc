<section id="section-technologies_labeling" class="section section--indented">
    <div class="uk-container uk-container-center">
        <div class="section__inside">
            <div class="uk-grid">
                <div class="  uk-width-medium-2-3 uk-width-large-2-3">
                    <h2 class="technologies-tab-h2">{{$title}}</h2>
                    <h3>{{$subtitle}}</h3>
                    &nbsp;
                    <div class="uk-grid" style="margin-bottom: 50px; ">
                        <p class="paragraph paragraph--muted">
                            {{$description}}
                        </p>
                    </div>
                    {{--<div class="button__group">
                        <a href="{{url($url)}}"
                           class="uk-button uk-button-primary">
                            <span class="button__label"><span>more</span></span>
                        </a>
                    </div>--}}
                </div>
                <div class="  uk-width-medium-1-3 uk-width-large-1-3 uk-hidden-small">&nbsp;</div>
                <img data-wt-height="684" data-wt-width="960" data-wt-image-ratio="NaN"
                     src="{{asset('images/technologies/' . $image)}}" class="technologies_labeling_img">
            </div>
        </div>
    </div>
    <div class="uk-grid uk-grid-collapse uk-grid-width-1-3 image--infinite-right-1-3">
        <div style="background-image:url('{{asset('images/technologies/' . $image )}}');background-repeat: no-repeat;
                background-size: contain;">
        </div>
    </div>
</section>

<!-- 
<section id="section-technologies_labeling_tabs" class="section section--indented">

    <div class="uk-container uk-container-center">
        <div class="section__inside">
            <div class="uk-grid">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                    <style>
                        .nav-custom > li.active > a,
                        .nav-custom > li.active > a:hover,
                        .nav-custom > li.active > a:focus,
                        .nav-custom > div.active {
                            color: #fff;
                            background-color: #d31f26;
                        }

                        .nav-custom > div{
                            overflow-x:auto;
                            max-height:292px;
                            padding: 30px;
                        }
                    </style>

                    <! start: TABS ->
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
                        <div id="overview" class="tab-pane fade active in">

                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                the picture goes here
                            </div>

                            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">

                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    left column of text
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    right column of text
                                </div>

                            </div>

                        </div>

                        <div id="specifications" class="tab-pane fade">

                        </div>

                        <div id="applications" class="tab-pane fade">

                            <div class="col-lg-4">

                            </div>
                            <div class="col-lg-4">

                            </div>
                            <div class="col-lg-4">

                            </div>
                        </div>

                        <div id="related_modules" class="tab-pane fade">

                            <div class="row">
                                <div class="col-lg-3">

                                </div>
                                <div class="col-lg-3">

                                </div>
                                <div class="col-lg-3">

                                </div>
                                <div class="col-lg-3">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-3">

                                </div>
                                <div class="col-lg-3">

                                </div>
                                <div class="col-lg-3">

                                </div>
                                <div class="col-lg-3">

                                </div>
                            </div>
                        </div>

                        <div id="brochures" class="tab-pane fade">

                        </div>

                        <div id="videos" class="tab-pane fade" style="overflow-x:auto;max-height:292px;padding: 30px;">

                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
-->
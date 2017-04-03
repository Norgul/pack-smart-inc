<style type="text/css" scoped>
    #slider1 {
        background-image: url('{{asset('images/home_slider_1.jpg')}}');
    }

    #slider2 {
        background-image: url('{{asset('images/home_slider_2.jpg')}}');
    }

    #slider3 {
        background-image: url('{{asset('images/home_slider_3.jpg')}}');
    }

    @media (max-width: 1035px) {
        #slider1 {
            background-image: url('{{asset('images/home_slider_1.jpg')}}');
        }

        #slider2 {
            background-image: url('{{asset('images/home_slider_2.jpg')}}');
        }

        #slider3 {
            background-image: url('{{asset('images/home_slider_3.jpg')}}');
        }
    }

    @media (max-width: 375px) {
        #slider1 {
            background-image: url('{{asset('images/home_slider_1.jpg')}}');
        }

        #slider2 {
            background-image: url('{{asset('images/home_slider_2.jpg')}}');
        }

        #slider3 {
            background-image: url('{{asset('images/home_slider_3.jpg')}}');
        }
    }
</style>

<div class="uk-slidenav-position slideshow--high" data-uk-slideshow="{autoplay:true, autoplayInterval:4000}">
    <ul class="uk-slideshow">
        <li>
            <section id="slider1" class="section section--mediumHeight sectionhotspots high">
                <div class="section__inside">
                    <div class="box box--transGreen box--bottom box--clip" style="bottom: 250px;">
                        <div class="box--transInner">
                            <h2>Welcome to Pack-Smart Inc. <br> Automated packaging solutions.</h2>

                            <div class="paragraph paragraph--default uk-margin-top">
                                <p>For more than 15 years, Pack-Smart Inc. has designed and engineered innovative
                                    automated packaging solutions
                                    <br> with over 600 unique system installations worldwide.
                                </p>
                            </div>
                            <div class="box--transGreen--addition">
                                <div class="box--transGreen--addition__inner">
                                    <div class="box--transGreen--addition__content--rotated"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </li>
        <li>
            <section id="slider2" class="section section--mediumHeight sectionhotspots">
                <div class="section__inside">
                    <div class="uk-grid grid--intended--left grid--intended--right">
                        <div class="box box--bottom">
                            <div class="box--transInner">
                                <div class="paragraph paragraph--default">
                                    <p style="color: white;">Solutions with Purpose</p>
                                </div>
                                <h1 style="color: white;">Inspired by challenge. Driven by solution.</h1>

                                <div class="paragraph uk-margin-large-bottom"></div>
                                <div class="button__group">
                                    <a href="{{url('not-set-yet')}}"
                                       class="uk-button uk-button-razor uk-button-primary ">
                                        <span class="button__label">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </li>
        <li>
            <section id="slider3" class="section  section--mediumHeight sectionhotspots">
                <div class="section__inside">
                    <div class="uk-grid grid--intended--left grid--intended--right ">
                        <div class="box  box--bottom">
                            <div class="box--transInner">
                                <div class="paragraph paragraph--default">
                                    <p>Exceed expectations</p>
                                </div>
                                <h1>Stay Relevant in your market</h1>

                                <div class="paragraph  uk-margin-large-bottom"></div>
                                <div class="button__group">
                                    <a data-uk-lightbox data-lightbox-type="iframe" href="https://youtu.be/JTmDFtexziE"
                                       class="uk-button uk-button-razor uk-button-primary ">
                                        <span class="button__label"><span>Watch Video</span></span>
                                    </a>
                                    <a href="{{url('not-set-yet')}}"
                                       class="uk-button uk-button-razor   button--default ">
                                        <span class="button__label">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </li>
    </ul>

    <ul class="dotnav uk-position-bottom uk-flex-center">
        <li data-uk-slideshow-item="0"><p class="dotnav__link active"><a href="#"></a></p></li>
        <li data-uk-slideshow-item="1"><p class="dotnav__link active"><a href="#"></a></p></li>
        <li data-uk-slideshow-item="2"><p class="dotnav__link active"><a href="#"></a></p></li>
    </ul>
</div>

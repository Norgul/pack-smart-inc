<style type="text/css" scoped>
    #slider1 {
        background-image: url('{{asset('images/technologies_slider_1.jpg')}}');
    }

    #slider2 {
        background-image: url('{{asset('images/technologies_slider_3.jpg')}}');
    }

    #slider3 {
        background-image: url('{{asset('images/technologies_slider_2.jpg')}}');
    }

    @media (max-width: 1035px) {
        #slider1 {
            background-image: url('{{asset('images/technologies_slider_1.jpg')}}');
        }

        #slider2 {
            background-image: url('{{asset('images/technologies_slider_3.jpg')}}');
        }

        #slider3 {
            background-image: url('{{asset('images/technologies_slider_2.jpg')}}');
        }
    }

    @media (max-width: 375px) {
        #slider1 {
            background-image: url('{{asset('images/technologies_slider_1.jpg')}}');
        }

        #slider2 {
            background-image: url('{{asset('images/technologies_slider_3.jpg')}}');
        }

        #slider3 {
            background-image: url('{{asset('images/technologies_slider_2.jpg')}}');
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
                            <h2>Over 100 Proven Solutions <br>for Every Problem</h2>

                            <div class="paragraph paragraph--default uk-margin-top">
                                <p>Modular Design Concept built for speed and versatility</p>
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
                                    <p>Outstanding Performance. Proven Results.</p>
                                </div>
                                <h1>Tailored Solutions to Your Industry Needs</h1>

                                <div class="paragraph uk-margin-large-bottom"></div>
                                <div class="button__group">
                                    <a href="{{url('about/innovations')}}"
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
                        <div class="box  box--bottom ">
                            <div class="box--transInner">
                                <div class="paragraph paragraph--default">
                                    <p>Be Fast. Be First</p>
                                </div>
                                <h1>Integrate Highest Performance In Your Process</h1>

                                <div class="paragraph  uk-margin-large-bottom"></div>
                                <div class="button__group">
                                    <a data-uk-lightbox data-lightbox-type="iframe"
                                       href="https://www.youtube.com/watch?v=-x7hgd6E9tc"
                                       class="uk-button uk-button-razor uk-button-primary ">
                                        <span class="button__label"><span>Watch Video</span></span>
                                    </a>
                                    <a href="{{url('about/innovations')}}"
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

<style type="text/css" scoped>
    #slider1 {
        background-image: url('{{asset('images/labeling_slider_1.jpg')}}');
    }

    #slider2 {
        background-image: url('{{asset('images/labeling_slider_3.jpg')}}');
    }

    #slider3 {
        background-image: url('{{asset('images/labeling_slider_2.jpg')}}');
    }

    @media (max-width: 1035px) {
        #slider1 {
            background-image: url('{{asset('images/labeling_slider_1.jpg')}}');
        }

        #slider2 {
            background-image: url('{{asset('images/labeling_slider_3.jpg')}}');
        }

        #slider3 {
            background-image: url('{{asset('images/labeling_slider_2.jpg')}}');
        }
    }

    @media (max-width: 375px) {
        #slider1 {
            background-image: url('{{asset('images/labeling_slider_1.jpg')}}');
        }

        #slider2 {
            background-image: url('{{asset('images/labeling_slider_3.jpg')}}');
        }

        #slider3 {
            background-image: url('{{asset('images/labeling_slider_2.jpg')}}');
        }
    }
</style>

<div class="uk-slidenav-position slideshow--high" data-uk-slideshow="{autoplay:true, autoplayInterval:4000}">
    <ul class="uk-slideshow">
        <li>
          <section id="slider1" class="section  section--mediumHeight sectionhotspots">
              <div class="section__inside">
                  <div class="uk-grid grid--intended--left grid--intended--right ">
                      <div class="box  box--bottom ">
                          <div class="box--transInner">
                              <div class="paragraph paragraph--default" style="font-family: "HelveticaNeueW02-Thin";">
                                  <p>Improve Your Productivity</p>
                              </div>
                              <h1 style="font-size: 3rem;">Speeds of Up to 40,000pph & 0.4mm Accuracy</h1>

                              <div class="paragraph  uk-margin-large-bottom"></div>
                              <div class="button__group">
                                  <a data-uk-lightbox data-lightbox-type="iframe"
                                     href="https://www.youtube.com/watch?v=I6sk_SC-Bas"
                                     class="uk-button uk-button-razor uk-button-primary ">
                                      <span class="button__label"><span>Watch Video</span></span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </li>
        <li>
          <section id="slider2" class="section  section--mediumHeight sectionhotspots">
              <div class="section__inside">
                  <div class="uk-grid grid--intended--left grid--intended--right ">
                      <div class="box  box--bottom ">
                          <div class="box--transInner">
                              <div class="paragraph paragraph--default" style="font-family: "HelveticaNeueW02-Thin";">
                                  <p>Improve Your Productivity</p>
                              </div>
                              <h1 style="font-size: 3rem;">Speeds of Up to 40,000pph & 0.4mm Accuracy</h1>

                              <div class="paragraph  uk-margin-large-bottom"></div>
                              <div class="button__group">
                                  <a data-uk-lightbox data-lightbox-type="iframe"
                                     href="https://www.youtube.com/watch?v=I6sk_SC-Bas"
                                     class="uk-button uk-button-razor uk-button-primary ">
                                      <span class="button__label"><span>Watch Video</span></span>
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
                                <div class="paragraph paragraph--default" style="font-family: "HelveticaNeueW02-Thin";">
                                    <p>Improve Your Productivity</p>
                                </div>
                                <h1 style="font-size: 3rem;">Speeds of Up to 40,000pph & 0.4mm Accuracy</h1>

                                <div class="paragraph  uk-margin-large-bottom"></div>
                                <div class="button__group">
                                    <a data-uk-lightbox data-lightbox-type="iframe"
                                       href="https://www.youtube.com/watch?v=I6sk_SC-Bas"
                                       class="uk-button uk-button-razor uk-button-primary ">
                                        <span class="button__label"><span>Watch Video</span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </li>
    </ul>
</div>

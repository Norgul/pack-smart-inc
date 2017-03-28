<section class="footer section  section--green section--indented">
    <div class="uk-container uk-container-center">
        <div class="section__inside">
            <div class="uk-grid" data-uk-locations>
                <div class="uk-width-medium-1-2 uk-width-large-2-3 uk-hidden-small uk-hidden-xsmall">
                    <div class="locations" id="locations">
                        <!--<object data="/images/keba_map.svg" id="locations-world" type="image/svg+xml" width="100%" height="auto"></object>-->
                        <svg version="1.1" id="locations-world" xmlns="http://www.w3.org/2000/svg" width="741px"
                             height="630px" viewBox="0 0 741 630">
                            @include('partials.world_map_lines')
                            @include('partials.world_map_locations')
                        </svg>

                    </div>
                </div>

                <div class="uk-width-medium-1-2 uk-width-large-1-3 uk-width-1-1">
                    <h2>Locations</h2>

                    <div class="uk-width-medium-1-2 uk-width-large-2-3" id="dropdown-location-wrapper"></div>
                    <div class="uk-accordion" id="my-accordion">
                        <div id="locationCountryOffices" class="uk-grid">
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div style="display: none;"> -->
            <div style="display: none;">
                <div id="accordionLocationTemplate"
                     class="uk-width-1-1 uk-accordion--green_background locations__accordion">
                    <div class="accordion__item">
                        <div class="uk-accordion-title">
                            <h3 id="locationAccordionHeader" class="header locations__accordion_header">
                                Pack-Smart Inc.</h3>
                                <i class="uk-icon-button"></i>
                        </div>
                    </div>

                    <div class="uk-accordion-content">
                        <p class="paragraph--white">
                            <span id="locationsAddress">Pack-Smart Inc. Headquarters</span>
                            <span id="locationsStreet">111C Snidercroft Rd.</span>
                            <span id="locationsZip">L4K 2J8</span><span id="locationsCity"> Concord </span><span
                                    id="locationsCountryInline">Canada</span>
                        </p>

                        <p class="locations__contacts paragraph--white">
                            <span id="locationsPhone">Phone: +1 905 760 0077</span>
                            <span id="locationsWebsite"><a
                                        href="http://www.packsmartinc.com">packsmartinc.com</a></span>
                        </p>

                        <p class="paragraph--white" id="locationsEmail"><a href="mailto:ecardozo@packsmartinc.com">
                                ecardozo@packsmartinc.com</a></p>

                    </div>
                </div>
              </div>
        </div>
    </div>
</section>

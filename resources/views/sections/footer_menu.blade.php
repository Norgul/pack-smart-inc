<section class="footer section section--indented">
    <div class="uk-container uk-container-center">
        <div class="section__inside">
            <!-- footer menu start -->
            <div class="uk-grid">

                @foreach($header_categories as $category)
                    @if($category->parent_id == 0)
                        <div class="uk-width-small-1-2 uk-width-large-1-5">
                            <h4>{{$category->name}}</h4>

                            <div class="sitemap sitemap--link-breaks uk-margin-top ">
                                @foreach($header_categories->where('parent_id', $category->id) as $subcategory)
                                    <a href="{{url($category->url_slug . '/' . $subcategory->url_slug)}}">{{$subcategory->name}}</a>
                                @endforeach
                            </div>
                            @endif
                        </div>
                        @endforeach
                                <!-- footer menu end-->

                        <div class="uk-grid footertoolbar">
                            <div class="uk-width-1-1 uk-width-medium-1-2">
                                <form class="uk-form" id="form--newsletter" data-parsley-validate="">
                                    <fieldset data-uk-margin>
                                        <input name="newsletter" type="mail" data-parsley-type="email" value=""
                                               class="uk-form-large" required="" data-required="true"
                                               data-parsley-required-message="" data-parsley-trigger="change"
                                               placeholder="Newsletter"/>
                                        <button class="uk-button uk-button-primary" id="buttonNewsletter"><i
                                                    class="uk-icon-plus"></i></button>
                                    </fieldset>
                                </form>
                            </div>

                            <!-- SOCIAL NETWORKING -->
                            <div class="uk-width-1-1 uk-width-medium-1-4">
                                <div class="social_networks_footer_icons">
                                    <a target="_blank" href="https://www.facebook.com/packsmartinc" class="sitemapitem">
                                        <i class="uk-icon-facebook"></i>
                                    </a>
                                    <a target="_blank" href="https://twitter.com/packsmartca"
                                       class="sitemapitem">
                                        <i class="uk-icon-twitter"></i>
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/company/pack-smart-inc"
                                       class="sitemapitem">
                                        <i class="uk-icon-linkedin"></i>
                                    </a>
                                    <a target="_blank" href="https://www.youtube.com/user/PackSmartInc/videos"
                                       class="sitemapitem">
                                        <i class="uk-icon-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="uk-grid">
                            <div class="uk-width-1-1 uk-width-small-4-5 uk-width-medium-4-5">
                                <div class="sitemap sitemap--link-padding-left uk-float-right">
                                    <a href="{{url('/privacy-policy')}}" class="sitemapitem">Privacy Policy</a>
                                    <a href="{{url('/terms-and-conditions')}}" class="sitemapitem">Terms & Conditions</a>
                                    <a href="{{url('/sitemap')}}" class="sitemapitem">Sitemap</a>
                                </div>
                            </div>
                        </div>
            </div>

        </div>
</section>

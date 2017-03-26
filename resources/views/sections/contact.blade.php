<style type="text/css" scoped>
    #section-contact {
        background-image: url('{{asset('images/contact_us_pack smart_flonase.jpg')}}');
    }
</style>

<section id="section-contact" class="section section--indented">
    <div class="uk-container uk-container-center">
        <div class="section__inside">
            <div class="uk-grid">
                <div class="uk-width-medium-1-2 uk-width-large-1-2">
                    <h1>Contact</h1>

                    <div class="paragraph  paragraph--default ">
                        <p>Let’s discuss your project. Our Pack-Smart team is ready to answer your inquiries.</p>
                    </div>
                </div>
                <div class="uk-width-medium-1-2 uk-width-large-1-2">&nbsp;</div>
                <div class="uk-width-medium-1-2 uk-width-large-1-2">
                    <form class="uk-form form uk-position-relative basicform" id="form659310"
                          data-parsley-validate="" method="POST">
                        <div class="uk-form-row">
                            <div class="uk-grid">
                                <div class="uk-width-1-2">
                                    <input type="text" name="firstname" id="firstname" placeholder="First name"
                                           class="uk-width-1-1 form-control" data-parsley-required="true" required>
                                </div>
                                <div class="uk-width-1-2">
                                    <input type="text" name="lastname" id="lastname" placeholder="Last name"
                                           class="uk-width-1-1 form-control" data-parsley-required="true" required>
                                </div>
                            </div>
                        </div>
                        <div class="uk-form-row">
                            <input type="email" name="email" id="email" placeholder="Email"
                                   class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">
                            <select name="department" id="department" data-uk-select class="select"
                                    data-parsley-required="true" required>
                                <option value="">Subject</option>
                                <option value="1">
                                    Support
                                </option>
                                <option value="2">
                                    Service
                                </option>
                                <option value="3">
                                    Product Inquiry
                                </option>
                                <option value="4">
                                    Parts
                                </option>
                                <option value="5">
                                    Consumables
                                </option>
                            </select>
                        </div>
                        <div class="uk-form-row">
                                <textarea id="message" name="message" placeholder="Your message" class="uk-width-1-1"
                                          data-parsley-required="true" required></textarea>
                        </div>
                        <div class="uk-form-row uk-hidden">
                            <input type="email" name="contactemail" value="info@packsmartinc.com">
                        </div>
                        <button type="submit" form="form659310"
                                class="uk-button uk-button-primary uk-position-absolute uk-position-bottom-right">
                            <i class="uk-icon-paper-plane-o"></i>
                        </button>
                        <div class="uk-form-row successful-submit uk-button uk-button-primary uk-position-absolute uk-position-bottom-right">
                            <i class="uk-icon-check"></i>
                        </div>
                        <div class="uk-form-row spinner-submit uk-button uk-button-primary uk-position-absolute uk-position-bottom-right">
                            <i class="uk-icon-spinner uk-icon-spin"></i>
                        </div>
                        <div class="uk-hidden message--success">
                            <h3>Thank you for your message!</h3>

                            <p>We will process your request as soon as possible and will contact you shortly.
                                &lt;br /&gt;
                                &lt;br /&gt;
                                Best regards
                                &lt;br /&gt;
                                Your Pack Smart Inc. team</p>
                        </div>
                        <input type="hidden" value="Thank you for your message!" name="successHeadline">
                        <input type="hidden" value="We will process your request as soon as possible and will contact you shortly.
&lt;br /&gt;
&lt;br /&gt;
Best regards
&lt;br /&gt;
Your KEBA team" name="successMessage">
                    </form>
                </div>
                <div class="  uk-width-medium-1-2 uk-width-large-1-2">
                </div>
            </div>
        </div>
    </div>
</section>
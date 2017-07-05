@extends('layouts.main')
@section('title', 'Support')

@section('content')

    @include('sections.labeling_cartwheel')

<div class="container">
    <div class="row">
        <br><br>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
            <img src="{{asset('images/support/Support_3.png')}}">
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
            <img src="{{asset('images/support/Support_2.png')}}">                    
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
            <img src="{{asset('images/support/Support_1.png')}}">
        </div>
        <br><br>
    </div>

    <ul class="nav nav-tabs nav-justified nav-custom">
        <li class="active">
            <a data-toggle="tab" href="#contact_parts">
                <strong>Contact our parts department</strong>
            </a>
        </li>
        <li>
            <a data-toggle="tab" href="#contact_tech">
                <strong>Contact technical consulting</strong>
            </a>
        </li>
        <li>
            <a data-toggle="tab" href="#contact_general">
                <strong>Contact general support</strong>
            </a>
        </li>
    </ul>
    <div class="uk-grid" data-uk-grid-margin>
        <div class="uk-width-medium-1-10 uk-width-large-1-10">
        </div>
        <div class="uk-width-medium-8-10 uk-width-large-8-10" style="margin-top: 20px;margin-bottom: 20px;">
            <div class="tab-content">
                <div id="contact_parts" data-uk-grid-margin class="tab-pane fade in active">
                    <form class="uk-form form uk-position-relative basicform" id="form659310" action="http://pack-smart-inc.app/contact/parts.php" data-parsley-validate="" method="POST">         
                        <div class="uk-form-row">
                            <input name="name" id="name" placeholder="Full Name"
                                    class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">            
                            <input name="company" id="company" placeholder="Company"
                                    class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">            
                            <input name="phone" id="phone" placeholder="Phone Number"
                                    class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">
                            <input type="email" name="email" id="email" placeholder="Email"
                                    class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">
                            <textarea id="message" name="message" placeholder="Parts needed message area for now." class="uk-width-1-1"
                                        data-parsley-required="true" required></textarea>
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
                            <p> 
                            Thanks for enquiring about parts from Pack-Smart. 
                            Your order will be reviewed within the next 24 hrs and a
                            Pack-Smart specialist will be in contact with you shortly.
                            </p>
                        </div>
                        <input type="hidden" 
                            value="Thanks for enquiring about parts from Pack-Smart. 
                            Your order will be reviewed within the next 24 hrs and a
                            Pack-Smart specialist will be in contact with you shortly." name="successMessage">
                    </form>
                </div>

                <div id="contact_tech" data-uk-grid-margin class="tab-pane fade">
                    <form class="uk-form form uk-position-relative basicform" id="form659311" enctype="multipart/form-data" action="http://pack-smart-inc.app/contact/tech.php" data-parsley-validate="" method="POST">         
                        <div class="uk-form-row">
                            <input name="name" id="name" placeholder="Full Name"
                                    class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">            
                            <input name="company" id="company" placeholder="Company"
                                    class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">            
                            <input name="phone" id="phone" placeholder="Phone Number"
                                    class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">
                            <textarea id="message" name="message" placeholder="Tell us about your project needs and/or goals?" class="uk-width-1-1"
                                        data-parsley-required="true" required></textarea>
                        </div>
                        <div class="uk-form-row">
                            <label for="file-upload" class="uk-button uk-button-primary">
                                <i class="fa fa-cloud-upload"></i> Upload Attachment
                            </label>
                            <input id="file-upload" type="file" name="file" id="file"/>
                        </div>
                        <button type="submit" form="form659311"
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
                            <p> 
                            Thanks for enquiring about Technical Services from Pack-Smart. 
                            Your request/project requirements will be reviewed within the 
                            next 24 hrs and a Pack-Smart specialist will be in contact with you shortly.
                            </p>
                        </div>
                        <input type="hidden" 
                            value="Thanks for enquiring about Technical Services from Pack-Smart. 
                            Your request/project requirements will be reviewed within the 
                            next 24 hrs and a Pack-Smart specialist will be in contact with you shortly." name="successMessage">
                    </form>
                </div>

                <div id="contact_general" data-uk-grid-margin class="tab-pane fade">
                    <form class="uk-form form uk-position-relative basicform" id="form659312" action="http://pack-smart-inc.app/contact/general.php" data-parsley-validate="" method="POST">         
                        <div class="uk-form-row">
                            <input name="name" id="name" placeholder="Full Name"
                                    class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">            
                            <input name="company" id="company" placeholder="Company"
                                    class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">            
                            <input name="phone" id="phone" placeholder="Phone Number"
                                    class="uk-width-1-1 form-control" data-parsley-required="true" required>
                        </div>
                        <div class="uk-form-row">
                            <textarea id="message" name="message" placeholder="General Message Box" class="uk-width-1-1"
                                        data-parsley-required="true" required></textarea>
                        </div>
                        <div class="uk-form-row">
                            <label for="file-upload" class="uk-button uk-button-primary">
                                <i class="fa fa-cloud-upload"></i> Upload Attachment
                            </label>
                            <input id="file-upload" type="file" name="file" id="file"/>
                        </div>   
                        <button type="submit" form="form659312"
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
                            <p> 
                            Support submission received. Your business is very valuable 
                            to us and we will review your support request within
                            the next 24 hrs. A Pack-Smart specialist will be in contact with you shortly.
                            </p>
                        </div>
                        <input type="hidden" 
                            value="Support submission received. Your business is very valuable 
                            to us and we will review your support request within
                            the next 24 hrs. A Pack-Smart specialist will be in contact with you shortly." name="successMessage">
                    </form>
                </div>
            </div>
        </div>
        <div class="uk-width-medium-1-10 uk-width-large-1-10">
        </div>
    </div>
</div>

    {{--@include('sections.contact')--}}
    @include('sections.location')
    @include('sections.footer_menu')

@endsection
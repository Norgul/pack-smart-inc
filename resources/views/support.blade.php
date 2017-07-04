@extends('layouts.main')
@section('title', 'Support')

@section('content')

    @include('sections.labeling_cartwheel')

    <div class="row">
        <br><br>
        <div class="col-lg-4 text-center">PICTURE</div>
        <div class="col-lg-4 text-center">PICTURE</div>
        <div class="col-lg-4 text-center">PICTURE</div>
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

    <div id="contact_parts" class="tab-pane fade active in uk-grid">
        {{Form::open(['url' => '/contact/parts'])}}
        Full Name
        Company
        Phone Number
        Email
        Parts needed message area for now.

        Completed Message:
        Thanks for enquiring about parts from Pack-Smart. Your order will be reviewed within the next 24 hrs and a
        Pack-Smart specialist will be in contact with you shortly.
        {{Form::close()}}
    </div>

    <div id="contact_tech" class="tab-pane fade active in uk-grid">
        {{Form::open(['url' => '/contact/tech'])}}
        Full Name
        Company
        Phone Number
        Tell us about your project needs and/or goals?
        Upload Attachment button
        Submit button

        Completed Message:
        Thanks for enquiring about Technical Services from Pack-Smart. Your request/project requirements will be
        reviewed within the next 24 hrs and a Pack-Smart specialist will be in contact with you shortly.
        {{Form::close()}}
    </div>

    <div id="contact_general" class="tab-pane fade active in uk-grid">
        {{Form::open(['url' => '/contact/general'])}}
        Full Name
        Company
        Phone Number
        General Message Box
        Upload Attachment button
        Submit button

        Completed Message:
        Support submission received. Your business is very valuable to us and we will review your support request within
        the next 24 hrs. A Pack-Smart specialist will be in contact with you shortly.
        {{Form::close()}}
    </div>

    {{--@include('sections.contact')--}}
    @include('sections.location')
    @include('sections.footer_menu')

@endsection
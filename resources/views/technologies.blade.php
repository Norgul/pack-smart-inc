@extends('layouts.main')
@section('title', 'Home')

@section('content')

    @include('partials.sections.technologies_cartwheel')
    @include('partials.sections.technologies_tab_selection')
    @include('partials.sections.technologies_careers')	
    @include('partials.sections.news')
    @include('partials.sections.contact')
    @include('partials.sections.location')
    @include('partials.sections.footer_menu')

@endsection
@extends('layouts.main')
@section('title', 'Home')

@section('content')

    @include('partials.sections.cartwheel')
    @include('partials.sections.introduction')
    @include('partials.sections.careers')
    @include('partials.sections.news')
    @include('partials.sections.contact')
    @include('partials.sections.location')
    @include('partials.sections.footer_menu')

@endsection

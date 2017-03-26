@extends('layouts.main')
@section('title', 'Home')

@section('content')

    @include('sections.cartwheel')
    @include('sections.introduction')
    @include('sections.careers')
    @include('sections.news')
    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection

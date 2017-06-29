@extends('layouts.main')
@section('title', 'Market segments')

@section('content')

    @include('sections.labeling_cartwheel')

    {{--extra content--}}

    @include('sections.market_segments')

    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection
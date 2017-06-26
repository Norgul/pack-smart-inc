@extends('layouts.main')
@section('title', 'Solutions')

@section('content')

    @include('sections.labeling_cartwheel')

    {{--extra content--}}

    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection
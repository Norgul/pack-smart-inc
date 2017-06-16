@extends('layouts.main')
@section('title', 'Pressure sensitive')

@section('content')

    @include('sections.pressure_sensitive_cartwheel')
    @include('sections.pressure_sensitive_table')
    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection
@extends('layouts.main')
@section('title', 'Pressure sensitive')

@section('content')
    @include('sections.breadcrumbs_fake')
    @include('sections.pressure_sensitive_table')
    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection
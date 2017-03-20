@extends('layouts.main')
@section('title', 'Home')

@section('content')

    @include('partials.sections.cartwheel') {{-- kopirati i modificirati --}}
    @include('partials.sections.technologies_tab_selection')
    @include('partials.sections.careers') {{-- kopirati i modificirati --}}
    @include('partials.sections.news')
    @include('partials.sections.contact')
    @include('partials.sections.location')
    @include('partials.sections.footer_menu')

@endsection
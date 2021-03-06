@extends('layouts.main')
@section('title', 'Technologies')

@section('content')

    @include('sections.technologies_cartwheel')


    <section id="section-technologies_tab_selection">
        <div class="technologies-options-tab">
            <div class="technologies-options">
                <select name="technologies" id="technologies" data-uk-select class="select" data-parsley-required="true"
                        onChange="technologiesTabHandler(this)" required>
                    <option value="">Select a technology</option>
                    @foreach($technologies_tabs as $tab)
                        <option value="{{$tab->url_slug}}">
                            {{$tab->name}}
                        </option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="my-container">
            <div class="tabbable page-tabs">
                <nav class="nav">
                    <div class="uk-grid uk-grid-small uk-grid-width-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-10">
                        @foreach($technologies_tabs as $tab)
                            <div class="my-box-container hvr-bounce-to-bottom">
                                <a class="scroll nav-link uk-panel my-box @if ($tab->id == 1) active @endif"
                                   href="#{{$tab->url_slug}}" data-toggle="tab">
                                    {{$tab->title}}
                                </a>
                            </div>
                        @endforeach
                    </div>
                </nav>
                <div class="tab-content" style="margin-top: 30px; margin-bottom: 30px;">
                    @foreach($technologies_tabs as $tab)
                        <div class="tab-pane fade in @if ($tab->id == 1) active @endif" id="{{$tab->url_slug}}">
                            @include('sections.technologies_labeling',
                            ['title' => $tab->title,
                            'subtitle' => $tab->subtitle,
                            'url' => $tab->url_slug,
                            'description' => $tab->description,
                            'image' => $tab->image])
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>


    @include('sections.technologies_careers')

    {{--@include('sections.news')--}}

    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection

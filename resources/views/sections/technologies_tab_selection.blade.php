<section id="section-technologies_tab_selection">

    <div class="technologies-options-tab">
        <div class="technologies-options">
            <select name="technologies" id="technologies" data-uk-select class="select" data-parsley-required="true"
                    required>
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
                <div class="uk-grid uk-grid-small uk-grid-width-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-6">
                    @foreach($technologies_tabs as $tab)
                        <div class="my-box-container">
                            <a class="nav-link uk-panel my-box
							@if ($tab->id == 1)
                                    active
                                @endif
                                    " href="#{{$tab->url_slug}}" data-toggle="tab">
                                {{$tab->name}}
                            </a>
                        </div>
                    @endforeach
                </div>
            </nav>
            <div class="tab-content" style="margin-top: 30px; margin-bottom: 30px;">
                @foreach($technologies_tabs as $tab)
                    <div class="tab-pane fade in
				@if ($tab->id == 1)
                            active
                        @endif
                            " id="{{$tab->url_slug}}">
                        @include('sections.technologies_labeling', ['title' => $tab->name])
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>

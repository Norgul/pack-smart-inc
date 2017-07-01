<!-- MAIN NAVIGATION -->
<div class="header">
    <div class="header__left header--desktop">
        <!-- Level 1 navigation -->
        <ul class="navi navi--top uk-list">
            @foreach($main_menu_categories as $category)
                <li data-navisecondlevel="{{$category->url_slug}}">
                    <a class="navi-item" href="{{url('/' . $category->url_slug)}}">
                        <?php $split_array = explode(' ', $category->name, 2); ?>
                        {{$split_array[0]}}<br> {{$split_array[1]}}
                    </a>
                </li>
            @endforeach
        </ul>
        <!-- end of Level 1 navigation -->
        <!-- Level 2 navigation -->
        @foreach($main_menu_categories as $category)
            <ul class="navi__level__2 uk-list uk-position-absolute" id="{{$category->url_slug}}">
                <li data-navisublevelid="{{$category->url_slug}}">
                    <a class="navi-item" href="{{url('/why-pack-smart')}}">Why Pack-Smart?</a>
                </li>
                <li data-navisublevelid="{{$category->url_slug}}">
                    <a class="navi-item" href="{{url('/technologies')}}">Technologies</a>
                </li>
                <li data-navisublevelid="{{$category->url_slug}}">
                    <a class="navi-item" href="{{url('/solutions')}}">Solutions</a>
                </li>
                <li data-navisublevelid="{{$category->url_slug}}">
                    <a class="navi-item" href="{{url('/success-stories')}}">Success Stories</a>
                </li>
                <li data-navisublevelid="{{$category->url_slug}}">
                    <a class="navi-item" href="{{url('/support')}}">Support</a>
                </li>
            </ul>
        @endforeach
        <div class="navi--main--item">
            <a href="#"></a>
        </div>
        <!-- end of Level 2 navigation -->
    </div>

    <div class="header__right">
        {{--
        <a href="#" class="hamburger uk-link-muted header--desktop"><span></span></a>
        <a href="#" class="hamburger-mobile uk-link-muted header--mobile"><span></span></a>
        --}}
        <a href="#" class="search__btn uk-link-muted" data-uk-quicksearch><span></span></a>
        <a href="#" class="globe__btn uk-link-muted"><span></span></a>
        <a href="{{url('/')}}" class="logo">
            <img src="{{asset('images/logo.jpg')}}" alt="">
        </a>

    </div>
</div>
<div class="uk-clearfix"></div>

<!-- HAMBURGER NAV DESKTOP -->
<div class="hamburger__menu header--desktop">
    <div class="uk-grid">
        @foreach($header_categories as $category)
            @if($category->parent_id == 0)
                <div class="uk-width-1-5 hamburger__menu__item">
                    <div>{{$category->name}}</div>
                    <ul class="uk-list">
                        @foreach($header_categories->where('parent_id', $category->id) as $subcategory)
                            <li>
                                <a href="{{url($category->url_slug . '/' . $subcategory->url_slug)}}">{{$subcategory->name}}</a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            @endif
        @endforeach
    </div>
</div>

<!-- Mobile HAMBURGER NAV-->
<div class="hamburger-mobile__menu header--mobile">
    <div class="uk-accordion" data-uk-accordion="{showfirst: false}">
        @foreach($header_categories as $category)
            @if($category->parent_id == 0)
                <h3 class="uk-accordion-title">{{$category->name}}</h3>
                <div class="uk-accordion-content">
                    <ul class="uk-nav">
                        @foreach($header_categories->where('parent_id', $category->id) as $subcategory)
                            <li class="uk-nav--item">
                                <a href="{{url($category->url_slug . '/' . $subcategory->url_slug)}}">{{$subcategory->name}}</a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            @endif
        @endforeach
    </div>
</div>

<!-- Quicksearch -->
<div class="quicksearch">
    <div class="uk-grid">
        <div class="uk-container-center">
            <form class="uk-form" action="{{url('/search')}}">
                <input type="text" placeholder="" value="" name="search" class="uk-form-large quicksearch__input"/>
                <input type="checkbox" value="all" name="category[]" checked id="allCategoriesCheckbox">
                <button class="uk-button uk-button-primary uk-button-inform">
                    <i class="uk-icon-search"></i>
                </button>
            </form>
        </div>
    </div>
</div>
<div class="uk-clearfix"></div>

<!-- Mobile MAIN NAVIGATION -->
<div class="mobilenav mobilenav--subpage header--mobile uk-clearfix">
    <div class="mobilenav__row mobilenav__full uk-clearfix">
        @foreach($main_menu_categories as $category)
            <div class="uk-width-1-3 mobilenav__item">
                <div class="mobilenav__item__inner">
                    <a href="{{url('/'. $category->url_slug)}}" data-navidmobile="{{$category->url_slug}}"
                       data-uk-offcanvas="{target:'#mobilenav__level2'}">
                        {{$category->name}}
                    </a>
                </div>
            </div>
        @endforeach
    </div>

    <div class="mobilenav__row mobilenav__single uk-hidden">
        <div class="uk-width-1-1 mobilenav__item">
            <div class="mobilenav__current__title">
                <div class="mobilenav__item__inner">
                    @foreach($main_menu_categories as $category)
                        <button class="uk-button" data-navidmobile="{{url($category->url_slug)}}"><span></span></button>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Mobile Offcanvas Menu Level 2 + 3 + 4 -->
<div id="mobilenav__level2" class="header--mobile">
    <div class="uk-accordion" data-uk-accordion="{showfirst: false}">
        @foreach($main_menu_categories as $category)
            <h3 class="uk-accordion-title mobilenav__level2__item js-mobilenav-mainlink"
                data-href="{{url('/why-pack-smart')}}"
                data-subnavmobile="{{$category->url_slug}}">
                Why Pack-Smart?
            </h3>
        @endforeach
    </div>
</div>

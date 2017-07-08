@extends('layouts.main')
@section('title', 'Support')

@section('content')

    @include('sections.labeling_cartwheel')

    <div class="container" style="margin-top:20px;">
        <div class="row">
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <h2>#1 global leader in automation now open for business in India</h2>
                <p>Posted on <span style="color: #d31f26;">July 6, 2017</span> by <span style="color: #d31f26;">Pack-Smart</span></p>
                </br>
                <h3>Pack-Smart Inc arrives in India as Inteli-Pack Innovations Pvt. Ltd.</h3>
                
                </br>
                </br>

                <p class="justify">Pack-Smart Inc. with headquarters in Toronto, Canada is an industry leader in the design, manufacturing
                and implementation of high performance automation solutions. Pack-Smart supports multinational 
                businesses in the following markets: Telecom, Pharmaceutical, Payment Card and Finance, 
                Healthcare and Specialty Printing and industrial applications.</p>
                
                <p class="justify">Embracing the ethos of Prime Minister Narendra Modi’s <span style="font-style: italic;color: #d31f26;">Make In India</span>, Pack-Smart Inc. is now in India
                with an investment of USD $1.5 million. As a wholly owned subsidiary of Pack-Smart Inc., Inteli-Pack 
                Innovations, will provide all of India and Asia with its latest innovative automation and software solutions to
                drive quality, efficiency and speed to market in this fast-paced rapidly growing market. We will be 
                adding value to Indian businesses by providing high-speed, high-accuracy and efficiency through 
                supplying customer centric automation solutions.</p>         
                
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <img src="{{asset('images/latest_news/news_1_img_1.jpeg')}}">
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <img src="{{asset('images/latest_news/news_1_img_2.jpeg')}}">
                    </div>                    
                </div>

                <p class="justify">"Our technological solutions symbolize uncompromising performance and flexibility for those who ask,
                ‘what’s next’; for those who recognize the opportunity of ‘what if’; and those who dismiss the thought of 
                what can’t be done." President & CEO Derek Dlugosh-Ostap</p>
                
                <p class="justify">With the launch of Inteli-Pack Innovations, Pack-Smart Inc. is going to offer worldwide 24/7/365 sales 
                and support service. In the next 5 years, Inteli-Pack Innovations is expected to generate revenue over
                USD $45 million.</p>

                <p class="justify">Inteli-Pack Innovation’s brand-new operation employs support engineering, advanced automation experts, 
                administration and business development team.</p> 

                <p class="justify">All Pack-Smart Inc’s automation solutions are designed and built efficiently, offering above World Class 
                OEE, which adds that additional layer of assurance for invested stakeholders and brands.  Prior to 
                delivery, while working closely with clients, each system is put through vigorous testing to ensure that 
                accuracy, efficiency, and quality is maintained easily throughout the life-span of each solution.</p>

                <p class="justify">Since 1999, Pack-Smart Inc., the world’s most innovative automation solutions creators, has been 
                building and supporting unique modular technology.  The introduction of Inteli-Pack Innovations, a wholly 
                owned subsidiary, in Mumbai India, allows Pack-Smart Inc. to focus more attention on spreading the 
                Pack-Smart way across all of Asia.  For more information, please visit <a class="url" href="http://www.inteli-pack.com">http://www.inteli-pack.com</a> or 
                <a class="url" href="http://www.packsmartinc.com">http://www.packsmartinc.com</a>.</p>

                <p class="text-center"># # #</p>

                <p>Tagged <a>automation</a>, <a>canada</a>, <a>india</a>, <a>intelipack</a>, <a>launch</a>, <a>mumbai</a>, <a>packsmartEdit</a></p>

                <h3>Leave a Reply</h3>
                <h4>Logged in as Pack-Smart, Log out?</h4>
                
                <form action="">
                    <textarea style="width:700px; height:150px;" type="text"></textarea>
                    <input type="submit" value="Post Comment">
                </form>

            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <form action="">
                    <input type="text" placeholder="Search ...">
                    <input type="submit" value="Search">
                </form>
                <br><br>
                <h2>Recent Posts</h2>
                <ul>
                    <li><span style="color: #d31f26;">#1 global leader in automation now open for business in India</span></li>
                </ul>
            </div>
        </div>
    </div>
    <br><br>

    @include('sections.contact')
    @include('sections.location')
    @include('sections.footer_menu')

@endsection

@section('extra_scripts')

    <style>
        .justify {
            text-align: justify;
        }
        .url{
            color: blue;
        }
        ​
    </style>
@stop
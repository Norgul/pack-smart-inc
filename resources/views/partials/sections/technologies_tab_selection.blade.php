<section id="section-technologies_tab_selection">
	<div class="clearfix">
        <!-- Page tabs -->
				<div class="row techno">
					<div class="tech">
						<select name="department" id="department" data-uk-select class="select" data-parsley-required="true" required>
								<option value="">Select a technology</option>
								<option value="general inquiry">
										<p>All options to add</p>
								</option>
						</select>
					</div>
				</div>
        <div class="tabbable page-tabs">
    		<nav class="nav">
	        	<div class="row">
		        		<a class="col-md-2 nav-link active" href="#authentication" data-toggle="tab">Authentication</a>
		        		<a class="col-md-2 nav-link" href="#accuracy" data-toggle="tab">Accuracy alignment & affixing</a>
		        		<a class="col-md-2 nav-link" href="#brand_protection" data-toggle="tab">Brand protection</a>
		        		<a class="col-md-2 nav-link" href="#conveying" data-toggle="tab">Conveying</a>
		        		<a class="col-md-2 nav-link" href="#data_encoding" data-toggle="tab">Data encoding</a>
		        		<a class="col-md-2 nav-link" href="#die_cutting" data-toggle="tab">Die cutting</a>
	        	</div>
	        	<div class="row">
		        		<a class="col-md-2 nav-link" href="#digital_printing" data-toggle="tab">Digital printing</a>
		        		<a class="col-md-2 nav-link" href="#diverting" data-toggle="tab">Diverting</a>
		        		<a class="col-md-2 nav-link" href="#dissembly" data-toggle="tab">End of life dissembly</a>
		        		<a class="col-md-2 nav-link" href="#feeding" data-toggle="tab">Feeding & inserting</a>
		        		<a class="col-md-2 nav-link" href="#folding" data-toggle="tab">Folding</a>
		        		<a class="col-md-2 nav-link" href="#gluing_coating" data-toggle="tab">Gluing & coating</a>
	        	</div>
	        	<div class="row">
		        		<a class="col-md-2 nav-link" href="#heat_sealing" data-toggle="tab">Heat sealing</a>
		        		<a class="col-md-2 nav-link" href="#high_robotics" data-toggle="tab">High robotics</a>
		        		<a class="col-md-2 nav-link" href="#inline_scoring" data-toggle="tab">Inline scoring & slitting</a>
		        		<a class="col-md-2 nav-link" href="#inspection" data-toggle="tab">Inspection defect detection</a>
		        		<a class="col-md-2 nav-link" href="#intelligent_scanning" data-toggle="tab">Intelligent scanning</a>
		        		<a class="col-md-2 nav-link" href="#labeling" data-toggle="tab">Labeling</a>
	        	</div>
	        	<div class="row">
		        		<a class="col-md-2 nav-link" href="#plasma_treatment" data-toggle="tab">Plasma treatment</a>
		        		<a class="col-md-2 nav-link" href="#product_trace" data-toggle="tab">Product tracebility</a>
		        		<a class="col-md-2 nav-link" href="#rfid" data-toggle="tab">Rfid & nfc</a>
		        		<a class="col-md-2 nav-link" href="#sorting" data-toggle="tab">Sorting & collating</a>
		        		<a class="col-md-2 nav-link" href="#tamper" data-toggle="tab">Tamper evident</a>
		        		<a class="col-md-2 nav-link" href="#web_handling" data-toggle="tab">Web handling</a>
	        	</div>
        	</nav>
            <div class="tab-content" style="margin-top: 30px; margin-bottom: 30px;">
                <div class="tab-pane active fade in" id="authentication">
                    @include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="accuracy">
			    	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="brand_protection">
                	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="conveying">
                	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="data_encoding">
					@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="die_cutting">
					@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="digital_printing">
					@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="diverting">
			    	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="dissembly">
                	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="feeding">
					@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="folding">
                	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="gluing_coating">
					@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="heat_sealing">
					@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="high_robotics">
			    	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="inline_scoring">
                	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="inspection">
                	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="intelligent_scanning">
					@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="labeling">
					@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="plasma_treatment">
					@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="product_trace">
			    	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="rfid">
                	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="sorting">
					@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="tamper">
                	@include('partials.sections.technologies_labeling')
                </div>
                <div class="tab-pane fade" id="web_handling">
					@include('partials.sections.technologies_labeling')
                </div>
            </div>
        </div>
        <!-- /page tabs -->
	</div>
</section>

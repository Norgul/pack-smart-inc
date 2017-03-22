<section id="section-technologies_tab_selection">
	<div class="technologies-options-tab">
		<div class="technologies-options">
			<select name="technologies" id="technologies" data-uk-select class="select" data-parsley-required="true" required>
					<option value="">Select a technology</option>
					<option value="general inquiry">
							<p>All options to add</p>
					</option>
			</select>
		</div>
	</div>
	<div class="my-container">
		<div class="tabbable page-tabs">
		<nav class="nav">
				<div class="uk-grid uk-grid-small uk-grid-width-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-6">
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box active" href="#authentication" data-toggle="tab">Authentication</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#accuracy" data-toggle="tab">Accuracy alignment & affixing</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#brand_protection" data-toggle="tab">Brand protection</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#conveying" data-toggle="tab">Conveying</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#data_encoding" data-toggle="tab">Data encoding</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#die_cutting" data-toggle="tab">Die cutting</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#digital_printing" data-toggle="tab">Digital printing</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#diverting" data-toggle="tab">Diverting</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#dissembly" data-toggle="tab">End of life dissembly</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#feeding" data-toggle="tab">Feeding & inserting</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#folding" data-toggle="tab">Folding</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#gluing_coating" data-toggle="tab">Gluing & coating</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#heat_sealing" data-toggle="tab">Heat sealing</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#high_robotics" data-toggle="tab">High robotics</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#inline_scoring" data-toggle="tab">Inline scoring & slitting</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#inspection" data-toggle="tab">Inspection defect detection</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#intelligent_scanning" data-toggle="tab">Intelligent scanning</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#labeling" data-toggle="tab">Labeling</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#plasma_treatment" data-toggle="tab">Plasma treatment</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#product_trace" data-toggle="tab">Product tracebility</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#rfid" data-toggle="tab">Rfid & nfc</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#sorting" data-toggle="tab">Sorting & collating</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#tamper" data-toggle="tab">Tamper evident</a>
					</div>
					<div class="my-box-container">
						<a class="nav-link uk-panel my-box" href="#web_handling" data-toggle="tab">Web handling</a>
					</div>
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
	</div>
</section>

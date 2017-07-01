<?php

use Illuminate\Database\Seeder;

class TechnologiesTabSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('technologies_tabs')->insert([
            ['title'    => 'Feeding & inserting', 'url_slug' => str_slug('Feeding & inserting'),
             'subtitle' => '', 'description' => 'Pack-Smart Feeding and Inserting technology provides 
             accurate placement of products within 0.02 inches.  This translates to superior efficiency when 
             trying to place and assemble products such as promotional materials, large mailers, 
             flyers with special products that require adhesive.  The possibilities are truly endless.', 'image' => 'feeding-and-inserting.png'],
            ['title'    => 'Folding', 'url_slug' => str_slug('Folding'),
             'subtitle' => '', 'description' => 'Our Folding technology has modernized our customer’s abilities 
             to conquer every growing demand for efficiency and automation.  We are able to produce complex 
             folds throughout the packaging process that is ideal for open/closed loop cards, telco sim card 
             packaging, and many more.', 'image' => 'folding.png'],
            ['title'    => 'Accurate affixing', 'url_slug' => str_slug('Accurate affixing'),
             'subtitle' => '', 'description' => 'For automation to be truly effective in this evolving competitive 
             global landscape, precision is required.  With over 20 years of development, Pack-Smart’s technology
              is accurate to within 0.02 inches when affixing promotional materials to packaging and promotional
               materials.  This accuracy is perfect for affixing small samples into intricate spaces as well as 
               larger needs.  We customize our technology to fit any scenario and industry.', 'image' => 'accurate-affixing.png'],
            ['title'    => 'Window patching', 'url_slug' => str_slug('Window patching'),
             'subtitle' => '', 'description' => 'Our Window Patching technology allows us to accurately
              affix clear windows to within 0.02” which greatly increases your ability to present desirable 
              packaging solutions ideal for advantageous retail positioning.', 'image' => 'window-patching.png'],
            [ 'title'    => 'Pick & place', 'url_slug' => str_slug('Pick & place'),
             'subtitle' => '', 'description' => 'We offer two options of Pick and Place technology: rotating and reciprocating.  
             We’re able to place products that range from the smallest to the largest with extreme accuracy and precision.  ', 'image' => 'pick-and-place.png'],
            ['title'    => 'Conveying', 'url_slug' => str_slug('Conveying'),
             'subtitle' => '', 'description' => 'Pack-Smart’s wide variety of Conveying technology 
             enables us to be of tremendous value to multiple industries.  We have solutions that 
             can run different types of conveyors depending on what you need. Our conveying will 
             even allow you to produce food related products.  We’ve also introduced state-of-the-art 
             vacuum technology into our conveying solutions for added accuracy and efficiency.', 'image' => 'conveying.png'],

            ['title'    => 'Gluing & coating', 'url_slug' => str_slug('Gluing & coating'),
             'subtitle' => '', 'description' => 'Pack-Smart Gluing and Coating technology opens multiple realms of possibilities 
             especially within the areas of protection and security.  We can safely and swiftly work with hot and cold glues.', 'image' => 'gluing-and-coating.png'],
            ['title'    => 'Labeling', 'url_slug' => str_slug('Labeling'),
             'subtitle' => '', 'description' => 'Labeling at Pack-Smart is serious business.  We’ve always given our 
             customers multiple options but our high-speed labelling is the most popular.  Our labeling technology is 
             designed in such a way as to eliminate down-time altogether.  With dual spools running, change-overs 
             are easily manageable as well.', 'image' => 'labeling.png'],
            ['title'    => 'Variable digital printing', 'url_slug' => str_slug('Variable digital printing'),
             'subtitle' => '', 'description' => 'Pack-Smart technology allows us to develop custom modules and 
             systems designed to take your complex packaging needs and apply appropriate marketing materials 
             as well as being able to print directly onto your packaging materials.  This creates a level of 
             flexibility that no other automation solutions provider can achieve.', 'image' => ''],
            ['title'    => 'Alignment', 'url_slug' => str_slug('Alignment'),
             'subtitle' => '', 'description' => 'Pack-Smart’s alignment technology is designed to ensure that 
             full-automation perfection is achieved.  Our Friction feeders ensure that products delivered to 
             the automation process are calibrated to business requirements and will travel through our systems 
             without disruption.', 'image' => 'alignment.png'],
            ['title'    => 'Diverting & sorting', 'url_slug' => str_slug('Diverting & sorting'),
             'subtitle' => '', 'description' => 'Pack-Smart Diverting and Sorting technology makes 
             assembling complex packages with multiple pieces that require separation a walk in the park. 
             A prime example of our superior diverting and sorting capabilities would be trying to 
             create a box of colored markers or pencils.  We have complex technology that allows 
             businesses to sort and manage a wide range of variables while still maintaining efficiency
              and speed when assembling the finished products.  ', 'image' => ''],
            ['title'    => 'Batching', 'url_slug' => str_slug('Batching'),
             'subtitle' => '', 'description' => 'Organization is vital for logistics.  Pack-Smart batching technology 
             ensures that all products exiting our solutions are grouped perfectly together.  Tracking solutions 
             can also be added to the batching process for an extra level of protection.  ', 'image' => 'batching.png'],

            ['title'    => 'Magnetic strip write & read', 'url_slug' => str_slug('Magnetic strip write & read'),
             'subtitle' => '', 'description' => 'Pack-Smart Magnetic Stripe Write and Read technology offers a 
             complete solution for applying, reading, and encoding magnetic stripes.  Our superior technology 
             also allows for the magnetic stripe to be applied to a variety of packaging materials.  ', 'image' => 'magnetic-strip.png'],
            ['title'    => 'Brand protection & authentication', 'url_slug' => str_slug('Brand protection & authentication'),
             'subtitle' => '', 'description' => 'Piracy and theft remain legitimate concerns for all industries.  
             Our brand protection and authentication technology ensures your brand is prepared for all scenarios.  
             Pack-Smart counter measures apply unique identities to all materials that enable you to have an added 
             layer of tracking both during application and throughout delivery.', 'image' => 'brand-protection.png'],
            ['title'    => 'RFID-NFC', 'url_slug' => str_slug('RFID-NFC'),
             'subtitle' => '', 'description' => 'Our RFID-NFC technology enables customers to place 
             precision tracking for managing inventory purposes while also being able to add an additional layer of security.  ', 'image' => 'rfid-nfc.png'],
            ['title'    => 'Defect detection', 'url_slug' => str_slug('Defect detection'),
             'subtitle' => '', 'description' => 'Quality control has always been synonymous with Pack-Smart technology.  
             When you’re working with incredibly large amounts of product, travelling and being formed within milli-seconds, 
             it’s important to be able to catch defective products.  Our technologies include divert gates for every system 
             and these can be implemented throughout the solution to ensure that no defective products make it to the finish 
             line.  For added assurance, our defect detection can be programmed to identify known defects.  ', 'image' => 'defect-detection.png'],
            ['title'    => 'Wrapping and sealing', 'url_slug' => str_slug('Wrapping and sealing'),
             'subtitle' => '', 'description' => 'Pack-Smart Wrapping and Sealing technology takes both batched or 
             individual packages and wraps   within your specifications.  An accompanying identifying label is 
             also implemented at this point to aid your business with tracking and quality assurance. ', 'image' => 'wrapping-and-sealing.png'],
            ['title'    => 'Heat sealing', 'url_slug' => str_slug('Heat sealing'),
             'subtitle' => '', 'description' => 'Pack-Smart Heat Sealing technology adds an extra level of 
             security, especially for card carriers that require more attention to details.  The products 
             are placed under extreme heat for a brief period to ensure that everything is sealed and 
             secured within the package. ', 'image' => 'heat-sealing.png'],

            ['title'    => 'Inline scoring & slitting', 'url_slug' => str_slug('Inline scoring & slitting'),
             'subtitle' => '', 'description' => 'Pack-Smart Inline Scoring & Slitting technologies enables our 
             solution to allow customers to experience full automation within one system.  We can effectively 
             create outlines for folding while also administering the divots to make for easy assembly. ', 'image' => ''],
            ['title'    => 'Cartoning', 'url_slug' => str_slug('Cartoning'),
             'subtitle' => '', 'description' => 'Pack-Smart Cartoning technology enables our solutions to 
             take flat sheets of paper and packaging materials and literally construct a full box.  We’re 
             also able to attach rigid windows, customize with further printing.  This technology has worked 
             extremely well in the luxury, cosmetic, and entertainment industries, but can be calibrated 
             to fit any industry needs that you may have.  ', 'image' => 'cartoning.png'],
            ['title'    => 'High speed robotics', 'url_slug' => str_slug('High speed robotics'),
             'subtitle' => '', 'description' => '', 'image' => ''],
            ['title'    => 'Loading & de-stacking', 'url_slug' => str_slug('Loading & de-stacking'),
             'subtitle' => '', 'description' => 'Pack-Smart technologies are capable of handling vast quantities of product.  
             Our solutions are able to assist you with loading and de-stacking to ensure that down-time is 
             reduced to a minimum while also increasing overall efficiency.', 'image' => 'loading-and-destacking.png'],
            ['title'    => 'Die cutting', 'url_slug' => str_slug('Die cutting'),
             'subtitle' => '', 'description' => 'Pack-Smart is a leading provider of integrated systems and services 
             in the packaging industry. Unique to Pack-Smart is the ability to offer multiple Die cutting solutions, 
             including die cutters and laser processing solutions. With a focus on the future of packaging, let 
             Pack-Smart develop a system which solution is ideal for your needs. Key features that die cutters 
             look to incorporate into their packaging and paper processing include accuracy of the cut, quality 
             of the cut , depth of cut and cut depth consistency.  Whether die cutters are processing cartons, 
             medical package envelopes, binder stiffeners, napkins or other items, Pack-Smart will provide either 
             flat bed or rotary solution.  Pack-Smart systems incorporate score cutting, kiss cutting, through 
             cutting, creasing, and perforating to best fit the die cutting application.', 'image' => ''],
            ['title'    => 'Machine vision', 'url_slug' => str_slug('Machine vision'),
             'subtitle' => '', 'description' => 'When we refer to Machine Vision, we’re speaking on 
             Pack-Smart technology that enables superior tracking.  We’re able to encode your barcodes 
             with specific information that is helpful with identification as well as instructions for the end-user.', 'image' => 'machine-vision.png'],

            ['title'    => 'Inline weighing', 'url_slug' => str_slug('Inline weighing'),
             'subtitle' => '', 'description' => '', 'image' => ''],
            ['title'    => 'Tray forming', 'url_slug' => str_slug('Tray forming'),
             'subtitle' => '', 'description' => '', 'image' => ''],
            ['title'    => 'Collating', 'url_slug' => str_slug('Collating'),
             'subtitle' => '', 'description' => 'Our Collating technologies allow us to make complex 
             packages with multiple components with ease.  Pack-Smart has developed automation solutions 
             that will allow your business to assemble large packaging and marketing collateral 
             without slowing down productivity.  ', 'image' => 'collating.png'],
            ['title'    => 'Data reading & tracking', 'url_slug' => str_slug('Data reading & tracking'),
             'subtitle' => '', 'description' => 'With the volumes of products that Pack-Smart solutions are 
             capable of, it’s vital for us to be able to track each item that passes through each module 
             and is assembled within the solution.  We’ve implemented industry leading data reading 
             and tracking capabilities into all our solutions. ', 'image' => 'data-reading-and-tracking.jpg'],
            ['title'    => 'Integrated controls', 'url_slug' => str_slug('Integrated controls'),
             'subtitle' => '', 'description' => 'All Pack-Smart’s technologies have integrated controls 
             that allow for precision start and stop features throughout various modules within a 
             customizable solution.  All integrated controls can be programmed to suit your 
             unique needs as well.', 'image' => 'integrated-controls.png'],
            ['title'    => 'Braille embossing', 'url_slug' => str_slug('Braille embossing'),
             'subtitle' => '', 'description' => 'Braille Embossing is a prime example of our 
             complete commitment to engineering the impossible.  We custom created and designed 
             this technology to work seamlessly within our solutions.  We are experts in 
             embossing all paper related packaging surfaces.', 'image' => 'braille-embossing.jpg'],
        ]);
    }
}

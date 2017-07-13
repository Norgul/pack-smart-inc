<?php

use Illuminate\Database\Seeder;

class MainMenuCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('main_menu_categories')->insert([
            /*
             ['name' => 'Active & Intelligent', 'url_slug' => str_slug('Active & Intelligent')],
             ['name' => 'Card & Financial', 'url_slug' => str_slug('Card & Financial')],
             ['name' => 'Healthcare & Life', 'url_slug' => str_slug('Healthcare & Life')],
             ['name' => 'Premium & Branded', 'url_slug' => str_slug('Premium & Branded')],
             ['name' => 'Specialty Printing', 'url_slug' => str_slug('Specialty Printing')],
             ['name' => 'Technical Services', 'url_slug' => str_slug('Technical Services')],
            */
            ['name' => 'About Us', 'url_slug' => str_slug('About'), 'parent_id' => 0],
            ['name' => 'Market Segments', 'url_slug' => str_slug('Market Segments'), 'parent_id' => 0],
            ['name' => 'Technologies', 'url_slug' => str_slug('Technologies'), 'parent_id' => 0],
            ['name' => 'Solutions', 'url_slug' => str_slug('Solutions'), 'parent_id' => 0],
            ['name' => 'Latest News', 'url_slug' => str_slug('Latest News'), 'parent_id' => 0],
            ['name' => 'Contact Us', 'url_slug' => str_slug('Contact'), 'parent_id' => 0],

            ['name' => 'Secure Print and Card Packaging', 'url_slug' => str_slug('Market Segments') . '#' . str_slug('Secure Print and Card Packaging'), 'parent_id' => 2],
            ['name' => 'Specialty and Print Finishing Solutions', 'url_slug' => str_slug('Market Segments') . '#' . str_slug('Specialty and Print Finishing Solutions'), 'parent_id' => 2],
            ['name' => 'Specialty and Premium Packaging', 'url_slug' => str_slug('Market Segments') . '#' . str_slug('Specialty and Premium Packaging'), 'parent_id' => 2],
            ['name' => 'Active and Intelligent Packaging Technologies', 'url_slug' => str_slug('Market Segments') . '#' . str_slug('Active and Intelligent Packaging Technologies'), 'parent_id' => 2],
            ['name' => 'Life Science and Healthcare Packaging', 'url_slug' => str_slug('Market Segments') . '#' . str_slug('Life Science and Healthcare Packaging'), 'parent_id' => 2],
            ['name' => 'Technical Consulting Services', 'url_slug' => str_slug('Market Segments') . '#' . str_slug('Technical Consulting Services'), 'parent_id' => 2],

            ['name' => 'Feeding & inserting', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Feeding & inserting'), 'parent_id' => 3],
            ['name' => 'Folding', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Folding'), 'parent_id' => 3],
            ['name' => 'Accurate affixing', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Accurate affixing'), 'parent_id' => 3],
            ['name' => 'Window patching', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Window patching'), 'parent_id' => 3],
            ['name' => 'Conveying', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Conveying'), 'parent_id' => 3],
            ['name' => 'Gluing & coating', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Gluing & coating'), 'parent_id' => 3],
            ['name' => 'Labeling', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Labeling'), 'parent_id' => 3],
            ['name' => 'Variable digital printing', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Variable digital printing'), 'parent_id' => 3],
            ['name' => 'Alignment', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Alignment'), 'parent_id' => 3],
            ['name' => 'Diverting & sorting', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Diverting & sorting'), 'parent_id' => 3],
            ['name' => 'Batching', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Batching'), 'parent_id' => 3],
            ['name' => 'Magnetic strip write & read', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Magnetic strip write & read'), 'parent_id' => 3],
            ['name' => 'Brand protection & authentication', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Brand protection & authentication'), 'parent_id' => 3],
            ['name' => 'RFID-NFC', 'url_slug' => str_slug('Technologies') . '#' . str_slug('RFID-NFC'), 'parent_id' => 3],
            ['name' => 'Defect detection', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Defect detection'), 'parent_id' => 3],
            ['name' => 'Wrapping and sealing', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Wrapping and sealing'), 'parent_id' => 3],
            ['name' => 'Heat sealing', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Heat sealing'), 'parent_id' => 3],
            ['name' => 'Inline scoring & slitting', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Inline scoring & slitting'), 'parent_id' => 3],
            ['name' => 'Cartoning', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Cartoning'), 'parent_id' => 3],
            ['name' => 'High speed robotics', 'url_slug' => str_slug('Technologies') . '#' . str_slug('High speed robotics'), 'parent_id' => 3],
            ['name' => 'Loading & de-stacking', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Loading & de-stacking'), 'parent_id' => 3],
            ['name' => 'Die cutting', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Die cutting'), 'parent_id' => 3],
            ['name' => 'Machine vision', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Machine vision'), 'parent_id' => 3],
            ['name' => 'Inline weighing', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Inline weighing'), 'parent_id' => 3],
            ['name' => 'Tray forming', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Tray forming'), 'parent_id' => 3],
            ['name' => 'Collating', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Collating'), 'parent_id' => 3],
            ['name' => 'Data reading & tracking', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Data reading & tracking'), 'parent_id' => 3],
            ['name' => 'Integrated controls', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Integrated controls'), 'parent_id' => 3],
            ['name' => 'Braille embossing', 'url_slug' => str_slug('Technologies') . '#' . str_slug('Braille embossing'), 'parent_id' => 3],

            ['name' => 'Modules', 'url_slug' => str_slug('Solutions') . '#' . str_slug('Modules'), 'parent_id' => 4],
            ['name' => 'Systems', 'url_slug' => str_slug('Solutions') . '#' . str_slug('Systems'), 'parent_id' => 4]

        ]);
    }
}

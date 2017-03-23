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
             ['name' => 'Authentication', 'url_slug' => str_slug('Authentication')],
             ['name' => 'Accuracy alignment & affixing', 'url_slug' => str_slug('Accuracy alignment & affixing')],
             ['name' => 'Brand protection', 'url_slug' => str_slug('Brand protection')],
             ['name' => 'Conveying', 'url_slug' => str_slug('Conveying')],
             ['name' => 'Data encoding', 'url_slug' => str_slug('Data encoding')],
             ['name' => 'Die cutting', 'url_slug' => str_slug('Die cutting')],
             ['name' => 'Digital printing', 'url_slug' => str_slug('Digital printing')],
             ['name' => 'Diverting', 'url_slug' => str_slug('Diverting')],
             ['name' => 'End of life dissembly', 'url_slug' => str_slug('End of life dissembly')],
             ['name' => 'Feeding & inserting', 'url_slug' => str_slug('Feeding & inserting')],
             ['name' => 'Folding', 'url_slug' => str_slug('Folding')],
             ['name' => 'Gluing & coating', 'url_slug' => str_slug('Gluing & coating')],
             ['name' => 'Heat sealing', 'url_slug' => str_slug('Heat sealing')],
             ['name' => 'High robotics', 'url_slug' => str_slug('High robotics')],
             ['name' => 'Inline scoring & slitting', 'url_slug' => str_slug('Inline scoring & slitting')],
             ['name' => 'Inspection defect detection', 'url_slug' => str_slug('Inspection defect detection')],
             ['name' => 'Intelligent scanning', 'url_slug' => str_slug('Intelligent scanning')],
             ['name' => 'Labeling', 'url_slug' => str_slug('Labeling')],
             ['name' => 'Plasma treatment', 'url_slug' => str_slug('Plasma treatment')],
             ['name' => 'Product tracebility', 'url_slug' => str_slug('Product tracebility')],
             ['name' => 'Rfid & nfc', 'url_slug' => str_slug('Rfid & nfc')],
             ['name' => 'Sorting & collating', 'url_slug' => str_slug('Sorting & collating')],
             ['name' => 'Tamper evident', 'url_slug' => str_slug('Tamper evident')],
             ['name' => 'Web handling', 'url_slug' => str_slug('Web handling')],

             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
             ['name' => 'Unknown', 'url_slug' => str_slug('Unknown')],
         ]);
     }
}

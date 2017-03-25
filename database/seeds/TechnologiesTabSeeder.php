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
           ['name' => 'Feeding & inserting', 'url_slug' => str_slug('Feeding & inserting')],
           ['name' => 'Folding', 'url_slug' => str_slug('Folding')],
           ['name' => 'Accurate affixing', 'url_slug' => str_slug('Accurate affixing')],
           ['name' => 'Window patching', 'url_slug' => str_slug('Window patching')],
           ['name' => 'Pick & place', 'url_slug' => str_slug('Pick & place')],
           ['name' => 'Conveying', 'url_slug' => str_slug('Conveying')],

           ['name' => 'Gluing & coating', 'url_slug' => str_slug('Gluing & coating')],
           ['name' => 'Labeling', 'url_slug' => str_slug('Labeling')],
           ['name' => 'Variable digital printing', 'url_slug' => str_slug('Variable digital printing')],
           ['name' => 'Alignment', 'url_slug' => str_slug('Alignment')],
           ['name' => 'Diverting & sorting', 'url_slug' => str_slug('Diverting & sorting')],
           ['name' => 'Batching', 'url_slug' => str_slug('Batching')],

           ['name' => 'Magnetic strip write & read', 'url_slug' => str_slug('Magnetic strip write & read')],
           ['name' => 'Brand protection & authentication', 'url_slug' => str_slug('Brand protection & authentication')],
           ['name' => 'RFID-NFC', 'url_slug' => str_slug('RFID-NFC')],
           ['name' => 'Defect detection', 'url_slug' => str_slug('Defect detection')],
           ['name' => 'Wrapping and sealing', 'url_slug' => str_slug('Wrapping and sealing')],
           ['name' => 'Heat sealing', 'url_slug' => str_slug('Heat sealing')],

           ['name' => 'Inline scoring & slitting', 'url_slug' => str_slug('Inline scoring & slitting')],
           ['name' => 'Cartoning', 'url_slug' => str_slug('Cartoning')],
           ['name' => 'High speed robotics', 'url_slug' => str_slug('High speed robotics')],
           ['name' => 'Loading & de-stacking', 'url_slug' => str_slug('Loading & de-stacking')],
           ['name' => 'Die cutting', 'url_slug' => str_slug('Die cutting')],
           ['name' => 'Machine vision', 'url_slug' => str_slug('Machine vision')],

           ['name' => 'Inline weighing', 'url_slug' => str_slug('Inline weighing')],
           ['name' => 'Tray forming', 'url_slug' => str_slug('Tray forming')],
           ['name' => 'Collating', 'url_slug' => str_slug('Collating')],
           ['name' => 'Data reading & tracking', 'url_slug' => str_slug('Data reading & tracking')],
           ['name' => 'Integrated controls', 'url_slug' => str_slug('Integrated controls')],
           ['name' => 'Braille embossing', 'url_slug' => str_slug('Braille embossing')],
         ]);
     }
}

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
            ['name' => 'Active & Intelligent', 'url_slug' => str_slug('Active & Intelligent')],
            ['name' => 'Card & Financial', 'url_slug' => str_slug('Card & Financial')],
            ['name' => 'Healthcare & Life', 'url_slug' => str_slug('Healthcare & Life')],
            ['name' => 'Premium & Branded', 'url_slug' => str_slug('Premium & Branded')],
            ['name' => 'Specialty Printing', 'url_slug' => str_slug('Specialty Printing')],
            ['name' => 'Technical Services', 'url_slug' => str_slug('Technical Services')],
        ]);
    }
}

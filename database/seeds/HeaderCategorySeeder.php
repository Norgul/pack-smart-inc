<?php

use Illuminate\Database\Seeder;

class HeaderCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('header_categories')->insert([
            ['name' => 'About', 'parent_id' => 0, 'url_slug' => str_slug('About')],
            ['name' => 'Technologies', 'parent_id' => 0, 'url_slug' => str_slug('Technologies')],
            ['name' => 'Solutions', 'parent_id' => 0, 'url_slug' => str_slug('Solutions')],
            ['name' => 'Resources', 'parent_id' => 0, 'url_slug' => str_slug('Resources')],
            ['name' => 'Contact', 'parent_id' => 0, 'url_slug' => str_slug('Contact')],

            // 1.
            ['name' => 'About Pack-Smart', 'parent_id' => 1, 'url_slug' => str_slug('About Pack-Smart')],
            ['name' => 'Innovations', 'parent_id' => 1, 'url_slug' => str_slug('Innovations')],
            ['name' => 'Our Markets', 'parent_id' => 1, 'url_slug' => str_slug('Our Markets')],
            ['name' => 'Values & Responsibility', 'parent_id' => 1, 'url_slug' => str_slug('Values & Responsibility')],
            ['name' => 'Purchasing', 'parent_id' => 1, 'url_slug' => str_slug('Purchasing')],

            // 2.
            ['name' => 'All Technologies', 'parent_id' => 2, 'url_slug' => str_slug('All Technologies')],
            ['name' => 'Accuracy Affixing & Alignment', 'parent_id' => 2, 'url_slug' => str_slug('Accuracy Affixing & Alignment')],
            ['name' => 'Brand Protection', 'parent_id' => 2, 'url_slug' => str_slug('Brand Protection')],
            ['name' => 'Digital Printing', 'parent_id' => 2, 'url_slug' => str_slug('Digital Printing')],
            ['name' => 'Feeding & Inserting', 'parent_id' => 2, 'url_slug' => str_slug('Feeding & Inserting')],

            // 3.
            ['name' => 'All Solutions', 'parent_id' => 3, 'url_slug' => str_slug('All Solutions')],
            ['name' => 'Card Personalization', 'parent_id' => 3, 'url_slug' => str_slug('Card Personalization')],
            ['name' => 'Rigid Window Packaging', 'parent_id' => 3, 'url_slug' => str_slug('Rigid Window Packaging')],
            ['name' => 'Secure Packaging', 'parent_id' => 3, 'url_slug' => str_slug('Secure Packaging')],
            ['name' => 'Serialization Packaging', 'parent_id' => 3, 'url_slug' => str_slug('Serialization Packaging')],

            // 4.
            ['name' => 'Applications', 'parent_id' => 4, 'url_slug' => str_slug('Applications')],
            ['name' => 'Success Stories', 'parent_id' => 4, 'url_slug' => str_slug('Success Stories')],
            ['name' => 'Video Gallery', 'parent_id' => 4, 'url_slug' => str_slug('Video Gallery')],
            ['name' => 'News', 'parent_id' => 4, 'url_slug' => str_slug('News')],

            // 5.
            ['name' => 'Contact Form', 'parent_id' => 5, 'url_slug' => str_slug('Contact Form')],
            ['name' => 'Services', 'parent_id' => 5, 'url_slug' => str_slug('Services')],
            ['name' => 'Support', 'parent_id' => 5, 'url_slug' => str_slug('Support')],
            ['name' => 'Careers', 'parent_id' => 5, 'url_slug' => str_slug('Careers')]
        ]);
    }
}

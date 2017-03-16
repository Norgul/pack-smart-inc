<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(HeaderCategorySeeder::class);
        $this->call(MainMenuCategorySeeder::class);
        $this->call(OfficeLocationSeeder::class);
    }
}

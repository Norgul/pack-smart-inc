<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTechnologiesTabTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('technologies_tabs', function (Blueprint $table) {
          $table->increments('id');
          $table->string('title');
          $table->string('subtitle');
          $table->string('url_slug');
          $table->text('description');
          $table->string('image');
          $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('technologies_tabs');
    }
}

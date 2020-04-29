<?php

use Illuminate\Database\Seeder;
use App\Employer;

class EmployerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$data = [
    		['id' => 1,'name' => 'شركة ليبيانا للهاتف المحمول'],
    		['id' => 2,'name' => 'شركة ليبيا للاتصالات والتقنية'],
    		['id' => 3,'name' => 'الشركة العامة للكهرباء'],
    		['id' => 4,'name' => 'مصلحة الجمارك'],
    	];

    	foreach ($data as $employer) {
    		Employer::firstOrCreate([
    			'id' => $employer['id']
        	], ['name' => $employer['name']]);
    	}
    }
}

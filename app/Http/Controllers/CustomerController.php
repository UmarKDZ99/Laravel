<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Inertia\Inertia;
use Inertia\Response;

class CustomerController extends Controller
{
    public function index(): Response
    {
        $customers = Customer::paginate(10);
        return Inertia::render('customers', [
            'customers' => $customers,
        ]);
    }
}

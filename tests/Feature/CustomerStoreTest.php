<?php

test('customers can be created', function () {
    $customer = [
        'name' => 'Ada Lovelace',
        'email' => 'ada@example.com',
        'phone' => '555-0100',
        'date_of_birth' => '1990-01-02',
        'address' => '1 Example Street',
        'city' => 'London',
        'state' => 'Greater London',
        'postal_code' => 'SW1A 1AA',
        'country' => 'United Kingdom',
        'notes' => 'Prefers email contact.',
    ];

    $response = $this->post(route('customers.store'), $customer);

    $response->assertRedirectToRoute('customers');
    $this->assertDatabaseHas('customers', $customer);
});

test('customer creation validates required name and email format', function () {
    $response = $this->post(route('customers.store'), [
        'name' => '',
        'email' => 'not-an-email',
    ]);

    $response->assertSessionHasErrors(['name', 'email']);
    $this->assertDatabaseCount('customers', 0);
});

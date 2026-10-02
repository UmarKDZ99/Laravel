# Umer App

This project uses Laravel with React and Inertia.

## Artisan Commands

### Generate a model and migration

Create a model and its migration together:

```sh
php artisan make:model Customer --migration
```

To create only a model:

```sh
php artisan make:model Customer
```

### Generate a controller

```sh
php artisan make:controller CustomerController
```

### Work with migrations

Create a migration for a new table:

```sh
php artisan make:migration create_customers_table --create=customers
```

Apply pending migrations:

```sh
php artisan migrate
```

Check which migrations have run:

```sh
php artisan migrate:status
```

Roll back the most recent migration batch only when you intend to undo its schema changes:

```sh
php artisan migrate:rollback
```

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { type FormEventHandler, useState } from 'react';

export default function AddCustomerDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        address: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        notes: '',
    });

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);

        if (!open) {
            reset();
            clearErrors();
        }
    };

    const submit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        post(route('customers.store'), {
            preserveScroll: true,
            onSuccess: () => handleOpenChange(false),
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button>
                    <Plus aria-hidden="true" />
                    Add customer
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Add customer</DialogTitle>
                    <DialogDescription>Enter the customer details below.</DialogDescription>
                </DialogHeader>
                <form onSubmit={submit} className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                            <Label htmlFor="customer-name">Name</Label>
                            <Input
                                id="customer-name"
                                value={data.name}
                                onChange={(event) => setData('name', event.target.value)}
                                required
                                autoComplete="name"
                            />
                            <InputError message={errors.name} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="customer-email">Email</Label>
                            <Input
                                id="customer-email"
                                type="email"
                                value={data.email}
                                onChange={(event) => setData('email', event.target.value)}
                                autoComplete="email"
                            />
                            <InputError message={errors.email} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="customer-phone">Phone</Label>
                            <Input
                                id="customer-phone"
                                type="tel"
                                value={data.phone}
                                onChange={(event) => setData('phone', event.target.value)}
                                autoComplete="tel"
                            />
                            <InputError message={errors.phone} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="customer-date-of-birth">Date of birth</Label>
                            <Input
                                id="customer-date-of-birth"
                                type="date"
                                value={data.date_of_birth}
                                onChange={(event) => setData('date_of_birth', event.target.value)}
                            />
                            <InputError message={errors.date_of_birth} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="customer-city">City</Label>
                            <Input id="customer-city" value={data.city} onChange={(event) => setData('city', event.target.value)} />
                            <InputError message={errors.city} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="customer-state">State / region</Label>
                            <Input id="customer-state" value={data.state} onChange={(event) => setData('state', event.target.value)} />
                            <InputError message={errors.state} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="customer-postal-code">Postal code</Label>
                            <Input
                                id="customer-postal-code"
                                value={data.postal_code}
                                onChange={(event) => setData('postal_code', event.target.value)}
                                autoComplete="postal-code"
                            />
                            <InputError message={errors.postal_code} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="customer-country">Country</Label>
                            <Input
                                id="customer-country"
                                value={data.country}
                                onChange={(event) => setData('country', event.target.value)}
                                autoComplete="country-name"
                            />
                            <InputError message={errors.country} />
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                            <Label htmlFor="customer-address">Address</Label>
                            <textarea
                                id="customer-address"
                                value={data.address}
                                onChange={(event) => setData('address', event.target.value)}
                                autoComplete="street-address"
                                rows={3}
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                            <InputError message={errors.address} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="customer-notes">Notes</Label>
                            <textarea
                                id="customer-notes"
                                value={data.notes}
                                onChange={(event) => setData('notes', event.target.value)}
                                rows={3}
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                            <InputError message={errors.notes} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Save customer'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

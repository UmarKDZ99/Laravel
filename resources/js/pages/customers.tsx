import AppLayout from '@/layouts/app-layout';
import AddCustomerDialog from '@/components/add-customer-dialog';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Customers',
        href: '/customers',
    },
];

type Customer = {
    id: number;
    name: string;
    email: string | null;
    phone: string | null;
    date_of_birth: string | null;
};

type CustomersPageProps = {
    customers: { data: Customer[] };
};

export default function Customers({ customers }: CustomersPageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Customers" />
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="flex justify-end">
                    <AddCustomerDialog />
                </div>
                <div className="overflow-x-auto rounded-lg border">
                    <table className="w-full min-w-[32rem] text-left text-sm">
                        <thead className="border-b bg-muted/50 text-foreground">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-medium">
                                    Name
                                </th>
                                <th scope="col" className="px-4 py-3 font-medium">
                                    Date of birth
                                </th>
                                <th scope="col" className="px-4 py-3 font-medium">
                                    ID
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.data.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="px-4 py-8 text-center text-muted-foreground">
                                        No customers to display.
                                    </td>
                                </tr>
                            ) : (
                                customers.data.map((customer) => (
                                    <tr key={customer.id}>
                                        <td className="px-4 py-3">{customer.name}</td>
                                        <td className="px-4 py-3">{customer.date_of_birth ?? 'N/A'}</td>
                                        <td className="px-4 py-3">{customer.id}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}

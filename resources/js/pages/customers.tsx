import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Customers',
        href: '/customers',
    },
];

export default function Customers() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Customers" />
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="overflow-x-auto rounded-lg border">
                    <table className="w-full min-w-[32rem] text-left text-sm">
                        <thead className="border-b bg-muted/50 text-foreground">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-medium">
                                    Username
                                </th>
                                <th scope="col" className="px-4 py-3 font-medium">
                                    Age
                                </th>
                                <th scope="col" className="px-4 py-3 font-medium">
                                    ID
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3} className="px-4 py-8 text-center text-muted-foreground">
                                    No customers to display.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}

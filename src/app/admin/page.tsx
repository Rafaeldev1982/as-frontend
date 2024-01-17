import * as api from '@/api/server'
import { redirect } from 'next/navigation';

const Page = async () => {
    const logged = await api.pingAdmin();
    if (!logged) redirect('/admin/login');

    return (
        <div>
            Painel ADM
        </div>
    );
}

export default Page;
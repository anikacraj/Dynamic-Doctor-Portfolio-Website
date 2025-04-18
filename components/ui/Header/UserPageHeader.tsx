'use client';
import Link from 'next/link'

import Nav from './Nav'
import { Button } from '../button'
import MobileNav from './MobileNav'


import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';


export default function UserPageHeader() {

    const { data: session } = useSession();
    const pathname = usePathname();
  
    if (!session?.user?.id) return null;
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href="/">
          <h1 className='text-4xl font-semibold '>
          🩺DR <span className='text-accent text-blue-300'>Port.</span>
          </h1>

        </Link>

        <div className='hidden xl:flex items-center gap-8'>


          <Nav />
          <Link href={`/${session.user.id}/chamber`}>
      

            <Button
              variant="outline"
              size="lg"
              className="text-cyan-200 text-lg hover:text-white dark:hover:text-white"
            >
              Chamber
            </Button>

          </Link>
        </div>

        <div className='xl:hidden '>
<MobileNav />
        </div>
      </div>
    </header>
  )
}

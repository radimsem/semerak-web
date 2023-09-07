"use client";

// icons
import { BsListNested } from 'react-icons/bs';

// ui
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

// hooks
import { useNavigation } from "@/hooks/useNavigation"

function Navigation() {
  const navigation = useNavigation();
 
  return (
    <>
      <nav className='hidden lg:block'>
        <ul className='flex items-center gap-3'>
          {navigation.map(navItem => (
            <li key={navItem.id}>
              <a 
                href={navItem.path}
                className='px-3 py-2 rounded-md transition-short hover:bg-indigo-50'
              >
                {navItem.content}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='lg:hidden'>
        <Sheet>
          <SheetTrigger>
            <BsListNested className='text-3xl ' />
          </SheetTrigger>
          <SheetContent onCloseAutoFocus={e => e.preventDefault()}>
            <SheetHeader className="text-start">
              <SheetTitle className="font-heading mb-2">
                Menu
              </SheetTitle>
              <ul className="flex flex-col gap-2">
                {navigation.map(navItem => (
                  <li key={navItem.id}>
                    <SheetClose>
                      <a href={navItem.path}>{navItem.content}</a>
                    </SheetClose>
                  </li>  
                ))}
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>  
  )
}

export default Navigation
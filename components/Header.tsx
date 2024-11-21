import Image from 'next/image'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/netflix_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="netflix logo"
        />
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <Image
          onClick={logout}
          src="/netflix_logo.svg"
          alt=""
          className="cursor-pointer rounded"
          width={100}
          height={100}
        />
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header

import Link from 'next/link'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">Paslaugos</span>
          <Link href="#" className="link link-hover">Asmeninis augimas</Link>
          <Link href="#" className="link link-hover">Komandos augimas</Link>
          <Link href="#" className="link link-hover">Marketingo Konsultacijos</Link>
        </div>
        <div>
          <span className="footer-title">Nerutina</span>
          <Link href="#" className="link link-hover">Apie mane</Link>
          <Link href="#" className="link link-hover">Kontaktai</Link>
          <Link href="#" className="link link-hover">Paremk podcastą</Link>
          <Link href="#" className="link link-hover">Būsimi renginiai</Link>
        </div>
        <div>
          <span className="footer-title">Mane rasi</span>
          <div className="grid grid-flow-col gap-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <Link href="#" className="text-gray-500 cursor-pointer hover:text-gray-700">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </Link>
              <Link href="#" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link href="#" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                  </path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="footer footer-center pb-10 bg-base-300 text-base-content">
      <hr className="divide-amber-500" />
        <p>Copyright © {currentYear} - Aistė Senkutė</p>
      </div>
    </footer>
  )
}

export default Footer
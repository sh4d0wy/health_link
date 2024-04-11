

const Navbar = async () => {

    return (
        <>
            <nav className="">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">

                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white focus:ring-none">HealthLink</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-semibold px-4 py-2 text-center bg-[#d65142] hover:bg-red-700 dark:focus:ring-red-800">Emergency</button>
                        {/* <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-600 focus:outline-none" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button> */}
                    </div>
                    {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-green" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-white hover:text-black">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-white hover:text-black">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-white hover:text-black">Contact</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>

        </>
    )
}

export default Navbar;
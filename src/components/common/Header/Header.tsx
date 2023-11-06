function Header() {
    return (
        <>
            {/* Header Container */}
            <header className="fixed h-[72px] w-full z-1 shadow-bar-default">
                {/* Header Body */}
                <div className="flex mx-auto px-10 w-full h-full bg-white items-center">
                    {/* Logo Icon */}
                    <div className="flex flex-shrink-0 rounded-md bg-gradient-to-r from-purple-600 to-green-600 w-10 h-10"></div>
                    {/* Logo Text */}
                    <h1 className="text-heading01 text-gray-700 ml-2 font-bold">PortPolio</h1>
                    {/* Menu */}
                    <nav className="ml-auto">
                        <ul className="flex gap-4 flex-shrink-0">
                            <li className="flex cursor-pointer gap-1">
                                <div className="icon-md bg-red-200"></div>
                                <a href="#" className="text-itemText text-gray-700  hover:text-purple-600">
                                    About me
                                </a>
                            </li>
                            <li className="flex cursor-pointer gap-1">
                                <div className="icon-md bg-red-200"></div>
                                <a href="#" className="text-itemText text-gray-700 hover:text-purple-600">
                                    Skills
                                </a>
                            </li>
                            <li className="flex cursor-pointer gap-1">
                                <div className="icon-md bg-red-200"></div>
                                <a href="#" className="text-itemText text-gray-700 hover:text-purple-600">
                                    Projects
                                </a>
                            </li>
                            <li className="flex cursor-pointer gap-1">
                                <div className="icon-md bg-red-200"></div>
                                <a href="#" className="text-itemText text-gray-700 hover:text-purple-600">
                                    Career
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;

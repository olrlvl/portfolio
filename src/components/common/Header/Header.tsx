function Header() {
  return (
    <>
      {/* Header Container */}
      <header className="fixed h-[72px] w-full z-1 shadow-bar-default">
        {/* Header Body */}
        <div className="flex mx-auto px-10 w-full h-full bg-gray-200 items-center">
          <div className="w-[120px] h-8 bg-red-100">Logo Area</div>
          <nav className="ml-auto">
            <ul className="flex gap-2">
              <li className="cursor-pointer">1번 메뉴</li>
              <li className="cursor-pointer">2번 메뉴</li>
              <li className="cursor-pointer">3번 메뉴</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

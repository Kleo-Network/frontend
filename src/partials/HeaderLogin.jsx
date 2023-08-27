import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';
import Dropdown from '../utils/Dropdown';
import Image from '../images/klleo.png';
function Header({ neoline, setNeoLine, account, setAccount, neolineN3, setneoLineN3 }) {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  const getAccounts = async () => {
    if (!neoline) {
      window.addEventListener('NEOLine.NEO.EVENT.READY', () => {
        let neolinetemp = new NEOLine.Init();
        setNeoLine(neolinetemp);
        console.log("neoline", neolinetemp);
      });
    }
    window.addEventListener('NEOLine.N3.EVENT.READY', () => {
      let neolineN3 = new NEOLineN3.Init();
      console.log("neoline n3 ready", neolineN3);
      setneoLineN3(neolineN3);
    });
    const accounts = await neoline.getAccount();
    setAccount(accounts);
    console.log("get neo accounts", accounts);

  }
  // close the mobile menu on click outside
  useEffect(() => {

    window.addEventListener('NEOLine.NEO.EVENT.READY', () => {
      let neolinetemp = new NEOLine.Init();
      setNeoLine(neolinetemp);
      console.log("neoline", neolinetemp);

      const accounts = neolinetemp.getAccount().then(account => {
        setAccount(account);
      });

      console.log("get neo accounts", accounts);
    });

    window.addEventListener('NEOLine.N3.EVENT.READY', () => {
      let neolineN3 = new NEOLineN3.Init();
      console.log("neoline n3 ready", neolineN3);
      setneoLineN3(neolineN3);
    });




    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <>
      <header class="py-2 bg-gray-700 text-white text-center">
        <a href="https://twitter.com/kleo_network/status/1691712047678202039" target="_blank">$KLEO needs your help! Contribute in protecting your privacy. Confused How?  Shoot us a DM on Twitter. </a>
      </header>

      <header className={`w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>

        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link to="/" className="block" aria-label="Kleo">
                <img width={40} height={40} src={Image}></img>
              </Link>

            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">

              {/* Desktop menu links */}


              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">


                <li>
                  {!neoline ? <>
                    <a onClick={() => { getAccounts() }} target="_blank" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                      <span>Connect with NeoLine </span>
                      <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </a></> : <>
                    <a onClick={() => setNeoLine(null)} target="_blank" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                      <span>Disconnect account </span>
                      <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </a></>


                  }

                </li>
              </ul>

            </nav>

            {/* Mobile menu */}



          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router';
import Logo from '../../assets/Logo.png';
// import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  // const handleScroll = () => {
  //   document.getElementById('Branding')?.scrollIntoView({
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-linear-to-br from-[#72CFE7]/30 via-[#fbc3f1]/20 to-[#fbe4c2] text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          {/* <button onClick={handleScroll} className="link link-hover">
            Branding
          </button> */}
          {/* <a href="/#Branding" className="link link-hover">
            Branding
          </a> */}
          {/* <HashLink smooth to="/#Branding" className="link link-hover">
            Branding
          </HashLink> */}

          <Link to={'/#branding'} className="link link-hover">
            Branding
          </Link>
          <Link to={'/#financial_overview'} className="link link-hover">
            Financial Calculation
          </Link>
          <Link to={'/#budgeting'} className="link link-hover">
            Budgeting
          </Link>
          <Link to={'/#planning'} className="link link-hover">
            Planning
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a
            href="https://github.com/MdKhairulHassan"
            target="_blank"
            className="link link-hover"
          >
            About us
          </a>
          <a
            href="mailto:darknessmoon76@gmail.com?subject=FinEase%20Contact&body=Hello%20there,"
            target="_blank"
            className="link link-hover"
          >
            Contact
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-linear-to-br from-[#72CFE7]/30 via-[#fbc3f1]/20 to-[#fbe4c2] text-base-content border-base-300 border-t px-10 py-4">
        <div className="">
          <Link
            to={'/'}
            className="btn btn-ghost text-xl hover:bg-[#c09cff86] pt-8 pb-7 pr-13 pl-7 rounded-2xl w-40"
          >
            <img src={Logo} alt="Logo" className="w-18" />
            <div className="flex">
              <span className="text-[#3B1E6D]">Fin</span>
              <span className="text-[#10B981]">Ease</span>
            </div>
          </Link>
          <p>
            FinEase Industries Ltd.
            <br />
            Providing reliable tech since 2026
          </p>
        </div>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="flex items-center gap-4">
            <a>
              <FaXTwitter className="w-7 h-6" />
            </a>
            <a>
              <FaYoutube className="w-7 h-6" />
            </a>
            <a>
              <FaFacebookF className="w-7 h-6" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

import { BiLogoFacebook,BiLogoInstagram,BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
   <img src="https://i.ibb.co/kSwC4G3/logo2.png" alt="" />
   
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Wedding</a> 
    <a className="link link-hover">B-Day</a> 
    <a className="link link-hover">Marrige</a> 
    <a className="link link-hover">Baby-Sawor</a>
  </nav> 
  <nav>
    <header className="footer-title">Contact_us</header> 
    <div className="flex">
    <a className="link link-hover text-2xl"><BiLogoFacebook></BiLogoFacebook></a> 
    <a className="link link-hover text-2xl"><BiLogoInstagram></BiLogoInstagram></a> 
    <a className="link link-hover text-2xl"><BiLogoTwitter></BiLogoTwitter></a></div> 
   
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
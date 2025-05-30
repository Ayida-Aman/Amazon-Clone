import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from "../../utility/firebase"

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [{user, basket}, dispatch] = useContext(DataContext)
    const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={css.fixed}>
      <section>
        <div className={css.header__container}>
          <div className={css.logo__container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
            {/* delivery */}
            <div className={css.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={css.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon " />
            <BsSearch size={38} />
          </div>
          {/* right side div  */}
          <div className={css.order__container}>
                        <Link to="/" className={css.language}>
                            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt="American Flag"
              />
                            <select name="" id="">
                                <option value="">EN</option>
                            </select>
                        </Link>
                        <Link to={!user && "/auth"} >
                        <div>
                          {
                            user ? (
                              <>
                              <p>Hello {user?.email.split("@")[0]}</p>
                              <span onClick={()=>auth.signOut()} >SignOut</span>
                              </>
                            ):(
                              <>
                              <p>Sign In</p>
                              <p>Accounts and Lists</p>
                              
                              </>
                            )
                          }

                        </div>
                        </Link>
                        <Link to="/orders" >
                            <p>Returns</p>
                            <p>and Orders</p>
                        </Link>
                        <Link to="/cart" className={css.cart}>
                            <BiCart size={38}/>
                            <span>{totalItem}</span>
                        </Link>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </section>
  );
};

export default Header;

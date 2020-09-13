import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://media.cdn.gradconnection.com/Amazon_Banner_r96ezcR.png"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id = "1"
            title="SANAT-H13 [ Core 2 Dou 3.00GHz / HDD 320GB / Ram 4GB / 17 Monitor / 64 Bit ] DESKTOP"
            price={20.99}
            image="https://www.daffodil-bd.com/images/blog/desktop.jpg"
            ratings={4}
          />
          <Product
            id = "2"
            title="DESKTOP www.daffodil-bd.com
            Daffodil Computers Limited."
            price={200.99}
            image="https://www.ryanscomputers.com/storage/products/small/office-pc-oi391-9th-gen-intel-i3-9100-36ghz-11588686888.jpg"
            ratings={3}
          />

        </div>
        <div className="home__row">
        <Product
            id = "3"
            title="SANAT-H13 [ Core 2 Dou 3.00GHz / HDD 320GB / Ram 4GB / 17 Monitor / 64 Bit ] DESKTOP"
            price={260.3}
            image="https://www.daffodil-bd.com/images/blog/desktop.jpg"
            ratings={4}
          />
          <Product
            id = "4"
            title="DESKTOP www.daffodil-bd.com
            Daffodil Computers Limited."
            price={290.99}
            image="https://www.ryanscomputers.com/storage/products/small/office-pc-oi391-9th-gen-intel-i3-9100-36ghz-11588686888.jpg"
            ratings={5}
          />
          <Product
            id = "5"
            title="SANAT-H13 [ Core 2 Dou 3.00GHz / HDD 320GB / Ram 4GB / 17 Monitor / 64 Bit ] DESKTOP"
            price={200.99}
            image="https://www.daffodil-bd.com/images/blog/desktop.jpg"
            ratings={5}
          />
        </div>
        <div className="home__row">
        <Product
            id = "6"
            title="SANAT-H13 [ Core 2 Dou 3.00GHz / HDD 320GB / Ram 4GB / 17 Monitor / 64 Bit ] DESKTOP"
            price={20.99}
            image="https://www.daffodil-bd.com/images/blog/desktop.jpg"
            ratings={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

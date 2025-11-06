import React, { useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FetchContext } from "./components/context/ProductProvider";
import { Link } from "react-router";

const Home = () => {
  const { data, visible, setVisible } = useContext(FetchContext);

  return (
    <>
      <Header />
      <div className="main-container pb-30">
        <div className="px-10">
          <div className="py-10 text-center text-6xl">
            <h1 className="font-bold">Shop Essentials</h1>
          </div>
          <div className="prod-fetch">
            <div className="grid grid-cols-5 gap-10">
              {data.slice(0, visible).map((item) => (
                <div key={item.id}>
                  <div className="text-center">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-[300px] object-contain"
                      />
                      <h6 className="text-[18px] pt-3">
                        {item.title.slice(0, 20)}
                      </h6>
                      <p className="text-sm font-black/70 py-2">
                        $ {item.price}
                      </p>
                    </Link>
                    <div>
                      <button className="bg-red-400 text-white max-w-full py-3 px-10 cursor-pointer">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* button less and more products */}
            <div className="py-20">
              <button
                className="bg-red-500 px-10 py-2 cursor-pointer"
                onClick={() => {
                  // setVisible(data.length)
                  if (visible < data.length) {
                    setVisible(data.length);
                  } else {
                    setVisible(5);
                  }
                }}
              >
                {visible < data.length ? "More Products" : "Less Products"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

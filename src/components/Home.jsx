import NavBar from "./NavBar";
import Footer from "./Footer";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [isHoveringWhey, setIsHoveringWhey] = useState(false);
  const [isHoverBuyWhey, setIsHoverBuyWhey] = useState(false);
  const handleMouseOverBuyWhey = () => {
    setIsHoverBuyWhey(true);
  };
  const handleMouseOutBuyWhey = () => {
    setIsHoverBuyWhey(false);
  };
  const handleMouseOverWhey = () => {
    setIsHoveringWhey(true);
  };
  const handleMouseOutWhey = () => {
    setIsHoveringWhey(false);
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/product")
      .then((res) => {
        console.log(res.data[0].name);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      }
      );
  }, [])

  return (
    <>
      <NavBar />
      <div className="min-h-[100vh]">
        <div className="w-full md:w-[60%] mx-0 md:mx-[20%] h-[500px] bg-black flex">
          <div className="w-[25%] overflow-x-visible h-full bg-gray-200">
            <div className="flex items-center bg-[#2F4858] text-[14px] font-medium py-1 text-white">
              <svg
                className="h-8 w-8 mx-2 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
              </svg>
              DANH MỤC SẢN PHẨM
            </div>
            <div
              className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800 relative"
              onMouseOver={handleMouseOverWhey}
              onMouseOut={handleMouseOutWhey}
            >
              <img
                className="h-8 w-8 mx-2"
                src="https://bizweb.dktcdn.net/100/398/814/themes/854223/assets/menu_icon_3.png?1657274231192"
              ></img>
              Whey Protein
              {isHoveringWhey ? (
                <div className="absolute w-[300px] h-[120px] top-0 bg-slate-50 right-[-300px]">
                  <div className="text-center font-medium h-10 border-b border-neutral-800 hover:text-red-500">
                    Whey isolate
                  </div>
                  <div className="text-center font-medium h-10 border-b border-neutral-800 hover:text-red-500">
                    Whey hydrolize
                  </div>
                  <div className="text-center font-medium h-10 border-b border-neutral-800 hover:text-red-500">
                    Whey organic
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="https://bizweb.dktcdn.net/100/398/814/themes/854223/assets/menu_icon_7.png?1657274231192"
              ></img>
              Pre-workout{" "}
            </div>
            <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="https://bizweb.dktcdn.net/100/398/814/themes/854223/assets/menu_icon_5.png?1657274231192"
              ></img>
              EAA/BCAA{" "}
            </div>
            <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="	https://bizweb.dktcdn.net/100/398/814/themes/854223/assets/menu_icon_9.png?1657274231192"
              ></img>
              Đơn chất{" "}
            </div>
            <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_1280.png"
              ></img>
              Post workout{" "}
            </div>
            <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="https://wjm.s3.amazonaws.com/nrf/uploads/201_1644590832.png"
              ></img>
              Vitamin{" "}
            </div>
            <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="https://bizweb.dktcdn.net/100/398/814/themes/854223/assets/menu_icon_11.png?1657274231192"
              ></img>
              Phụ kiện tập luyện{" "}
            </div>
            {/* <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="https://i.pinimg.com/originals/54/98/7e/54987e58aed7ae7ce812231eb9f70df5.png"
              ></img>
              Phở protein{" "}
            </div>
            <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="https://i.pinimg.com/originals/54/98/7e/54987e58aed7ae7ce812231eb9f70df5.png"
              ></img>
              Pizza protein{" "}
            </div>
            <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="https://i.pinimg.com/originals/54/98/7e/54987e58aed7ae7ce812231eb9f70df5.png"
              ></img>
              Canh chua protein{" "}
            </div>
            <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="https://i.pinimg.com/originals/54/98/7e/54987e58aed7ae7ce812231eb9f70df5.png"
              ></img>
              Bánh protein{" "}
            </div> */}
            {/* <div className="flex items-center bg-slate-200 text-[14px] font-medium h-10 border-b border-neutral-800">
              <img
                className="h-8 w-8 mx-2"
                src="https://i.pinimg.com/originals/54/98/7e/54987e58aed7ae7ce812231eb9f70df5.png"
              ></img>
              Học code cùng protein{" "}
            </div> */}
          </div>
          <div className="w-[75%] h-full bg-black overflow-hidden">
            <div className="py-2 bg-white flex h-[10%]">
              <div className="hover:text-red-300 flex items-center oc-cho-font">
                <img
                  src="https://bizweb.dktcdn.net/100/398/814/themes/854223/assets/policy_header_image_1.png?1656836949864"
                  className="h-9 mr-2 "
                ></img>
                Chính sách khuyến mãi
              </div>
              <div className="hover:text-red-300 flex items-center oc-cho-font">
                <img
                  src="https://bizweb.dktcdn.net/100/398/814/themes/854223/assets/policy_header_image_2.png?1656836949864"
                  className="h-9 mr-1 ml-2"
                ></img>
                Hướng dẫn mua online
              </div>
              <div className="hover:text-red-300 flex items-center oc-cho-font">
                <img
                  src="https://bizweb.dktcdn.net/100/398/814/themes/854223/assets/policy_header_image_3.png?1656836949864"
                  className="h-9 mr-2 ml-2"
                ></img>
                Hướng dẫn trả góp
              </div>
            </div>
            <div className="flex items-center h-full">
              <img src="/images/image.png " className="h-full"></img>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%] mx-0 md:mx-[20%] bg-white flex">
          <div>
            <div>
              <div className="viet-hoa text-3xl">
                WHEY PROTEIN - BỔ SUNG ĐẠM CẦN THIẾT
              </div>
              <div className="flex flex-wrap">
                {/* <Product
                  name="Kevin Levrone Gold Isolate Whey Protein (2 KG)"
                  src="https://bizweb.dktcdn.net/thumb/medium/100/398/814/products/d92fc569-a94f-407f-bfa5-1a6f8a1cebe9.jpg?v=1655566620000"
                ></Product>
                <Product
                  name="Critical Whey Blend - Advanced Protein Blend (900G)"
                  src="https://bizweb.dktcdn.net/thumb/medium/100/398/814/products/0392028f-8b74-4efb-ae17-228e19804f01.jpg?v=1654924504000"
                ></Product>
                <Product
                  name="Túi Whey Gold Standard 1.47lbs"
                  src="https://bizweb.dktcdn.net/thumb/medium/100/398/814/products/c30edc7a-8320-4772-b637-233c1d33c632.jpg?v=1639384692000"
                ></Product>
                <Product
                  name="Whey WPC82 (3 KG)"
                  src="https://bizweb.dktcdn.net/thumb/medium/100/398/814/products/kfd-whey-wpc-82-3kg1.jpg?v=1647073658000"
                ></Product> */}
                {products.length == 0 ? "Loading..." : ""}
                {products.map(product => {if (product.category == "Whey") {return <Product name={product.name} src={product.image}></Product>}})}
              </div>
            </div>
            <div>
              <div className="viet-hoa text-3xl">
                THỰC CHÓ NGU PHẨM SỨC KHỎE
              </div>
              <div className="flex flex-wrap">
              {products.length == 0 ? "Loading..." : ""}
              {products.map(product => {if (product.category == "Thực phẩm chức năng") {return <Product name={product.name} src={product.image}></Product>}})}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;

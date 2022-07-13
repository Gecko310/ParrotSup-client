import { useState } from "react"
export default function Product(viet) {
    const [isHoverBuyWhey, setIsHoverBuyWhey] = useState(false);
  const handleMouseOverBuyWhey = () => {
    setIsHoverBuyWhey(true);
  }
  const handleMouseOutBuyWhey = () => {
    setIsHoverBuyWhey(false);
  }
    return (

        <div className="w-full md:w-[33%]">
            <div className=" flex">
                <img
                    className="h-44   "
                    src={viet.src}>
                </img>
                {/* <img className="h-44" src="https://bizweb.dktcdn.net/thumb/medium/100/398/814/products/0392028f-8b74-4efb-ae17-228e19804f01.jpg?v=1654924504000"></img> */}
            </div>
            <div className="relative oc-cho-font flex w-[75%] ">
                <div className="w-[90%] hover:text-red-600">{viet.name}</div>
                <div className="absolute top-0 right-0 flex" onMouseOver={handleMouseOverBuyWhey} onMouseOut={handleMouseOutBuyWhey}>
                    <img className=" w-7 h-7  " src="https://cdn-icons-png.flaticon.com/512/34/34627.png"  ></img>
                    <div>
                        {isHoverBuyWhey ? <div className="absolute z-10 w-36 h-[full] text-black bg-slate-50 top-5 left-6 " >
                            <div className="text-center font-medium h-10  border-b border-neutral-800 hover:text-red-500">Mua ngay</div>
                            <div className="text-center font-medium h-10 border-b border-neutral-800 hover:text-red-500">Thêm vào giỏ hàng</div>
                        </div> : ''}
                    </div>
                </div>
            </div>
            <div className="text-rose-600">1.699.000₫</div>
            <img className="w-[50%]" src="https://bizweb.dktcdn.net/100/398/814/themes/854223/assets/promo_tag_2.png?1657274231192"></img>
        </div>
    )
}
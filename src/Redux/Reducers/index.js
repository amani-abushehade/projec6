import {
  TOGGLE_ITEM,
  GET_ITEMS,
  TOGGLE_FAV,
  SET_AMOUNT,
  CLEAR_CART,
  LOAD_DATA,
} from "../actions";

const initialState = {
  items: [
    {
      id: 1,
      name: "LENOVO LOQ 15IRH8",
      price: "2651.73",
      desc: " Intel Core i7-13620H, 16GB DDR5, 512GB SSD, NVIDIA RTX 4060 8GB, 15.6-inch FHD 144Hz, Dos",
      image: "/labtopi/images/1.png",
    },
    {
      id: 2,
      name: "HP Victus 15-fb1013dx",
      price: "1423.73",
      desc: "AMD Ryzen 5 7535H, 8GB DDR5, 512GB SSD, NVIDIA RTX 2050 4GB, 15.6-inch FHD 144Hz, ",
      image: "/labtopi/images/2.png",
    },
    {
      id: 3,
      name: "DELL G15 5511",
      price: "2171.21",
      desc: "Intel Core I7-11800H, 16GB, 512GB SSD, NVIDIA RTX 3060 6GB, 15.6 FHD 120Hz, Dos",
      image: "/labtopi/images/3.png",
    },
    {
      id: 4,
      name: "ASUS Zenbook S 13",
      price: "2562.74",
      desc: "Intel Core i7-1355U, 16GB, 512GB SSD, Intel Iris Xe, 13.3-inch OLED 2.8K, Win11",
      image: "/labtopi/images/4.png",
    },
    {
      id: 5,
      name: "Lenovo ThinkBook 15",
      price: "1370.34",
      desc: "Intel Core i7-1165G7, 8GB, 1TB HDD, NVIDIA MX450 2GB, 15.6 FHD, Dos",
      image: "/labtopi/images/5.png",
    },
    {
      id: 6,
      name: "Acer Aspire 7 A715",
      price: "1441.53",
      desc: "Intel Core i5-12450H, 8GB, 512GB SSD, NVIDIA RTX 2050 4GB, 15.6-inch FHD 144Hz, Dos",
      image: "/labtopi/images/6.png",
    },
    {
      id: 7,
      name: "ASUS ROG Strix G16 ",
      price: "4876.36",
      desc: "Intel Core i7-13650HX, 16GB, 1TB SSD, NVIDIA RTX 4080 12GB, 16-inch WUXGA 165Hz, Win11",
      image: "/labtopi/images/7.png",
    },
    {
      id: 8,
      name: "HP ProBook 450 G9",
      price: "1815.27",
      desc: "Intel Core i7-1255U, 8GB, 512GB SSD, NVIDIA MX570 2GB, 15.6-Inch FHD, Dos",
      image: "/labtopi/images/8.png",
    },
    {
      id: 25,
      name: "DELL Latitude 3540 ",
      price: "1957.64",
      desc: "Intel Core i7-1355U, 8GB, 512GB SSD, Intel Iris Xe, 15.6-inch FHD, Dos",
      image: "/labtopi/images/25.png",
    },
    {
      id: 9,
      name: "LENOVO Legion Slim 5 ",
      price: "2562.74",
      desc: "Intel Core i7-13700H, 16GB, 512GB SSD, NIVIDA RTX 4050 6GB, 16-inch WUXGA 144Hz, Dos",
      image: "/labtopi/images/9.png",
    },
    {
      id: 10,
      name: "HP Victus 15-fa0032dx ",
      price: "2011.03",
      desc: "Intel Core i7-12650H, 16GB, 512GB SSD, NVIDIA RTX 3050Ti 4GB, 15.6-Inch FHD 144Hz, Win11",
      image: "/labtopi/images/10.png",
    },
    {
      id: 11,
      name: "MSI GF63 Thin 11SC",
      price: "1405.93",
      desc: " Intel Core i5-11400H, 8GB, 512GB, NVIDIA GTX 1650 4GB, 15.6-inch FHD 144Hz, Dos",
      image: "/labtopi/images/11.png",
    },
    {
      id: 12,
      name: "ASUS Vivobook Pro 15",
      price: "1797.47",
      desc: "AMD Ryzen 7 5800H, 16GB, 512GB SSD, NVIDIA RTX 3050 4GB, 15.6-inch FHD OLED, Win11",
      image: "/labtopi/images/12.png",
    },
    {
      id: 13,
      name: "LENOVO ThinkPad E15",
      price: "1690.69",
      desc: "Intel Core i5-1235U, 8GB, 512GB SSD, NVIDIA MX550 2GB, 15.6-inch FHD, Dos",
      image: "/labtopi/images/13.png",
    },
    {
      id: 14,
      name: "ASUS TUF F15 FX507ZU4",
      price: "2527.15",
      desc: " Intel Core i7-12700H, 16GB, 512GB SSD, NVIDIA RTX 4050 6GB, 15.6-inch FHD 144Hz, Win11",
      image: "/labtopi/images/14.png",
    },
    {
      id: 15,
      name: "DELL G15 5520 ",
      price: "2260.19",
      desc: " Intel Core i7-12700H, 16GB, 512GB SSD, NVIDIA RTX 3060 6GB, 15.6-Inch FHD 120Hz, Dos",
      image: "/labtopi/images/15.png",
    },
    {
      id: 16,
      name: "ASUS ROG Flow X16 ",
      price: "3559.38",
      desc: "AMD Ryzen 7 6800HS, 16GB, 512GB SSD, NVIDIA RTX 3060 6GB, 16.0-inch WQXGA 165Hz, Win11",
      image: "/labtopi/images/16.png",
    },
    {
      id: 17,
      name: "LENOVO IdeaPad",
      price: "1423.73",
      desc: " Intel Core i5-11300H, 8GB, 256GB SSD, NVIDIA RTX 3050 4GB, 15.6-Inch FHD 120Hz, Win11",
      image: "/labtopi/images/17.png",
    },
    {
      id: 18,
      name: "DELL Latitude 5540",
      price: "2491.55",
      desc: "Intel Core i7-1355U, 8GB, 512GB SSD, Intel, 15.6-inch FHD, Dos",
      image: "/labtopi/images/18.png",
    },
    {
      id: 19,
      name: "ASUS TUF F15 FX506HF",
      price: "1555.43",
      desc: " Intel Core i5-11400H, 8GB, 512GB SSD, NVIDIA RTX 2050 4GB, 15.6-inch FHD 144Hz, Win11",
      image: "/labtopi/images/19.png",
    },
    {
      id: 20,
      name: "ASUS Zenbook S 13",
      price: "2562.74",
      desc: "Intel Core i7-1355U, 16GB, 512GB SSD, Intel Iris Xe, 13.3-inch OLED 2.8K, Win11",
      image: "/labtopi/images/4.png",
    },
    {
      id: 21,
      name: "LENOVO LOQ 15IRH8",
      price: "2651.73",
      desc: " Intel Core i7-13620H, 16GB DDR5, 512GB SSD, NVIDIA RTX 4060 8GB, 15.6-inch FHD 144Hz, Dos",
      image: "/labtopi/images/1.png",
    },
    {
      id: 22,
      name: "HP ProBook 450 G9",
      price: "1815.27",
      desc: "Intel Core i7-1255U, 8GB, 512GB SSD, NVIDIA MX570 2GB, 15.6-Inch FHD, Dos",
      image: "/labtopi/images/8.png",
    },
    {
      id: 23,
      name: "MSI GF63 Thin 11SC",
      price: "1405.93",
      desc: " Intel Core i5-11400H, 8GB, 512GB, NVIDIA GTX 1650 4GB, 15.6-inch FHD 144Hz, Dos",
      image: "/labtopi/images/11.png",
    },
    {
      id: 24,
      name: "Acer Aspire 7 A715",
      price: "1441.53",
      desc: "Intel Core i5-12450H, 8GB, 512GB SSD, NVIDIA RTX 2050 4GB, 15.6-inch FHD 144Hz, Dos",
      image: "/labtopi/images/6.png",
    },
  ],
  cart: [],
  favs: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };
    case TOGGLE_ITEM: {
      if (state.cart.find((item) => item.id == action.id)) {
        const filtered = state.cart.filter((item) => item.id !== action.id);
        localStorage.setItem("cart", JSON.stringify(filtered));
        return { ...state, cart: [...filtered] };
      } else {
        var localCart =
          localStorage.getItem("cart") != null
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
        localCart = [
          ...localCart,
          {
            id: action.id,
            amount: action.amount,
          },
        ];

        localStorage.setItem("cart", JSON.stringify(localCart));
        return {
          ...state,
          cart: [...state.cart, { id: action.id, amount: action.amount }],
        };
      }
    }
    case SET_AMOUNT: {
      const item = state.cart.find((item) => item.id == action.id);
      item.amount = action.amount;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return state;
    }
    case TOGGLE_FAV: {
      if (state.favs.includes(action.id)) {
        state.favs = state.favs.filter((item) => item !== action.id);
        localStorage.setItem("favs", JSON.stringify([...state.favs]));
        return { ...state, favs: [...state.favs] };
      } else {
        localStorage.setItem(
          "favs",
          JSON.stringify([...state.favs, action.id])
        );
        return { ...state, favs: [...state.favs, action.id] };
      }
    }
    case CLEAR_CART: {
      localStorage.setItem("cart", JSON.stringify([]));
      return { ...state, cart: [] };
    }
    case LOAD_DATA: {
      const localCart =
        localStorage.getItem("cart") != null
          ? JSON.parse(localStorage.getItem("cart"))
          : [];
      const localFavs =
        localStorage.getItem("favs") != null
          ? JSON.parse(localStorage.getItem("favs"))
          : [];
      return { ...state, cart: [...localCart], favs: [...localFavs] };
    }
    default:
      return state;
  }
}

export default reducer;

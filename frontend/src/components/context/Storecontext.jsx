// Importing necessary modules and libraries
import { createContext, useEffect, useState } from "react";
import { list_items as initialListItems, shoes_item as initialShoesItems,dress_items as initialdressitems,watches_items as initialwatchesitems  } from '../../assets/assets';
import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from 'jwt-decode';


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const url ='https://ba-ua9j.onrender.com'
    const [list_items, setListItems] = useState(initialListItems);
    const [shoes_items, setShoesItems] = useState(initialShoesItems || []);
    const [dress_items, setDressItems] = useState(initialdressitems || []);
    const [watches_items, setWatchesItems] = useState(initialwatchesitems || []);
        const [loading, setLoading] = useState(true);
const [role, setRole] = useState("");

    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });
    const [favoriteCount, setFavoriteCount] = useState(0); // ✅ Track count
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToCart = async (itemId) => {
        try {
            console.log("Adding item to cart:", itemId);
    
            // If the item is not in the cart, add it
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
            }));
    
            if (token) {
                const response = await axios.post(
                   `${url}/api/cart/add`,
                    { itemId },
                    { headers: { Authorization: `Bearer ${token}` } } // ✅ Corrected token format
                );
                console.log("Cart update response:", response.data);
    
                if (!response.data.success) {
                    console.error("Failed to add item:", response.data.message);
                }
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
    };
    
    
const removeFromCart = async (itemId) => {
  if (!token) {
    console.error("❌ No token, cannot remove item.");
    return;
  }

  try {
    const response = await axios.post(
      `${url}/api/cart/remove`,
      { itemId },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.data.success) {
      // ✅ Now safely update the cart in frontend
      setCartItems((prev) => {
        const updatedCart = { ...prev };
        if (updatedCart[itemId]) {
          updatedCart[itemId] -= 1;
          if (updatedCart[itemId] <= 0) {
            delete updatedCart[itemId];
          }
        }
        return updatedCart;
      }); console.log("Cart update response:", response.data);
    
    } else {
      console.warn("⚠️ Backend failed to remove:", response.data.message);
    }
  } catch (error) {
    console.error("❌ Error removing item from cart:", error);
  }
};


const toggleFavorite = (item) => {
    setFavorites((prevFavorites) => {
        const isFavorited = prevFavorites.some((fav) => fav.id === item.id);
        let updatedFavorites;

        if (isFavorited) {
            updatedFavorites = prevFavorites.filter((fav) => fav.id !== item.id);
        } else {
            updatedFavorites = [...prevFavorites, item];
        }

        setFavoriteCount(updatedFavorites.length);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        return updatedFavorites;
    });
};

      const removeFromFavorites = (itemId) => {
        const updatedFavorites = favorites.filter((item) => item.id !== itemId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo =
                    list_items.find((product) => product._id === item) ||
                    shoes_items.find((product) => product._id === item) ||
                    dress_items.find((product) => product._id === item) ||
                    watches_items.find((product) => product._id === item);
    
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };
    const fetchItemList = async () => {
        setLoading(true); // ✅ Start loading before fetching
        try {
            const response = await axios.get(url + "/api/item/list");
            if (response.data && Array.isArray(response.data.data)) {
                const items = response.data.data;
                setListItems(items);
            } else {
                toast.warn("No items found.", { position: "bottom-right" });
            }
        } catch (error) {
            console.error("Failed to fetch item list:", error);
            toast.error("Failed to load items. Showing default list.", { position: "bottom-right" });
            setListItems(initialListItems);
        } finally {
            setLoading(false); // ✅ Stop loading in both success and error cases
        }
    };
    
    const fetchshoesList = async () => {
        setLoading(true); // ✅ Start loading before fetching
        try {
            const response = await axios.get(url + "/api/item/shoeslist");
            if (response.data && Array.isArray(response.data.data)) {
                const items = response.data.data;
                setShoesItems(items);
            } else {
                toast.warn("No items found.", { position: "bottom-right" });
            }
        } catch (error) {
            console.error("Failed to fetch item list:", error);
            toast.error("Failed to load items. Showing default list.", { position: "bottom-right" });
            setShoesItems(initialShoesItems); 
        } finally {
            setLoading(false); // ✅ Stop loading in both success and error cases
        }
    };
    const fetchdressList = async () => {
        setLoading(true); // ✅ Start loading before fetching
        try {
            const response = await axios.get(url + "/api/item/dresslistitem");
            if (response.data && Array.isArray(response.data.data)) {
                const items = response.data.data;
                setDressItems(items);
            } else {
                toast.warn("No items found.", { position: "bottom-right" });
            }
        } catch (error) {
            console.error("Failed to fetch item list:", error);
            toast.error("Failed to load items. Showing default list.", { position: "bottom-right" });
            setDressItems(initialdressitems); 
        } finally {
            setLoading(false); // ✅ Stop loading in both success and error cases
        }
    };
    const fetchmenList = async () => {
        setLoading(true); // ✅ Start loading before fetching
        try {
            const response = await axios.get(url + "/api/item/watcheslistitem");
            if (response.data && Array.isArray(response.data.data)) {
                const items = response.data.data;
                setWatchesItems(items);
            } else {
                toast.warn("No items found.", { position: "bottom-right" });
            }
        } catch (error) {
            console.error("Failed to fetch item list:", error);
            toast.error("Failed to load items. Showing default list.", { position: "bottom-right" });
            setWatchesItems(initialwatchesitems); 
        } finally {
            setLoading(false); // ✅ Stop loading in both success and error cases
        }
    };
    
    
    
    const loadCartData = async (token) => {
        try {
            if (!token) {
                alert("No token found, skipping cart data load.");
                return;
            }
    
            console.log("Token in loadCartData:", token); // Log the token
    
            const response = await axios.post(`${url}/api/cart/get`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
    
            console.log("Cart Data Response:", response.data);
    
            if (response.data && response.data.cartdata) {
                setCartItems(response.data.cartdata);
            } else {
                console.error("Unexpected cart data format:", response.data);
                setCartItems({});
            }
        } catch (error) {
            console.error("Error loading cart data:", error);
            setCartItems({});
        }
    };
    
    useEffect(()=>{
   
        async function loadData() {
            await fetchItemList()
            await fetchshoesList()
            await fetchmenList()
            await fetchdressList()
        }
        loadData()
    },[])
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
            loadCartData(savedToken); // Ensure cart data is loaded when token is present
        try {
            const decoded = jwtDecode(savedToken);
            console.log("🧠 Decoded user:", decoded);
            setRole(decoded.role); // ➕ Set role here
        } catch (error) {
            console.error("❌ Failed to decode token:", error);
        }}
    }, []);
     
    const [category, setCategory] = useState("All");

    const cat = {
      category,  // ✅ Provide category
      setCategory, // ✅ Provide setCategory
      // other values...
    };

    const contextValue = {
        list_items,
        shoes_items,
        dress_items,
        watches_items,
        cat,
        cartItems,
        removeFromCart,
        getTotalCartAmount,
        addToCart,
        token,
        setToken,
        favorites,
        toggleFavorite,
        removeFromFavorites,
        favoriteCount ,
        url,
        loading,
         role,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

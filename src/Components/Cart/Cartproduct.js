import { useCart } from "../../Context/DataContext/CartContext";
import { useWishlist } from "../../Context/DataContext/WishlistContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export const CartProduct = ({ product }) => {
  const { _id, name, image, description, price, discount } = product;
  const { removeCartItem, updateCart } = useCart();
  const { addWishlist, wishlist } = useWishlist();
  const addToWishlistHandler = (product) => {
    addWishlist(product);
    removeCartItem(product);
  };
  return (
    <div>
      <div class='flex box-shadow-light pd-1' key={_id}>
        <img class=' img-md' src={image} />
        <div class='flex-col card-body ml-1'>
          <div class='flex gap-3'>
            <div>
              <div class='card-title text-sm'>{name} </div>
              <div class='card-description'>{description} </div>
            </div>
            <div>
              <i
                class='fa fa-trash fa-1x text-accent'
                onClick={() => {
                  removeCartItem(product);
                  toast.error("item removed", { autoClose: 1000 });
                }}
              ></i>
            </div>
          </div>
          {discount ? (
            <div class='price'>
              Rs {price * (1 - discount / 100)}
              <del class='gray-text h6 ml-1'>Rs. {price}</del>
              <span class='text-accent h6'> ({discount}% oFF)</span>
            </div>
          ) : (
            <div>{price}</div>
          )}

          <div class='quantity-btn mt-1 gap-2'>
            {product.qty === 1 ? (
              <button
                class='btn-icon-round btn-icon-sm box-shadow-bottom'
                disabled
              >
                <i class='fa fa-minus'></i>
              </button>
            ) : (
              <button class='btn-icon-round btn-icon-sm box-shadow-bottom'>
                <i
                  class='fa fa-minus'
                  onClick={() =>
                    updateCart({
                      product,
                      type: "decrement",
                    })
                  }
                ></i>
              </button>
            )}
            <span class='bold-text pd--5'>{product.qty}</span>

            <button class='btn-icon-round btn-icon-sm box-shadow-bottom'>
              <i
                class='fa fa-plus'
                onClick={() =>
                  updateCart({
                    product,
                    type: "increment",
                  })
                }
              ></i>
            </button>
          </div>
          {wishlist.some((item) => item._id === product._id) ? (
            <button class='btn btn-outline-primary width-100 mt-1'>
              <span>Add to Wishlist</span>
              <span class='btn-icon'>
                <i
                  class='bi bi-heart'
                  onClick={() => {
                    toast.error("Item is already in wishlist", {
                      autoClose: 1000,
                    });
                  }}
                ></i>
              </span>
            </button>
          ) : (
            <button
              class='btn btn-outline-primary width-100 mt-1'
              onClick={() => {
                addToWishlistHandler(product);
                toast.success("Item is successfully added", {
                  autoClose: 1000,
                });
              }}
            >
              <span>Add to Wishlist</span>
              <span class='btn-icon'>
                <i class='bi bi-heart'></i>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

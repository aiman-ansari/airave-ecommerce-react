import { products } from "../../backend/db/products"
export default function Product(){
    return(
        <div>
            <div class="flex-align-center m-2">
            <h4>Top Deals</h4>
        </div>
        <div class="flex-align-center gap-2">
            {products.map((item)=>
                <div class="card box-shadow-bottom">
                    <img class="img-sm" src={item.image}/>
                    <div class="card-title flex-align-center pd--5">
                       Upto {item.discount} OFF
                    </div>
                </div>
            )}
        </div>
       </div>
    )
}
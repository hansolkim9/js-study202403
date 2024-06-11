
import ShoppingCart from "./ShoppingCart.js";
import ProductList from "./ProductList.js";
import Product from "./Product.js";

class Shop {

    render() {

        new ShoppingCart('app').render();
        new ProductList('app', [
            new Product('에어팟', 200000, '에어팟으로 노래를 들어요', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg'),
            new Product('족발', 40000, '족발맨', 'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp'),
            new Product('요구르트', 500, '요굴ㄹㅌ', 'https://img-cf.kurly.com/shop/data/goods/1630556476801z0.jpg'),
            new Product('베이컨토마토디럭스', 8700, '베토디 기가맥히지','https://i.namu.wiki/i/Idx9smUncNWh-Ki8I1N4zK_R65ORxmsn67ykkghp7MML9TUkbzX3CYJ1QX-ZXpE7yx9AlWKesTsl8h6Y1DbHjQ.webp')
        ]).render();
    }
}

export default Shop;
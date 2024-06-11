
import Product from "./components/Product.js";
import ProductItem from "./components/ProductItem.js";

// 상품 데이터
const p1 = new Product('에어팟', 200000, '에어팟으로 노래를 들어요', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg');
const p2 = new Product('족발', 40000, '족발맨', 'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp')


// 서버에서 전송된 JSON
const productList = {
    products: [
        p1,
        p2,
        new Product('요구르트', 500, '요굴ㄹㅌ', 'https://img-cf.kurly.com/shop/data/goods/1630556476801z0.jpg'),
        new Product('베이컨토마토디럭스', 8700, '베토디 기가맥히지','https://i.namu.wiki/i/Idx9smUncNWh-Ki8I1N4zK_R65ORxmsn67ykkghp7MML9TUkbzX3CYJ1QX-ZXpE7yx9AlWKesTsl8h6Y1DbHjQ.webp')
    ],

    render() {
        const $prodList = document.createElement('ul');
        $prodList.classList.add('product-list');
        // 반복해서 li태그를 생성
        // console.log('products: ', this.products);
        this.products.forEach((prod) => {
            const product = new ProductItem(prod);
            $prodList.appendChild(product.render());
        });

        // div#app에 ul추가
        document.getElementById('app').appendChild($prodList);
    },
};

productList.render();

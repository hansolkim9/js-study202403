
import Component from "./Component.js";
import ProductItem from "./ProductItem.js";

class ProductList extends Component {
    constructor(tagId, products) {
        super(tagId);
        this.products = products;
    }

    render() {

        const attr = {
            id: 'prod-list',
        };
        this.createElement('ul', 'product-list', '', attr);

        // 반복해서 li태그를 생성
        // console.log('products: ', this.products);
        this.products.forEach((prod) => {
            new ProductItem(attr.id, prod).render();
        });

        // div#app에 ul추가
        // document.getElementById('app').appendChild($prodList);

        // return $prodList;
    }
}

export default ProductList;

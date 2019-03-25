const image = new Image(50, 200);
const imgDefault = new Image(100, 200);
const a = imgDefault.src = "img/Forma3.png";

const goods = [
    {title: 'MANGO PEOPLE T-SHIRT', price: 52.00, img: image.src = "img/product1.jpg"},
    {title: 'Socks', price: 50, img: image.src = "img/product2.jpg"},
    {title: 'Jacket', price: 350, img: image.src = "img/product3.jpg"},
    {title: 'Shoes', price: 250, img: image.src = "img/product4.jpg"},
];
const renderGoodsItem = (title, price, img = a) => {
    return `<div class="items">
                <div class="items-photo container">
                    <div class="photo-1 size">
                        <a href="#" class="product">
                            <img src = '${img}' alt="boy">
                            <div class="product-info">
                                <p>${title}</p>
                                <span>${price}</span>
                            </div>
                        </a>

                        <div class="parent-add">
                            <a href="#"> <i class="icon-cart"></i>Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>`;
};

const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
    document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList(goods);

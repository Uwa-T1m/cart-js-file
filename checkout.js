const productsAddedToCart = JSON.parse(localStorage.getItem('id'));

for (let i = 0; i < productsAddedToCart.length; i++) {
    const table = document.querySelector('table');
    const row = document.createElement('tr');
    const productID = document.createElement('td');
    const productImageHolder = document.createElement('td');
    const productName = document.createElement('td');
    const productQty = document.createElement('td');
    const productPrice = document.createElement('td')
    const productTotal = document.createElement('td')

    productPrice.classList.add('price')

    table.appendChild(row)
    row.appendChild(productID)
    row.appendChild(productImageHolder)
    row.appendChild(productName)
    row.appendChild(productQty)
    row.appendChild(productPrice)
    row.appendChild(productTotal)
    console.log(table);

    productImageHolder.innerHTML = `
    <img src=${productsAddedToCart[i].image} />
`

    console.log(productsAddedToCart);
    productID.innerHTML = JSON.stringify(productsAddedToCart[i].id);
    productName.innerHTML = JSON.stringify(productsAddedToCart[i].title);
    productQty.innerHTML = `
        <input type='number'  id='qtyOfGoods' value=1 />`
    productPrice.innerHTML = JSON.stringify(productsAddedToCart[i].price);


    const quantityInputs = document.querySelectorAll('#qtyOfGoods');

    quantityInputs.forEach(quantityInput => {

        quantityInput.addEventListener('input', () => {
            calculatePrice(row)
        })

        function calculatePrice() {
            const price = document.querySelectorAll('.price')
            for (let j = 0; j < price.length; j++) {
                    const qty = parseFloat(quantityInput.value);
                    const priceValue = parseFloat(price[i].innerHTML);
                    const total = qty * priceValue;


                    if (quantityInput.value === '') {
                        productTotal.innerHTML = 0
                    } else {
                        productTotal.innerHTML = total
                    }
                }

        }
    })

}

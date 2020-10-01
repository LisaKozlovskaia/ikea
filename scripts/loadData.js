import { getData } from "./getData.js";

const wishList = ['idd034', 'idd007', 'id023', 'idd054'];

    const cartList = [
        {
            id: 'idd012',
            count: 3
        },
        {
            id: 'idd032',
            count: 2
        },
        {
            id: "idd024",
            count: 1
        }

    ];

export const loadData = () => {

    if (location.search) {
        const search = decodeURI(location.search);

        console.log(search);
        const prop = search.split('=')[0].substring(1);
        console.log('prop: ', prop);
        const value = search.value('=')[1];
        console.log('value: ', value);

        if(prop === 's') {
            console.log(value);
        } else if(prop === 'wishlist'){
                getData.wishList(wishList, (data) => console.log(data));
        } else {
            console.log(prop, value);
        }
    }

    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    if(location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

};
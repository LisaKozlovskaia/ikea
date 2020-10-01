import generateSubCatalog from "./generateSubCatalog";

export const getData = {
    url: 'database/dataBase.json',
    get(process) {
        fetch(this.url)
        .then((response) => response.json())
        .then(process);
    },
    wishList(list, callback) {
        this.get((data) => {
            const result = data.filter((item) => list.includes(item.id));
            callback(result);
        })
    },
    item(value, callback) {
        this.get((data) => {
            const result = data.find(item => item.id === value)
            callback(result);
        })
    },
    cart(list, callback) {
        this.get((data) => {
            const result = data.filter(item => list
                .some(obj => {
                console.log('cart: ',obj.id === item.id);
                console.log('base: ',item, id);
                return obj.id === item.id;
            }))
            callback(result);
        })
    },
    catalog(callback) {
        this.get((data) => {
            const result = data.reduce((arr,item) => {

            }, [])
            
            callback(result)
        })
    },
    subCatalog(value, callback) {
        this.get((data) => {

            callback(result)
        })
    }
};


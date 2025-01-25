fetch('https://api.warframe.market/v2/orders/item/eternal_onslaught')
    .then(res => {
        if (!res.ok) {
            console.log('ERROR')
        }
    })
    .then(data => console.log(data))

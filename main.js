const s = document.querySelector('.s')

const getusers = async () => {
    const url = 'https://fakestoreapi.com/products?limit=10'
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        return await response.json()

    }catch (err){
        return err.message
    }
}
const drawui = async () => {
    const users = await getusers()
    for (let user of users) {
        s.innerHTML += `<div class="j">
        <img class="d" src="${user.image}" alt="">
        <h1>Ismi: ${user.title}</h1>
        <p>Price: ${user.price}</p>
        <p>Categoriya: ${user.category}</p>
        <p>Rating: ${user.rating.rate}</p>
    </div>`
    }
}
drawui()
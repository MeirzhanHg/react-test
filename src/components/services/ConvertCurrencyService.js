const ConvertCurrency = () => {
    const request = async (url) => {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: 'Client-ID pIT15yrq0P3aaAPyBCBrLd10Sr3cM9FCaq0Jg3Hsuwg'
            }
        })
        
        if(!res.ok) {
            throw new Error(`Could not fetch, status: ${res.status}, url: ${res.url}`)
        }

        return await res.json()
    }

    const getResource = async (to, from, amount) => {
        const res = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
                apikey: 'McLLXv5WhvdN6TS7DW9toxamCzXjfuk6'
            }
        })

        console.log(res)

        if(!res.ok) {
            throw new Error(`Could not fetch, status: ${res.status}`);
        }

        return await res.json()
    }   

    const getRandomValue = async () => {
        const res = await fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')

        if(!res.ok) {
            throw new Error(`Could not fetch, status: ${res.status}`);
        }

        return await res.json()
    }

    const getAllPosts = async (title) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${title}`)

        if(!res.ok) {
            throw new Error(`Could not fetch, status: ${res.status}, url: ${res.url}`)
        }

        return await res.json()
    }

    const getAllPhotos = async () => {
        const res = await request('https://api.unsplash.com/photos?page=1')

        return res.map(item => {
            return item.urls
        })
    }

    return {
        getResource,
        getRandomValue,
        getAllPosts,
        getAllPhotos
    }
}

export default ConvertCurrency;
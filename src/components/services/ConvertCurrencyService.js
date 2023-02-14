const ConvertCurrency = () => {
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

    return {
        getResource,
        getRandomValue
    }
}

export default ConvertCurrency;
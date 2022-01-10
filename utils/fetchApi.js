import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key':
                '666d869da3msh687dc9ccbdcd4b2p1f0fccjsn9900cbaef2f0',
        },
    })

    return data
}

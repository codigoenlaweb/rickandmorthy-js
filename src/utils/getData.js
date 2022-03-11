URL = 'https://rickandmortyapi.com/api/character/'

const getData = async (id = null) => {
    try {
        let data;
        if (id) {
            const response = await fetch(URL + id)
            data = await response.json()
        }else {
            const response = await fetch(URL)
            data = await response.json()
        }
        return data
    } catch (error) {
        console.log("ha ocurrido un error" + error);
    }
}

export default getData
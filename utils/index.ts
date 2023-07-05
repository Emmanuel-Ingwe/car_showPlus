export async function fetchcars() {
    const headers = {
        'X-RapidAPI-Key': '6a0418eb10msh4a86e4f14293564p1cd7b6jsn986b0d36db97',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }


const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
    headers: headers,
});

const result = await response.json()

return result
}
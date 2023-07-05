import { headers } from "next/dist/client/components/headers";

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a0418eb10msh4a86e4f14293564p1cd7b6jsn986b0d36db97',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchcars() {
    const headers = {
        'X-RapidAPI-Key': '6a0418eb10msh4a86e4f14293564p1cd7b6jsn986b0d36db97',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }


const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla');

}
import { CarProps } from "@/types";

export async function fetchcars() {
    const headers = {
        'X-RapidAPI-Key': '6a0418eb10msh4a86e4f14293564p1cd7b6jsn986b0d36db97',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }


const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
    headers: headers,
});
 
const result = await response.json()

return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;

    const mileageFactor = 0.1;

    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery')
}
 

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '1ec237d4camsh22759ce659e7ab2p151745jsn536571b22b82',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,

  });

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Giá thuê 1 ngày
  const mileageFactor = 0.1; // tỷ lệ giá cho mỗi dặm
  const ageFactor = 0.05; // tỷ lệ giá cho mỗi năm tuổi xe

  // Tính tỷ lệ bổ sung dựa trên số dặm và độ tuổi
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Tổng giá thuê ngày
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
export async function getProducts() {
  let response = await fetch('https://mockend.com/NataliaBarakhvostova/mentoring/Product?createdAt_order=desc', {
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  return await response.json();
}

export default getProducts();
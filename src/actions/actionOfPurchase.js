
export function deletePurchase(purchase) {
  fetch('http://localhost:8082/Purchase', {
    method: 'PATCH',
    body: JSON.stringify({
      id: purchase.id,
      chair: purchase.chair,
      idClient: purchase.idClient,
      purchaseTime: purchase.purchaseTime,
      purchaseDay: purchase.purchaseDay,
      total: purchase.total
    }),
    headers:{ 'Content-Type': 'application/json' }
  });
}

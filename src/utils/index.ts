export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
}

export const diferenciaEnAnios = (birth: string, today: string): number => {
  const date1 = new Date(birth);
  const date2 = new Date(today);

  const diferenciaEnMilisegundos = Math.abs(date2.getTime() - date1.getTime());
  
  const diferenciaEnAnios = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25);
  
  return Math.floor(diferenciaEnAnios);
}

export const calcDiscount = (price: number): number => {
  const discount = price * 0.05
  return price - discount
}
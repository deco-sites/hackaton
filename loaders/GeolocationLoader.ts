import { AppContext } from "apps/vtex/mod.ts";
import type { Product } from "apps/commerce/types.ts";
import weather from "apps/weather/loaders/temperature.ts";

// export interface ItemsQuantity {count: number};

// export default async function WeatherSegmentedLoader({ count }: ItemsQuantity, req: Request, ctx: AppContext,): Promise<Product[] | null> {
  
//   const temp = await weather({ lat: '25.2048', long: '55.2708' })
  
//   console.log('LAT::', req.get("cf-iplatitude"))
 
//   // console.log('AppContext::', ctx)
  
//   const clothesLoading = temp.celsius > 24 ? 'camiseta' : 'casaco'

//   console.log('LOADER IRA CARREGAR ROUPAS DO TIPO:::', clothesLoading)
    
//   const data = ctx.invoke("vtex/loaders/intelligentSearch/productList.ts",
//         {props: {count, query: clothesLoading}}
//     );
//     return data;
// }

export default async function GeolocationLoader(req: Request, ctx: AppContext,): Promise<any | null> {
 // Obtenha o endereço IP do usuário
 const ipResponse = await fetch('https://api.ipgeolocation.io/getip', {
   headers: {
     'Authorization': `Bearer {cabd772e8c8d44148c531c2037fdf960}`
   }
 });

 const ipData = await ipResponse.json();
 const userIp = ipData.ip;

 // Use o endereço IP do usuário para obter a localização
 const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey={cabd772e8c8d44148c531c2037fdf960}&ip=${userIp}`);

  const data = await response.json();
  
  console.log(data);
  

 return data;
}
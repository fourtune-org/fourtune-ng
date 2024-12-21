import type {FourtuneSession, FourtuneProduct} from "@fourtune-types/fourtune/v0"

export async function initializeProducts(

) : Promise<FourtuneSession["products"]> {
	return {
		addProduct(productName: string) : FourtuneProduct {
			return {} as FourtuneProduct
		}
	}
}

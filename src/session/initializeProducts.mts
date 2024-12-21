import type {FourtuneSession, FourtuneProduct} from "@fourtune-types/fourtune/v0"
import type {InternalSessionData} from "#~src/InternalSessionData.d.mts"

export async function initializeProducts(
	sessionData: InternalSessionData
) : Promise<FourtuneSession["products"]> {
	return {
		addProduct(productName: string) : FourtuneProduct {
			return {} as FourtuneProduct
		}
	}
}

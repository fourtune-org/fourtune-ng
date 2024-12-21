import type {FourtuneSession, FourtuneProduct} from "@fourtune-types/fourtune/v0"
import type {InternalState} from "#~src/InternalState.d.mts"

export async function initializeProducts(
	internalState: InternalState
) : Promise<FourtuneSession["products"]> {
	return {
		addProduct(productName: string) : FourtuneProduct {
			return {} as FourtuneProduct
		}
	}
}

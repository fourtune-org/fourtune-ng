import type {FourtuneSession} from "@fourtune-types/fourtune/v0"

export async function initializeEmit(

) : Promise<FourtuneSession["emit"]> {
	return {
		warning(id: string|undefined, message: string) {

		},

		error(id: string|undefined, message: string) {

		}
	}
}

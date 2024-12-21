import type {FourtuneSession} from "@fourtune-types/fourtune/v0"
import type {InternalSessionData} from "#~src/InternalSessionData.d.mts"

export async function initializeEmit(
	sessionData: InternalSessionData
) : Promise<FourtuneSession["emit"]> {
	return {
		warning(id: string|undefined, message: string) {
			sessionData._emitEvent("warning", {id, message})
		},

		error(id: string|undefined, message: string) {
			sessionData._emitEvent("error", {id, message})
		}
	}
}

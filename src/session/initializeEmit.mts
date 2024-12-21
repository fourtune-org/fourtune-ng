import type {FourtuneSession} from "@fourtune-types/fourtune/v0"
import type {InternalState} from "#~src/InternalState.d.mts"

export async function initializeEmit(
	internalState: InternalState
) : Promise<FourtuneSession["emit"]> {
	return {
		warning(id: string|undefined, message: string) {
			internalState._emitEvent("warning", {id, message})
		},

		error(id: string|undefined, message: string) {
			internalState._emitEvent("error", {id, message})
		}
	}
}

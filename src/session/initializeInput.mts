import type {FourtuneSession, FourtuneInputFile} from "@fourtune-types/fourtune/v0"
import type {InternalState} from "#~src/InternalState.d.mts"

export async function initializeInput(
	internalState: InternalState
) : Promise<FourtuneSession["input"]> {
	return {
		getSourceFiles() : FourtuneInputFile[] {
			return []
		},

		getAssetFiles() : FourtuneInputFile[] {
			return []
		}
	}
}

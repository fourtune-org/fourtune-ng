import type {FourtuneSession, FourtuneInputFile} from "@fourtune-types/fourtune/v0"
import type {InternalSessionData} from "#~src/InternalSessionData.d.mts"

export async function initializeInput(
	sessionData: InternalSessionData
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

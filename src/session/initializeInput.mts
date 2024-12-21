import type {FourtuneSession, FourtuneInputFile} from "@fourtune-types/fourtune/v0"

export async function initializeInput(

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

import type {FourtuneSession} from "@fourtune-types/fourtune/v0"
import type {InternalState} from "#~src/InternalState.d.mts"

export async function initializePaths(
	internalState: InternalState
) : Promise<FourtuneSession["paths"]> {
	return {
		getBuildPath(...parts: string[]) : string {
			return ""
		},

		getBuildPathFromProjectRoot(...parts: string[]) : string {
			return ""
		},

		getObjectsPath(...parts: string[]) : string {
			return ""
		},

		getObjectsPathFromProjectRoot(...parts: string[]) : string {
			return ""
		}
	}
}

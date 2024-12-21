import type {FourtuneSession} from "@fourtune-types/fourtune/v0"
import type {InternalSessionData} from "#~src/InternalSessionData.d.mts"

export async function initializePaths(
	sessionData: InternalSessionData
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

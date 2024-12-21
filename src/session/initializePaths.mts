import type {FourtuneSession} from "@fourtune-types/fourtune/v0"

export async function initializePaths(

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

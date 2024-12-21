import type {FourtuneSession, FourtuneObjectGenerator} from "@fourtune-types/fourtune/v0"
import type {InternalSessionData} from "#~src/InternalSessionData.d.mts"

export async function initializeObjects(
	sessionData: InternalSessionData
) : Promise<FourtuneSession["objects"]> {
	return {
		addObject(
			objectPath: string,
			generator: FourtuneObjectGenerator
		) : undefined {
			
		}
	}
}

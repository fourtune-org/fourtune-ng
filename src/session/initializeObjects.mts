import type {FourtuneSession, FourtuneObjectGenerator} from "@fourtune-types/fourtune/v0"
import type {InternalState} from "#~src/InternalState.d.mts"

export async function initializeObjects(
	internalState: InternalState
) : Promise<FourtuneSession["objects"]> {
	return {
		addObject(
			objectPath: string,
			generator: FourtuneObjectGenerator
		) : undefined {
			
		}
	}
}

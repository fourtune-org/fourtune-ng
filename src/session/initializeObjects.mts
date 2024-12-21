import type {FourtuneSession, FourtuneObjectGenerator} from "@fourtune-types/fourtune/v0"

export async function initializeObjects(

) : Promise<FourtuneSession["objects"]> {
	return {
		addObject(
			objectPath: string,
			generator: FourtuneObjectGenerator
		) : undefined {
			
		}
	}
}

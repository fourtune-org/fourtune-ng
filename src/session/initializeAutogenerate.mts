import type {FourtuneSession, FourtuneConfigAutogenerator} from "@fourtune-types/fourtune/v0"
import type {InternalSessionData} from "#~src/InternalSessionData.d.mts"

export async function initializeAutogenerate(
	sessionData: InternalSessionData
) : Promise<FourtuneSession["autogenerate"]> {
	return {
		addFourtuneFile(
			filePath: string,
			generator: FourtuneConfigAutogenerator<"fourtune">
		) : undefined {

		},

		addSyntheticFile(
			category: string,
			filePath: string,
			generator: FourtuneConfigAutogenerator<string>
		) : undefined {
			return undefined
		}
	}
}

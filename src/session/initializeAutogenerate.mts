import type {FourtuneSession, FourtuneAutoFileGenerator} from "@fourtune-types/fourtune/v0"
import type {InternalState} from "#~src/InternalState.d.mts"

export async function initializeAutogenerate(
	internalState: InternalState
) : Promise<FourtuneSession["autogenerate"]> {
	return {
		addFourtuneFile(
			filePath: string,
			generator: FourtuneAutoFileGenerator
		) : undefined {

		},

		addSyntheticFile(
			category: string,
			filePath: string,
			generator: FourtuneAutoFileGenerator
		) : undefined {
			return undefined
		}
	}
}

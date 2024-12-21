import type {FourtuneSession, FourtuneConfigAutogenerator} from "@fourtune-types/fourtune/v0"

export async function initializeAutogenerate(

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

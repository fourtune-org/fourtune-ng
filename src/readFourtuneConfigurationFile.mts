import type {FourtuneConfig} from "@fourtune-types/fourtune/v0"
import path from "node:path"

export async function readFourtuneConfigurationFile(
	projectRoot: string
) : Promise<Required<FourtuneConfig>> {
	const cfg = await import(
		path.join(projectRoot, "fourtune.config.mjs")
	)

	return {
		...cfg.default
	} as Required<FourtuneConfig>
}

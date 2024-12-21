import type {FourtuneConfig} from "@fourtune-types/fourtune/v0"
import path from "node:path"

// todo: check mandatory fields are there
// todo: check fourtune config version compatibility
// todo: validate config
export async function readFourtuneConfigurationFile(
	projectRoot: string
) : Promise<Required<FourtuneConfig>> {
	const cfg : FourtuneConfig = (await import(
		path.join(projectRoot, "fourtune.config.mjs")
	)).default as FourtuneConfig

	return {
		...{
			fourtune: {
				defaultOptions: {}
			},
			realm: {
				options: {}
			},
			autogenerate: {}
		},
		...cfg
	}
}

import type {FourtuneNodeAPIOptions} from "@fourtune-types/fourtune/v0"

export function getDefaultFourtuneOptions() : Required<FourtuneNodeAPIOptions> {
	return {
		stdIOLogs: true
	}
}

import type {
	FourtuneSession,
	FourtuneHookName,
	FourtuneHookFunction
} from "@fourtune-types/fourtune/v0"

import type {InternalSessionData} from "#~src/InternalSessionData.d.mts"

export async function initializeHooks(
	sessionData: InternalSessionData
) : Promise<FourtuneSession["hooks"]> {
	return {
		register(
			name: FourtuneHookName,
			fn: FourtuneHookFunction
		) : undefined {
			return undefined
		}
	}
}

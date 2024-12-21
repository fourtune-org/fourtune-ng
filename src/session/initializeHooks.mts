import type {
	FourtuneSession,
	FourtuneHookName,
	FourtuneHookFunction
} from "@fourtune-types/fourtune/v0"

import type {InternalState} from "#~src/InternalState.d.mts"

export async function initializeHooks(
	internalState: InternalState
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

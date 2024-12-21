import type {
	FourtuneSession,
	FourtuneHookName,
	FourtuneHookFunction
} from "@fourtune-types/fourtune/v0"

export async function initializeHooks(

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

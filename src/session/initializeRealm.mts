import type {FourtuneSession} from "@fourtune-types/fourtune/v0"
import type {InternalState} from "#~src/InternalState.d.mts"

export async function initializeRealm(
	internalState: InternalState
) : Promise<FourtuneSession["realm"]> {
	return {
		_integration: {
			getInternalData() : unknown {
				return {}
			},

			setInternalData(data: any) : undefined {

			}
		},

		getOptions() : unknown {
			return {}
		},

		getDependency(dependencyName: string) : unknown {
			return {}
		}
	}
}

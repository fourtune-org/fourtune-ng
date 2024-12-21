import type {FourtuneSession} from "@fourtune-types/fourtune/v0"
import type {InternalSessionData} from "#~src/InternalSessionData.d.mts"

export async function initializeRealm(
	sessionData: InternalSessionData
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

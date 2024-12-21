import type {FourtuneSession} from "@fourtune-types/fourtune/v0"

export async function initializeRealm(

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

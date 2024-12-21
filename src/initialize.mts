import type {FourtuneNodeAPIOptions, FourtuneConfig, FourtuneProject, FourtuneEvents} from "@fourtune-types/fourtune/v0"
import type {_EmitEventType} from "@aniojs/event-emitter"
import type {InternalState} from "#~src/InternalState.d.mts"

export async function initialize(
	fourtuneOptions: Required<FourtuneNodeAPIOptions>,
	projectRoot: string,
	projectConfig: FourtuneConfig,
	_emitEvent: _EmitEventType<FourtuneEvents>
) : Promise<InternalState> {
	return {
		project: {
			root: projectRoot,
			config: projectConfig
		},

		_emitEvent
	}
}

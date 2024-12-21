import type {_EmitEventType} from "@aniojs/event-emitter"
import type {FourtuneEvents, FourtuneConfig} from "@fourtune-types/fourtune/v0"

export type InternalState = {
	project: {
		root: string
		config: FourtuneConfig
	}

	_emitEvent: _EmitEventType<FourtuneEvents>
}

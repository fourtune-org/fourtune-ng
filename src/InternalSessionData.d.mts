import type {_EmitEventType} from "@aniojs/event-emitter"
import type {FourtuneEvents, FourtuneConfig} from "@fourtune-types/fourtune/v0"

export type InternalSessionData = {
	project: {
		root: string
		config: FourtuneConfig
	}

	_emitEvent: _EmitEventType<FourtuneEvents>
}

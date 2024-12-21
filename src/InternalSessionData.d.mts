import type {_EmitEventType} from "@aniojs/event-emitter"
import type {FourtuneEvents} from "@fourtune-types/fourtune/v0"

export type InternalSessionData = {
	_emitEvent: _EmitEventType<FourtuneEvents>
}

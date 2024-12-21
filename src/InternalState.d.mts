import type {_EmitEventType} from "@aniojs/event-emitter"
import type {FourtuneEvents, FourtuneConfig} from "@fourtune-types/fourtune/v0"
import type {ScandirEntry} from "@aniojs/node-fs"

export type InternalState = {
	project: {
		root: string
		config: FourtuneConfig
	}

	_emitEvent: _EmitEventType<FourtuneEvents>

	rawInput: {
		sourceFiles: ScandirEntry[]
		assetFiles: ScandirEntry[]
	}
}

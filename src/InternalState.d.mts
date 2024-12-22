import type {_EmitEventType} from "@aniojs/event-emitter"
import type {
	FourtuneEvents,
	FourtuneConfig,
	FourtuneInputFile,
	FourtuneAutoFileGenerator
} from "@fourtune-types/fourtune/v0"
import type {ScandirEntry} from "@aniojs/node-fs"

import type {DefaultExportObject as FourtuneCore} from "@fourtune-types/core/v1"

export type FileToAutogenerate = {
	filePath: string,
	category: string,
	generator: FourtuneAutoFileGenerator
}

export type InternalState = {
	project: {
		root: string
		config: FourtuneConfig
	}

	core: {
		api: FourtuneCore
	}

	_emitEvent: _EmitEventType<FourtuneEvents>

	rawInput: {
		sourceFiles: ScandirEntry[]
		assetFiles: ScandirEntry[]
	}

	input: {
		sourceFiles: FourtuneInputFile[]
		assetFiles: FourtuneInputFile[]
	}

	filesToAutogenerate: FileToAutogenerate[]
}

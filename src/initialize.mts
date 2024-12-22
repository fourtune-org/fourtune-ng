import type {FourtuneNodeAPIOptions, FourtuneConfig, FourtuneEvents} from "@fourtune-types/fourtune/v0"
import type {_EmitEventType} from "@aniojs/event-emitter"
import type {InternalState, FileToAutogenerate} from "#~src/InternalState.d.mts"
import path from "node:path"
import {scandir} from "@aniojs/node-fs"

export async function initialize(
	fourtuneOptions: Required<FourtuneNodeAPIOptions>,
	projectRoot: string,
	projectConfig: FourtuneConfig,
	_emitEvent: _EmitEventType<FourtuneEvents>
) : Promise<InternalState> {
	const sourceFiles = await scandir(
		path.join(projectRoot, "src")
	)

	const assetFiles = await scandir(
		path.join(projectRoot, "assets"), {
			allow_missing_dir: true
		}
	)

	const filesToAutogenerate : FileToAutogenerate[] = []

	for (const key in projectConfig.autogenerate) {
		const generator = projectConfig.autogenerate[key]

		filesToAutogenerate.push({
			filePath: key,
			category: "user",
			generator
		})
	}

	return {
		project: {
			root: projectRoot,
			config: projectConfig
		},

		rawInput: {
			sourceFiles,
			assetFiles
		},

		input: {
			sourceFiles: [],
			assetFiles: []
		},

		filesToAutogenerate,

		_emitEvent
	}
}

import type {
	FourtuneProject,
	FourtuneEvents,
	FourtuneNodeAPIOptions
} from "@fourtune-types/fourtune/v0"

import {createEventEmitter} from "@aniojs/event-emitter"
import {getDefaultFourtuneOptions} from "#~src/getDefaultFourtuneOptions.mts"
import {createInit} from "#~src/createInit.mts"
import {readFourtuneConfigurationFile} from "#~src/readFourtuneConfigurationFile.mts"

export async function fourtune(
	projectRoot: string,
	options?: FourtuneNodeAPIOptions
) : Promise<FourtuneProject> {
	const {on, removeEventListener, _emitEvent} = createEventEmitter<FourtuneEvents>(["warning", "error"])

	const config = await readFourtuneConfigurationFile(projectRoot)

	const optionsWithDefaults : Required<FourtuneNodeAPIOptions> = {
		...getDefaultFourtuneOptions(),
		...config.fourtune.defaultOptions,
		...options
	}

	const project = {
		root: projectRoot,
		config,

		init: await createInit(
			projectRoot,
			config,
			optionsWithDefaults,
			_emitEvent
		),

		on,
		removeEventListener
	}

	return project
}

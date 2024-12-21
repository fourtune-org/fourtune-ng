import type {
	FourtuneProject,
	FourtuneEvents,
	FourtuneNodeAPIOptions
} from "@fourtune-types/fourtune/v0"

import {createEventEmitter} from "@aniojs/event-emitter"
import {createInit} from "#~src/createInit.mts"
import {readFourtuneConfigurationFile} from "#~src/readFourtuneConfigurationFile.mts"

export async function fourtune(
	projectRoot: string,
	options?: FourtuneNodeAPIOptions
) : Promise<FourtuneProject> {
	const {on, removeEventListener, _emitEvent} = createEventEmitter<FourtuneEvents>(["warning", "error"])

	const config = await readFourtuneConfigurationFile(projectRoot)

	const optionsWithDefaults : Required<FourtuneNodeAPIOptions> = {
		stdIOLogs: true,
		...options
	}

	return {
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
}

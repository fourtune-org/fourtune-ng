import type {
	FourtuneProject,
	FourtuneEvents,
	FourtuneNodeAPIOptions
} from "@fourtune-types/fourtune/v0"

import {createEventEmitter} from "@aniojs/event-emitter"
import {getDefaultFourtuneOptions} from "#~src/getDefaultFourtuneOptions.mts"
import {initFactory} from "#~src/initFactory.mts"
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

	const project : Omit<FourtuneProject, "init"> = {
		root: projectRoot,
		config,

		on,
		removeEventListener
	}

	// @ts-ignore: next-line
	project.init = await initFactory(
		optionsWithDefaults,
		projectRoot,
		config,
		_emitEvent,
		project as FourtuneProject
	)

	return project as FourtuneProject
}

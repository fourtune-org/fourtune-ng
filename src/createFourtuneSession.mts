import type {FourtuneNodeAPIOptions, FourtuneConfig, FourtuneProject, FourtuneSession, FourtuneEvents} from "@fourtune-types/fourtune/v0"
import type {_EmitEventType} from "@aniojs/event-emitter"
import type {InternalState} from "#~src/InternalState.d.mts"

import {initializeEmit} from "./session/initializeEmit.mts"
import {initializeRealm} from "./session/initializeRealm.mts"
import {initializeHooks} from "./session/initializeHooks.mts"
import {initializeInput} from "./session/initializeInput.mts"
import {initializeAutogenerate} from "./session/initializeAutogenerate.mts"
import {initializeObjects} from "./session/initializeObjects.mts"
import {initializeProducts} from "./session/initializeProducts.mts"
import {initializePaths} from "./session/initializePaths.mts"

export async function createFourtuneSession(
	fourtuneOptions: Required<FourtuneNodeAPIOptions>,
	projectRoot: string,
	projectConfig: FourtuneConfig,
	_emitEvent: _EmitEventType<FourtuneEvents>,
	currentProject: FourtuneProject
) : Promise<FourtuneSession> {
	let internalState : InternalState = {
		project: {
			root: projectRoot,
			config: projectConfig
		},

		_emitEvent
	}

	return {
		getProject: () => currentProject,

		emit: await initializeEmit(internalState),
		realm: await initializeRealm(internalState),
		hooks: await initializeHooks(internalState),
		input: await initializeInput(internalState),
		autogenerate: await initializeAutogenerate(internalState),
		objects: await initializeObjects(internalState),
		products: await initializeProducts(internalState),
		paths: await initializePaths(internalState)
	}
}

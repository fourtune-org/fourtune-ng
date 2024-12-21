import type {FourtuneNodeAPIOptions, FourtuneConfig, FourtuneProject, FourtuneSession} from "@fourtune-types/fourtune/v0"
import type {InternalSessionData} from "#~src/InternalSessionData.d.mts"

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
	currentProject: FourtuneProject
) : Promise<FourtuneSession> {
	let sessionData : InternalSessionData = {}

	return {
		getProject: () => currentProject,

		emit: await initializeEmit(sessionData),
		realm: await initializeRealm(sessionData),
		hooks: await initializeHooks(sessionData),
		input: await initializeInput(sessionData),
		autogenerate: await initializeAutogenerate(sessionData),
		objects: await initializeObjects(sessionData),
		products: await initializeProducts(sessionData),
		paths: await initializePaths(sessionData)
	}
}

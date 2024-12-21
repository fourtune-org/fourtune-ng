// @ts-nocheck

import type {FourtuneProject, FourtuneSession} from "@fourtune-types/fourtune/v0"

import {initializeEmit} from "./session/initializeEmit.mts"
import {initializeRealm} from "./session/initializeRealm.mts"
import {initializeHooks} from "./session/initializeHooks.mts"
import {initializeInput} from "./session/initializeInput.mts"
import {initializeAutogenerate} from "./session/initializeAutogenerate.mts"
import {initializeObjects} from "./session/initializeObjects.mts"
import {initializeProducts} from "./session/initializeProducts.mts"
import {initializePaths} from "./session/initializePaths.mts"

export async function createFourtuneSession(
	currentProject: FourtuneProject
) : Promise<FourtuneSession> {
	return {
		emit: await initializeEmit(),
		realm: await initializeRealm(),
		hooks: await initializeHooks(),
		input: await initializeInput(),
		autogenerate: await initializeAutogenerate(),
		objects: await initializeObjects(),
		products: await initializeProducts(),
		paths: await initializePaths()
	}
}

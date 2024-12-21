// @ts-nocheck

import type {FourtuneProject, FourtuneSession} from "@fourtune-types/fourtune/v0"

import {initializeEmit} from "./session/initializeEmit.mts"
import {initializeRealm} from "./session/initializeRealm.mts"
import {initializeHooks} from "./session/initializeHooks.mts"
import {initializeInput} from "./session/initializeInput.mts"

export async function createFourtuneSession(
	currentProject: FourtuneProject
) : Promise<FourtuneSession> {
	return {
		emit: await initializeEmit(),
		realm: await initializeRealm(),
		hooks: await initializeHooks(),
		input: await initializeInput()
	}
}

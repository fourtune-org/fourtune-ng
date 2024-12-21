// @ts-nocheck

import type {FourtuneProject, FourtuneSession} from "@fourtune-types/fourtune/v0"

import {initializeEmit} from "./session/initializeEmit.mts"

export async function createFourtuneSession(
	currentProject: FourtuneProject
) : Promise<FourtuneSession> {
	return {
		emit: await initializeEmit()
	}
}

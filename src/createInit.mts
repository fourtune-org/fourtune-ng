import type {FourtuneNodeAPIOptions, FourtuneProject, FourtuneConfig, FourtuneSession, FourtuneEvents} from "@fourtune-types/fourtune/v0"
import type {_EmitEventType} from "@aniojs/event-emitter"
import type {InternalState} from "./InternalState.d.mts"
import {createFourtuneSession} from "./createFourtuneSession.mts"
import {initialize} from "./initialize.mts"

type InitRet = ReturnType<FourtuneProject["init"]>
type Compile = Awaited<InitRet>["compile"]

export async function createInit(
	fourtuneOptions: Required<FourtuneNodeAPIOptions>,
	projectRoot: string,
	projectConfig: FourtuneConfig,
	_emitEvent: _EmitEventType<FourtuneEvents>,
	_projectReference: FourtuneProject
) : Promise<FourtuneProject["init"]> {
	return async function init() : InitRet {
		const internalState : InternalState = await initialize(
			fourtuneOptions,
			projectRoot,
			projectConfig,
			_emitEvent
		)

		const session = await createFourtuneSession(
			internalState,
			_projectReference
		)

		const compile : Compile = async () : ReturnType<Compile> => {
			return {
				messages: [],
				products: []
			}
		}

		console.log(projectRoot, projectConfig.realm.name, fourtuneOptions.stdIOLogs)

		return {
			session,
			compile
		}
	}
}

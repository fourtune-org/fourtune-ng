import type {FourtuneNodeAPIOptions, FourtuneProject, FourtuneConfig, FourtuneSession, FourtuneEvents} from "@fourtune-types/fourtune/v0"
import type {_EmitEventType} from "@aniojs/event-emitter"
import {createFourtuneSession} from "./createFourtuneSession.mts"

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
		const session = await createFourtuneSession(
			fourtuneOptions,
			projectRoot,
			projectConfig,
			_emitEvent,
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

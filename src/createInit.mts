import type {FourtuneNodeAPIOptions, FourtuneProject, FourtuneConfig, FourtuneSession, FourtuneEvents} from "@fourtune-types/fourtune/v0"
import type {_EmitEventType} from "@aniojs/event-emitter"
import {createFourtuneSession} from "./createFourtuneSession.mts"

type InitRet = ReturnType<FourtuneProject["init"]>
type Compile = Awaited<InitRet>["compile"]

export async function createInit(
	projectRoot: string,
	config: FourtuneConfig,
	options: Required<FourtuneNodeAPIOptions>,
	_emitEvent: _EmitEventType<FourtuneEvents>,
	_projectReference: FourtuneProject
) : Promise<FourtuneProject["init"]> {
	return async function init() : InitRet {
		const session = await createFourtuneSession(
			_projectReference
		)

		const compile : Compile = async () : ReturnType<Compile> => {
			return {
				messages: [],
				products: []
			}
		}

		console.log(projectRoot, config.realm.name, options.stdIOLogs)

		return {
			session,
			compile
		}
	}
}

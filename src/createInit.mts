import type {FourtuneNodeAPIOptions, FourtuneProject, FourtuneConfig, FourtuneSession, FourtuneEvents} from "@fourtune-types/fourtune/v0"
import type {_EmitEventType} from "@aniojs/event-emitter"
import {createFourtuneSession} from "./createFourtuneSession.mts"

type InitRet = ReturnType<FourtuneProject["init"]>
type Compile = Awaited<InitRet>["compile"]

export async function createInit(
	options: Required<FourtuneNodeAPIOptions>,
	projectRoot: string,
	config: FourtuneConfig,
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

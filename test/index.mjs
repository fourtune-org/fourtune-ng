import {fourtune} from "../dist/default/index.min.mjs"

const project = await fourtune("/Users/exory2024/Desktop/ev-test")

project.on("warning", e => {
	console.log("got warning event", e)
})

project.on("error", e => {
	console.log("got error event", e)
})

console.log("got project", project)

const {session, compile} = await project.init()

console.log("got session", session, session.getProject() === project)

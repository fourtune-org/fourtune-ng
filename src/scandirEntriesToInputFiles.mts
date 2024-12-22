import type {ScandirEntry} from "@aniojs/node-fs"
import type {FourtuneInputFile} from "@fourtune-types/fourtune/v0"
import path from "node:path"

export function scandirEntriesToInputFiles(
	source: string, entries: ScandirEntry[]
): FourtuneInputFile[] {
	const files = entries.filter(({type}) => type === "regularFile")

	return files.map(entry => {
		return {
			parents: entry.parents,
			name: entry.name,
			relativePath: entry.relative_path,
			// source means relative path (from project root)
			// to file
			source: path.join(
				path.normalize(`${source}/`), entry.relative_path
			)
		}
	})
}

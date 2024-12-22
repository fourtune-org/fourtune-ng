import path from "node:path"
import {createRequire} from "node:module"

export async function loadProjectPackage<T extends any>(
	projectRoot: string, packageName: string
) : Promise<T> {
	const require = createRequire(
		path.join(projectRoot, "index.js")
	)

	try {
		return await import(
			require.resolve(packageName)
		)
	} catch (error: unknown) {
		let errorMessage = "(unknown)"

		if (error instanceof Error) {
			errorMessage = error.message
		}

		throw new Error(
			`Unable to import "${packageName}".\n` +
			`Error: ${errorMessage}.`
		)
	}
}

import fs from "fs"
import DepGraph from "../../depgraph"
import { glob } from "../../util/glob"
import { FilePath, QUARTZ, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"

export const Static: QuartzEmitterPlugin = () => ({
  name: "Static",
  getQuartzComponents() {
    return []
  },
  async getDependencyGraph({ argv, cfg }, _content, _resources) {
    const graph = new DepGraph<FilePath>()

    const staticPath = joinSegments(QUARTZ, "static")
    const fps = await glob("**", staticPath, cfg.configuration.ignorePatterns)
    for (const fp of fps) {
      graph.addEdge(
        joinSegments("static", fp) as FilePath,
        joinSegments(argv.output, "static", fp) as FilePath,
      )
    }

    return graph
  },
  async emit({ argv, cfg }, _content, _resources): Promise<FilePath[]> {
    const staticPath = joinSegments(QUARTZ, "static")
    const htaccessFile = ".htaccess"

    const fps = await glob("**", staticPath, cfg.configuration.ignorePatterns)
    await fs.promises.cp(staticPath, joinSegments(argv.output, "static"), {
      recursive: true,
      dereference: true,
    })

    // copy the custom .htaccess file
    await fs.promises.copyFile(
      joinSegments(QUARTZ, ".htaccess"),
      joinSegments(argv.output, htaccessFile),
    )

    return fps.map((fp) => joinSegments(argv.output, "static", fp)) as FilePath[]
  },
})

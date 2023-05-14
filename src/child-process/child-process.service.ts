import { fork } from "child_process"
import { join } from "path"

export class ChildProcessService {
    private forkNestDataGeneratorModuleApp = null

    getForkNestDataGeneratorModuleApp() {
        if (!this.forkNestDataGeneratorModuleApp) {
            this.forkNestDataGeneratorModuleApp = fork(
                join(__dirname, '../data/child-process/child-process')
            )
        }

        return this.forkNestDataGeneratorModuleApp
    }
}
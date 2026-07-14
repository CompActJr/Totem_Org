import { defineEventHandler } from "h3"
import { version } from "process"


export default defineEventHandler(() => {
    return {
        version: version
    }
})
import { BotAction } from "./bot-action";

export interface BotCommand {

    trigger: string
    description: string
    onTriggered: (action: BotAction, args: string[]) => void

}
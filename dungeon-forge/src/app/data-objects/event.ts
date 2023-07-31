export interface StoryEvent {
    _id: any | undefined
    kind: string
}

export class CombatEvent implements StoryEvent {
    _id: any | undefined
    kind: string
    title: string
    description: string
    statBlocks: string[]

    constructor(_id: any | undefined, title: string, description: string, statBlocks: string[]) {
        this._id = _id
        this.kind = "combat"
        this.title = title
        this.description = description
        this.statBlocks = statBlocks
    }  
}

export class PuzzleEvent implements StoryEvent {
    _id: any | undefined
    kind: string

    constructor(_id: any | undefined) {
        this._id = _id
        this.kind = "puzzle"
    }
}

export class TrapEvent implements StoryEvent {
    _id: any | undefined
    kind: string
    title: string
    description: string
    image: string | undefined

    constructor(_id: any | undefined, title: string, description: string, image: string | undefined) {
        this._id = _id
        this.kind = "trap"
        this.title = title
        this.description = description
        this.image = image
    }
}

export class RolePlayEvent implements StoryEvent {
    _id: any | undefined
    kind: string
    title: string | undefined
    description: string
    image: string | undefined

    constructor(
        _id: any | undefined, 
        title: string | undefined,
        description: string,
        image: string | undefined
    ) {
        this._id = _id
        this.kind = "role-play"
        this.title = title
        this.description = description
        this.image = image
    }
}
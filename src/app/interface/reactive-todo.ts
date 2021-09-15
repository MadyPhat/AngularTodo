import { Deadline } from "./deadline";

export interface ReactiveTodo {
    id: number
    title: string
    description: string
    deadline: Deadline
    complete: boolean
}

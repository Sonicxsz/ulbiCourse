import { UserSchema } from "entities/User"
import { CounterSchema } from "entities/counter"
import { LoginSchema } from "feature/authorization"



export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    login?: LoginSchema
}
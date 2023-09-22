import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { UserSchema } from "entities/User"
import { CounterSchema } from "entities/counter"
import { NoticeSchema } from "entities/notice"
import { ProfileSchema } from "entities/profile"
import { LoginSchema } from "feature/authorization"



export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    notice: NoticeSchema,
    login?: LoginSchema,
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}









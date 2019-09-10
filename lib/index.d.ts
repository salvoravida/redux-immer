/// <reference types="redux" />

export function combineReducers<S, A extends Action = AnyAction>(produce, reducers: ReducersMapObject<S, A> = {} as ReducersMapObject): Reducer<S, A>;

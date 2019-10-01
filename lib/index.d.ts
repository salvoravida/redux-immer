/// <reference types="immer" />
/// <reference types="redux" />

export function combineReducers<S, A extends Action = AnyAction>(produce: IProduce, reducers: ReducersMapObject<S, A> = {} as ReducersMapObject): Reducer<S, A>;

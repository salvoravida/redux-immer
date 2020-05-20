import { AnyAction, ReducersMapObject, Reducer, Action } from "redux";
import { IProduce } from "immer/dist/types/types-external";
export function combineReducers(
    produce: IProduce,
    reducers: ReducersMapObject
): Reducer;


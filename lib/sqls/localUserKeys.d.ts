import { Database, QueryExecResult } from '@jlongster/sql.js';
export type LocalUserKey = {
    [key: string]: any;
};
export declare function localUserKeys(db: Database): QueryExecResult[];
export declare function getUserKey(db: Database, userID: string): QueryExecResult[];
export declare function insertUserKey(db: Database, userKey: LocalUserKey): QueryExecResult[];
export declare function updateUserKey(db: Database, userKey: LocalUserKey): QueryExecResult[];

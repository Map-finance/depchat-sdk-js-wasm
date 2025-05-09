import { Database, QueryExecResult } from '@jlongster/sql.js';
export type LocalFriend = {
    [key: string]: any;
};
export declare function localFriends(db: Database): QueryExecResult[];
export declare function insertFriend(db: Database, localFriend: LocalFriend): QueryExecResult[];
export declare function deleteFriend(db: Database, friendUserID: string, loginUserID: string): QueryExecResult[];
export declare function updateFriend(db: Database, localFriend: LocalFriend): QueryExecResult[];
export declare function getAllFriendList(db: Database, loginUser: string): QueryExecResult[];
export declare function getPageFriendList(db: Database, offset: number, count: number, loginUser: string): QueryExecResult[];
export declare function searchFriendList(db: Database, keyword: string, isSearchUserID: boolean, isSearchNickname: boolean, isSearchRemark: boolean): QueryExecResult[];
export declare function getFriendInfoByFriendUserID(db: Database, friendUserID: string, loginUser: string): QueryExecResult[];
export declare function getFriendInfoList(db: Database, friendUserIDList: string[]): QueryExecResult[];
export declare function updateColumnsFriend(db: Database, friendUserIDs: string[], localFriend: LocalFriend): QueryExecResult[];
export declare function getFriendListCount(db: Database): QueryExecResult[];
export declare function deleteAllFriend(db: Database): QueryExecResult[];

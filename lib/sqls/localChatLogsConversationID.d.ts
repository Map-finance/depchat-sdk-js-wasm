import { Database, QueryExecResult } from '@jlongster/sql.js';
export type ClientMessage = {
    [key: string]: any;
};
export declare function localChatLogsConversationID(db: Database, conversationID: string): QueryExecResult[];
export declare function getMessage(db: Database, conversationID: string, clientMsgID: string): QueryExecResult[];
export declare function getAlreadyExistSeqList(db: Database, conversationID: string, lostSeqList: number[]): QueryExecResult[];
export declare function getMessageList(db: Database, conversationID: string, count: number, startTime: number, startSeq: number, startClientMsgID: string, isReverse: boolean): QueryExecResult[];
export declare function getMessageBySeq(db: Database, conversationID: string, seq: number): QueryExecResult[];
export declare function getMessagesByClientMsgIDs(db: Database, conversationID: string, clientMsgIDs: string[]): QueryExecResult[];
export declare function getMessagesBySeqs(db: Database, conversationID: string, seqs: number[]): QueryExecResult[];
export declare function getMessageListNoTime(db: Database, conversationID: string, count: number, isReverse: boolean): QueryExecResult[];
export declare function getConversationNormalMsgSeq(db: Database, conversationID: string): QueryExecResult[];
export declare function getConversationPeerNormalMsgSeq(db: Database, conversationID: string, loginUserID: string): QueryExecResult[];
export declare function getSendingMessageList(db: Database, conversationID: string): QueryExecResult[];
export declare function updateMessageTimeAndStatus(db: Database, conversationID: string, clientMsgID: string, serverMsgID: string, sendTime: number, status: number): QueryExecResult[];
export declare function updateMessage(db: Database, conversationID: string, clientMsgID: string, localChatLogs: ClientMessage): QueryExecResult[];
export declare function updateMessageBySeq(db: Database, conversationID: string, seq: number, localChatLogs: ClientMessage): QueryExecResult[];
export declare function batchInsertMessageList(db: Database, conversationID: string, messageList: ClientMessage[]): QueryExecResult[];
export declare function insertMessage(db: Database, conversationID: string, localChatLogs: ClientMessage): QueryExecResult[];
export declare function getMultipleMessage(db: Database, conversationID: string, clientMsgIDs: string[]): QueryExecResult[];
export declare function searchMessageByKeyword(db: Database, conversationID: string, contentType: number[], keywordList: string[], keywordListMatchType: number, startTime: number, endTime: number, offset: number, count: number): QueryExecResult[];
export declare function searchMessageByContentType(db: Database, conversationID: string, contentType: number[], startTime: number, endTime: number, offset: number, count: number): QueryExecResult[];
export declare function searchMessageByContentTypeAndKeyword(db: Database, conversationID: string, contentType: number[], keywordList: string[], keywordListMatchType: number, startTime: number, endTime: number): QueryExecResult[];
export declare function messageIfExists(db: Database, conversationID: string, clientMsgID: string): QueryExecResult[];
export declare function updateMsgSenderFaceURLAndSenderNickname(db: Database, conversationID: string, sendID: string, faceURL: string, nickname: string): QueryExecResult[];
export declare function deleteConversationAllMessages(db: Database, conversationID: string): QueryExecResult[];
export declare function markDeleteConversationAllMessages(db: Database, conversationID: string): QueryExecResult[];
export declare function getUnreadMessage(db: Database, conversationID: string, loginUserID: string): QueryExecResult[];
export declare function markConversationMessageAsReadBySeqs(db: Database, conversationID: string, seqList: number[], loginUserID: string): QueryExecResult[];
export declare function markConversationMessageAsRead(db: Database, conversationID: string, clientMsgIDList: string[], loginUserID: string): QueryExecResult[];
export declare function updateColumnsMessage(db: Database, conversationID: string, clientMsgID: string, localChatLogs: ClientMessage): QueryExecResult[];
export declare function deleteConversationMsgs(db: Database, conversationID: string, clientMsgIDList: string[]): QueryExecResult[];
export declare function markConversationAllMessageAsRead(db: Database, conversationID: string, loginUserID: string): QueryExecResult[];
export declare function searchAllMessageByContentType(db: Database, conversationID: string, contentType: number): QueryExecResult[];
export declare function getLatestActiveMessage(db: Database, conversationID: string, isReverse: boolean): QueryExecResult[];
export declare function getLatestValidServerMessage(db: Database, conversationID: string, startTime: number, isReverse: boolean): QueryExecResult[];

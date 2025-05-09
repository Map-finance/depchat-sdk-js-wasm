export declare function getMessage(conversationID: string, clientMsgID: string): Promise<string>;
export declare function getAlreadyExistSeqList(conversationID: string, lostSeqListStr: string): Promise<string>;
export declare function getLatestValidServerMessage(conversationID: string, startTime: number, isReverse: boolean): Promise<string>;
export declare function getMessageList(conversationID: string, count: number, startTime: number, startSeq: number, startClientMsgID: string, isReverse?: boolean): Promise<string>;
export declare function getMessageBySeq(conversationID: string, seq: number): Promise<string>;
export declare function getMessagesByClientMsgIDs(conversationID: string, clientMsgIDListStr: string): Promise<string>;
export declare function getMessagesBySeqs(conversationID: string, seqListStr: string): Promise<string>;
export declare function getMessageListNoTime(conversationID: string, count: number, isReverse?: boolean): Promise<string>;
export declare function getConversationNormalMsgSeq(conversationID: string): Promise<string>;
export declare function getConversationPeerNormalMsgSeq(conversationID: string, loginUserID: string): Promise<string>;
export declare function getSendingMessageList(conversationID: string): Promise<string>;
export declare function updateMessageTimeAndStatus(conversationID: string, clientMsgID: string, serverMsgID: string, sendTime: number, status: number): Promise<string>;
export declare function updateMessage(conversationID: string, clientMsgID: string, messageStr: string): Promise<string>;
export declare function updateMessageBySeq(conversationID: string, seq: number, messageStr: string): Promise<string>;
export declare function batchInsertMessageList(conversationID: string, messageListStr: string): Promise<string>;
export declare function insertMessage(conversationID: string, messageStr: string): Promise<string>;
export declare function getMultipleMessage(conversationID: string, messageIDStr: string): Promise<string>;
export declare function searchMessageByKeyword(conversationID: string, contentTypeStr: string, keywordListStr: string, keywordListMatchType: number, startTime: number, endTime: number, offset: number, count: number): Promise<string>;
export declare function searchMessageByContentType(conversationID: string, contentTypeStr: string, startTime: number, endTime: number, offset: number, count: number): Promise<string>;
export declare function searchMessageByContentTypeAndKeyword(conversationID: string, contentTypeStr: string, keywordListStr: string, keywordListMatchType: number, startTime: number, endTime: number): Promise<string>;
export declare function messageIfExists(conversationID: string, clientMsgID: string): Promise<string>;
export declare function updateMsgSenderFaceURLAndSenderNickname(conversationID: string, sendID: string, faceURL: string, nickname: string): Promise<string>;
export declare function deleteConversationAllMessages(conversationID: string): Promise<string>;
export declare function markDeleteConversationAllMessages(conversationID: string): Promise<string>;
export declare function getUnreadMessage(conversationID: string, loginUserID: string): Promise<string>;
export declare function markConversationMessageAsReadBySeqs(conversationID: string, seqListStr: string, loginUserID: string): Promise<string>;
export declare function markConversationMessageAsRead(conversationID: string, clientMsgIDListStr: string, loginUserID: string): Promise<string>;
export declare function updateColumnsMessage(conversationID: string, clientMsgID: string, messageStr: string): Promise<string>;
export declare function deleteConversationMsgs(conversationID: string, clientMsgIDListStr: string): Promise<string>;
export declare function markConversationAllMessageAsRead(conversationID: string, clientMsgIDListStr: string): Promise<string>;
export declare function searchAllMessageByContentType(conversationID: string, clientMsgIDListStr: string): Promise<string>;
export declare function getLatestActiveMessage(conversationID: string, isReverse: boolean): Promise<string>;

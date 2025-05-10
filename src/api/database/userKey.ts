import { Database, QueryExecResult } from '@jlongster/sql.js';
import { DatabaseErrorCode } from '@/constant';
import { formatResponse } from '@/utils';
import { getInstance } from './instance';
import { converSqlExecResult } from '../../utils/value';
import {
  getUserKey as getSqlUserKey,
  insertUserKey as insertSqlUserKey,
  updateUserKey as updateSqlUserKey,
} from '@/sqls/localUserKeys';

// 创建接口定义密钥数据的结构
interface UserKeyData {
  userID: string;
  keyValue: string;
}

// 获取用户密钥
export async function getUserKey(userID: string): Promise<string> {
  try {
    const db = await getInstance();
    const result = getSqlUserKey(db, userID);

    if (result.length === 0 || result[0].values.length === 0) {
      return formatResponse(
        undefined,
        DatabaseErrorCode.ErrorNoRecord,
        'User key not found'
      );
    }

    const userKey = converSqlExecResult(result[0], 'CamelCase')[0];
    return formatResponse(userKey);
  } catch (e) {
    console.error('getUserKey error:', e);
    return formatResponse(
      undefined,
      DatabaseErrorCode.ErrorInit,
      JSON.stringify(e)
    );
  }
}

// 插入用户密钥
export async function insertUserKey(keyData: string): Promise<string> {
  try {
    const db = await getInstance();
    const keyObj = JSON.parse(keyData) as UserKeyData;

    const userData = {
      user_id: keyObj.userID,
      key_value: keyObj.keyValue,
    };

    insertSqlUserKey(db, userData);
    return formatResponse(true);
  } catch (e) {
    console.error('insertUserKey error:', e);
    return formatResponse(
      undefined,
      DatabaseErrorCode.ErrorInit,
      JSON.stringify(e)
    );
  }
}

// 更新用户密钥
export async function updateUserKey(keyData: string): Promise<string> {
  try {
    const db = await getInstance();
    const keyObj = JSON.parse(keyData) as UserKeyData;

    const userData = {
      user_id: keyObj.userID,
      key_value: keyObj.keyValue,
    };

    updateSqlUserKey(db, userData);
    return formatResponse(true);
  } catch (e) {
    console.error('updateUserKey error:', e);
    return formatResponse(
      undefined,
      DatabaseErrorCode.ErrorInit,
      JSON.stringify(e)
    );
  }
}

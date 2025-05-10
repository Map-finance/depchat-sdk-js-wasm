import squel from 'squel';
import { Database, QueryExecResult } from '@jlongster/sql.js';

export type LocalUserKey = { [key: string]: any };

export function localUserKeys(db: Database): QueryExecResult[] {
  return db.exec(
    `
      create table if not exists 'local_user_keys' (
        'user_id'       varchar(64) PRIMARY KEY,
        'key_value'     varchar(1024) NOT NULL
      ) 
    `
  );
}

export function getUserKey(db: Database, userID: string): QueryExecResult[] {
  return db.exec(
    `
      SELECT *
      FROM local_user_keys
      WHERE user_id = "${userID}"
      LIMIT 1
    `
  );
}

export function insertUserKey(
  db: Database,
  userKey: LocalUserKey
): QueryExecResult[] {
  const sql = squel
    .insert()
    .into('local_user_keys')
    .setFields(userKey)
    .toString();

  return db.exec(sql);
}

export function updateUserKey(
  db: Database,
  userKey: LocalUserKey
): QueryExecResult[] {
  const sql = squel
    .update()
    .table('local_user_keys')
    .setFields(userKey)
    .where(`user_id = '${userKey.user_id}'`)
    .toString();

  return db.exec(sql);
}

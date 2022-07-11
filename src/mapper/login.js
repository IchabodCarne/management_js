const addUserSql = (id, name, account, password, role, group, avatar) => {
  return `INSERT INTO user_t ( user_id, user_name, account, user_password, user_role, user_group, avatar )
  VALUES
    (${id}, '${name}', '${account}', '${password}', '${role}', '${group}', ${avatar});`
}

const queryUserByActSql = (account) => {
  return `SELECT t.user_id FROM user_t t WHERE t.account = '${account}';`
}

const loginSql = (account, password) => {
  return `SELECT * FROM user_t t WHERE t.account = '${account}' AND t.user_password = '${password}';`
}

const updatePswSql = (account, password) => {
  return `UPDATE user_t t SET t.user_password = '${password}' WHERE t.account = '${account}';`
}

export { addUserSql, queryUserByActSql, loginSql, updatePswSql }

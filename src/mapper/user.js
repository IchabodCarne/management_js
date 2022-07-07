const addUser = (id, name, account, password, role, group, avatar) => {
  return `INSERT INTO usert_t ( id, NAME, account, password, role, group, avatar )
  VALUES
    (${id}, ${name}, ${account}, ${password}, ${role}, ${group}, ${avatar});`
}

const queryUserByAct = (account) => {
  return `SELECT t.id FROM user_t t WHERE t.account = '${account}';`
}

export { addUser, queryUserByAct }

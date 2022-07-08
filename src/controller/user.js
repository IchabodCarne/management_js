import RunSQL from '../common/util'
import { addUser, queryUserByAct } from '../mapper/user'

/**
 * 注册用户
 * */
export const register = async (req, res, next) => {
  try {
    const users = await RunSQL(queryUserByAct('st-wg-lj17991'))
    if (Array.isArray(users) && users.length) {
      res.send('用户名重复')
      return
    }
    const addUserSql = addUser(12, '梁佳', 'st-wj-lj17991', 'liang5215249', '1', '12', null)
    const addRes = RunSQL(addUserSql)
    if (addRes && addRes === 1) {
      res.send('新增用户成功')
    }
  } catch (error) {
    console.error(error)
  }
  // db.query(queryUserByAct('st-wg-lj17991'), (err, result, fields) => {
  //   console.log('-----------------')
  //   console.log(err)
  //   console.log(result)
  //   console.log(fields)
  //   res.send('查询成功')
  // })
}

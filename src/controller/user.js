import db from '../common/sql'
import { addUser, queryUserByAct } from '../mapper/user'

/**
 * 注册用户
 * */
export const register = (req, res, next) => {
  console.log(queryUserByAct('st-wg-lj17991'))
  db.query(queryUserByAct('st-wg-lj17991'), (err, result, fields) => {
    console.log('-----------------')
    console.log(err)
    console.log(result)
    console.log(fields)
    res.send('查询成功')
  })
}

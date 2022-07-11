import { RunSQL } from '../common/util'
import { addUserSql, queryUserByActSql, loginSql, updatePswSql } from '../mapper/login'

// 注册用户
export const register = async (req, res, next) => {
  try {
    // 获取前端请求参数
    const reqParams = req?.body?.params
    if (!reqParams || !reqParams?.account) {
      res.send('请求参数错误')
    }
    // 检查用户是否存在
    const users = await RunSQL(queryUserByActSql(reqParams?.account))
    if (Array.isArray(users) && users.length) {
      res.send('用户账号已存在')
      return
    }
    // 新增用户
    const addSql = addUserSql(
      reqParams?.id,
      reqParams?.name,
      reqParams?.account,
      reqParams?.password,
      reqParams?.role,
      reqParams?.group,
      reqParams?.avatar,
    )
    const addRes = await RunSQL(addSql)
    if (addRes && addRes.affectedRows === 1) {
      res.send('新增用户成功')
    }
  } catch (error) {
    res.send(error)
    console.error(error)
  }
}

// 用户登录
export const login = async (req, res, next) => {
  try {
    // 获取前端请求参数
    const reqParams = req?.body?.params
    if (!reqParams || !reqParams?.account || !reqParams.password) {
      res.send('请求参数错误')
    }
    // 检查用户是否存在
    const { account, password } = reqParams
    const queryUser = await RunSQL(loginSql(account, password))
    if (!Array.isArray(queryUser) || !queryUser.length) {
      res.send('当前用户不存在')
    }
    res.send({
      data: {
        token: '',
        user: queryUser.at(0),
      },
    })
  } catch (error) {
    res.send(error)
  }
}

// 修改密码
export const updatePsw = async (req, res, next) => {
  try {
    // 获取前端请求参数
    const reqParams = req?.body?.params
    if (!reqParams || !reqParams?.account || !reqParams.password) {
      res.send('请求参数错误')
    }
    // 修改密码
    const { account, password } = reqParams
    const updRes = await RunSQL(updatePswSql(account, password))
    if (updRes && updRes.affectedRows === 1) {
      res.send('密码修改成功')
    }
  } catch (error) {
    res.send(error)
  }
}

/**
 * 注册用户
 * */
export const signup = (req, res, next) => {
  const { username, password } = req.body;
  const userNameIsOnlySql = `SELECT * FROM node_user WHERE user_name = '${username}'`;
  const insertUserNameSql = `INSERT INTO node_user (user_name) VALUES ('${username}')`;

  // 执行插入前执行查一下该用户名是否被注册
  RunSQL(userNameIsOnlySql)
    .then((queryRepeatUserList) => {
      // 无结果证明没有被注册
      if (!queryRepeatUserList.length) {
        db.query(insertUserNameSql, function (err, sqlResult) {
          if (err) {
            console.error("[注册用户失败[error]:", err.message);
            res.render("fail", { message: err.message });
            return;
          }
          res.render("success", {
            data: JSON.stringify({ user_id: sqlResult.insertId }),
            message: "用户注册成功",
          });
        });
      } else {
        res.render("fail", { message: "用户名重复" });
      }
    })
    .catch((err) => res.render("fail", { message: err.message }));
};

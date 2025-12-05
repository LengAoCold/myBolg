# Git 基础命令
## Git 命令
```shell
Git add 添加

Git add -f xxx 添加被忽略的文件夹

Git commit -m'' 提交暂存区

Git status 查看状态

Git reflog 查看commit记录

Git rebase xx

Git pull --rebase

Git branch -f main HEAD~3 强制修改分支位置

Git reset HEAD 撤销本地

Git revert HEAD 撤销远程

Git init 初始化git仓库

Git config --global user.name xxx 配置名字

Git config --global user.email xxx 配置邮箱

Git remote add origin xxx.xxx.xxx 关联远程项目地址

Git remote -v 查看远程仓库地址

Git remote rm origin 删除远程仓库地址

Git config --global --list 查看全局配置信息

Git fetch 检测是否成功链接远程仓库

Git pull origin master 拉取远程仓库

Git push origin master 上传

Git branch 查看本地分支

Git branch --list 查看分支

Git branch -a 查看分支（包括远程分支）

Git checkout 分支名 切换本地分支

Git checkout -b 创建并进入分支

Git checkout -D xx 删除分支

Git merge --no-ff -m'' 合并name分支到当前分支

Git merge xx 合并分支

Git merge --abort 撤销合并

Git fetch 这将更新git remote 中所有的远程repo 所包含分支的最新commit-id, 将其记录到.Git/FETCH_HEAD文件中

Git pull origin master --allow-unrelated-histories 强制合并

touch .gitignore 创建一个文件
```

## 忽略文件
```shell
# 忽略文件
.DS_Store

node_modules/

dist/

Npm-debug.log

yarn-error.log

# Editor directories and files

.idea

*.suo

_.ntvs_

*.njsproj

*.sln 不上传的文件

Git log -p master..origin/master 查看本地master分支和远程(origin)分支的区别

```

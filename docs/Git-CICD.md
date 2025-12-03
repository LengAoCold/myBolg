# CICD 部署
#### 1. 在服务器上创建 deploy 用户（如果还没有）
```bash
# 在服务器上以 root 或有 sudo 的用户运行
sudo adduser deploy
# 可选：加入 sudoers（慎用）
# sudo usermod -aG sudo deploy
```

#### 2. 为 GitHub Actions 创建一个部署用 SSH Key
在你的本地电脑执行：
```bash
ssh-keygen -t ed25519 -f deploy_key -C "github-deploy"
```
会得到两个文件：
```bash
deploy_key           ← 私钥（放 GitHub Secrets）
deploy_key.pub       ← 公钥（放服务器）
```
把公钥复制到服务器 deploy 用户：
```bash
ssh-copy-id -i deploy_key.pub deploy@x.x.x.x
```

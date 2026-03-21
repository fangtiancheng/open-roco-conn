# open-roco-conn
洛克王国连接器

不想上班，不定期施工

## 配环境说明

1. 本人在windows平台开发(当然Linux也没问题)
2. 下载visual studio，安装最基础的C++环境
3. 安装git、cmake等其他工具
4. 下载vcpkg
5. 安装boost，openssl
6. 编译运行

```powershell
# vcpkg安装方法
git clone https://github.com/microsoft/vcpkg.git
cd vcpkg # 这里就是${vcpkg路径}
.\bootstrap-vcpkg.bat

# powershell按需开启代理
$env:HTTP_PROXY="http://127.0.0.1:7890"
$env:HTTPS_PROXY="http://127.0.0.1:7890"

# 依赖库安装
$arch="x64-windows" # 假定你的系统是64位windows
vcpkg install boost-system:${arch}
vcpkg install boost-json:${arch}
vcpkg install boost-url:${arch}
vcpkg install boost-beast:${arch}
vcpkg install boost-asio:${arch}
vcpkg install boost-filesystem:${arch}
vcpkg install openssl:${arch}

mkdir build
cd build
cmake .. \
    -DCMAKE_BUILD_TYPE=Release \
    -D-DCMAKE_TOOLCHAIN_FILE=${vcpkg路径}\scripts\buildsystems\vcpkg.cmake
make -j
```

## CLion下开发

推荐使用CLion开发
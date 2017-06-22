# Yo-processbar(gulp-angular generator)
用命令行打开到项目文件夹下，然后npm install， bower install一下即可<br>
假如出现sass方面的错误，运行一下npm rebuild node-sass即可

# Run
使用gulp serve来运行工程 

# Build and Deploy
使用gulp build命令来打包，对于后端项目可以采用gulp build war -x test

# Get TempToken
Post Method<br>
localhost:8080/api/account/authentication<br>
Header:<br>
X-Username: system<br>
X-Password: 40601b2d7173b2b9f9c4ff98f7b66a44<br>

# About Deploy
需要更改src/app/index.constants.js文件，使其BASE_URL发生变化

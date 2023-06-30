import styles from "./login.module.scss"
import "./login.scss"
import initLoginBg from "@/views/Login/init.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {Button, Input, Space} from "antd";

const Login = () => {
    useEffect(() => {
        initLoginBg()
        window.onresize = () => initLoginBg()
    }, [])

    // 获取用户输入的信息
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        captcha: ''
    })
    const handleInputChange = (type: string) => {
        return (e: ChangeEvent<HTMLInputElement>) =>
            setUserInfo({
                ...userInfo,
                [type]: e.target.value
            })
    }

    const login = () => {
        console.log(userInfo)
    }

    return (
        <div className={styles.loginPage}>
            <canvas id="canvas" style={{display: "block"}}></canvas>
            <div className={styles.loginBox + " loginbox"}>
                <div className={styles.title}>
                    <h1>React&nbsp;·&nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                <Space direction="vertical" size="large" style={{display: 'flex'}}>
                    <Input placeholder="用户名" onChange={handleInputChange('username')}/>
                    <Input.Password placeholder="密码" onChange={handleInputChange('password')}/>
                    <div className="captchaBox">
                        <Input placeholder="验证码" onChange={handleInputChange('captcha')}/>
                        <div className="catheImg">
                            <img
                                src="https://img1.baidu.com/it/u=538775368,625477503&fm=253&fmt=auto&app=138&f=PNG?w=896&h=308"
                                alt=""/>
                        </div>
                    </div>
                    <Button onClick={login} block className={"loginBtn"} type="primary">登录</Button>
                </Space>
            </div>
        </div>
    );
};

export default Login;
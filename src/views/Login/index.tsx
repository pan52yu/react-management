import styles from "./login.module.scss"
import "./login.scss"
import initLoginBg from "@/views/Login/init.ts";
import {useEffect} from "react";
import {Button, Input, Space} from "antd";

const Login = () => {
    useEffect(() => {
        initLoginBg()
        window.onresize = () => initLoginBg()
    }, [])

    return (
        <div className={styles.loginPage}>
            <canvas id="canvas" style={{display: "block"}}></canvas>
            <div className={styles.loginBox + " loginbox"}>
                <div className={styles.title}>
                    <h1>React&nbsp;·&nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                <Space direction="vertical" size="large" style={{display: 'flex'}}>
                    <Input placeholder="用户名"/>
                    <Input.Password placeholder="密码"/>
                    <div className="captchaBox">
                        <Input placeholder="验证码"/>
                        <div className="catheImg">
                            <img
                                src="https://img1.baidu.com/it/u=538775368,625477503&fm=253&fmt=auto&app=138&f=PNG?w=896&h=308"
                                alt=""/>
                        </div>
                    </div>
                    <Button block className={"loginBtn"} type="primary">登录</Button>
                </Space>
            </div>
        </div>
    );
};

export default Login;
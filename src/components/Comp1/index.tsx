// import "./index.scss"  // 全局引入

// 模块化引入
import styles from "./index.module.scss"
import {Button} from "antd";
import {StepBackwardOutlined} from "@ant-design/icons";

const Comp1 = () => {
    return (
        <div className={styles.box}>
            <Button type="primary">Primary Button</Button>
            <StepBackwardOutlined style={{fontSize: "40px"}}/>
            <p>Comp1</p>
        </div>
    );
};

export default Comp1;
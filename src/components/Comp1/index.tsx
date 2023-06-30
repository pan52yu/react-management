// import "./index.scss"  // 全局引入

// 模块化引入
import styles from "./index.module.scss"

const Comp1 = () => {
    return (
        <div className={styles.box}>
            <p>Comp1</p>
        </div>
    );
};

export default Comp1;
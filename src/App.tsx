import {Link, useRoutes} from "react-router-dom";
import routes from "@/router";
import {Button} from "antd";

function App() {

    // 路由表
    const element = useRoutes(routes)

    return (
        <div className="App">
            <Button type={"primary"}>
                <Link to={"/home"}>Home</Link>
            </Button>
            <Button type={"dashed"}>
                <Link to={"/about"}>About</Link>
            </Button>
            {element}
        </div>
    )
}

export default App

import {useRoutes} from "react-router-dom";
import routes from "@/router";

function App() {

    // 路由表
    const element = useRoutes(routes)

    return (
        <div className="App">
            {element}
        </div>
    )
}

export default App

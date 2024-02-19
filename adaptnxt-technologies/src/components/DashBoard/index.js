import Header from "../Header"
import SideBar from "../SideBar"
const DashBoard = () => (
    <div>
    <Header />
    <div style={{display: "flex",
    width: "100%",
    
   }}>
    <SideBar />
    <h1 style={{textAlign : "center"}}>DashBoard</h1>

        </div>
    </div>
)

export default DashBoard
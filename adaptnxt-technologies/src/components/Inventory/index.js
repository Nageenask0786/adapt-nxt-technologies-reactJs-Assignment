import Header from "../Header"
import SideBar from "../SideBar"
const Inventory = () => (
    <div>
    <Header />
    <div style={{display: "flex",
    width: "100%",
    
   }}>
    <SideBar />
      <h1 style={{textAlign : "center"}}> Inventory</h1>
    </div>
    </div>
)

export default Inventory
import Header from "./onboarding/header/Header";
import AppRoutes from "./onboardingRout/Index";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const App =()=>{
    return(
        <>
       <Header/>
       <AppRoutes/>               
        </>
    )
}
export default App;
import { MainNav } from "components/Header";
import MainContainer from "styles/MainContainer.styled";
import { PetList, TotalCycle } from "./components";

const Main = () => {
        return (
        <MainContainer>
            <MainNav />
            <TotalCycle />
            <PetList />
        </MainContainer>
    );
};

export default Main;
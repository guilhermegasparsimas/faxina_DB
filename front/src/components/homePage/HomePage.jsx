import * as C from './styles' 
import Toolbar from '../ui/Toolbar';
import SideMenu from "../ui/SideMenu";


const HomePage = () => {
  return (
    <>
    <h2>Home page</h2>


      <section>
        <C.app>
          <SideMenu />

          <C.main>
            <Toolbar title="Informações" />

            <C.Content>
              <h2>Informações do Sistema</h2>

              <C.StyledLink to="/agendamentos">
                  Agendar Nova Faxina
              </C.StyledLink>
            </C.Content >

            
          </C.main>
        </C.app>
      </section>
    </>
  )
}

export default HomePage;
import './style.css'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Contact } from './pages/contact';

const app = document.querySelector<HTMLDivElement>('#app')!;

const routes: Record<string, () => string> = {
  '': Home,
  '#home': Home,
  '#about': About,
  '#contact': Contact
};

const handleRouting = () => {
  const hash = window.location.hash;
  const renderPage = routes[hash] || Home;
  app.innerHTML = renderPage();
};

window.addEventListener('hashchange', handleRouting);
handleRouting();

import Router from '@/routes/sections';
import NotificationBar from "./components/notification/NotificationBar";
import ThemeProvider from '@/theme';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
const App: React.FC = () => {
    useScrollToTop();

    return (
      <ThemeProvider>
          <NotificationBar />
        <Router />
      </ThemeProvider>
    )
}

export default App;

import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import MainPage from 'pages/MainPage/MainPage';
import CreateEventPage from 'pages/CreateEventPage/CreateEventPage';
import EventPage from 'pages/EventPage/EventPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="create" element={<CreateEventPage />} />
        <Route path=":id" element={<EventPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

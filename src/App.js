import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CardDetails from './components/CardDetails';
import Calendar from './components/Text';
import History from './components/History';
import { Login } from './components/Auth/Login';
import Layout from './components/Auth/Layout';

function App() {
    return (
        <div className="">
            {/* LAYOUT OF THE APP */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/home"
                        element={
                            <Layout>
                                <Home />
                            </Layout>
                        }
                    />

                    <Route
                        path="hotel-details/:slug"
                        element={
                            <Layout>
                                <CardDetails />
                            </Layout>
                        }
                    />
                    <Route
                        path="/texting"
                        element={
                            <Layout>
                                <Calendar />
                            </Layout>
                        }
                    />
                    <Route
                        path="/history"
                        element={
                            <Layout>
                                <History />
                            </Layout>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

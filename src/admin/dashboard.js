import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://tripadvisor-api.onrender.com/dashboard", { withCredentials: true })
            .then((res) => {
                if (res.data === "success") {
                    console.log("Welcome admin");
                    // Here you can store the token in local storage or state
                    // Example: localStorage.setItem('token', res.data.token);
                } else {
                    console.log(res.data);
                    navigate('/');
                }
            })
            .catch(err => {
                console.error("Error:", err);
                navigate('/');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>Dashboard</h1>
            {/* Add your dashboard content here */}
        </>
    );
}
// import React, { useState } from 'react';
// import { useSession } from './SessionContext';
// const LoginValidate = () => {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const { session, setSession } = useSession();

//     // const { login } = useSession();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//             const response = await fetch('http://127.0.0.1:5000/validate1', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name: name, password: password }),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 if (data.success) {
//                     // Successful login
//                     setSuccessMessage(data.message);
//                     setError(''); // Clear any previous error messages
//                 } else {
//                     setError(data.error); // Display any error message from the server
//                     setSuccessMessage(''); // Clear any previous success messages
//                 }
//             } else {
//                 setError('An error occurred. Please try again later.');
//                 setSuccessMessage(''); // Clear any previous success messages
//             }
            
//         } 
    

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//                 <label>Name:</label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 <br />
//                 <label>Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default LoginValidate;

// Modify your LoginValidate component to handle session:
// import React, { useState } from 'react';
// import { useSession } from './SessionContext';

// const LoginValidate = () => {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const { session, setSession } = useSession();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const response = await fetch('http://127.0.0.1:8080/validate1', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ name: name, password: password }),
//         });

//         if (response.ok) {
//             const data = await response.json();
//             if (data.message) {
//                 // Successful login
//                 setSuccessMessage(data.message);

//                 // Update the session on successful login
//                 setSession({ user_id: session.user_id, isLoggedIn: true });
//                 setError('');
//             } else {
//                 setError(data.error_message);
//                 setSuccessMessage('');
//             }
//         } else {
//             setError('Invalid username or password.Please try again later.');
//             setSuccessMessage('');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//                 <label>Name:</label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 <br />
//                 <label>Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default LoginValidate;


// // Modify your LoginValidate component to handle session:
// import React, { useState } from 'react';
// import { useSession } from './SessionContext';

// const LoginValidate = () => {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const { session, setSession } = useSession();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const response = await fetch('http://127.0.0.1:8080/validate1', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ name: name, password: password }),
//         });

//         if (response.ok) {
//             const data = await response.json();
//             if (data.message) {
//                 // Successful login
//                 setSuccessMessage(data.message);

//                 // Update the session on successful login
//                 setSession({ user_id: session.user_id, isLoggedIn: true });
//                 setError('');
//             } else {
//                 setError(data.error_message);
//                 setSuccessMessage('');
//             }
//         } else {
//             setError('Invalid username or password.Please try again later.');
//             setSuccessMessage('');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//                 <label>Name:</label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 <br />
//                 <label>Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default LoginValidate;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { useSession } from './SessionContext';

const SignInForm = () => {
    const navigate = useNavigate();  // Get the history object
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { session, setSession } = useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:8080/validate1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, password: password }),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.message) {
                // Successful login
                setSuccessMessage(data.message);

                // Update the session on successful login
                setSession({ user_id: session.user_id, isLoggedIn: true });
                setError('');

                // Redirect to the dashboard using history.push
                window.location.href = '/dashboarddummy';
            } else {
                setError(data.error_message);
                setSuccessMessage('');
            }
        } else {
            setError('Invalid username or password. Please try again later.');
            setSuccessMessage('');
        }
    };

return (
    <div className="sign-in-container">
        <div className="sign-in-form">
            <h2 className="sign-in-title" style={{ color: '#8e44ad', marginBottom: '20px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>Welcome to Eduloyalty</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" style={{ color: '#555' }}>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', width: '100%' }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" style={{ color: '#555' }}>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '10px', width: '100%' }}
                    />
                </div>
                {error && <p className="sign-in-error" style={{ color: '#e74c3c', marginBottom: '10px' }}>{error}</p>}
                <div className="form-group">
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#8e44ad',
                            color: '#fff',
                            borderRadius: '4px',
                            padding: '12px',
                            cursor: 'pointer',
                            width: '100%',
                            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#6c3483'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#8e44ad'}
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
);
};

export default SignInForm;




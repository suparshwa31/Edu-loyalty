import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const SignInForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/signInValidate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, password })
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.error_message);
            } else {
                // Redirect to Dashboard or Home page on successful signin
                // Navigate programmatically
                window.location.href = '/dashboard'; // Change this route as per your setup
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

//     return (
//         <div className="container-xl">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <form onSubmit={handleSubmit} className="mt-5 text-center">
//                         <h2 className="sign-in-title">Eduloyalty</h2>
//                         <h3 className="sign-in-title">Sign In</h3>
//                         {error && <p className="text-danger">{error}</p>}
//                         <div className="mb-3 row align-items-center">
//                             <label htmlFor="name" className="col-sm-4">Name:</label>
//                             <div className="col-sm-21">
//                                 <input
//                                     type="text"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     className="form-control"
//                                     style={{ width: '100%' }} // Adjust the width as needed
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-3 row align-items-center">
//                             <label htmlFor="password" className="col-sm-4 col-form-label text-end">Password:</label>
//                             <div className="col-sm-21">
//                                 <input
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="form-control"
//                                     style={{ width: '100%' }} // Adjust the width as needed
//                                 />
//                             </div>
//                         </div>
//                         <button type="submit" className="btn btn-primary w-100% mb-3">Sign In</button>
//                         <p className="mb-0">Don't have an account? <Link to="/signup">Signup</Link></p>
//                     </form>
//                 </div>
//             </div>
//         </div>

//     );
// };


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
                <p style={{ color: '#555', textAlign: 'center' }}>
                    Don't have an account? <Link to="/signup" className="link-text" style={{ color: '#8e44ad' }}>Signup</Link>
                </p>
            </form>
        </div>
    </div>
);
};

export default SignInForm;
import React from 'react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
  // Image link has been updated to a new one.
  const imageUrl = "https://imgs.search.brave.com/iniBI8uw7ujIxy-HwCkf_XRuquuozHVerppuZAWlTng/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvcGFnZS1mb3Vu/ZC00MDQtZXJyb3It/Y29uY2VwdC1pbGx1/c3RyYXRpb25fMjcw/MTU4LTI5NC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA";

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-center text-white font-sans p-4">
      
      {/* Image Container */}
      <div className="w-full max-w-lg mb-8">
        <img 
          src={imageUrl} 
          alt="404 Not Found" 
          className="w-full h-auto"
          // Fallback in case the image link breaks
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1e293b/ffffff?text=Image+Not+Found'; }}
        />
      </div>

      {/* Error Message */}
      <h1 className="text-4xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="text-lg text-slate-400 mb-8">
        Looks like you've ventured into the unknown.
      </p>

      {/* Go Home Button */}
      <NavLink 
        to="/" 
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300"
      >
        Go Back to Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;

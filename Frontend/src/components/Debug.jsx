const Debug = () => {
  // Test API URL construction
  const getApiUrl = () => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
    if (!baseUrl.endsWith('/api')) {
      return baseUrl + '/api';
    }
    return baseUrl;
  };

  const finalApiUrl = getApiUrl();

  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 rounded-lg m-4">
      <h2 className="text-lg font-bold mb-2 text-red-600">🐛 Debug Info</h2>
      <p><strong>Environment:</strong> {import.meta.env.MODE}</p>
      <p><strong>Raw VITE_API_URL:</strong> {import.meta.env.VITE_API_URL || 'Not set'}</p>
      <p><strong>Final API URL:</strong> {finalApiUrl}</p>
      <p><strong>Expected Posts URL:</strong> {finalApiUrl}/posts</p>
      <p><strong>Base URL:</strong> {import.meta.env.BASE_URL}</p>
      <p><strong>Production:</strong> {import.meta.env.PROD ? 'Yes' : 'No'}</p>
      <p><strong>Development:</strong> {import.meta.env.DEV ? 'Yes' : 'No'}</p>

      <div className="mt-4 p-2 bg-white rounded">
        <p className="text-sm"><strong>Check browser console for API requests!</strong></p>
      </div>
    </div>
  );
};

export default Debug;

const Debug = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg m-4">
      <h2 className="text-lg font-bold mb-2">Debug Info</h2>
      <p><strong>Environment:</strong> {import.meta.env.MODE}</p>
      <p><strong>API URL:</strong> {import.meta.env.VITE_API_URL || 'Not set'}</p>
      <p><strong>Base URL:</strong> {import.meta.env.BASE_URL}</p>
      <p><strong>Production:</strong> {import.meta.env.PROD ? 'Yes' : 'No'}</p>
      <p><strong>Development:</strong> {import.meta.env.DEV ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default Debug;

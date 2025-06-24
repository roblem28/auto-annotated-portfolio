import { useEffect, useState } from 'react';

export default function FAA() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    fetch("https://www.federalregister.gov/api/v1/documents.json?conditions[agencies]=federal-aviation-administration&per_page=10&order=newest")
      .then((res) => res.json())
      .then((data) => setDocs(data.results))
      .catch((err) => console.error("Failed to fetch FAA docs:", err));
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Latest FAA Notices</h1>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {docs.length === 0 && <li>Loading FAA documents…</li>}
        {docs.map((doc) => (
          <li key={doc.document_number} style={{ marginBottom: "1rem" }}>
            <a
              href={doc.short_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#0066cc" }}
            >
              {doc.title} ({doc.document_number})
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

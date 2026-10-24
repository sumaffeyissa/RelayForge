export default function HomePage() {
  return (
    <main
      style={{
        padding: '3rem 2rem',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#111827' }}>RelayForge</h1>
      <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem' }}>
        Open-source integration reliability platform for durable event ingestion, delivery, and
        reconciliation.
      </p>

      <section
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '1.5rem',
          backgroundColor: '#f9fafb',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', marginTop: 0, color: '#1f2937' }}>System Status</h2>
        <p style={{ margin: 0, color: '#374151' }}>
          Foundation phase initialized. Web client and API services are running in a pnpm monorepo.
        </p>
      </section>
    </main>
  );
}

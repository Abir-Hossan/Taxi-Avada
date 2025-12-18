export default function StatsStrip() {
  const stats = [
    { value: "30k", label: "HAPPY CUSTOMERS" },
    { value: "10+", label: "YEARS EXPERIENCE" },
    { value: "28", label: "CAB DRIVERS" },
  ];

  return (
    <section className="ta-stats">
      <div className="container ta-container">
        <div className="row g-3 text-center">
          {stats.map((s) => (
            <div className="col-md-4" key={s.label}>
              <div className="ta-stat-box">
                <div className="ta-stat-value">{s.value}</div>
                <div className="ta-stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

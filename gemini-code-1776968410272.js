import React from 'react';

export default function Home() {
  const teams = [
    { name: "Vampires", w: 2, l: 0, upvotes: "13,607" },
    { name: "Bandits", w: 2, l: 0, upvotes: "11,195" },
    { name: "Kitties", w: 1, l: 1, upvotes: "11,394" },
    { name: "Voltage", w: 1, l: 1, upvotes: "9,646" },
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#f97316', fontSize: '3rem', fontStyle: 'italic', fontWeight: '900' }}>RUL LEAGUE</h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>Real Upvote League - Season 2</p>
      
      <section>
        <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>League Standings</h2>
        <table style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
          <thead>
            <tr style={{ color: '#f97316' }}>
              <th>TEAM</th>
              <th>RECORD</th>
              <th>TOTAL UPVOTES</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(t => (
              <tr key={t.name} style={{ height: '50px', borderBottom: '1px solid #111' }}>
                <td>{t.name}</td>
                <td>{t.w}-{t.l}</td>
                <td style={{ fontFamily: 'monospace' }}>{t.upvotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: '50px' }}>
        <h2 style={{ color: '#f97316' }}>Hall of Fame</h2>
        <p><strong>Most Upvotes in a Game:</strong> @tase - 4,862 (Week 1)</p>
        <p><strong>Season Record Holder:</strong> @seahawksfan1 - 10,389</p>
      </section>
    </div>
  );
}
document.addEventListener('DOMContentLoaded', () => {
  const experience = [
    {
      id: 'jupiter',
      title: 'Growth Manager',
      company: 'Jupiter',
      duration: 'Sep 2022 – Present',
      details: [
        'Increased user activation rate by 45%',
        'Implemented AI-driven personalization',
        'Launched referral program: 25K+ new users',
        'Reduced CAC by 35%',
        '₹5M+/month cost savings'
      ]
    },
    {
      id: 'axis',
      title: 'Product Manager – Digital Payments',
      company: 'Axis Bank',
      duration: 'Aug 2021 – Aug 2022',
      details: [
        'Improved UPI experience, reduced declines',
        '₹5M+/month savings in fund settlements',
        'Led Paytm & LIC IPO integrations',
        '40% reduction in transaction failures'
      ]
    }
  ];

  const container = document.getElementById('timeline-container');
  experience.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <h3>${exp.title}</h3>
      <p><strong>${exp.company}</strong> – <em>${exp.duration}</em></p>
      <ul>${exp.details.map(d => `<li>${d}</li>`).join('')}</ul>
    `;
    container.appendChild(item);
  });
});

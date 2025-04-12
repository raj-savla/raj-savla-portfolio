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
    item.className = "bg-white rounded-lg shadow p-6";
    item.innerHTML = `
      <h3 class="text-xl font-semibold text-gray-800 mb-1">${exp.title}</h3>
      <p class="text-sm text-gray-500 mb-2"><strong>${exp.company}</strong> – <em>${exp.duration}</em></p>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
      </ul>
    `;
    container.appendChild(item);
  });
});

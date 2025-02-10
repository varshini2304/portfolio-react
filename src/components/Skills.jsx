import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    // Animate technical skills bars
    const technicalBars = document.querySelectorAll(".skills__percentage");
    technicalBars.forEach(bar => {
      const percentage = bar.getAttribute("data-percentage");
      let currentWidth = 0;
      const targetWidth = percentage;
      
      const interval = setInterval(() => {
        currentWidth++;
        bar.style.width = `${currentWidth}%`;
        const value = bar.closest('.skills__item').querySelector('.skills__value');
        value.textContent = `${currentWidth}%`;

        if (currentWidth >= targetWidth) {
          clearInterval(interval);
        }
      }, 30);
    });

    // Animate emotional skills charts
    const emotionalCircles = document.querySelectorAll(".chart-item circle:last-child");
    emotionalCircles.forEach(circle => {
      const percentage = circle.getAttribute("data-percentage");
      const circumference = 2 * Math.PI * 34;
      let currentOffset = circumference;
      const targetOffset = circumference - (percentage / 100) * circumference;

      const interval = setInterval(() => {
        currentOffset -= (targetOffset + 1) / 100;
        circle.style.strokeDasharray = `${circumference}`;
        circle.style.strokeDashoffset = currentOffset;

        const chartItem = circle.closest('.chart-item');
        const percentageText = chartItem.querySelector('p');
        percentageText.textContent = `${percentageText.textContent.split(' ')[0]} (${percentage}%)`;

        if (currentOffset <= targetOffset) {
          clearInterval(interval);
        }
      }, 10);
    });

    // Handle Google Sheets form submission
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxDptOk_ZcF4LlM-kw4cA1p0RSXHamjjJhObmJ-LJDTaaxgNJDpQZ3Eg6pUgjtlEPy7Kw/exec';
    const form = document.forms['submit-to-google-sheet'];

    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message));
      });
    }
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills__container container">
        
        {/* Technical Skills */}
        <div className="skills__technical">
          <h3 className="skills__heading">Technical Skills</h3>
          <div className="skills__list">
            {["Python", "Java", "C", "DBMS", "Reactjs", "Node js", "C++", "JavaScript", "HTML/CSS"].map((skill, index) => {
              const percentages = [90, 85, 80, 80, 80, 80, 85, 90, 95];
              return (
                <div className="skills__item" key={index}>
                  <div className="skills__name">{skill}</div>
                  <div className="skills__bar">
                    <div className="skills__percentage" style={{ width: "0%" }} data-percentage={percentages[index]}></div>
                  </div>
                  <span className="skills__value">0%</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Emotional Skills */}
        <div className="skills__emotional">
          <h3 className="skills__heading">Emotional Skills</h3>
          <div className="skills__chart">
            {["Communication", "Creativity", "Leadership", "Problem Solving"].map((skill, index) => {
              const percentages = [75, 80, 70, 85];
              return (
                <div className="chart-item" key={index}>
                  <svg>
                    <circle cx="36" cy="36" r="34"></circle>
                    <circle cx="36" cy="36" r="34" data-percentage={percentages[index]}></circle>
                  </svg>
                  <p>{skill}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

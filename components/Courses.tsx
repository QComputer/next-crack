"use client";

export default function Courses() {
  const courses = [
    {
      title: "Advanced Barista Skills",
      desc: "Master espresso, milk frothing & latte art.",
      students: 250,
      lessons: 20,
      price: "3,800,000",
    },
    {
      title: "Coffee Roasting Fundamentals",
      desc: "Understand profiles, cupping & quality control.",
      students: 180,
      lessons: 15,
      price: "4,200,000",
    },
    {
      title: "Coffee Business Workshop",
      desc: "Learn how to run a successful coffee shop.",
      students: 120,
      lessons: 12,
      price: "5,000,000",
    },
  ];

  return (
    <section id="courses" className="courses-section">
      <h2>Our Courses</h2>
      <div className="grid grid-3">
        {courses.map((c, i) => (
          <div key={i} className="card course-card">
            <div className="image-placeholder">🎓</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="course-meta">
              <span>👨‍🎓 {c.students} students</span>
              <span>📘 {c.lessons} lessons</span>
            </div>
            <div className="price">₫ {c.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div style={{display:"flex", alignItems:"flex-start", gap:24}}>
        <div style={{flex:1}}>
          <h2 className="about-heading">
            ABOUT <span>CRACK</span>
          </h2>
          <p className="about-text">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
          </p>
          <p className="about-text">
            Crack brings together roasting software and curated roasts that highlight the best of every origin.
          </p>
        </div>

        <div style={{width:260}}>
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f9b9dca7c6d7a4a4c39d2a8f9a6f8e6" alt="beans" style={{width:"100%", borderRadius:12}} />
        </div>
      </div>
    </section>
  );
}

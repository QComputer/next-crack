export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div style={{ flex: 1 }}>
          <h1>Handcrafted Coffee, Perfected</h1>
          <p>Tools, courses, and curated roasts — everything you need to roast, taste and sell extraordinary coffee.</p>
        </div>

        <div style={{ width: 320, textAlign: "center" }}>
          <div style={{
            height: 140,
            borderRadius: 12,
            background: "linear-gradient(180deg,#fff,#f4efe9)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 8px 18px rgba(0,0,0,0.06)"}}>
            <img src="/images/hero-coffee.jpg" alt="coffee" style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:12}} />
          </div>
        </div>
      </div>
    </section>
  );
}

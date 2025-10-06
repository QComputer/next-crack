export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div style={{flex:1}}>
          <h1 style={{fontSize:36, color:"var(--brown)"}}>Handcrafted Coffee, Perfected</h1>
          <p style={{color:"var(--muted)", maxWidth:620, marginTop:12}}>
            Tools, courses, and curated roasts — everything you need to roast, taste and sell extraordinary coffee.
          </p>
        </div>

        <div style={{width:320, textAlign:"center"}}>
          <div style={{
            height:140,
            borderRadius:12,
            background: "linear-gradient(180deg,#fff,#f4efe9)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 8px 18px rgba(0,0,0,0.06)"
          }}>
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f9b9dca7c6d7a4a4c39d2a8f9a6f8e6" alt="coffee" style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:12}} />
          </div>
        </div>
      </div>
    </section>
  );
}

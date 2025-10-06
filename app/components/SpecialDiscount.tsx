"use client";

import { useEffect, useState } from "react";

export default function SpecialDiscount() {
  const [t, setT] = useState({days:0,hours:0,minutes:0,seconds:0});
  useEffect(()=>{
    const target = new Date().getTime() + 2 * 24 * 3600 * 1000 + 5 * 3600 * 1000; // 2 days + 5h
    const id = setInterval(()=>{
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setT({
        days: Math.floor(diff / (1000*60*60*24)),
        hours: Math.floor((diff / (1000*60*60)) % 24),
        minutes: Math.floor((diff / (1000*60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
      if(diff<=0) clearInterval(id);
    }, 1000);
    return ()=>clearInterval(id);
  },[]);

  return (
    <section id="discount" className="discount-section">
      <div style={{flex:1}}>
        <h2>SPECIAL DISCOUNT</h2>
        <p style={{color:"var(--muted)", marginTop:8}}>Limited time offer — grab it while it lasts.</p>
        <div className="countdown" style={{marginTop:12}}>
          <div className="time-box"><div style={{fontWeight:700, fontSize:18}}>{String(t.days).padStart(2,"0")}</div><div style={{fontSize:12,color:"var(--muted)"}}>Days</div></div>
          <div className="time-box"><div style={{fontWeight:700, fontSize:18}}>{String(t.hours).padStart(2,"0")}</div><div style={{fontSize:12,color:"var(--muted)"}}>Hours</div></div>
          <div className="time-box"><div style={{fontWeight:700, fontSize:18}}>{String(t.minutes).padStart(2,"0")}</div><div style={{fontSize:12,color:"var(--muted)"}}>Mins</div></div>
          <div className="time-box"><div style={{fontWeight:700, fontSize:18}}>{String(t.seconds).padStart(2,"0")}</div><div style={{fontSize:12,color:"var(--muted)"}}>Secs</div></div>
        </div>
      </div>

      <div style={{flex:0}}>
        <div className="discount-card">
          <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&s=906b6f8d1b8b4c9a5f2fd1f3b2a6d3c7" alt="pack" style={{width:120, height:120, objectFit:"cover", borderRadius:10}} />
          <div>
            <h3 style={{marginBottom:6}}>Latte Art Training</h3>
            <p style={{color:"var(--muted)", fontSize:13, marginBottom:8}}>Learn latte art from industry professionals — limited seats.</p>
            <div style={{fontWeight:700, color:"var(--green)"}}>Now ₫2,450,000</div>
            <div style={{marginTop:8}}>
              <button className="btn" style={{padding:"8px 14px", borderRadius:10}}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

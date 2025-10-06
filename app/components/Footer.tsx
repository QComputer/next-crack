"use client";

import Link from "next/link";

export default function Footer(){
  return (
    <footer>
      <div className="footer-grid" style={{maxWidth:1200, margin:"0 auto"}}>
        <div>
          <div style={{display:"flex", alignItems:"center", gap:12}}>
            <div className="mark" style={{background:"var(--brown)", width:56, height:56, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:700}}>CR</div>
            <div>
              <div style={{fontWeight:700, color:"#fff"}}>Crack Coffee</div>
              <div style={{fontSize:12, color:"#bfbfbf"}}>Roasting & Profiling</div>
            </div>
          </div>
          <p style={{marginTop:12, color:"#bfbfbf"}}>Empowering coffee lovers with tools, courses, and products to perfect their craft.</p>
        </div>

        <div>
          <h4 style={{color:"#fff", marginBottom:10}}>Customer Service</h4>
          <ul style={{listStyle:"none", color:"#bfbfbf"}}>
            <li><Link href="#" style={{color:"#bfbfbf"}}>Contact Us</Link></li>
            <li><Link href="#" style={{color:"#bfbfbf"}}>Track Order</Link></li>
            <li><Link href="#" style={{color:"#bfbfbf"}}>Return & Exchange</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{color:"#fff", marginBottom:10}}>Policies</h4>
          <ul style={{listStyle:"none", color:"#bfbfbf"}}>
            <li><Link href="#" style={{color:"#bfbfbf"}}>Privacy Policy</Link></li>
            <li><Link href="#" style={{color:"#bfbfbf"}}>Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{color:"#fff", marginBottom:10}}>Quick Links</h4>
          <ul style={{listStyle:"none", color:"#bfbfbf"}}>
            <li><Link href="#products" style={{color:"#bfbfbf"}}>Products</Link></li>
            <li><Link href="#courses" style={{color:"#bfbfbf"}}>Courses</Link></li>
            <li><Link href="#offers" style={{color:"#bfbfbf"}}>Offers</Link></li>
          </ul>
        </div>
      </div>

      <div style={{borderTop:"1px solid rgba(255,255,255,0.06)", marginTop:24, paddingTop:18, textAlign:"center", color:"#bfbfbf"}}>
        © {new Date().getFullYear()} Crack Coffee. All rights reserved.
      </div>
    </footer>
  );
}

import {useEffect,useRef,useState} from 'react';
import {motion,AnimatePresence,useScroll,useSpring,useTransform} from 'framer-motion';
import Lenis from 'lenis';
import {Sparkles,Droplets,Syringe,Layers,FlaskConical,Waves,Gem,Eye,Heart,Scissors,Zap,Wind,Flower2,Menu,X,ArrowRight,Mail} from 'lucide-react';
import {T,G,F} from './data.js';

const ICONS=[Sparkles,Droplets,Syringe,Layers,FlaskConical,Waves,Gem,Eye,Heart,Scissors,Zap,Wind,Flower2];
const img=k=>`/images/${k}.jpg`;
const NAV=[['about','About'],['treatments','Treatments'],['results','Results'],['pricing','Pricing'],['contact','Contact']];
const Reveal=({children,delay=0,y=30})=><motion.div initial={{opacity:0,y}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;

export default function App(){
  const [lb,setLb]=useState(null),[open,setOpen]=useState(false),[sent,setSent]=useState(false);
  const {scrollYProgress}=useScroll(),bar=useSpring(scrollYProgress,{stiffness:120,damping:25});
  const hero=useRef(),{scrollYProgress:hp}=useScroll({target:hero,offset:['start start','end start']});
  const py=useTransform(hp,[0,1],[0,90]),ty=useTransform(hp,[0,1],[0,-40]);
  useEffect(()=>{const l=new Lenis({lerp:.09});let id;const raf=t=>{l.raf(t);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf);return()=>{cancelAnimationFrame(id);l.destroy()}},[]);
  useEffect(()=>{const k=e=>e.key==='Escape'&&setLb(null);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[]);
  const submit=e=>{e.preventDefault();const f=new FormData(e.target);
    location.href=`mailto:hello@alexandrasaesthetics.co?subject=${encodeURIComponent('Consultation enquiry: '+f.get('t'))}&body=${encodeURIComponent(`${f.get('n')}\n${f.get('p')}\n\n${f.get('m')}`)}`;setSent(true)};
  const words=T.map(t=>t[0]);
  return <>
    <motion.div className="bar" style={{scaleX:bar}}/>
    <nav><div className="w"><a href="#top" className="brand">Alexandra's Aesthetics</a>
      <ul>{NAV.map(([a,b])=><li key={a}><a href={'#'+a}>{b}</a></li>)}</ul>
      <button className="burger" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
      {open&&<div className="menu">{NAV.map(([a,b])=><a key={a} href={'#'+a} onClick={()=>setOpen(false)}>{b}</a>)}</div>}</nav>

    <header className="hero" id="top" ref={hero}><div className="w">
      <motion.div style={{y:ty}}><div className="eyebrow">Nurse practitioner · Aesthetics</div>
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1,ease:[.22,1,.36,1]}}>Look fresh. <em>Revive your glow.</em></motion.h1>
        <p>Personalised, medically led skin treatments with a gentle touch. Every plan is designed around you, and I treat every client myself.</p>
        <p><a className="btn" href="#contact">Book a consultation <ArrowRight size={16} style={{verticalAlign:'-3px'}}/></a> <a className="btn o" href="#treatments">View treatments</a></p></motion.div>
      <motion.div className="img" style={{y:py}} initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:1.1}}><img src={img('treat')} alt="Consultation and treatment marking"/></motion.div></div></header>

    <div className="mq"><motion.div animate={{x:['0%','-50%']}} transition={{duration:45,repeat:Infinity,ease:'linear'}}>
      {[...words,...words,...words,...words].map((w,i)=><span key={i}>{w} ✦</span>)}</motion.div></div>

    <section id="about"><div className="w two"><Reveal><div className="frame" style={{padding:'64px 24px',textAlign:'center'}}><div className="brand" style={{fontSize:'2.6rem',display:'block'}}>Alexandra's Aesthetics</div><div className="eyebrow" style={{marginTop:14}}>Registered nurse & aesthetics practitioner</div></div></Reveal>
      <Reveal delay={.1}><div className="eyebrow">About me</div><h2>Alexandra's Aesthetics</h2>
        <p>I'm Alexandra, a registered nurse and aesthetics practitioner. I believe great skin starts with honest advice and treatments chosen for your skin, not a one-size-fits-all menu.</p>
        <p>I'll always talk you through what is realistic, what I would recommend and what I wouldn't, so you feel confident in every decision.</p></Reveal></div></section>

    <section id="treatments" className="alt"><div className="w"><div className="eyebrow">What I offer</div><h2>My treatments</h2>
      <div className="grid">{T.map(([t,d,p],i)=>{const Ic=ICONS[i%ICONS.length];return <Reveal key={t} delay={(i%3)*.08}><motion.div className="card" whileHover={{y:-6}} style={{height:'100%'}}><div className="ic"><Ic size={22}/></div><h3>{t}</h3><p>{d}</p><div className="tag">{p}</div></motion.div></Reveal>})}</div></div></section>

    <section id="structure"><div className="w"><div className="eyebrow">Collagen & structure</div><h2>Beyond surface glow</h2>
      <div className="two" style={{marginTop:32,alignItems:'start'}}><Reveal><h3>Sculptra</h3><p>Unlike traditional dermal fillers, Sculptra works by stimulating your body's own collagen production, helping to gradually improve skin structure, firmness and quality over time.</p><p>And the beauty of Sculptra? The results can continue to develop for months as collagen production progresses.</p><p><b>No dramatic overnight changes. Just gradual, natural-looking rejuvenation.</b></p>
        <h3 style={{marginTop:28}}>Profhilo Structura</h3><p>Profhilo Structura is a core treatment in my Double Jowl Lift approach.</p><p>Unlike traditional volumising fillers, Structura is designed to support and remodel facial adipose tissue, helping address the loss of structural support in the midface that contributes to facial ageing and jowling.</p><p>The aim is to improve the underlying support of the face, rather than simply adding volume.</p></Reveal>
        <Reveal delay={.1}><div className="frame" style={{cursor:'zoom-in'}} onClick={()=>setLb(img('compare'))}><img src={img('compare')} alt="Sculptra and Radiesse compared" loading="lazy"/></div></Reveal></div>
      <Reveal><div className="card" style={{marginTop:32}}><h3>Polynucleotides: PN & PDRN</h3><p>PN stimulates fibroblasts for long-term collagen and elastin. PDRN supports tissue repair, healing and inflammation control. Deeper regeneration, longer-lasting results.</p><div className="tag">What you'll see in the skin</div><ul style={{margin:'8px 0 0',paddingLeft:20,color:'var(--mut)'}}>{['Improved texture & tone','Deep hydration & elasticity','Softer fine lines & visible ageing','Faster recovery for stressed or post-procedure skin','Stronger, healthier skin quality, not just surface glow'].map(x=><li key={x}>{x}</li>)}</ul></div></Reveal></div></section>

    <section><div className="w two"><Reveal><div className="eyebrow">Featured range</div><h2>Derma 2.0</h2><p>Derma Eye targets tired, puffy eyes, while Derma Bio revitalises the skin with hyaluronic acid, polynucleotides, vitamins and amino acids. I use it for a fresh, rested look.</p><a className="btn" href="#contact">Ask about Derma 2.0</a></Reveal>
      <Reveal delay={.1}><div className="frame" style={{cursor:'zoom-in'}} onClick={()=>setLb(img('derma'))}><img src={img('derma')} alt="Derma Eye and Derma Bio"/></div></Reveal></div></section>

    <section id="results" className="alt"><div className="w"><div className="eyebrow">Real clients</div><h2>Results</h2><p className="note">Tap an image to enlarge. Results vary between individuals.</p>
      <div className="gal">{G.map(([k,c],i)=><Reveal key={k} delay={(i%3)*.06}><figure onClick={()=>setLb(img(k))}><img src={img(k)} alt={c} loading="lazy"/><figcaption>{c}</figcaption></figure></Reveal>)}</div></div></section>

    <section id="pricing"><div className="w two"><Reveal><div className="eyebrow">Pricing</div><h2>Skin boosters</h2>
      <div className="price"><span>From</span><b>£80</b><span>or 3 for</span><b>£199</b></div>
      <p>Improve texture, increase tone and reduce fine lines. Pricing for all other treatments is confirmed at your consultation.</p><p className="note">Prices are a guide and may change.</p></Reveal>
      <Reveal delay={.1}><div className="frame" style={{cursor:'zoom-in'}} onClick={()=>setLb(img('price'))}><img src={img('price')} alt="From £80 or 3 for £199"/></div></Reveal></div></section>

    <section className="alt"><div className="w" style={{maxWidth:760}}><h2>Good to know</h2><div style={{marginTop:20}}>{F.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

    <section id="contact"><div className="w" style={{textAlign:'center',maxWidth:640}}><Reveal><div className="eyebrow">Get in touch</div><h2>Book your consultation</h2>
      <p>Tell me about your skin and what you'd like to achieve, and I'll recommend a plan.</p>
      {sent?<p><Mail size={18} style={{verticalAlign:'-3px'}}/> Thank you, your email app should have opened.</p>:
      <form className="form" onSubmit={submit}><input name="n" placeholder="Your name" required/><input name="p" placeholder="Phone or email" required/>
        <select name="t">{T.map(([t])=><option key={t}>{t}</option>)}</select><textarea name="m" rows="4" placeholder="Tell me about your skin"/><button className="btn">Send enquiry</button></form>}</Reveal></div></section>

    <footer><div className="brand" style={{color:'#fff',fontSize:'2rem',display:'block',marginBottom:10}}>Alexandra's Aesthetics</div><div>© 2026 Alexandra's Aesthetics · alexandrasaesthetics.co</div></footer>

    <AnimatePresence>{lb&&<motion.div className="lb" onClick={()=>setLb(null)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><motion.img src={lb} alt="" initial={{scale:.9}} animate={{scale:1}} exit={{scale:.9}}/></motion.div>}</AnimatePresence>
  </>;
}

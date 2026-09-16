var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// cards-html.js
var CARD_SCANNER_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0A1024">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>Card Scanner</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- ==================================================================
     BRAND BLOCK. Everything site specific lives between here and the
     END BRAND marker further down. Change these to rebrand the whole app.
     Nothing outside this block needs touching.
     ================================================================== -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Mulish:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  /* palette. --ink0 is the darkest, used as the page base. The app is dark by
     design so it is usable in a dim conference hall without blinding anyone. */
  --ink0:#0A1526;
  --ink1:#0D1B2E;
  --ink2:#16273F;
  --ink3:#1F3454;
  --gold:#C4952A;
  --gold-hi:#F4DC92;
  --gold-deep:#9A7420;
  --paper:#F5F0E8;
  --paper-2:#E7DCC6;
  --ivory:#F3ECDD;
  --ivory-soft:rgba(243,236,221,.60);
  --ivory-dim:rgba(243,236,221,.34);
  --line:rgba(196,149,42,.22);
  --ok:#63C295;
  --warn:#E8B04B;
  --bad:#F0857A;

  /* fonts. --f-name is the wordmark, --f-display is headings and contact
     names, --f-body is everything else, --f-data is emails and phone numbers
     where a monospace makes misreadings visible. */
  --f-name:'Cinzel',Georgia,serif;
  --f-display:'Fraunces',Georgia,serif;
  --f-body:'Mulish',system-ui,-apple-system,sans-serif;
  --f-data:ui-monospace,SFMono-Regular,'SF Mono',Menlo,Consolas,monospace;

  --pad:18px;
  --bar-h:calc(84px + env(safe-area-inset-bottom));
}

*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html,body{height:100%}
body{
  font-family:var(--f-body);
  background:var(--ink0);
  color:var(--ivory);
  line-height:1.55;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
  padding-bottom:var(--bar-h);
}
body::before{
  content:"";position:fixed;inset:0;z-index:0;pointer-events:none;
  background:radial-gradient(110% 70% at 50% -10%,rgba(34,52,95,.85),transparent 62%);
}
button,input,textarea,select{font:inherit;color:inherit}
button{background:none;border:none;cursor:pointer}
:focus-visible{outline:2.5px solid var(--gold);outline-offset:2px;border-radius:4px}

/* ---------- top bar ---------- */
.top{
  position:sticky;top:0;z-index:30;
  display:flex;align-items:center;gap:12px;
  padding:calc(12px + env(safe-area-inset-top)) var(--pad) 12px;
  background:rgba(10,16,36,.86);
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  border-bottom:1px solid rgba(224,162,62,.14);
}
.mark{font-family:var(--f-name);font-weight:600;font-size:.82rem;letter-spacing:.13em;
  white-space:nowrap;line-height:1.1;
  background:linear-gradient(180deg,var(--gold-hi),var(--gold) 60%,var(--gold-deep));
  -webkit-background-clip:text;background-clip:text;color:transparent}

/* masthead, shown only on the first screen where there is room for it.
   the bar keeps the name once the masthead goes away, so identity persists
   without the two of them competing */
body.empty .mark{visibility:hidden}
.mast{display:none}
body.empty .mast{display:block;text-align:center;padding:4px 0 30px}
.mast .mname{
  font-family:var(--f-name);font-weight:600;line-height:1;letter-spacing:.07em;
  font-size:clamp(27px,7.6vw,42px);
  background:linear-gradient(180deg,var(--gold-hi),var(--gold) 55%,var(--gold-deep));
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
.mast .mrule{height:1px;border:0;max-width:200px;margin:15px auto 13px;
  background:linear-gradient(90deg,transparent,var(--gold),transparent)}
.mast .mrole{
  font-weight:700;letter-spacing:.30em;text-transform:uppercase;
  font-size:clamp(9px,2.6vw,11px);color:var(--ivory-soft);
}
.spacer{flex:1}

.chip{
  display:inline-flex;align-items:center;gap:8px;max-width:56vw;
  padding:9px 14px;border-radius:999px;
  border:1px solid var(--line);background:rgba(24,37,69,.7);
  font-size:.82rem;font-weight:600;
}
.chip .dot{width:7px;height:7px;border-radius:50%;background:var(--gold);flex:none}
.chip .txt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.chip .caret{opacity:.6;flex:none}
.chip:active{background:rgba(34,52,95,.9)}

/* ---------- shell ---------- */
.shell{position:relative;z-index:1;padding:0 var(--pad);max-width:760px;margin:0 auto}

.stage-head{margin:26px 0 14px;display:flex;align-items:baseline;gap:10px}
.stage-head h2{
  font-family:var(--f-display);font-weight:400;font-size:1.34rem;letter-spacing:-.01em;
}
.stage-head .n{
  font-family:var(--f-data);font-size:.72rem;letter-spacing:.1em;
  color:var(--gold);border:1px solid var(--line);border-radius:6px;padding:2px 7px;
}

/* ---------- capture dock ---------- */
.dock{
  position:relative;overflow:hidden;
  margin-top:24px;padding:34px 22px 28px;
  border-radius:22px;
  border:1px dashed rgba(224,162,62,.32);
  background:linear-gradient(170deg,rgba(34,52,95,.55),rgba(16,26,54,.55));
  text-align:center;
}
.dock h1{
  font-family:var(--f-display);font-weight:400;font-size:1.62rem;line-height:1.2;
  letter-spacing:-.015em;
}
.dock p{margin-top:10px;color:var(--ivory-soft);font-size:.92rem;max-width:34ch;margin-inline:auto}
/* label picker, first thing on the page */
.pick{margin-top:22px;text-align:left}
.pick .plabel{
  display:block;font-size:.66rem;font-weight:700;letter-spacing:.13em;
  text-transform:uppercase;color:var(--ivory-dim);margin-bottom:8px;text-align:center;
}
/* one control, not a dropdown plus a New button. Everything to do with
   labels happens in the sheet, so this only has to show the current one and
   open it. */
.pick .pbtn{
  display:flex;align-items:center;gap:12px;width:100%;height:54px;
  padding:0 16px;border-radius:15px;
  border:1.5px solid var(--line);background:rgba(24,37,69,.85);color:var(--ivory);
  font-family:var(--f-body);font-size:1rem;font-weight:600;text-align:left;
}
.pick .pbtn:active{background:rgba(24,37,69,1)}
.pick .pbtn .pname{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pick .pbtn .pedit{
  flex:none;font-size:.72rem;font-weight:700;letter-spacing:.10em;
  text-transform:uppercase;color:var(--gold);
}

.dock .acts{display:flex;flex-direction:column;gap:11px;margin-top:20px}
@media(min-width:520px){.dock .acts{flex-direction:row;justify-content:center}}

.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:9px;
  min-height:54px;padding:0 24px;border-radius:15px;
  font-weight:700;font-size:1rem;letter-spacing:.01em;
  transition:transform .16s ease,box-shadow .2s ease,background .2s ease,opacity .2s ease;
}
.btn:active{transform:scale(.975)}
.btn svg{width:21px;height:21px;flex:none}
.btn-gold{background:linear-gradient(180deg,var(--gold-hi),var(--gold));color:#0E1A34;
  box-shadow:0 8px 22px rgba(224,162,62,.26)}
.btn-quiet{background:rgba(24,37,69,.85);color:var(--ivory);border:1px solid var(--line)}
.btn-quiet:active{background:rgba(34,52,95,.95)}
.btn[disabled]{opacity:.45;pointer-events:none}
.btn-wide{width:100%}

.hint{margin-top:18px;font-size:.79rem;color:var(--ivory-dim);line-height:1.5}

/* first run centers the dock so the action sits in the thumb's reach */
body.empty{padding-bottom:24px}
body.empty .shell{min-height:calc(100svh - 96px);display:flex;flex-direction:column;justify-content:center}
body.empty .dock{margin-top:0}
body.empty .bar{display:none}

/* shown only when the person scanning is not the person who owns the contacts */
.whose{
  display:flex;align-items:flex-start;gap:9px;
  margin-top:16px;padding:11px 14px;border-radius:12px;
  background:rgba(224,162,62,.10);border:1px solid var(--line);
  font-size:.79rem;color:var(--ivory-soft);line-height:1.4;
}
.whose svg{width:17px;height:17px;flex:none;stroke:var(--gold);margin-top:2px}
.whose b{color:var(--gold-hi);font-weight:700}

/* once photos exist the dock steps aside for this */
.addrow{display:flex;gap:8px;margin-top:22px}
.addrow .btn{flex:1;min-height:50px;padding:0 8px;font-size:.84rem;border-radius:13px;
  gap:6px;white-space:nowrap}
.addrow .btn svg{width:18px;height:18px}
@media(max-width:400px){.addrow .btn{font-size:.78rem;padding:0 5px}}

/* prompt shown between the two shots of a double sided card */
.flip{
  display:flex;align-items:center;gap:11px;
  margin-top:20px;padding:14px 16px;border-radius:15px;
  background:rgba(224,162,62,.13);border:1.5px solid var(--gold);
}
.flip .ftxt{flex:1;font-size:.87rem;font-weight:600;line-height:1.35}
.flip .ftxt small{display:block;font-weight:400;color:var(--ivory-soft);font-size:.78rem;margin-top:2px}
.flip .fgo{
  flex:none;padding:0 16px;height:44px;border-radius:12px;font-weight:700;font-size:.88rem;
  background:linear-gradient(180deg,var(--gold-hi),var(--gold));color:#0E1A34;
}
.flip .fx{flex:none;width:32px;height:32px;border-radius:50%;color:var(--ivory-soft);
  display:grid;place-items:center;font-size:1.1rem;line-height:1}

/* ---------- photo strip ---------- */
.strip{
  display:flex;gap:11px;overflow-x:auto;padding:4px 0 8px;
  scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch;
}
.strip::-webkit-scrollbar{height:0}
.shot{
  position:relative;flex:none;width:104px;height:70px;border-radius:11px;overflow:hidden;
  background:var(--ink2);border:1px solid rgba(224,162,62,.22);scroll-snap-align:start;
}
.shot img{width:100%;height:100%;object-fit:cover;opacity:.72}
.shot .badge{
  position:absolute;left:0;right:0;bottom:0;padding:4px 7px;
  font-size:.66rem;font-weight:700;letter-spacing:.04em;
  background:linear-gradient(180deg,transparent,rgba(10,16,36,.92));
}
.shot.done .badge{color:var(--gold-hi)}
.shot.empty .badge,.shot.error .badge{color:var(--bad)}
.shot .kill{
  position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;
  background:rgba(10,16,36,.8);display:grid;place-items:center;font-size:.8rem;line-height:1;
  color:var(--ivory);
}
.shot.busy::after{
  content:"";position:absolute;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,var(--gold-hi),transparent);
  animation:sweep 1.15s ease-in-out infinite;
}
@keyframes sweep{0%{top:0;opacity:0}12%{opacity:1}88%{opacity:1}100%{top:100%;opacity:0}}
.shot.busy img{opacity:.35}

/* ---------- result card ---------- */
.stack{display:flex;flex-direction:column;gap:13px;margin-bottom:12px}

.card{
  position:relative;
  background:linear-gradient(158deg,var(--paper),var(--paper-2));
  color:#12203F;border-radius:12px;
  box-shadow:0 10px 26px rgba(5,9,22,.5);
  overflow:hidden;
  animation:deal .5s cubic-bezier(.2,.8,.3,1) backwards;
  animation-delay:calc(var(--i,0) * 55ms);
}
@keyframes deal{
  from{opacity:0;transform:translateY(16px) rotate(-1.4deg) scale(.97)}
  to{opacity:1;transform:none}
}
.card::before{
  content:"";position:absolute;left:0;top:0;bottom:0;width:4px;
  background:linear-gradient(180deg,var(--gold-hi),var(--gold-deep));
}
.card.off{opacity:.42;filter:saturate(.5)}
.card.flag::before{background:linear-gradient(180deg,var(--warn),#C4791F)}

.face{display:flex;align-items:flex-start;gap:12px;padding:15px 14px 15px 18px;width:100%;text-align:left}
.face .who{flex:1;min-width:0}
.face .nm{
  font-family:var(--f-display);font-weight:500;font-size:1.1rem;line-height:1.22;
  letter-spacing:-.01em;color:#0F1A34;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.face .role{
  margin-top:2px;font-size:.82rem;color:#4A5470;line-height:1.35;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;
}
.face .bits{
  margin-top:7px;display:flex;flex-wrap:wrap;gap:5px 8px;
  font-family:var(--f-data);font-size:.72rem;color:#2C3A5E;
}
.face .bits span{
  display:inline-flex;align-items:center;gap:4px;
  background:rgba(18,32,63,.07);border-radius:5px;padding:2px 6px;
  max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.tick{
  flex:none;width:30px;height:30px;border-radius:9px;margin-top:1px;
  border:1.8px solid rgba(18,32,63,.28);display:grid;place-items:center;
  background:transparent;transition:background .18s ease,border-color .18s ease;
}
.tick svg{width:17px;height:17px;stroke:#0F1A34;opacity:0;transition:opacity .18s ease}
.card:not(.off) .tick{background:var(--gold);border-color:var(--gold-deep)}
.card:not(.off) .tick svg{opacity:1}

.note{
  display:flex;align-items:center;gap:7px;
  margin:0 14px 12px 18px;padding:7px 10px;border-radius:8px;
  background:rgba(224,162,62,.18);border:1px solid rgba(182,129,46,.35);
  font-size:.75rem;font-weight:600;color:#6B4A12;
}
.note svg{width:15px;height:15px;flex:none}

/* editor */
.edit{display:none;padding:2px 14px 16px 18px;border-top:1px solid rgba(18,32,63,.12)}
.card.open .edit{display:block}
.row{display:grid;gap:11px;margin-top:12px}
@media(min-width:460px){.row.two{grid-template-columns:1fr 1fr}}
.fld label{
  display:block;font-size:.66rem;font-weight:700;letter-spacing:.11em;
  text-transform:uppercase;color:#6A748C;margin-bottom:5px;
}
.fld input,.fld textarea{
  width:100%;padding:11px 12px;border-radius:9px;
  border:1.5px solid rgba(18,32,63,.18);background:#FFFCF5;
  font-size:16px;color:#12203F;line-height:1.4;
}
.fld input.data{font-family:var(--f-data);font-size:15px;letter-spacing:-.01em}
.fld textarea{min-height:66px;resize:vertical;font-size:15px}
.fld input:focus,.fld textarea:focus{outline:none;border-color:var(--gold-deep);background:#fff}
.edit .drop{
  margin-top:14px;display:flex;justify-content:space-between;align-items:center;gap:12px;
}
.linky{font-size:.79rem;font-weight:700;color:#8A5E14;text-decoration:underline;text-underline-offset:3px}
.linky.warn{color:#A5473C}

/* ---------- bottom bar ---------- */
.bar{
  position:fixed;left:0;right:0;bottom:0;z-index:31;
  padding:12px var(--pad) calc(12px + env(safe-area-inset-bottom));
  background:rgba(10,16,36,.94);
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  border-top:1px solid rgba(224,162,62,.16);
}
.bar .inner{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:7px}
.bar .sub{
  text-align:center;font-size:.73rem;color:var(--ivory-dim);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.bar .sub b{color:var(--gold);font-weight:700}

/* progress */
.prog{height:3px;border-radius:3px;background:rgba(224,162,62,.16);overflow:hidden;margin-bottom:4px}
.prog i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--gold),var(--gold-hi));
  transition:width .3s ease}

/* ---------- sheet ---------- */
.scrim{position:fixed;inset:0;z-index:40;background:rgba(5,9,22,.66);opacity:0;pointer-events:none;
  transition:opacity .25s ease}
.scrim.on{opacity:1;pointer-events:auto}
.sheet{
  position:fixed;left:0;right:0;bottom:0;z-index:41;
  max-height:82vh;display:flex;flex-direction:column;
  background:var(--ink1);border-top:1px solid var(--line);
  border-radius:22px 22px 0 0;
  padding:8px var(--pad) calc(20px + env(safe-area-inset-bottom));
  transform:translateY(101%);transition:transform .3s cubic-bezier(.2,.8,.3,1);
}
.sheet.on{transform:none}
.grab{width:42px;height:4px;border-radius:4px;background:rgba(243,236,221,.26);margin:6px auto 14px;flex:none}
.sheet h3{font-family:var(--f-display);font-weight:400;font-size:1.2rem;margin-bottom:4px}
.sheet .lede{font-size:.83rem;color:var(--ivory-soft);margin-bottom:14px}
.labels{overflow-y:auto;flex:1;margin:0 calc(var(--pad) * -1);padding:0 var(--pad)}
.lab{
  display:flex;align-items:center;gap:12px;flex:1;min-width:0;text-align:left;
  padding:14px 4px;
}
/* the row wraps the choose button and the delete button so the two sit on one
   line and only the choose half is a click target for picking the label */
.labrow{display:flex;align-items:center;border-bottom:1px solid rgba(243,236,221,.09)}
.labdel,.labren{
  flex:none;padding:10px;margin-left:2px;border-radius:8px;
  color:var(--ivory-dim);line-height:0;
}
.labdel svg,.labren svg{width:17px;height:17px}
.labdel:hover,.labdel:focus-visible{color:var(--bad);background:rgba(240,133,122,.10)}
.labren:hover,.labren:focus-visible{color:var(--gold);background:rgba(196,149,42,.10)}
.labrow.edit{background:rgba(196,149,42,.06)}
.labedit{display:flex;align-items:center;gap:9px;width:100%;padding:9px 4px}
.labedit input{
  flex:1;min-width:0;height:40px;padding:0 12px;border-radius:9px;
  border:1.5px solid var(--gold);background:rgba(10,21,38,.9);color:var(--ivory);
  font-family:var(--f-body);font-size:.95rem;font-weight:600;
}
.labedit input:focus{outline:none}
.labedit .save,.labedit .cancel{
  flex:none;padding:8px 13px;border-radius:9px;font-size:.79rem;font-weight:700;
}
.labedit .save{background:var(--gold);color:#2A1C05}
.labedit .cancel{color:var(--ivory-soft);border:1px solid var(--line)}
.labrow.arm{background:rgba(240,133,122,.07)}
.labrow.arm .labdel{color:var(--bad)}
/* the confirm replaces the row it belongs to rather than appearing next to
   it, so the list never grows or shifts under a thumb mid-tap */
.labrow.arm{background:rgba(240,133,122,.07)}
.labask{display:flex;align-items:center;gap:9px;width:100%;padding:11px 4px}
.labask .q{flex:1;min-width:0;font-size:.83rem;color:var(--ivory-soft)}
.labask .q b{color:var(--ivory);font-weight:600}
.labask .go,.labask .no{
  flex:none;padding:8px 13px;border-radius:9px;font-size:.79rem;font-weight:700;
}
.labask .go{background:var(--bad);color:#2A0B08}
.labask .no{color:var(--ivory-soft);border:1px solid var(--line)}
.lab .lname{flex:1;font-weight:600;font-size:.97rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lab .lcount{font-family:var(--f-data);font-size:.72rem;color:var(--ivory-dim)}
.lab .mark2{width:18px;height:18px;flex:none;opacity:0}
.lab.sel .mark2{opacity:1}
.lab.sel .lname{color:var(--gold-hi)}
.newlab{display:flex;gap:9px;margin-top:16px;flex:none}
.newlab input{
  flex:1;min-width:0;padding:13px 14px;border-radius:12px;
  border:1.5px solid var(--line);background:rgba(24,37,69,.7);font-size:16px;
}
.newlab input::placeholder{color:var(--ivory-dim)}
.newlab input:focus{outline:none;border-color:var(--gold)}
.dest{
  margin-top:14px;font-size:.73rem;color:var(--ivory-dim);text-align:center;
  line-height:1.4;
}
.dest b{color:var(--ivory-soft);font-weight:600}
.newlab button{
  flex:none;padding:0 18px;border-radius:12px;font-weight:700;font-size:.9rem;
  background:rgba(224,162,62,.16);color:var(--gold-hi);border:1px solid var(--line);
}

/* ---------- toast ---------- */
.toast{
  position:fixed;left:50%;bottom:calc(var(--bar-h) + 14px);z-index:50;
  transform:translate(-50%,14px);opacity:0;pointer-events:none;
  max-width:min(90vw,420px);
  padding:12px 16px;border-radius:12px;
  background:var(--ink2);border:1px solid var(--line);
  box-shadow:0 14px 34px rgba(5,9,22,.6);
  font-size:.86rem;font-weight:600;text-align:center;
  transition:opacity .25s ease,transform .25s ease;
}
.toast.on{opacity:1;transform:translate(-50%,0)}
.toast.bad{border-color:rgba(240,133,122,.5);color:#FFD9D4}

/* ---------- summary ---------- */
.done-wrap{text-align:center;padding:38px 8px 8px}
.done-ring{
  width:74px;height:74px;margin:0 auto 20px;border-radius:50%;
  border:2px solid var(--gold);display:grid;place-items:center;
  box-shadow:0 0 0 8px rgba(224,162,62,.09);
}
.done-ring svg{width:34px;height:34px;stroke:var(--gold-hi)}
.done-wrap h2{font-family:var(--f-display);font-weight:400;font-size:1.6rem;line-height:1.2}
.tally{display:flex;justify-content:center;gap:26px;margin:22px 0 6px}
.tally div{text-align:center}
.tally .v{font-family:var(--f-data);font-size:1.7rem;color:var(--gold-hi);line-height:1}
.tally .k{font-size:.68rem;letter-spacing:.13em;text-transform:uppercase;color:var(--ivory-dim);margin-top:6px}
.slip{
  margin-top:22px;text-align:left;border-top:1px solid rgba(243,236,221,.1);
  max-height:210px;overflow-y:auto;
}
.slip div{
  display:flex;gap:9px;padding:9px 2px;border-bottom:1px solid rgba(243,236,221,.07);
  font-size:.85rem;
}
.slip .s{font-family:var(--f-data);font-size:.68rem;letter-spacing:.06em;text-transform:uppercase;
  padding-top:3px;flex:none;width:64px}
.slip .s.created{color:var(--ok)}
.slip .s.existing{color:var(--ivory-dim)}
.slip .s.failed{color:var(--bad)}

.mirrors{margin-top:20px;text-align:left}
.mirrors .mh{
  font-size:.66rem;letter-spacing:.13em;text-transform:uppercase;
  color:var(--ivory-dim);margin-bottom:9px;
}
.mrow{
  display:flex;align-items:center;gap:10px;
  padding:10px 12px;border-radius:10px;margin-bottom:7px;
  background:rgba(24,37,69,.6);border:1px solid rgba(243,236,221,.09);
  font-size:.82rem;
}
.mrow .who2{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mrow .cnt{font-family:var(--f-data);font-size:.74rem;color:var(--gold-hi);flex:none}
.mrow.bad{border-color:rgba(240,133,122,.45)}
.mrow.bad .cnt{color:var(--bad)}
.mrow .why{
  flex-basis:100%;font-size:.74rem;color:#FFD9D4;line-height:1.4;margin-top:2px;
}

.hidden{display:none !important}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}

@media(prefers-reduced-motion:reduce){
  *{animation:none !important;transition-duration:.01ms !important}
  .card{animation:none}
}
</style>
</head>
<body>

<!--SB_NAV-->

<header class="top">
  <div class="mark" id="brandMark"></div>
  <div class="spacer"></div>
  <button class="chip" id="labelChip" aria-label="Change label">
    <span class="dot"></span>
    <span class="txt" id="labelTxt">Loading</span>
    <svg class="caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 9l7 7 7-7"/></svg>
  </button>
</header>

<main class="shell">

  <!-- capture -->
  <section id="viewCapture">
    <div class="mast">
      <div class="mname" id="brandName"></div>
      <hr class="mrule">
      <p class="mrole" id="brandRole"></p>
    </div>

    <div class="dock" id="dock">
      <h1 id="dockTitle">Turn a stack of cards into contacts</h1>
      <p id="dockLede">Photograph the cards one at a time, or lay several out and take one shot of the lot.</p>
      <div class="pick">
        <span class="plabel">Save these under</span>
        <button class="pbtn" id="labelOpen">
          <span class="pname" id="pbtnName">Loading</span>
          <span class="pedit">Change</span>
        </button>
      </div>

      <div class="acts">
        <button class="btn btn-gold" id="btnCamera">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2l1.2-2h8.2l1.2 2h2.2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="3.6"/></svg>
          Take a photo
        </button>
        <button class="btn btn-quiet" id="btnGallery">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 16l4.5-4.5 4 4 3-3L21 17"/><circle cx="8.5" cy="9.5" r="1.3"/></svg>
          Choose photos
        </button>
        <button class="btn btn-quiet" id="btnTwoSide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="13" height="9" rx="1.6"/><path d="M8.5 7V5.6A1.6 1.6 0 0 1 10.1 4h9.8A1.6 1.6 0 0 1 21.5 5.6v9A1.6 1.6 0 0 1 19.9 16H18.5"/></svg>
          Card with two sides
        </button>
      </div>
      <p class="hint" id="dockHint">Fill the frame with the card and keep it flat. Your phone camera lets you turn the flash on if the room is dark.</p>
    </div>

    <div class="flip hidden" id="flip">
      <span class="ftxt">Now photograph the back<small>Both sides are read together as one contact</small></span>
      <button class="fgo" id="btnBack">Back side</button>
      <button class="fx" id="btnFlipCancel" aria-label="Cancel">&times;</button>
    </div>

    <div class="whose hidden" id="whose">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.2-7 9.8-4-2.6-7-5.3-7-9.8V6z"/></svg>
      <span id="whoseTxt"></span>
    </div>

    <div class="addrow hidden" id="addRow">
      <button class="btn btn-gold" id="btnCamera2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2l1.2-2h8.2l1.2 2h2.2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="3.6"/></svg>
        Another photo
      </button>
      <button class="btn btn-quiet" id="btnTwoSide2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="13" height="9" rx="1.6"/><path d="M8.5 7V5.6A1.6 1.6 0 0 1 10.1 4h9.8A1.6 1.6 0 0 1 21.5 5.6v9A1.6 1.6 0 0 1 19.9 16H18.5"/></svg>
        Two sides
      </button>
      <button class="btn btn-quiet" id="btnGallery2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 16l4.5-4.5 4 4 3-3L21 17"/><circle cx="8.5" cy="9.5" r="1.3"/></svg>
        Gallery
      </button>
    </div>

    <div id="shotsWrap" class="hidden">
      <div class="stage-head">
        <h2>Photos</h2>
        <span class="n" id="shotCount">0</span>
      </div>
      <div class="strip" id="strip"></div>
    </div>

    <div id="foundWrap" class="hidden">
      <div class="stage-head">
        <h2>Found on the cards</h2>
        <span class="n" id="foundCount">0</span>
      </div>
      <div class="stack" id="stack"></div>
      <div style="display:flex;justify-content:space-between;padding:6px 2px 10px">
        <button class="linky" id="btnAll">Select all</button>
        <button class="linky" id="btnCsv">Download a CSV copy</button>
      </div>
    </div>
  </section>

  <!-- summary -->
  <section id="viewDone" class="hidden">
    <div class="done-wrap">
      <div class="done-ring">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>
      </div>
      <h2 id="doneTitle">Saved to Contacts</h2>
      <p class="lede" id="doneLede" style="color:var(--ivory-soft);font-size:.88rem;margin-top:8px"></p>
      <div class="tally">
        <div><div class="v" id="tCreated">0</div><div class="k">Added</div></div>
        <div><div class="v" id="tExisting">0</div><div class="k">Already had</div></div>
        <div><div class="v" id="tFailed">0</div><div class="k">Skipped</div></div>
      </div>
      <div class="slip" id="slip"></div>
      <div class="mirrors" id="mirrors"></div>
    </div>
  </section>

</main>

<div class="bar">
  <div class="inner">
    <div class="prog hidden" id="prog"><i id="progBar"></i></div>
    <button class="btn btn-gold btn-wide" id="btnMain">Take a photo</button>
    <div class="sub" id="barSub"></div>
  </div>
</div>

<div class="scrim" id="scrim"></div>
<aside class="sheet" id="sheet" role="dialog" aria-modal="true" aria-label="Choose a label">
  <div class="grab"></div>
  <h3>Labels</h3>
  <p class="lede">Tap one to save this batch under it, or type below to add one. The pencil renames a label, the bin removes it. Contacts are never deleted.</p>
  <div class="labels" id="labels"></div>
  <div class="newlab">
    <input id="newLabel" placeholder="New label name" autocomplete="off" enterkeyhint="done">
    <button id="btnNewLabel">Create</button>
  </div>
  <p class="dest" id="dest"></p>
</aside>

<div class="toast" id="toast" role="status" aria-live="polite"></div>

<input type="file" id="fileCamera" accept="image/*" capture="environment" class="sr" tabindex="-1">
<input type="file" id="fileGallery" accept="image/*" multiple class="sr" tabindex="-1">

<script>
/* ==================================================================
   BRAND BLOCK, text half. The palette and fonts are in the <style>
   above. These two strings are the only copy that names the business.
   ================================================================== */
var BRAND = {
  name: 'Sean & Barb',     // shown as the wordmark and the masthead
  role: 'Card Scanner'     // the small line under the masthead rule
};
/* ============================ END BRAND ========================== */

document.getElementById('brandMark').textContent = BRAND.name;
document.getElementById('brandName').textContent = BRAND.name;
document.getElementById('brandRole').textContent = BRAND.role;
document.title = BRAND.name + ' ' + BRAND.role;

/* ------------------------------------------------------------------ */
/* server bridge. Falls back to a demo so the page can be previewed    */
/* outside Apps Script without touching anyone's contacts.             */
/* ------------------------------------------------------------------ */
var LIVE = true;   /* the Worker always answers; demo() is kept for local file:// preview */

function call(fn, args){
  if(location.protocol === 'file:'){
    return new Promise(function(r){ setTimeout(function(){ r(demo(fn, args || [])); }, 620); });
  }
  return fetch('/api/cards/' + encodeURIComponent(fn), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ args: args || [] })
  }).then(function(res){
    return res.text().then(function(text){
      var data;
      try { data = JSON.parse(text); }
      catch(e){
        /* Cloudflare Access expiring mid-event returns an HTML sign-in page,
           which would otherwise surface as a JSON parse error on the phone. */
        throw new Error(res.status === 200
          ? 'The server sent back something unreadable. Retry.'
          : 'Signed out, or the server returned an error (' + res.status + '). Reload the page.');
      }
      if(!res.ok && !data.error) throw new Error('Server error ' + res.status + '. Retry.');
      return data;
    });
  });
}

function demo(fn, args){
  if(fn === 'getStartupState'){
    return {ok:true, keySet:true, owner:'owner@example.com',
      you:'teammate@example.com', mirrors:['teammate@example.com'], sharedLabel:'',
      defaultLabel:'Scanned cards',
      labels:[
        {name:'PSA 2025', resourceName:'contactGroups/a', count:34},
        {name:'Scanned cards', resourceName:'contactGroups/b', count:112},
        {name:'Speaking leads', resourceName:'contactGroups/c', count:19},
        {name:'UCF Advisory Board', resourceName:'contactGroups/d', count:8}
      ]};
  }
  if(fn === 'scanPhoto'){
    if((args[0] || []).length > 1){
      return {ok:true, cards:[
        {firstName:'Priya', lastName:'Raghunathan', fullName:'Priya Raghunathan',
         title:'Head of Partnerships', company:'Northgate Foundation',
         emails:['priya@northgate.org','partnerships@northgate.org'],
         phones:[{value:'(312) 555-0184', type:'mobile'},{value:'(312) 555-0100', type:'work'}],
         website:'northgate.org', address:'', confidence:0.91, unclear:[]}
      ]};
    }
    return {ok:true, cards:[
      {firstName:'Dana', lastName:'Whitfield', fullName:'Dana Whitfield', title:'Director of Survivor Services',
       company:'Harbor Point Alliance', emails:['dana@harborpoint.org'],
       phones:[{value:'(407) 555-0142', type:'mobile'}], website:'harborpoint.org',
       address:'220 Lake Ave, Orlando, FL 32801', confidence:0.94, unclear:[]},
      {firstName:'Marcus', lastName:'Oyelaran', fullName:'Marcus Oyelaran', title:'Conference Producer',
       company:'Global Summit Group', emails:['m.oyelaran@globalsummit.co'],
       phones:[{value:'+44 20 7946 0812', type:'work'}], website:'globalsummit.co',
       address:'', confidence:0.62, unclear:['phones']}
    ]};
  }
  if(fn === 'renameLabel'){
    return {ok:true, labels:[{name:args[1], resourceName:args[0], count:34}], warning:'', touched:34};
  }
  if(fn === 'deleteLabel'){
    return {ok:true, labels:[{name:'Scanned cards', resourceName:'contactGroups/b', count:112}], warning:''};
  }
  if(fn === 'createLabel'){
    return {ok:true, existed:false, label:{name:args[0], resourceName:'contactGroups/new'+Date.now(), count:0}};
  }
  if(fn === 'saveContacts'){
    var n = args[0].length;
    var rs = args[0].map(function(c){ return {name:c.fullName||'Card', status:'created'}; });
    return {ok:true, labelError:'', created:n, existing:0, failed:0, results:rs,
      accounts:[
        {account:'owner@example.com', mirror:false, created:n, existing:0, failed:0,
         results:rs, labelError:'', error:''},
        {account:'teammate@example.com', mirror:true, created:n, existing:0, failed:0,
         results:rs, labelError:'', error:''}
      ]};
  }
  return {ok:false, error:'Demo has no answer for '+fn};
}

/* ------------------------------------------------------------------ */
/* state                                                               */
/* ------------------------------------------------------------------ */
var S = {
  labels: [],
  mirrors: [],
  label: null,
  shots: [],
  cards: [],
  busy: false,
  seq: 0
};

var $ = function(id){ return document.getElementById(id); };

/* ------------------------------------------------------------------ */
/* boot                                                                */
/* ------------------------------------------------------------------ */
setBar("Save contacts", "", false);
refresh();
$('labelTxt').textContent = 'Loading';

call('getStartupState').then(function(st){
  if(!st || !st.ok){
    /* the common first-run case is that no Google account has been connected
       yet, which is a one-tap fix and deserves better than "reload". */
    if(st && st.needsConnect){
      $('dockHint').innerHTML = 'No Google account is connected yet. ' +
        '<a href="/auth/google" style="color:var(--gold);text-decoration:underline">Connect the account that should own the contacts</a>.';
      toast('Connect a Google account to start.', true);
      return;
    }
    toast((st && st.error) || 'Could not start up. Reload the page.', true);
    return;
  }
  S.labels = st.labels || [];
  if(!st.keySet){
    toast('The API key is not set yet, so cards cannot be read.', true);
    $('dockHint').textContent = 'Setup is not finished. Add ANTHROPIC_API_KEY in the Worker settings, then reload.';
  }
  if(st.labelError){ toast('Labels did not load. ' + st.labelError, true); }

  S.mirrors = st.mirrors || [];

  var me = (st.you || '').toLowerCase();
  var mineToo = S.mirrors.some(function(m){ return m.toLowerCase() === me; });
  var others = S.mirrors.filter(function(m){ return m.toLowerCase() !== me; });

  var lines = [];
  if(st.you && st.owner && st.you !== st.owner){
    lines.push('Signed in as <b>' + esc(st.you) + '</b>. Cards save into <b>' +
      esc(st.owner) + '</b> and are tagged with your name.');
  }
  if(mineToo){ lines.push('A copy lands in your own contacts too.'); }
  if(others.length){
    lines.push('Copies also go to <b>' + others.map(esc).join('</b>, <b>') + '</b>.');
  }
  if(st.sharedLabel){
    lines.push('Everything is also labeled <b>' + esc(st.sharedLabel) + '</b> for the team.');
  }
  if(lines.length){
    $('whose').classList.remove('hidden');
    $('whoseTxt').innerHTML = lines.join(' ');
  }

  if(st.owner){
    var dest = 'Contacts are saved into <b>' + esc(st.owner) + '</b>';
    if(S.mirrors.length){
      dest += ' and <b>' + S.mirrors.map(esc).join('</b>, <b>') + '</b>';
    }
    $('dest').innerHTML = dest + '.';
  }

  var pick = null;
  var remembered = memGet('label');
  S.labels.forEach(function(l){
    if(remembered && l.resourceName === remembered){ pick = l; }
  });
  if(!pick){
    S.labels.forEach(function(l){ if(!pick && l.name === st.defaultLabel){ pick = l; } });
  }
  if(!pick && S.labels.length){ pick = S.labels[0]; }
  setLabel(pick);
  if(!pick){ $('labelTxt').textContent = 'Pick a label'; }
}).catch(function(e){
  toast('Startup failed. ' + e.message, true);
});

/* label memory survives a reload without any storage permissions fuss */
function memGet(k){ try { return sessionStorage.getItem(k); } catch(e){ return null; } }
function memSet(k,v){ try { sessionStorage.setItem(k,v); } catch(e){} }

/* ------------------------------------------------------------------ */
/* label sheet                                                         */
/* ------------------------------------------------------------------ */
$('labelChip').addEventListener('click', openSheet);
$('scrim').addEventListener('click', closeSheet);

function openSheet(){
  drawLabels();
  $('scrim').classList.add('on');
  $('sheet').classList.add('on');
}
function closeSheet(){
  $('scrim').classList.remove('on');
  $('sheet').classList.remove('on');
  $('newLabel').blur();
}
document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closeSheet(); } });

function drawLabels(){
  var box = $('labels');
  box.innerHTML = '';
  if(!S.labels.length){
    var p = document.createElement('p');
    p.className = 'lede';
    p.style.padding = '18px 2px';
    p.textContent = 'No labels yet. Type a name below to add the first one.';
    box.appendChild(p);
    return;
  }
  S.labels.forEach(function(l){
    var row = document.createElement('div');
    row.className = 'labrow';

    var b = document.createElement('button');
    b.className = 'lab' + (S.label && S.label.resourceName === l.resourceName ? ' sel' : '');
    b.innerHTML =
      '<svg class="mark2" viewBox="0 0 24 24" fill="none" stroke="#F4DC92" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>' +
      '<span class="lname"></span><span class="lcount"></span>';
    b.querySelector('.lname').textContent = l.name;
    b.querySelector('.lcount').textContent = l.count ? l.count : '';
    b.addEventListener('click', function(){ setLabel(l); closeSheet(); });

    var ren = document.createElement('button');
    ren.className = 'labren';
    ren.setAttribute('aria-label', 'Rename the label ' + l.name);
    ren.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>';
    ren.addEventListener('click', function(){ armRename(row, l); });

    var del = document.createElement('button');
    del.className = 'labdel';
    del.setAttribute('aria-label', 'Delete the label ' + l.name);
    del.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M10 11v6M14 11v6M5 7l1 13h12l1-13M9 7V4h6v3"/></svg>';
    del.addEventListener('click', function(){ armDelete(row, l); });

    row.appendChild(b);
    row.appendChild(ren);
    row.appendChild(del);
    box.appendChild(row);
  });
}

/* One confirm, worded around the thing worth worrying about: the people are
   never deleted, only the grouping. No browser dialog, which on a phone is
   easy to dismiss by accident and explains nothing. */
function armDelete(row, l){
  row.classList.add('arm');
  row.innerHTML = '';

  var ask = document.createElement('div');
  ask.className = 'labask';
  ask.innerHTML = '<span class="q">Delete <b></b>? Contacts are kept.</span>' +
    '<button class="no">Keep</button><button class="go">Delete</button>';
  ask.querySelector('b').textContent = l.name;
  ask.querySelector('.no').addEventListener('click', drawLabels);
  ask.querySelector('.go').addEventListener('click', function(){ doDelete(ask, l); });

  row.appendChild(ask);
  ask.querySelector('.no').focus();
}

/* Renaming reuses the delete pattern: the row becomes the editor, so the
   list never grows or shifts under a thumb. */
function armRename(row, l){
  row.classList.add('edit');
  row.innerHTML = '';

  var box = document.createElement('div');
  box.className = 'labedit';
  box.innerHTML = '<input maxlength="60" autocomplete="off" enterkeyhint="done" aria-label="New name">' +
    '<button class="cancel">Cancel</button><button class="save">Save</button>';

  var input = box.querySelector('input');
  input.value = l.name;
  box.querySelector('.cancel').addEventListener('click', drawLabels);
  box.querySelector('.save').addEventListener('click', function(){ doRename(box, l); });
  input.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ doRename(box, l); }
    if(e.key === 'Escape'){ e.stopPropagation(); drawLabels(); }
  });

  row.appendChild(box);
  input.focus();
  input.select();
}

function doRename(box, l){
  var input = box.querySelector('input');
  var save = box.querySelector('.save');
  var name = input.value.trim();
  if(!name || name === l.name){ drawLabels(); return; }

  save.disabled = true;
  save.textContent = '...';
  call('renameLabel', [l.resourceName, name]).then(function(r){
    if(!r.ok){ save.disabled = false; save.textContent = 'Save'; toast(r.error, true); return; }
    S.labels = r.labels || [];
    /* the selected label is the same group, so carry the selection across
       rather than dropping it just because the name changed */
    if(S.label && S.label.resourceName === l.resourceName){
      var moved = null;
      S.labels.forEach(function(x){ if(x.resourceName === l.resourceName){ moved = x; } });
      setLabel(moved);
    }
    drawLabels();
    toast(r.warning ? r.warning
      : (r.touched ? 'Renamed. ' + r.touched + ' contact' + (r.touched === 1 ? '' : 's') + ' updated.'
                   : 'Renamed.'));
  }).catch(function(e){
    save.disabled = false;
    save.textContent = 'Save';
    toast(e.message || 'Could not rename that label.', true);
  });
}

function doDelete(ask, l){
  var go = ask.querySelector('.go');
  go.disabled = true;
  go.textContent = '...';
  call('deleteLabel', [l.resourceName]).then(function(r){
    if(!r.ok){ go.disabled = false; go.textContent = 'Delete'; toast(r.error, true); return; }
    S.labels = r.labels || [];
    /* a save must never point at a label that no longer exists */
    if(S.label && S.label.resourceName === l.resourceName){
      setLabel(S.labels.length ? S.labels[0] : null);
    }
    drawLabels();
    toast(r.warning ? r.warning : 'Label deleted. The contacts are still there.');
  }).catch(function(e){
    go.disabled = false;
    go.textContent = 'Delete';
    toast(e.message || 'Could not delete that label.', true);
  });
}

function setLabel(l){
  S.label = l || null;
  $('labelTxt').textContent = l ? l.name : 'Pick a label';
  if(l){ memSet('label', l.resourceName); }
  fillPicker();
  refresh();
}

/* the dropdown on the first screen and the chip in the bar are two views of
   the same choice, so both are redrawn together */
function fillPicker(){
  $('pbtnName').textContent = S.label ? S.label.name
    : (S.labels.length ? 'Pick a label' : 'Add a label');
}

$('labelOpen').addEventListener('click', openSheet);

$('btnNewLabel').addEventListener('click', makeLabel);
$('newLabel').addEventListener('keydown', function(e){ if(e.key === 'Enter'){ makeLabel(); } });

function makeLabel(){
  var name = $('newLabel').value.trim();
  if(!name){ return; }
  var btn = $('btnNewLabel');
  btn.disabled = true;
  btn.textContent = '...';
  call('createLabel', [name]).then(function(r){
    btn.disabled = false;
    btn.textContent = 'Create';
    if(!r.ok){ toast(r.error, true); return; }
    if(!r.existed){ S.labels.push(r.label); S.labels.sort(function(a,b){
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1; }); }
    $('newLabel').value = '';
    setLabel(r.label);
    toast(r.existed ? 'That label already existed, so it is selected.' : 'Label created.');
    closeSheet();
  }).catch(function(e){
    btn.disabled = false;
    btn.textContent = 'Create';
    toast('Could not create that label. ' + e.message, true);
  });
}

/* ------------------------------------------------------------------ */
/* taking photos                                                       */
/* ------------------------------------------------------------------ */
// pending front of a double sided card, waiting for its back
S.pendingFront = null;

function startTwoSide(){
  S.pendingFront = null;
  S.wantPair = true;
  $('fileCamera').click();
}
$('btnTwoSide').addEventListener('click', startTwoSide);
$('btnTwoSide2').addEventListener('click', startTwoSide);
$('btnBack').addEventListener('click', function(){ $('fileCamera').click(); });
$('btnFlipCancel').addEventListener('click', function(){
  // keep the front they already took rather than throwing it away
  var front = S.pendingFront;
  S.pendingFront = null;
  S.wantPair = false;
  showFlip(false);
  if(front){ runShot([front], 'single'); }
});

function showFlip(on){
  $('flip').classList.toggle('hidden', !on);
}

$('btnCamera').addEventListener('click', function(){ S.wantPair = false; $('fileCamera').click(); });
$('btnGallery').addEventListener('click', function(){ S.wantPair = false; $('fileGallery').click(); });
$('btnCamera2').addEventListener('click', function(){ S.wantPair = false; $('fileCamera').click(); });
$('btnGallery2').addEventListener('click', function(){ S.wantPair = false; $('fileGallery').click(); });
$('fileCamera').addEventListener('change', onFiles);
$('fileGallery').addEventListener('change', onFiles);

function onFiles(e){
  var files = Array.prototype.slice.call(e.target.files || []);
  e.target.value = '';
  if(!files.length){
    // they backed out of the camera, so drop any half finished pair
    if(S.wantPair && !S.pendingFront){ S.wantPair = false; }
    return;
  }

  if(S.wantPair){
    if(!S.pendingFront){
      // first of two. hold it and ask for the back
      S.pendingFront = files[0];
      showFlip(true);
      return;
    }
    var pair = [S.pendingFront, files[0]];
    S.pendingFront = null;
    S.wantPair = false;
    showFlip(false);
    runShot(pair, 'pair');
    return;
  }

  files.forEach(function(f){ runShot([f], 'single'); });
}

/**
 * One strip entry per scan. files is one photo, or two when they are the
 * front and back of the same card, in which case both go to the reader in a
 * single call so it can merge them itself.
 */
function runShot(files, kind){
  var shot = {
    id: 'sh' + (++S.seq),
    state: 'prep',
    thumb: '',
    found: 0,
    pair: kind === 'pair',
    msg: 'Getting ready'
  };
  S.shots.push(shot);
  drawStrip();
  refresh();

  Promise.all(files.map(prepImage)).then(function(outs){
    shot.thumb = outs[0].dataUrl;
    shot.state = 'busy';
    shot.msg = 'Reading';
    drawStrip();
    return call('scanPhoto', [outs.map(function(o){ return o.dataUrl; })]);
  }).then(function(r){
    if(!r || !r.ok){
      shot.state = 'error';
      shot.msg = 'Retry';
      toast((r && r.error) || 'That photo could not be read.', true);
    } else if(!r.cards.length){
      shot.state = 'empty';
      shot.msg = 'Nothing';
      toast('No card found in that photo. Move closer and fill the frame.', true);
    } else {
      shot.state = 'done';
      shot.found = r.cards.length;
      shot.msg = shot.pair
        ? (r.cards.length === 1 ? '2 sides' : r.cards.length + ' cards')
        : r.cards.length + (r.cards.length === 1 ? ' card' : ' cards');
      r.cards.forEach(function(c){
        c._id = 'c' + (++S.seq);
        c._on = true;
        c._open = false;
        c._shot = shot.id;
        c.meetingNote = '';
        S.cards.push(c);
      });
      flagDupes();
      drawStack();
    }
    drawStrip();
    refresh();
  }).catch(function(err){
    shot.state = 'error';
    shot.msg = 'Retry';
    drawStrip();
    refresh();
    toast('That photo could not be read. ' + err.message, true);
  });
}

function dropShot(id){
  S.shots = S.shots.filter(function(s){ return s.id !== id; });
  S.cards = S.cards.filter(function(c){ return c._shot !== id; });
  flagDupes();
  drawStrip();
  drawStack();
  refresh();
}

function drawStrip(){
  var wrap = $('shotsWrap');
  wrap.classList.toggle('hidden', S.shots.length === 0);
  $('shotCount').textContent = S.shots.length;

  var strip = $('strip');
  strip.innerHTML = '';
  S.shots.forEach(function(s){
    var d = document.createElement('div');
    d.className = 'shot ' + s.state;
    var img = s.thumb ? '<img src="' + s.thumb + '" alt="">' : '';
    d.innerHTML = img + '<span class="badge"></span>' +
      '<button class="kill" aria-label="Remove photo">&times;</button>';
    d.querySelector('.badge').textContent = s.msg;
    d.querySelector('.kill').addEventListener('click', function(){ dropShot(s.id); });
    strip.appendChild(d);
  });
}

/* ------------------------------------------------------------------ */
/* photo prep: downscale, straighten the exposure, compress            */
/* ------------------------------------------------------------------ */
function prepImage(file){
  return loadBitmap(file).then(function(img){
    var maxEdge = 1600;
    var w = img.width, h = img.height;
    var k = Math.min(1, maxEdge / Math.max(w, h));
    w = Math.round(w * k); h = Math.round(h * k);

    var c = document.createElement('canvas');
    c.width = w; c.height = h;
    var ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0, w, h);
    if(img.close){ img.close(); }

    autoLevels(ctx, w, h);

    var q = 0.82;
    var url = c.toDataURL('image/jpeg', q);
    // Keep the payload comfortable for one round trip.
    while(url.length > 2600000 && q > 0.45){
      q -= 0.12;
      url = c.toDataURL('image/jpeg', q);
    }
    return {dataUrl: url};
  });
}

function loadBitmap(file){
  if(window.createImageBitmap){
    return createImageBitmap(file, {imageOrientation: 'from-image'}).catch(function(){
      return legacyLoad(file);
    });
  }
  return legacyLoad(file);
}

function legacyLoad(file){
  return new Promise(function(resolve, reject){
    var url = URL.createObjectURL(file);
    var im = new Image();
    im.onload = function(){ URL.revokeObjectURL(url); resolve(im); };
    im.onerror = function(){ URL.revokeObjectURL(url); reject(new Error('The photo would not open.')); };
    im.src = url;
  });
}

/**
 * A gentle levels stretch. Conference rooms are dim and cards are often shot
 * in shadow, so pulling the darkest and lightest 0.5 percent out to the ends
 * makes small print far easier to read. Photos that are already well exposed
 * are left alone.
 */
function autoLevels(ctx, w, h){
  var d;
  try { d = ctx.getImageData(0, 0, w, h); } catch(e){ return; }
  var px = d.data, hist = new Uint32Array(256), i, lum;

  for(i = 0; i < px.length; i += 16){
    lum = (px[i] * 77 + px[i+1] * 151 + px[i+2] * 28) >> 8;
    hist[lum]++;
  }

  var total = 0;
  for(i = 0; i < 256; i++){ total += hist[i]; }
  var cut = Math.floor(total * 0.005), run = 0, lo = 0, hi = 255;
  for(i = 0; i < 256; i++){ run += hist[i]; if(run > cut){ lo = i; break; } }
  run = 0;
  for(i = 255; i >= 0; i--){ run += hist[i]; if(run > cut){ hi = i; break; } }

  if(hi - lo < 24 || hi - lo > 232){ return; }

  var scale = 255 / (hi - lo), map = new Uint8ClampedArray(256), v;
  for(i = 0; i < 256; i++){
    v = (i - lo) * scale;
    map[i] = v < 0 ? 0 : (v > 255 ? 255 : v);
  }
  for(i = 0; i < px.length; i += 4){
    px[i] = map[px[i]];
    px[i+1] = map[px[i+1]];
    px[i+2] = map[px[i+2]];
  }
  ctx.putImageData(d, 0, 0);
}

/* ------------------------------------------------------------------ */
/* the found cards                                                     */
/* ------------------------------------------------------------------ */
function flagDupes(){
  var seen = {};
  S.cards.forEach(function(c){
    c._dupe = false;
    liveEmails(c).forEach(function(e){
      var k = e.toLowerCase();
      if(!k){ return; }
      if(seen[k] && seen[k] !== c._id){ c._dupe = true; }
      else { seen[k] = c._id; }
    });
  });
}

function drawStack(){
  var wrap = $('foundWrap');
  wrap.classList.toggle('hidden', S.cards.length === 0);
  $('foundCount').textContent = S.cards.length;

  var stack = $('stack');
  stack.innerHTML = '';
  S.cards.forEach(function(c, i){
    stack.appendChild(cardEl(c, i));
  });
}

function cardEl(c, i){
  var flag = needsEyes(c);
  var el = document.createElement('article');
  el.className = 'card' + (c._on ? '' : ' off') + (c._open ? ' open' : '') + (flag ? ' flag' : '');
  el.style.setProperty('--i', i);

  var bits = [];
  liveEmails(c).forEach(function(e){ bits.push(esc(e)); });
  livePhones(c).forEach(function(p){ bits.push(esc(p.value)); });

  var role = [c.title, c.company].filter(Boolean).join(', ');

  el.innerHTML =
    '<button class="face">' +
      '<span class="who">' +
        '<span class="nm"></span>' +
        (role ? '<span class="role"></span>' : '') +
        (bits.length ? '<span class="bits">' + bits.map(function(b){ return '<span>' + b + '</span>'; }).join('') + '</span>' : '') +
      '</span>' +
      '<span class="tick" role="checkbox"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg></span>' +
    '</button>' +
    (flag ? '<div class="note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M12 8v5M12 16.5v.01"/><circle cx="12" cy="12" r="9"/></svg><span></span></div>' : '') +
    editEl(c);

  el.querySelector('.nm').textContent = c.fullName || 'Name not read';
  if(role){ el.querySelector('.role').textContent = role; }
  if(flag){ el.querySelector('.note span').textContent = flag; }

  el.querySelector('.face').addEventListener('click', function(ev){
    if(ev.target.closest('.tick')){
      c._on = !c._on;
      drawStack();
      refresh();
      return;
    }
    c._open = !c._open;
    drawStack();
  });

  wireEdit(el, c);
  return el;
}

function needsEyes(c){
  if(c._dupe){ return 'This email is on another card in this batch. Check before saving.'; }
  if(!c.fullName){ return 'No name came through. Add one before saving.'; }
  if(!liveEmails(c).length && !livePhones(c).length){ return 'No email and no phone. Add a way to reach them.'; }
  if(typeof c.confidence === 'number' && c.confidence < 0.7){
    var f = (c.unclear || []).join(', ');
    return f ? 'Hard to read. Check the ' + f + '.' : 'Hard to read. Check every field.';
  }
  return '';
}

function editEl(c){
  return '<div class="edit">' +
    '<div class="row two">' +
      fld('First name', 'firstName', c.firstName) +
      fld('Last name', 'lastName', c.lastName) +
    '</div>' +
    '<div class="row two">' +
      fld('Job title', 'title', c.title) +
      fld('Company', 'company', c.company) +
    '</div>' +
    contactRows(c) +
    '<div class="row two">' +
      fld('Website', 'website', c.website, true) +
      fld('Address', 'address', c.address) +
    '</div>' +
    '<div class="row">' +
      '<div class="fld"><label>Where you met</label>' +
      '<textarea data-k="meetingNote" placeholder="Anything you want to remember about this person"></textarea></div>' +
    '</div>' +
    '<div class="drop">' +
      '<button class="linky" data-act="close">Done editing</button>' +
      '<button class="linky warn" data-act="remove">Remove this card</button>' +
    '</div>' +
  '</div>';
}

/* One field per value found, plus a spare of each so anything the reader
   missed can be typed in. Two sided cards routinely carry a second number. */
function contactRows(c){
  var emails = c.emails || [];
  var phones = c.phones || [];
  var ne = Math.max(emails.length, 1) + 1;
  var np = Math.max(phones.length, 1) + 1;
  var out = '';

  for(var i = 0; i < ne; i++){
    var pe = (i < np) ? fld(i ? 'Phone ' + (i + 1) : 'Phone', 'phone' + i, '', true) : '';
    out += '<div class="row two">' +
      fld(i ? 'Email ' + (i + 1) : 'Email', 'email' + i, '', true) + pe +
    '</div>';
  }
  for(var j = ne; j < np; j++){
    out += '<div class="row two">' +
      fld('Phone ' + (j + 1), 'phone' + j, '', true) +
    '</div>';
  }
  return out;
}

function fld(label, key, val, data){
  return '<div class="fld"><label>' + label + '</label>' +
    '<input data-k="' + key + '"' + (data ? ' class="data"' : '') +
    ' value="" autocomplete="off" spellcheck="false"></div>';
}

function wireEdit(el, c){
  var box = el.querySelector('.edit');
  if(!box){ return; }

  box.querySelectorAll('[data-k]').forEach(function(inp){
    var k = inp.getAttribute('data-k');
    inp.value = readKey(c, k);
    inp.addEventListener('input', function(){
      writeKey(c, k, inp.value);
      if(k === 'firstName' || k === 'lastName'){
        c.fullName = ((c.firstName || '') + ' ' + (c.lastName || '')).trim();
        var nm = el.querySelector('.nm');
        if(nm){ nm.textContent = c.fullName || 'Name not read'; }
      }
      if(k.indexOf('email') === 0){ flagDupes(); }
    });
    inp.addEventListener('click', function(ev){ ev.stopPropagation(); });
  });

  box.querySelector('[data-act="close"]').addEventListener('click', function(){
    c._open = false;
    drawStack();
  });
  box.querySelector('[data-act="remove"]').addEventListener('click', function(){
    S.cards = S.cards.filter(function(x){ return x._id !== c._id; });
    flagDupes();
    drawStack();
    refresh();
  });
}

function readKey(c, k){
  var m = k.match(/^email(\\d+)$/);
  if(m){ return (c.emails || [])[+m[1]] || ''; }
  m = k.match(/^phone(\\d+)$/);
  if(m){ return ((c.phones || [])[+m[1]] || {}).value || ''; }
  return c[k] || '';
}

/* Emptied fields are left in place as blanks rather than spliced out, because
   removing one mid-edit would shift every field below it onto the wrong value.
   The blanks are filtered when the batch is saved. */
function writeKey(c, k, v){
  var m = k.match(/^email(\\d+)$/);
  if(m){
    c.emails = c.emails || [];
    c.emails[+m[1]] = v.trim();
    return;
  }
  m = k.match(/^phone(\\d+)$/);
  if(m){
    var i = +m[1];
    c.phones = c.phones || [];
    if(c.phones[i]){ c.phones[i].value = v.trim(); }
    else { c.phones[i] = {value: v.trim(), type: 'work'}; }
    return;
  }
  c[k] = v;
}

/* the values that actually count, ignoring blanks left by editing */
function liveEmails(c){
  return (c.emails || []).map(function(e){ return String(e || '').trim(); })
    .filter(Boolean);
}
function livePhones(c){
  return (c.phones || []).filter(function(p){ return p && String(p.value || '').trim(); });
}

$('btnAll').addEventListener('click', function(){
  var anyOff = S.cards.some(function(c){ return !c._on; });
  S.cards.forEach(function(c){ c._on = anyOff; });
  $('btnAll').textContent = anyOff ? 'Clear all' : 'Select all';
  drawStack();
  refresh();
});

/* ------------------------------------------------------------------ */
/* saving                                                              */
/* ------------------------------------------------------------------ */
$('btnMain').addEventListener('click', function(){
  if(S.busy){ return; }
  if($('viewDone').classList.contains('hidden') === false){ startOver(); return; }
  var picked = chosen();
  if(!picked.length){ return; }
  save(picked);
});

function chosen(){
  return S.cards.filter(function(c){ return c._on; });
}

function save(list){
  if(!S.label){ toast('Pick a label first.', true); openSheet(); return; }

  var bad = list.filter(function(c){
    return !c.fullName || (!liveEmails(c).length && !livePhones(c).length);
  });
  if(bad.length){
    toast(bad.length + (bad.length === 1 ? ' card needs' : ' cards need') + ' a name and a way to reach them.', true);
    return;
  }

  S.busy = true;
  $('prog').classList.remove('hidden');
  setBar('Saving', 'to ' + S.label.name, false);

  // each call rebuilds a contact index per account, so fewer larger calls cost
  // far less than many small ones once mirroring is on
  var chunks = [], size = 25;
  for(var i = 0; i < list.length; i += size){ chunks.push(list.slice(i, i + size)); }

  var tally = {created:0, existing:0, failed:0, results:[], labelError:'', accounts:{}};
  var done = 0;

  function step(){
    if(!chunks.length){ finish(tally); return; }
    var batch = chunks.shift().map(strip);
    call('saveContacts', [batch, S.label.resourceName, S.label.name]).then(function(r){
      if(!r || !r.ok){
        tally.failed += batch.length;
        batch.forEach(function(c){
          tally.results.push({name: c.fullName || 'Card', status:'failed', error:(r && r.error) || ''});
        });
      } else {
        tally.created += r.created;
        tally.existing += r.existing;
        tally.failed += r.failed;
        tally.results = tally.results.concat(r.results);
        if(r.labelError){ tally.labelError = r.labelError; }
        (r.accounts || []).forEach(function(a){
          var slot = tally.accounts[a.account] ||
            (tally.accounts[a.account] = {account:a.account, mirror:a.mirror,
              created:0, existing:0, failed:0, labelError:'', error:''});
          slot.created += a.created; slot.existing += a.existing; slot.failed += a.failed;
          if(a.labelError){ slot.labelError = a.labelError; }
          if(a.error){ slot.error = a.error; }
        });
      }
      done += batch.length;
      $('progBar').style.width = Math.round(done / list.length * 100) + '%';
      step();
    }).catch(function(e){
      tally.failed += batch.length;
      batch.forEach(function(c){
        tally.results.push({name: c.fullName || 'Card', status:'failed', error:e.message});
      });
      done += batch.length;
      $('progBar').style.width = Math.round(done / list.length * 100) + '%';
      step();
    });
  }
  step();
}

function strip(c){
  return {
    firstName: c.firstName, lastName: c.lastName, fullName: c.fullName,
    title: c.title, company: c.company, emails: liveEmails(c),
    phones: livePhones(c), website: c.website, address: c.address,
    meetingNote: c.meetingNote || ''
  };
}

function finish(t){
  S.busy = false;
  $('prog').classList.add('hidden');
  $('progBar').style.width = '0';
  $('viewCapture').classList.add('hidden');
  $('viewDone').classList.remove('hidden');

  $('tCreated').textContent = t.created;
  $('tExisting').textContent = t.existing;
  $('tFailed').textContent = t.failed;
  $('doneTitle').textContent = t.failed && !t.created ? 'Nothing saved' : 'Saved to Contacts';
  $('doneLede').textContent = t.labelError ? t.labelError :
    'Labeled ' + S.label.name + ' in Google Contacts.';

  var slip = $('slip');
  slip.innerHTML = '';
  t.results.forEach(function(r){
    var d = document.createElement('div');
    d.innerHTML = '<span class="s ' + r.status + '"></span><span class="who"></span>';
    d.querySelector('.s').textContent = r.status === 'created' ? 'Added' :
      (r.status === 'existing' ? 'Had it' : 'Skipped');
    d.querySelector('.who').textContent = r.name + (r.error ? ' (' + r.error + ')' : '');
    slip.appendChild(d);
  });

  var mirrors = Object.keys(t.accounts || {}).map(function(k){ return t.accounts[k]; })
    .filter(function(a){ return a.mirror; });
  var mbox = $('mirrors');
  mbox.innerHTML = '';
  if(mirrors.length){
    var head = document.createElement('div');
    head.className = 'mh';
    head.textContent = 'Also copied to';
    mbox.appendChild(head);
    mirrors.forEach(function(a){
      var trouble = a.error || a.labelError;
      var row = document.createElement('div');
      row.className = 'mrow' + (trouble ? ' bad' : '');
      row.innerHTML = '<span class="who2"></span><span class="cnt"></span>' +
        (trouble ? '<span class="why"></span>' : '');
      row.querySelector('.who2').textContent = a.account;
      row.querySelector('.cnt').textContent = a.failed && !a.created ? 'failed' :
        (a.created + a.existing) + ' saved';
      if(trouble){ row.querySelector('.why').textContent = trouble; }
      mbox.appendChild(row);
    });
  }

  setBar('Scan more cards', '', true);
  window.scrollTo({top:0, behavior:'smooth'});
}

function startOver(){
  S.shots = [];
  S.cards = [];
  $('viewDone').classList.add('hidden');
  $('viewCapture').classList.remove('hidden');
  drawStrip();
  drawStack();
  refresh();
  window.scrollTo({top:0});
}

/* ------------------------------------------------------------------ */
/* chrome                                                              */
/* ------------------------------------------------------------------ */
function refresh(){
  var fresh = S.shots.length === 0 && S.cards.length === 0;
  var onDone = !$('viewDone').classList.contains('hidden');

  document.body.classList.toggle('empty', fresh && !onDone);
  $('dock').classList.toggle('hidden', !fresh);
  $('addRow').classList.toggle('hidden', fresh);

  if(S.busy || onDone){ return; }

  var picked = chosen().length;
  var reading = S.shots.filter(function(s){ return s.state === 'prep' || s.state === 'busy'; }).length;

  if(reading){
    setBar('Reading ' + reading + (reading === 1 ? ' photo' : ' photos'), '', false);
    return;
  }
  if(!picked){
    setBar('Save contacts', S.cards.length ? 'Select a card to save it' : 'No cards read yet', false);
    return;
  }
  var where = S.label ? 'to <b>' + esc(S.label.name) + '</b>' : 'Pick a label first';
  if(S.label && S.mirrors.length){
    where += ' in ' + (S.mirrors.length + 1) + ' accounts';
  } else if(S.label){
    where += ' in Google Contacts';
  }
  setBar('Save ' + picked + (picked === 1 ? ' contact' : ' contacts'), where, true);
}

function setBar(label, sub, on){
  $('btnMain').textContent = label;
  $('btnMain').disabled = !on;
  $('barSub').innerHTML = sub || '';
}

var toastTimer;
function toast(msg, bad){
  var t = $('toast');
  t.textContent = msg;
  t.className = 'toast on' + (bad ? ' bad' : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ t.className = 'toast' + (bad ? ' bad' : ''); }, 4200);
}

function esc(s){
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

/* ------------------------------------------------------------------ */
/* CSV safety net                                                      */
/* ------------------------------------------------------------------ */
$('btnCsv').addEventListener('click', function(){
  if(!S.cards.length){ return; }
  var head = ['First name','Last name','Job title','Company','Email','Phone','Website','Address','Note'];
  var rows = [head].concat(S.cards.map(function(c){
    return [
      c.firstName || '', c.lastName || '', c.title || '', c.company || '',
      liveEmails(c).join(' / '), livePhones(c).map(function(p){ return p.value; }).join(' / '),
      c.website || '', c.address || '', c.meetingNote || ''
    ];
  }));
  var csv = rows.map(function(r){
    return r.map(function(v){ return '"' + String(v).replace(/"/g,'""') + '"'; }).join(',');
  }).join('\\r\\n');

  var a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent('\\ufeff' + csv);
  a.download = 'scanned-cards.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast('CSV downloaded.');
});
<\/script>
</body>
</html>
`;

// cards.js
var MODEL_DEFAULT = "claude-sonnet-4-6";
var MAX_CARDS_PER_PHOTO = 12;
var SOURCE_TAG = "Business card scan";
var DEFAULT_LABEL = "Scanned cards";
var SCOPES = "https://www.googleapis.com/auth/contacts https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/gmail.modify";
var kAccounts = /* @__PURE__ */ __name(() => "cards:accounts", "kAccounts");
var kRefresh = /* @__PURE__ */ __name((e) => "cards:rt:" + e.toLowerCase(), "kRefresh");
var kAccess = /* @__PURE__ */ __name((e) => "cards:at:" + e.toLowerCase(), "kAccess");
async function accounts(env) {
  const raw = await env.TOKENS.get(kAccounts());
  return raw ? JSON.parse(raw) : [];
}
__name(accounts, "accounts");
async function rememberAccount(env, email) {
  const list = await accounts(env);
  const lower = email.toLowerCase();
  if (!list.some((a) => a.toLowerCase() === lower)) {
    list.push(email);
    await env.TOKENS.put(kAccounts(), JSON.stringify(list));
  }
}
__name(rememberAccount, "rememberAccount");
function sbHeader() {
  return `<style>
.sbhdr{background:#0D1B2E;color:#F5F0E8;padding:18px 20px;
  font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing:antialiased}
.sbhdr .sbwrap{max-width:780px;margin:0 auto;display:flex;align-items:center;gap:8px}
.sbhdr .sbmark{font-weight:700;letter-spacing:.02em;white-space:nowrap;flex:0 0 auto}
.sbhdr .sbmark b{color:#C4952A}
.sbhdr .sbrole{white-space:nowrap;flex:0 0 auto}
/* the links scroll sideways rather than wrapping, so the bar stays one line
   deep on a phone instead of pushing the page down */
.sbhdr .sblinks{margin-left:auto;display:flex;align-items:center;overflow-x:auto;
  scrollbar-width:none;-webkit-overflow-scrolling:touch}
.sbhdr .sblinks::-webkit-scrollbar{display:none}
.sbhdr .sblinks a{color:#E6D6BC;text-decoration:none;margin-left:14px;font-size:.88rem;white-space:nowrap}
.sbhdr .sblinks a:hover{color:#C4952A}
.sbhdr .sblinks a[aria-current="page"]{color:#C4952A;font-weight:700}
@media(max-width:560px){.sbhdr{padding:12px 14px}.sbhdr .sbrole{display:none}}
</style>
<header class="sbhdr"><div class="sbwrap">
<span class="sbmark">SEAN &amp; <b>BARB</b></span>
<span class="sbrole">Social Poster</span>
<span class="sblinks">${NAV_ITEMS.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}</span>
</div></header>
<script>
// marking the current tab here rather than server-side keeps page() from
// having to thread a "which page am I" argument through every call site
(function(){
  var here = location.pathname.replace(/\\/$/, "") || "/";
  document.querySelectorAll(".sbhdr .sblinks a").forEach(function(a){
    if ((a.getAttribute("href").replace(/\\/$/, "") || "/") === here)
      a.setAttribute("aria-current", "page");
  });
})();
<\/script>`;
}
__name(sbHeader, "sbHeader");
var NAV_ITEMS = [
  ["/inbox", "Inbox"],
  ["/", "Dashboard"],
  ["/generate", "Generate"],
  ["/bulk", "Bulk"],
  ["/metrics", "Metrics"],
  ["/cards", "Cards"],
  ["/links", "Links"],
  ["/transactions", "Transactions"],
  ["/cma", "CMA"]
];
function cardsPage() {
  return new Response(CARD_SCANNER_HTML.replace("<!--SB_NAV-->", sbHeader()), {
    headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex" }
  });
}
__name(cardsPage, "cardsPage");
async function startGoogle(env, origin) {
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
    return json({ ok: false, error: "GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are not set in the Worker settings." }, 500);
  }
  const nonce = crypto.randomUUID();
  await env.TOKENS.put("state:" + nonce, JSON.stringify({ provider: "google", t: Date.now() }), { expirationTtl: 600 });
  const p = new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID,
    redirect_uri: origin + "/auth/google/callback",
    response_type: "code",
    scope: SCOPES,
    // consent + offline together are what actually return a refresh token.
    // Without prompt=consent Google silently omits it on every connection
    // after the first, and the account then breaks an hour later.
    access_type: "offline",
    prompt: "consent",
    include_granted_scopes: "true",
    state: nonce
  });
  const want = expectedOwner(env);
  if (want) {
    p.set("hd", want.split("@")[1]);
    p.set("login_hint", want);
  }
  return Response.redirect("https://accounts.google.com/o/oauth2/v2/auth?" + p, 302);
}
__name(startGoogle, "startGoogle");
function expectedOwner(env) {
  return String(env.CARDS_OWNER_EMAIL || "").trim().toLowerCase();
}
__name(expectedOwner, "expectedOwner");
async function cbGoogle(request, env, origin) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const denied = url.searchParams.get("error");
  if (denied) return htmlNote("Google sign-in was cancelled.", origin);
  const raw = state ? await env.TOKENS.get("state:" + state) : null;
  if (!raw) return htmlNote("That sign-in link expired. Start the connection again.", origin);
  await env.TOKENS.delete("state:" + state);
  const tok = await postForm("https://oauth2.googleapis.com/token", {
    code,
    client_id: env.GOOGLE_CLIENT_ID,
    client_secret: env.GOOGLE_CLIENT_SECRET,
    redirect_uri: origin + "/auth/google/callback",
    grant_type: "authorization_code"
  });
  if (!tok.refresh_token) {
    return htmlNote("Google did not return a refresh token. Remove this app at myaccount.google.com/permissions and connect again.", origin);
  }
  const who = await getJson("https://www.googleapis.com/oauth2/v2/userinfo", tok.access_token);
  const email = String(who.email || "").trim();
  if (!email) return htmlNote("Could not read the address for that account.", origin);
  const want = expectedOwner(env);
  const list = await accounts(env);
  if (want && !list.length && email.toLowerCase() !== want) {
    return htmlNote(
      "Signed in as " + email + ", but this scanner is set to save into " + want + ". Nothing was connected. Switch account in Google and try again.",
      origin
    );
  }
  if (want && list.length && email.split("@")[1].toLowerCase() !== want.split("@")[1]) {
    return htmlNote(
      "Signed in as " + email + ", which is outside " + want.split("@")[1] + ". Nothing was connected. Mirrors have to be on the same domain as the owner.",
      origin
    );
  }
  await env.TOKENS.put(kRefresh(email), tok.refresh_token);
  await env.TOKENS.put(kAccess(email), tok.access_token, { expirationTtl: 3e3 });
  await rememberAccount(env, email);
  const isOwner = !list.length;
  return htmlNote(
    isOwner ? "Connected " + email + " as the owner. Every scanned card is saved into this account's contacts." : "Connected " + email + " as a mirror. Cards are saved into " + list[0] + " and copied here.",
    origin
  );
}
__name(cbGoogle, "cbGoogle");
async function resetGoogle(request, env, origin) {
  const url = new URL(request.url);
  const confirm = String(url.searchParams.get("confirm") || "").trim().toLowerCase();
  const list = await accounts(env);
  if (!list.length) return htmlNote("There is nothing connected to reset.", origin);
  if (confirm !== list[0].toLowerCase()) {
    return htmlNote(
      "To disconnect everything, reopen this link with the current owner's address confirmed: " + origin + "/auth/google/reset?confirm=" + encodeURIComponent(list[0]),
      origin
    );
  }
  for (const email of list) {
    await env.TOKENS.delete(kRefresh(email));
    await env.TOKENS.delete(kAccess(email));
  }
  await env.TOKENS.delete(kAccounts());
  return htmlNote("Disconnected " + list.length + " account(s). The next account to connect becomes the owner.", origin);
}
__name(resetGoogle, "resetGoogle");
async function accessToken(env, email) {
  const hit = await env.TOKENS.get(kAccess(email));
  if (hit) return hit;
  const rt = await env.TOKENS.get(kRefresh(email));
  if (!rt) throw new Error("This account is not connected. Open the Cards page and connect it.");
  const tok = await postForm("https://oauth2.googleapis.com/token", {
    refresh_token: rt,
    client_id: env.GOOGLE_CLIENT_ID,
    client_secret: env.GOOGLE_CLIENT_SECRET,
    grant_type: "refresh_token"
  });
  if (!tok.access_token) throw new Error("Google refused to renew the sign-in for " + email + ". Connect it again.");
  await env.TOKENS.put(kAccess(email), tok.access_token, { expirationTtl: 3e3 });
  return tok.access_token;
}
__name(accessToken, "accessToken");
async function cardsApi(request, env, fn) {
  let args = [];
  try {
    const body = await request.json();
    args = Array.isArray(body.args) ? body.args : [];
  } catch (_) {
  }
  try {
    switch (fn) {
      case "getStartupState":
        return json(await getStartupState(env));
      case "listLabels":
        return json(await listLabels(env));
      case "createLabel":
        return json(await createLabel(env, args[0]));
      case "deleteLabel":
        return json(await deleteLabel(env, args[0]));
      case "renameLabel":
        return json(await renameLabel(env, args[0], args[1]));
      case "scanPhoto":
        return json(await scanPhoto(env, args[0]));
      case "saveContacts":
        return json(await saveContacts(env, args[0], args[1], args[2]));
      default:
        return json({ ok: false, error: "Unknown call: " + fn }, 404);
    }
  } catch (err) {
    return json({ ok: false, error: shortError(err) });
  }
}
__name(cardsApi, "cardsApi");
async function getStartupState(env) {
  const list = await accounts(env);
  if (!list.length) {
    return {
      ok: false,
      needsConnect: true,
      error: "No Google account is connected yet. Tap Connect to sign in as the account that should own the contacts.",
      labels: [],
      defaultLabel: DEFAULT_LABEL
    };
  }
  const owner = list[0];
  const shared = await env.TOKENS.get("cards:sharedLabel") || "";
  let labels = [];
  let labelError = "";
  try {
    labels = await groupsFor(env, owner);
  } catch (err) {
    labelError = shortError(err);
  }
  return {
    ok: true,
    keySet: !!env.ANTHROPIC_API_KEY,
    owner,
    you: owner,
    mirrors: list.slice(1),
    sharedLabel: shared,
    defaultLabel: DEFAULT_LABEL,
    labels,
    labelError
  };
}
__name(getStartupState, "getStartupState");
async function listLabels(env) {
  const list = await accounts(env);
  if (!list.length) return { ok: false, error: "No account connected." };
  return { ok: true, labels: await groupsFor(env, list[0]) };
}
__name(listLabels, "listLabels");
async function createLabel(env, rawName) {
  const name = String(rawName || "").trim();
  if (!name) return { ok: false, error: "Give the label a name." };
  if (name.length > 60) return { ok: false, error: "That label name is too long." };
  const list = await accounts(env);
  if (!list.length) return { ok: false, error: "No account connected." };
  const owner = list[0];
  const existing = await groupsFor(env, owner);
  const hit = existing.find((g) => g.name.trim().toLowerCase() === name.toLowerCase());
  if (hit) return { ok: true, existed: true, label: hit };
  const token = await accessToken(env, owner);
  const made = await peopleApi(token, "POST", "contactGroups", { contactGroup: { name } });
  return { ok: true, existed: false, label: { name, resourceName: made.resourceName, count: 0 } };
}
__name(createLabel, "createLabel");
async function deleteLabel(env, resourceName) {
  const name = String(resourceName || "").trim();
  if (!name.startsWith("contactGroups/")) return { ok: false, error: "That is not a label I can delete." };
  if (/^contactGroups\/(myContacts|starred|chatBuddies|all|friends|family|coworkers)$/i.test(name)) {
    return { ok: false, error: "That is one of Google's built-in groups and cannot be deleted." };
  }
  const list = await accounts(env);
  if (!list.length) return { ok: false, error: "No account connected." };
  const failed = [];
  for (const email of list) {
    try {
      const token = await accessToken(env, email);
      await peopleApi(token, "DELETE", name + "?deleteContacts=false");
    } catch (err) {
      if (!/ 404 /.test(String(err && err.message))) failed.push(email);
    }
  }
  if (failed.length === list.length) {
    return { ok: false, error: "Could not delete that label. " + failed.join(", ") };
  }
  return {
    ok: true,
    labels: await groupsFor(env, list[0]),
    warning: failed.length ? "Deleted here, but not in " + failed.join(", ") + "." : ""
  };
}
__name(deleteLabel, "deleteLabel");
var RENAME_SCAN_CAP = 600;
async function renameLabel(env, resourceName, rawName) {
  const rn = String(resourceName || "").trim();
  const next = String(rawName || "").trim();
  if (!rn.startsWith("contactGroups/")) return { ok: false, error: "That is not a label I can rename." };
  if (/^contactGroups\/(myContacts|starred|chatBuddies|all|friends|family|coworkers)$/i.test(rn)) {
    return { ok: false, error: "That is one of Google's built-in groups and cannot be renamed." };
  }
  if (!next) return { ok: false, error: "Give the label a name." };
  if (next.length > 60) return { ok: false, error: "That label name is too long." };
  const list = await accounts(env);
  if (!list.length) return { ok: false, error: "No account connected." };
  const owner = list[0];
  const token = await accessToken(env, owner);
  const existing = await groupsFor(env, owner);
  const self = existing.find((g) => g.resourceName === rn);
  if (!self) return { ok: false, error: "That label no longer exists. Reload the page." };
  const prev = self.name;
  if (prev === next) return { ok: true, labels: existing, warning: "", touched: 0 };
  const clash = existing.find((g) => g.resourceName !== rn && g.name.trim().toLowerCase() === next.toLowerCase());
  if (clash) return { ok: false, error: "There is already a label called " + clash.name + "." };
  await peopleApi(token, "PUT", rn, { contactGroup: { name: next, etag: self.etag } });
  let touched = 0;
  let warning = "";
  try {
    touched = await rewriteNoteLabel(token, rn, prev, next);
  } catch (err) {
    warning = "Renamed, but the note line inside the contacts still says " + prev + ".";
  }
  for (const email of list.slice(1)) {
    try {
      const t = await accessToken(env, email);
      const theirs = (await groupsFor(env, email)).find((g) => g.name.trim().toLowerCase() === prev.trim().toLowerCase());
      if (theirs) await peopleApi(
        t,
        "PUT",
        theirs.resourceName,
        { contactGroup: { name: next, etag: theirs.etag } }
      );
    } catch (_) {
    }
  }
  return { ok: true, labels: await groupsFor(env, owner), warning, touched, from: prev, to: next };
}
__name(renameLabel, "renameLabel");
async function rewriteNoteLabel(token, groupResourceName, prev, next) {
  const got = await peopleApi(
    token,
    "GET",
    groupResourceName + "?maxMembers=" + RENAME_SCAN_CAP
  );
  const members = got.memberResourceNames || [];
  if (!members.length) return 0;
  let touched = 0;
  for (let i = 0; i < members.length; i += 200) {
    const slice = members.slice(i, i + 200);
    const q = slice.map((r) => "resourceNames=" + encodeURIComponent(r)).join("&");
    const got2 = await peopleApi(token, "GET", "people:batchGet?personFields=biographies&" + q);
    const updates = {};
    for (const r of got2.responses || []) {
      const p = r.person;
      if (!p || !p.biographies || !p.biographies.length) continue;
      const bio = p.biographies[0];
      const val = String(bio.value || "");
      const swapped = val.split("\n").map((line) => line.trim() === "Label " + prev ? "Label " + next : line).join("\n");
      if (swapped === val) continue;
      updates[p.resourceName] = {
        etag: p.etag,
        biographies: [{
          value: swapped,
          contentType: bio.contentType || "TEXT_PLAIN",
          metadata: bio.metadata
        }]
      };
    }
    const n = Object.keys(updates).length;
    if (!n) continue;
    await peopleApi(token, "POST", "people:batchUpdateContacts", {
      contacts: updates,
      updateMask: "biographies",
      readMask: "biographies"
    });
    touched += n;
  }
  return touched;
}
__name(rewriteNoteLabel, "rewriteNoteLabel");
async function groupsFor(env, email) {
  const token = await accessToken(env, email);
  const out = [];
  let page3 = null, guard = 0;
  do {
    const q = "contactGroups?pageSize=200&groupFields=name,groupType,memberCount" + (page3 ? "&pageToken=" + encodeURIComponent(page3) : "");
    const res = await peopleApi(token, "GET", q);
    (res.contactGroups || []).forEach((g) => {
      if (g.groupType === "USER_CONTACT_GROUP") {
        out.push({ name: g.name, resourceName: g.resourceName, count: g.memberCount || 0, etag: g.etag });
      }
    });
    page3 = res.nextPageToken;
    guard++;
  } while (page3 && guard < 10);
  return out;
}
__name(groupsFor, "groupsFor");
async function scanPhoto(env, dataUrls) {
  if (!env.ANTHROPIC_API_KEY) {
    return { ok: false, error: "The Anthropic API key is missing. Add ANTHROPIC_API_KEY in the Worker settings." };
  }
  let list = Array.isArray(dataUrls) ? dataUrls : [dataUrls];
  if (!list.length) return { ok: false, error: "No photo arrived. Try taking it again." };
  if (list.length > 4) list = list.slice(0, 4);
  const content = [];
  let bad = false;
  list.forEach((url, i) => {
    const parsed = splitDataUrl(url);
    if (!parsed) {
      bad = true;
      return;
    }
    if (list.length > 1) {
      content.push({ type: "text", text: i === 0 ? "First image of the card:" : "Second image of the same card:" });
    }
    content.push({ type: "image", source: { type: "base64", media_type: parsed.mime, data: parsed.data } });
  });
  if (bad || !content.length) {
    return { ok: false, error: "That photo did not arrive in a readable form. Try taking it again." };
  }
  content.push({
    type: "text",
    text: list.length > 1 ? "These images are two sides of the SAME business card. Merge everything printed on both sides into a single entry. Return the JSON described in your instructions." : "Read every business card in this photo and return the JSON described in your instructions."
  });
  let res;
  try {
    res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: env.ANTHROPIC_MODEL || MODEL_DEFAULT,
        max_tokens: 2e3,
        system: readerSystemPrompt(list.length > 1),
        messages: [{ role: "user", content }]
      })
    });
  } catch (err) {
    return { ok: false, error: "Could not reach the reader. Check the connection and try again." };
  }
  const code = res.status;
  const text = await res.text();
  if (code === 401 || code === 403) return { ok: false, error: "The Anthropic API key was rejected. Check it in the Worker settings." };
  if (code === 429) return { ok: false, error: "The reader is rate limited right now. Wait a few seconds and retry this photo." };
  if (code >= 500) return { ok: false, error: "The reader had a server error. Retry this photo." };
  if (code !== 200) {
    if (/credit balance|billing|insufficient/i.test(text)) {
      return { ok: false, error: "The Anthropic account is out of credit. Add funds at console.anthropic.com, then retry this photo." };
    }
    return { ok: false, error: "The reader returned an error (" + code + "). Retry this photo." };
  }
  let data;
  try {
    data = JSON.parse(text);
  } catch (_) {
    return { ok: false, error: "The reader sent back something unreadable. Retry this photo." };
  }
  let out = "";
  (data.content || []).forEach((b) => {
    if (b.type === "text") out += b.text;
  });
  const cards = parseCardJson(out);
  if (cards === null) return { ok: false, error: "The card text did not come back cleanly. Retry this photo." };
  const cleaned = cards.slice(0, MAX_CARDS_PER_PHOTO).map(normalizeCard).filter(
    (c) => (
      // A card with no name and no way to reach the person is not worth keeping.
      c.fullName || c.emails.length || c.phones.length
    )
  );
  return { ok: true, cards: cleaned, usage: data.usage || null };
}
__name(scanPhoto, "scanPhoto");
function readerSystemPrompt(twoSided) {
  let lines = [
    "You read business cards from photographs and return structured JSON. Nothing else.",
    "",
    "Return exactly this shape, with no prose, no explanation and no markdown fences:",
    '{"cards":[{"firstName":"","lastName":"","fullName":"","title":"","company":"","emails":[],',
    '"phones":[{"value":"","type":"mobile"}],"website":"","address":"","confidence":0.9,"unclear":[]}]}',
    ""
  ];
  if (twoSided) {
    lines = lines.concat([
      "IMPORTANT: the images you are given are two sides of ONE card.",
      "Return exactly one entry in the cards array, merging every detail printed",
      "on either image.",
      "The images are labelled first and second by the order they were",
      "photographed, NOT by which is the front. Either image may hold any field.",
      "Do not assume the first image holds the name or the primary contact details.",
      "Read both fully and take each field from whichever image actually prints it.",
      "It is common for one side to hold the name and title while the other holds",
      "the contact details, in either arrangement.",
      "If both images print contact details, keep them all. Two different phone",
      "numbers means two entries in phones, not one. The same applies to emails.",
      "If the same value appears on both images, include it once.",
      "If the two images are the same card in two languages, still return one",
      "entry. Prefer the Latin script version of names and job titles, and merge",
      "any contact details that appear on only one of them.",
      "If one image carries only a logo, a tagline or a QR code, take nothing from",
      "it and still return the single entry built from the other.",
      "If the images are clearly two different people rather than two sides of one",
      "card, then and only then return one entry per person.",
      ""
    ]);
  }
  return lines.concat([
    "Rules:",
    "1. One entry per distinct person. A photo may hold several cards, so return several entries.",
    "2. If you can see the front and the back of the same card, merge them into one entry.",
    "3. A back that shows only a logo, a tagline or a QR code with no contact detail is not a card. Skip it.",
    "4. Never invent a value. If a field is not printed on the card, leave it as an empty string or an empty array.",
    "5. Keep names exactly as printed, including accents and capitalization. Split into firstName and lastName only when the order is obvious, and always fill fullName.",
    "6. Strip credentials and suffixes such as PhD, MBA, LCSW, Jr from lastName and put the whole printed line in fullName.",
    "7. phone type is one of mobile, work, home, fax, other. Use mobile for anything marked cell, mobile or m.",
    "8. Keep phone numbers close to how they are printed but drop decorative spacing. If a country code is printed, keep it.",
    "9. website is the plain domain or URL without a mailto or tel prefix.",
    "10. address is the full mailing address on one line, comma separated.",
    "11. confidence is your own 0 to 1 read on how sure you are of that entry as a whole. Use below 0.7 when glare, blur or a crop is hurting you.",
    '12. unclear lists the field names you could not read confidently, for example ["phones","company"].',
    "",
    'If the photo holds no business card at all, return {"cards":[]}.'
  ]).join("\n");
}
__name(readerSystemPrompt, "readerSystemPrompt");
async function saveContacts(env, cards, labelResourceName, labelName) {
  if (!cards || !cards.length) return { ok: false, error: "There was nothing to save." };
  if (!labelResourceName) return { ok: false, error: "Pick a label before saving." };
  const list = await accounts(env);
  if (!list.length) return { ok: false, error: "No Google account is connected." };
  const owner = list[0];
  const people = cards.map((card) => ({ card, person: buildPerson(card, labelName, "") }));
  const results = [];
  results.push(await saveInto(env, owner, people, labelName, labelResourceName, false));
  for (const email of list.slice(1)) {
    try {
      results.push(await saveInto(env, email, people, labelName, null, true));
    } catch (err) {
      results.push({
        account: email,
        mirror: true,
        created: 0,
        existing: 0,
        failed: people.length,
        results: [],
        labelError: "",
        error: "Could not reach this account. " + shortError(err)
      });
    }
  }
  const primary = results[0];
  return {
    ok: true,
    accounts: results,
    results: primary.results,
    labelError: primary.labelError || "",
    created: primary.created,
    existing: primary.existing,
    failed: primary.failed
  };
}
__name(saveContacts, "saveContacts");
async function saveInto(env, email, people, labelName, groupResourceName, isMirror) {
  const out = {
    account: email,
    mirror: !!isMirror,
    created: 0,
    existing: 0,
    failed: 0,
    results: [],
    labelError: "",
    error: ""
  };
  const token = await accessToken(env, email);
  if (!groupResourceName) {
    try {
      groupResourceName = await findOrCreateGroup(env, email, token, labelName);
    } catch (err) {
      out.labelError = "Could not find or create the label here. " + shortError(err);
    }
  }
  const index = await emailIndex(token);
  const toLabel = [];
  for (const item of people) {
    try {
      const emails = (item.card.emails || []).map((e) => String(e).trim()).filter(Boolean);
      let hit = null;
      emails.forEach((e) => {
        if (!hit && index[e.toLowerCase()]) hit = index[e.toLowerCase()];
      });
      if (hit) {
        toLabel.push(hit);
        out.results.push({ name: displayName(item.card), status: "existing" });
        out.existing++;
        continue;
      }
      const made = await peopleApi(token, "POST", "people:createContact", item.person);
      toLabel.push(made.resourceName);
      emails.forEach((e) => {
        index[e.toLowerCase()] = made.resourceName;
      });
      out.results.push({ name: displayName(item.card), status: "created" });
      out.created++;
    } catch (err) {
      out.results.push({ name: displayName(item.card), status: "failed", error: shortError(err) });
      out.failed++;
    }
  }
  if (toLabel.length) {
    const groups = [];
    if (groupResourceName) groups.push(groupResourceName);
    const shared = (await env.TOKENS.get("cards:sharedLabel") || "").trim();
    if (shared && shared.toLowerCase() !== String(labelName || "").trim().toLowerCase()) {
      try {
        groups.push(await findOrCreateGroup(env, email, token, shared));
      } catch (err) {
        out.labelError = "Saved, but the shared label did not attach. " + shortError(err);
      }
    }
    for (const g of groups) {
      try {
        for (let i = 0; i < toLabel.length; i += 900) {
          await peopleApi(token, "POST", g + "/members:modify", { resourceNamesToAdd: toLabel.slice(i, i + 900) });
        }
      } catch (err) {
        out.labelError = "Saved, but a label did not attach. " + shortError(err);
      }
    }
  }
  return out;
}
__name(saveInto, "saveInto");
async function findOrCreateGroup(env, email, token, labelName) {
  const want = String(labelName || DEFAULT_LABEL).trim().toLowerCase();
  const groups = await groupsFor(env, email);
  const hit = groups.find((g) => String(g.name || "").trim().toLowerCase() === want);
  if (hit) return hit.resourceName;
  const made = await peopleApi(
    token,
    "POST",
    "contactGroups",
    { contactGroup: { name: String(labelName || DEFAULT_LABEL).trim() } }
  );
  return made.resourceName;
}
__name(findOrCreateGroup, "findOrCreateGroup");
async function emailIndex(token) {
  const index = {};
  let page3 = null, guard = 0;
  do {
    const q = "people/me/connections?pageSize=1000&personFields=emailAddresses" + (page3 ? "&pageToken=" + encodeURIComponent(page3) : "");
    const res = await peopleApi(token, "GET", q);
    (res.connections || []).forEach((p) => {
      (p.emailAddresses || []).forEach((e) => {
        if (e.value) index[String(e.value).trim().toLowerCase()] = p.resourceName;
      });
    });
    page3 = res.nextPageToken;
    guard++;
  } while (page3 && guard < 12);
  return index;
}
__name(emailIndex, "emailIndex");
function buildPerson(card, labelName, scannedBy) {
  const person = {};
  let first = String(card.firstName || "").trim();
  let last = String(card.lastName || "").trim();
  const full = String(card.fullName || "").trim();
  if (!first && !last && full) {
    const bits = full.split(/\s+/);
    first = bits.shift();
    last = bits.join(" ");
  }
  person.names = [{ givenName: first, familyName: last, displayName: full || (first + " " + last).trim() }];
  const org = {};
  if (card.company) org.name = String(card.company).trim();
  if (card.title) org.title = String(card.title).trim();
  if (org.name || org.title) person.organizations = [org];
  const emails = (card.emails || []).map((e) => String(e).trim()).filter(Boolean);
  if (emails.length) person.emailAddresses = emails.map((e) => ({ value: e, type: "work" }));
  const phones = (card.phones || []).filter((p) => p && p.value);
  if (phones.length) {
    person.phoneNumbers = phones.map((p) => ({ value: String(p.value).trim(), type: String(p.type || "work") }));
  }
  if (card.website) person.urls = [{ value: String(card.website).trim(), type: "work" }];
  if (card.address) person.addresses = [{ formattedValue: String(card.address).trim(), type: "work" }];
  const noteLines = [SOURCE_TAG];
  noteLines.push("Added " + (/* @__PURE__ */ new Date()).toLocaleDateString(
    "en-US",
    { timeZone: "America/New_York", year: "numeric", month: "long", day: "numeric" }
  ));
  if (labelName) noteLines.push("Label " + labelName);
  if (scannedBy) noteLines.push("Scanned by " + scannedBy);
  if (card.meetingNote) {
    noteLines.push("");
    noteLines.push(String(card.meetingNote).trim());
  }
  person.biographies = [{ value: noteLines.join("\n"), contentType: "TEXT_PLAIN" }];
  person.userDefined = [{ key: "Source", value: SOURCE_TAG }];
  if (scannedBy) person.userDefined.push({ key: "Scanned by", value: scannedBy });
  return person;
}
__name(buildPerson, "buildPerson");
async function peopleApi(token, method, path, body) {
  const opts = { method, headers: { Authorization: "Bearer " + token } };
  if (body) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(body);
  }
  const res = await fetch("https://people.googleapis.com/v1/" + path, opts);
  const text = await res.text();
  if (!res.ok) throw new Error("People API " + res.status + " " + text.slice(0, 200));
  return text ? JSON.parse(text) : {};
}
__name(peopleApi, "peopleApi");
async function postForm(url, params) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params)
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (_) {
    data = {};
  }
  if (!res.ok) throw new Error(tokenHint(text));
  return data;
}
__name(postForm, "postForm");
async function getJson(url, token) {
  const res = await fetch(url, { headers: { Authorization: "Bearer " + token } });
  const text = await res.text();
  if (!res.ok) throw new Error("HTTP " + res.status + " " + text.slice(0, 160));
  return JSON.parse(text);
}
__name(getJson, "getJson");
function tokenHint(body) {
  const s = String(body || "");
  if (s.indexOf("invalid_grant") >= 0) {
    return "Google refused the sign-in. The account was disconnected, the password changed, or the app was revoked. Connect it again on the Cards page.";
  }
  if (s.indexOf("invalid_client") >= 0) {
    return "GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET is wrong.";
  }
  if (s.indexOf("redirect_uri_mismatch") >= 0) {
    return "The redirect URI is not on the allow list in the Google Cloud console. It must be exactly https://social.seanandbarb.com/auth/google/callback";
  }
  return "Sign-in failed. " + s.slice(0, 160);
}
__name(tokenHint, "tokenHint");
function splitDataUrl(dataUrl) {
  const m = /^data:([^;]+);base64,(.+)$/.exec(String(dataUrl || ""));
  return m ? { mime: m[1], data: m[2] } : null;
}
__name(splitDataUrl, "splitDataUrl");
function parseCardJson(text) {
  const s = String(text || "").trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  let obj = tryParse(s);
  if (!obj) {
    const a = s.indexOf("{"), b = s.lastIndexOf("}");
    if (a >= 0 && b > a) obj = tryParse(s.slice(a, b + 1));
  }
  if (!obj) return null;
  if (Array.isArray(obj)) return obj;
  return Array.isArray(obj.cards) ? obj.cards : null;
}
__name(parseCardJson, "parseCardJson");
function tryParse(s) {
  try {
    return JSON.parse(s);
  } catch (_) {
    return null;
  }
}
__name(tryParse, "tryParse");
function normalizeCard(raw) {
  const c = raw || {};
  const emails = (c.emails || []).map((e) => String(e || "").trim()).filter((e) => e.indexOf("@") > 0);
  const phones = (c.phones || []).map((p) => {
    if (typeof p === "string") return { value: p.trim(), type: "work" };
    return { value: String(p && p.value || "").trim(), type: String(p && p.type || "work") };
  }).filter((p) => p.value);
  const first = String(c.firstName || "").trim();
  const last = String(c.lastName || "").trim();
  let full = String(c.fullName || "").trim();
  if (!full) full = (first + " " + last).trim();
  return {
    firstName: first,
    lastName: last,
    fullName: full,
    title: String(c.title || "").trim(),
    company: String(c.company || "").trim(),
    emails,
    phones,
    website: String(c.website || "").trim(),
    address: String(c.address || "").trim(),
    confidence: typeof c.confidence === "number" ? c.confidence : 0.8,
    unclear: Array.isArray(c.unclear) ? c.unclear : []
  };
}
__name(normalizeCard, "normalizeCard");
function displayName(card) {
  return String(card.fullName || ((card.firstName || "") + " " + (card.lastName || "")).trim() || "Unnamed card");
}
__name(displayName, "displayName");
function shortError(err) {
  const s = String(err && err.message || err || "");
  return s.length > 160 ? s.slice(0, 160) + "..." : s;
}
__name(shortError, "shortError");
function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
__name(json, "json");
function htmlNote(msg, origin) {
  return new Response(
    `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Card Scanner</title><body style="margin:0;background:#0A1526;color:#F3ECDD;font:16px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif"><div style="max-width:520px;margin:12vh auto;padding:0 22px"><p style="font-size:1.05rem">` + msg.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]) + '</p><p><a href="' + origin + '/cards" style="color:#C4952A">Back to the scanner</a></p></div>',
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
__name(htmlNote, "htmlNote");

// cma.js
function json2(o, status = 200) {
  return new Response(JSON.stringify(o), { status, headers: { "Content-Type": "application/json" } });
}
__name(json2, "json");
function esc(s) {
  return String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}
__name(esc, "esc");
function titleFrom(html, fallback) {
  const m = html.match(/<div class="addr"[^>]*>([\s\S]*?)<\/div>/i) || html.match(/<title>([\s\S]*?)<\/title>/i) || html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!m) return fallback;
  const t = m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").replace(/\s*[·|]\s*Valuation.*$/i, "").trim();
  return t || fallback;
}
__name(titleFrom, "titleFrom");
async function listReports(env) {
  const idx = await env.CMA.get("index");
  const items = idx ? JSON.parse(idx) : [];
  return items.sort((a, b) => b.at - a.at);
}
__name(listReports, "listReports");
async function saveReport(request, env) {
  const { html = "", name = "" } = await request.json();
  if (!/<html/i.test(html) && !/<div class="stats"/i.test(html)) {
    return json2({ error: "That does not look like a CMA report file." }, 400);
  }
  if (!env.CMA) return json2({ error: "CMA KV namespace is not bound to this worker" }, 500);
  const title = titleFrom(html, name.replace(/\.html?$/i, "").replace(/_/g, " ") || "Untitled CMA");
  const slug = title.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 60) || "CMA";
  const key = slug + "_" + Date.now().toString(36) + ".html";
  if (env.R2_CMA) {
    await env.R2_CMA.put(key, html, { httpMetadata: { contentType: "text/html; charset=utf-8" } });
  } else {
    await env.CMA.put("report:" + key, html);
  }
  const items = await listReports(env);
  items.unshift({ key, title, at: Date.now(), size: html.length });
  await env.CMA.put("index", JSON.stringify(items.slice(0, 300)));
  return json2({ ok: true, key, title, url: "/cma/report/" + key });
}
__name(saveReport, "saveReport");
async function deleteReport(request, env) {
  const { key = "" } = await request.json();
  if (!key) return json2({ error: "Missing key" }, 400);
  if (env.R2_CMA) await env.R2_CMA.delete(key);
  await env.CMA.delete("report:" + key);
  const items = (await listReports(env)).filter((r) => r.key !== key);
  await env.CMA.put("index", JSON.stringify(items));
  return json2({ ok: true });
}
__name(deleteReport, "deleteReport");
async function serve(key, env) {
  let html = null;
  if (env.R2_CMA) {
    const obj = await env.R2_CMA.get(key);
    if (obj) html = await obj.text();
  }
  if (!html && env.CMA) html = await env.CMA.get("report:" + key);
  if (!html) return new Response("Report not found", { status: 404 });
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
__name(serve, "serve");
function page(items) {
  const rows = items.length ? items.map((r) => `
    <div class="row">
      <a class="t" href="/cma/report/${esc(r.key)}" target="_blank">${esc(r.title)}</a>
      <span class="d">${new Date(r.at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
      <button class="x" data-k="${esc(r.key)}">Remove</button>
    </div>`).join("") : '<div class="empty">No reports saved yet.</div>';
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>CMA Reports</title>
<style>
:root{--navy:#0D1B2E;--gold:#C4952A;--cream:#F5F0E8;--line:#DDD8CE;--muted:#6B7280;}
*{box-sizing:border-box}
body{margin:0;background:var(--cream);font:15px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:var(--navy);}
.wrap{max-width:760px;margin:0 auto;padding:24px 18px 80px;}
h1{font-size:26px;margin:0 0 4px;letter-spacing:.02em;}
.sub{color:var(--muted);font-size:13px;margin-bottom:24px;}
.drop{border:2px dashed var(--line);border-radius:10px;background:#fff;padding:26px;text-align:center;color:var(--muted);font-size:13px;cursor:pointer;}
.drop.hot{border-color:var(--gold);background:#FFFDF7;}
.status{margin-top:14px;padding:12px 15px;border-radius:8px;background:#fff;border-left:3px solid var(--gold);font-size:14px;display:none;}
.status.on{display:block;}
h2{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin:32px 0 10px;font-weight:600;}
.row{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--line);border-radius:8px;padding:12px 15px;margin-bottom:8px;}
.row .t{flex:1;color:var(--navy);text-decoration:none;font-weight:600;}
.row .t:hover{color:var(--gold);}
.row .d{font-size:12px;color:var(--muted);white-space:nowrap;}
.row .x{border:0;background:none;color:#B4232A;cursor:pointer;font-size:12px;}
.empty{color:var(--muted);font-size:14px;padding:10px 2px;}
.how{margin-top:34px;padding:16px 18px;background:#fff;border-radius:8px;border:1px solid var(--line);font-size:13px;color:var(--muted);}
.how b{color:var(--navy);display:block;margin-bottom:5px;font-size:12px;letter-spacing:.1em;text-transform:uppercase;}
.how ol{margin:0;padding-left:18px;}
</style></head><body><div class="wrap">
<h1>CMA Reports</h1>
<div class="sub">Built in Claude, saved here so they open on any device.</div>

<div class="drop" id="drop">Tap to add a report, or drag the .html file here</div>
<input type="file" id="fin" accept=".html,text/html" multiple hidden>
<div class="status" id="status"></div>

<h2>Saved Reports</h2>
<div id="list">${rows}</div>

<div class="how"><b>How to make one</b>
<ol>
<li>Open Claude and say "CMA for [address]"</li>
<li>Attach the MLS broker synopsis and the property photos</li>
<li>Download the report file Claude gives you</li>
<li>Drop it here to keep it and share it</li>
</ol></div>
</div>
<script>
const $=id=>document.getElementById(id);
function say(m){const s=$('status');s.className='status on';s.textContent=m;}

async function add(files){
  const html=files.filter(f=>/\\.html?$/i.test(f.name));
  if(!html.length){say('Pick the .html report file Claude gave you.');return;}
  for(const f of html){
    say('Saving '+f.name+'...');
    try{
      const text=await f.text();
      const r=await fetch('/cma/save',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({html:text,name:f.name})});
      const j=await r.json();
      if(!r.ok||j.error) throw new Error(j.error||('HTTP '+r.status));
      say('Saved '+j.title+'.');
    }catch(e){ say('Could not save '+f.name+'. '+e.message); return; }
  }
  location.reload();
}

$('drop').onclick=()=>$('fin').click();
$('drop').ondragover=e=>{e.preventDefault();$('drop').classList.add('hot');};
$('drop').ondragleave=()=>$('drop').classList.remove('hot');
$('drop').ondrop=e=>{e.preventDefault();$('drop').classList.remove('hot');add([...e.dataTransfer.files]);};
$('fin').onchange=e=>add([...e.target.files]);

$('list').addEventListener('click',async e=>{
  const b=e.target.closest('.x'); if(!b) return;
  if(!confirm('Remove this report?')) return;
  await fetch('/cma/delete',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({key:b.dataset.k})});
  location.reload();
});
<\/script></body></html>`;
}
__name(page, "page");
async function cmaRoutes(request, env) {
  const url = new URL(request.url);
  const p = url.pathname;
  if (p === "/cma" || p === "/cma/") {
    const items = env.CMA ? await listReports(env) : [];
    return new Response(page(items), { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
  if (p === "/cma/save" && request.method === "POST") {
    try {
      return await saveReport(request, env);
    } catch (e) {
      return json2({ error: e.message }, 500);
    }
  }
  if (p === "/cma/delete" && request.method === "POST") {
    try {
      return await deleteReport(request, env);
    } catch (e) {
      return json2({ error: e.message }, 500);
    }
  }
  if (p.startsWith("/cma/report/")) {
    return serve(decodeURIComponent(p.slice("/cma/report/".length)), env);
  }
  return null;
}
__name(cmaRoutes, "cmaRoutes");

// inbox.js -- unified reply inbox (Gmail, LinkedIn post comments, Facebook Page)
var IBX_GMAIL = "https://gmail.googleapis.com/gmail/v1/users/me/";
var IBX_DONE_KEY = "inbox:done";
var IBX_DONE_DAYS = 90;
function ibxJson(o, status) {
  return new Response(JSON.stringify(o), { status: status || 200, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}
__name(ibxJson, "ibxJson");
async function ibxOwner(env) {
  const list = await accounts(env);
  return list[0] || String(env.CARDS_OWNER_EMAIL || "").trim();
}
__name(ibxOwner, "ibxOwner");
async function ibxDoneMap(env) {
  const raw = await env.TOKENS.get(IBX_DONE_KEY);
  const m = raw ? JSON.parse(raw) : {};
  const cut = Date.now() - IBX_DONE_DAYS * 864e5;
  for (const k of Object.keys(m)) if (m[k] < cut) delete m[k];
  return m;
}
__name(ibxDoneMap, "ibxDoneMap");
async function ibxMarkDone(env, id, undo) {
  const m = await ibxDoneMap(env);
  if (undo) delete m[id];
  else m[id] = Date.now();
  await env.TOKENS.put(IBX_DONE_KEY, JSON.stringify(m));
}
__name(ibxMarkDone, "ibxMarkDone");
async function ibxFetch(url, opts) {
  const r = await fetch(url, opts);
  const text = await r.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch (_) {
    data = { raw: text };
  }
  if (!r.ok) {
    const e = data && data.error;
    const msg = e && (e.message || e.error_user_msg) || data && data.message || text.slice(0, 200);
    const err = new Error(String(msg || "HTTP " + r.status));
    err.status = r.status;
    throw err;
  }
  return data;
}
__name(ibxFetch, "ibxFetch");
function ibxB64urlToText(s) {
  const b = atob(String(s || "").replace(/-/g, "+").replace(/_/g, "/"));
  const bytes = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i++) bytes[i] = b.charCodeAt(i);
  return new TextDecoder("utf-8").decode(bytes);
}
__name(ibxB64urlToText, "ibxB64urlToText");
function ibxTextToB64(s) {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}
__name(ibxTextToB64, "ibxTextToB64");
function ibxHeader(msg, name) {
  const hs = msg && msg.payload && msg.payload.headers || [];
  const h = hs.find((x) => x.name.toLowerCase() === name.toLowerCase());
  return h ? h.value : "";
}
__name(ibxHeader, "ibxHeader");
function ibxName(from) {
  const m = String(from || "").match(/^\s*"?([^"<]*?)"?\s*<([^>]+)>/);
  if (m) return { name: m[1].trim() || m[2], email: m[2].trim() };
  return { name: String(from || "").trim(), email: String(from || "").trim() };
}
__name(ibxName, "ibxName");
function ibxStripHtml(h) {
  return String(h || "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<br\s*\/?>/gi, "\n").replace(/<\/(p|div|tr|li)>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\n{3,}/g, "\n\n").trim();
}
__name(ibxStripHtml, "ibxStripHtml");
function ibxBody(payload) {
  let plain = "", html = "";
  (/* @__PURE__ */ __name(function walk(p) {
    if (!p) return;
    if (p.mimeType === "text/plain" && p.body && p.body.data && !plain) plain = ibxB64urlToText(p.body.data);
    else if (p.mimeType === "text/html" && p.body && p.body.data && !html) html = ibxB64urlToText(p.body.data);
    (p.parts || []).forEach(walk);
  }, "walk"))(payload);
  const text = plain || ibxStripHtml(html);
  // drop the quoted history under "On ... wrote:" so the thread reads cleanly
  const cut = text.search(/\n\s*On .{5,200}wrote:\s*\n/);
  return (cut > 0 ? text.slice(0, cut) : text).trim();
}
__name(ibxBody, "ibxBody");

// ---------- Gmail ----------
async function ibxGmailToken(env) {
  const owner = await ibxOwner(env);
  if (!owner) {
    const e = new Error("Google is not connected.");
    e.reconnect = "/auth/google";
    throw e;
  }
  return { owner, token: await accessToken(env, owner) };
}
__name(ibxGmailToken, "ibxGmailToken");
function ibxGmailErr(e) {
  if (e.status === 403 || e.status === 401 || /insufficient|scope/i.test(e.message)) {
    e.reconnect = "/auth/google";
    e.message = "Reconnect Google to give the inbox access to Gmail.";
  }
  return e;
}
__name(ibxGmailErr, "ibxGmailErr");
async function ibxGmailList(env, done) {
  const { owner, token } = await ibxGmailToken(env);
  const auth = { headers: { Authorization: "Bearer " + token } };
  const q = env.INBOX_GMAIL_QUERY || "in:inbox newer_than:21d -category:promotions -category:social -category:updates -category:forums";
  let list;
  try {
    list = await ibxFetch(IBX_GMAIL + "threads?maxResults=20&q=" + encodeURIComponent(q), auth);
  } catch (e) {
    throw ibxGmailErr(e);
  }
  const threads = list.threads || [];
  const meta = await Promise.all(threads.map((t) => ibxFetch(
    IBX_GMAIL + "threads/" + t.id + "?format=metadata&metadataHeaders=From&metadataHeaders=Subject&metadataHeaders=Date",
    auth
  ).catch(() => null)));
  const items = [];
  const me = owner.toLowerCase();
  for (const th of meta) {
    if (!th || !th.messages || !th.messages.length) continue;
    const last = th.messages[th.messages.length - 1];
    const first = th.messages[0];
    const from = ibxName(ibxHeader(last, "From"));
    const id = "email:" + th.id;
    if (from.email.toLowerCase() === me) continue;
    if (done[id]) continue;
    items.push({
      id,
      channel: "email",
      kind: "Email",
      ref: th.id,
      name: from.name,
      subject: ibxHeader(first, "Subject") || "(no subject)",
      snippet: ibxStripHtml(last.snippet || ""),
      at: Number(last.internalDate) || Date.parse(ibxHeader(last, "Date")) || Date.now(),
      unread: (last.labelIds || []).includes("UNREAD"),
      count: th.messages.length
    });
  }
  return items;
}
__name(ibxGmailList, "ibxGmailList");
async function ibxGmailThread(env, threadId) {
  const { token } = await ibxGmailToken(env);
  const th = await ibxFetch(IBX_GMAIL + "threads/" + encodeURIComponent(threadId) + "?format=full", { headers: { Authorization: "Bearer " + token } }).catch((e) => {
    throw ibxGmailErr(e);
  });
  const msgs = (th.messages || []).slice(-6).map((m) => ({
    name: ibxName(ibxHeader(m, "From")).name,
    at: Number(m.internalDate),
    text: ibxBody(m.payload)
  }));
  const first = th.messages && th.messages[0];
  return { title: ibxHeader(first, "Subject") || "(no subject)", sub: "Email", messages: msgs };
}
__name(ibxGmailThread, "ibxGmailThread");
function ibxEncodeHeader(s) {
  return /^[\x20-\x7e]*$/.test(s) ? s : "=?UTF-8?B?" + ibxTextToB64(s) + "?=";
}
__name(ibxEncodeHeader, "ibxEncodeHeader");
async function ibxGmailReply(env, threadId, text) {
  const { owner, token } = await ibxGmailToken(env);
  const auth = { Authorization: "Bearer " + token };
  const th = await ibxFetch(IBX_GMAIL + "threads/" + encodeURIComponent(threadId) + "?format=metadata&metadataHeaders=From&metadataHeaders=Reply-To&metadataHeaders=Subject&metadataHeaders=Message-ID&metadataHeaders=References", { headers: auth }).catch((e) => {
    throw ibxGmailErr(e);
  });
  const msgs = th.messages || [];
  const me = owner.toLowerCase();
  let target = null;
  for (let i = msgs.length - 1; i >= 0; i--) {
    if (ibxName(ibxHeader(msgs[i], "From")).email.toLowerCase() !== me) {
      target = msgs[i];
      break;
    }
  }
  if (!target) target = msgs[msgs.length - 1];
  if (!target) throw new Error("That email thread could not be found.");
  const to = ibxHeader(target, "Reply-To") || ibxHeader(target, "From");
  let subject = ibxHeader(msgs[0], "Subject") || "";
  if (!/^re:/i.test(subject)) subject = "Re: " + subject;
  const mid = ibxHeader(target, "Message-ID");
  const refs = [ibxHeader(target, "References"), mid].filter(Boolean).join(" ").trim();
  const body = ibxTextToB64(String(text).replace(/\r?\n/g, "\r\n")).replace(/.{76}/g, "$&\r\n");
  const lines = [
    "From: " + owner,
    "To: " + to,
    "Subject: " + ibxEncodeHeader(subject),
    mid ? "In-Reply-To: " + mid : "",
    refs ? "References: " + refs : "",
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64"
  ].filter(Boolean);
  const raw = ibxTextToB64(lines.join("\r\n") + "\r\n\r\n" + body).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  await ibxFetch(IBX_GMAIL + "messages/send", {
    method: "POST",
    headers: { ...auth, "Content-Type": "application/json" },
    body: JSON.stringify({ raw, threadId })
  }).catch((e) => {
    throw ibxGmailErr(e);
  });
  await ibxFetch(IBX_GMAIL + "threads/" + encodeURIComponent(threadId) + "/modify", {
    method: "POST",
    headers: { ...auth, "Content-Type": "application/json" },
    body: JSON.stringify({ removeLabelIds: ["UNREAD"] })
  }).catch(() => null);
  return true;
}
__name(ibxGmailReply, "ibxGmailReply");
async function ibxGmailArchive(env, threadId) {
  const { token } = await ibxGmailToken(env);
  await ibxFetch(IBX_GMAIL + "threads/" + encodeURIComponent(threadId) + "/modify", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify({ removeLabelIds: ["INBOX", "UNREAD"] })
  }).catch((e) => {
    throw ibxGmailErr(e);
  });
}
__name(ibxGmailArchive, "ibxGmailArchive");

// ---------- Facebook Page ----------
async function ibxMeta(env) {
  const rec = await kvJson(env, "tok:meta");
  if (!rec || !rec.page_token) {
    const e = new Error("Facebook is not connected.");
    e.reconnect = "/auth/meta";
    throw e;
  }
  return { rec, base: "https://graph.facebook.com/" + (env.META_API_VERSION || "v23.0") + "/" };
}
__name(ibxMeta, "ibxMeta");
function ibxMetaErr(e) {
  if (e.status === 403 || e.status === 400 && /permission|scope|access token/i.test(e.message)) {
    e.reconnect = "/auth/meta";
    e.message = "Facebook needs more Page permissions (pages_read_engagement, pages_manage_engagement, pages_messaging). " + e.message;
  }
  return e;
}
__name(ibxMetaErr, "ibxMetaErr");
async function ibxFbList(env, done) {
  const { rec, base } = await ibxMeta(env);
  const tk = "&access_token=" + encodeURIComponent(rec.page_token);
  const pid = rec.page_id;
  const items = [];
  const notes = [];
  try {
    const feed = await ibxFetch(base + pid + "/feed?limit=12&fields=" + encodeURIComponent("id,message,created_time,permalink_url,comments.limit(25).order(reverse_chronological){id,from,message,created_time,comments.limit(25){from}}") + tk);
    for (const post of feed.data || []) {
      for (const c of post.comments && post.comments.data || []) {
        if (c.from && c.from.id === pid) continue;
        const replied = (c.comments && c.comments.data || []).some((r) => r.from && r.from.id === pid);
        const id = "fbc:" + c.id;
        if (replied || done[id]) continue;
        items.push({
          id,
          channel: "facebook",
          kind: "Facebook comment",
          ref: c.id,
          name: c.from && c.from.name || "Facebook user",
          subject: "On: " + String(post.message || "your post").split("\n")[0].slice(0, 80),
          snippet: c.message || "",
          at: Date.parse(c.created_time) || Date.now(),
          link: post.permalink_url || ""
        });
      }
    }
  } catch (e) {
    notes.push(ibxMetaErr(e).message);
  }
  try {
    const conv = await ibxFetch(base + pid + "/conversations?platform=messenger&limit=15&fields=" + encodeURIComponent("id,updated_time,participants,messages.limit(1){message,from,created_time}") + tk);
    for (const cv of conv.data || []) {
      const last = cv.messages && cv.messages.data && cv.messages.data[0];
      if (!last || last.from && last.from.id === pid) continue;
      const id = "fbm:" + cv.id + ":" + (last.created_time || "");
      if (done[id]) continue;
      const other = (cv.participants && cv.participants.data || []).find((p) => p.id !== pid) || {};
      items.push({
        id,
        channel: "facebook",
        kind: "Facebook message",
        ref: cv.id + "|" + (other.id || ""),
        name: other.name || last.from && last.from.name || "Facebook user",
        subject: "Page message",
        snippet: last.message || "",
        at: Date.parse(last.created_time) || Date.now()
      });
    }
  } catch (e) {
    notes.push(ibxMetaErr(e).message);
  }
  if (notes.length && !items.length) {
    const e = new Error(notes[0]);
    e.reconnect = "/auth/meta";
    throw e;
  }
  if (notes.length) items.warning = notes[0];
  return items;
}
__name(ibxFbList, "ibxFbList");
async function ibxFbThread(env, kind, ref) {
  const { rec, base } = await ibxMeta(env);
  const tk = "access_token=" + encodeURIComponent(rec.page_token);
  if (kind === "Facebook message") {
    const cid = ref.split("|")[0];
    const m = await ibxFetch(base + cid + "/messages?limit=10&fields=message,from,created_time&" + tk).catch((e) => {
      throw ibxMetaErr(e);
    });
    return {
      title: "Page message",
      sub: "Facebook",
      messages: (m.data || []).reverse().map((x) => ({ name: x.from && x.from.name || "", at: Date.parse(x.created_time), text: x.message || "" }))
    };
  }
  const c = await ibxFetch(base + ref + "?fields=" + encodeURIComponent("message,from,created_time,parent{message,from},comments.limit(20){message,from,created_time}") + "&" + tk).catch((e) => {
    throw ibxMetaErr(e);
  });
  let post = null;
  try {
    const pid = ref.split("_")[0];
    post = await ibxFetch(base + rec.page_id + "_" + pid + "?fields=message,created_time&" + tk);
  } catch (_) {
  }
  const msgs = [];
  if (post && post.message) msgs.push({ name: rec.page_name + " (your post)", at: Date.parse(post.created_time), text: post.message });
  msgs.push({ name: c.from && c.from.name || "Facebook user", at: Date.parse(c.created_time), text: c.message || "" });
  for (const r of c.comments && c.comments.data || []) msgs.push({ name: r.from && r.from.name || "", at: Date.parse(r.created_time), text: r.message || "" });
  return { title: "Comment on your Facebook post", sub: "Facebook", messages: msgs };
}
__name(ibxFbThread, "ibxFbThread");
async function ibxFbReply(env, kind, ref, text) {
  const { rec, base } = await ibxMeta(env);
  if (kind === "Facebook message") {
    const rid = ref.split("|")[1];
    if (!rid) throw new Error("Could not tell who to reply to in that conversation.");
    await ibxFetch(base + rec.page_id + "/messages?access_token=" + encodeURIComponent(rec.page_token), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipient: { id: rid }, messaging_type: "RESPONSE", message: { text: String(text) } })
    }).catch((e) => {
      throw ibxMetaErr(e);
    });
    return true;
  }
  await ibxFetch(base + ref + "/comments", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ message: String(text), access_token: rec.page_token }).toString()
  }).catch((e) => {
    throw ibxMetaErr(e);
  });
  return true;
}
__name(ibxFbReply, "ibxFbReply");

// ---------- LinkedIn (comments on posts this tool published) ----------
async function ibxLi(env) {
  const rec = await kvJson(env, "tok:linkedin");
  if (!rec || !rec.access_token) {
    const e = new Error("LinkedIn is not connected.");
    e.reconnect = "/auth/linkedin";
    throw e;
  }
  if (rec.expires_at && rec.expires_at < Date.now()) {
    const e = new Error("LinkedIn sign-in expired.");
    e.reconnect = "/auth/linkedin";
    throw e;
  }
  return rec;
}
__name(ibxLi, "ibxLi");
async function ibxLiList(env, done) {
  const rec = await ibxLi(env);
  const cut = Date.now() - 45 * 864e5;
  const posts = (await queueList(env)).filter((q) => q.liUrn && q.postedAt && Date.parse(q.postedAt) > cut).slice(0, 12);
  const items = [];
  let denied = null;
  await Promise.all(posts.map(async (q) => {
    try {
      const d = await ibxFetch("https://api.linkedin.com/v2/socialActions/" + encodeURIComponent(q.liUrn) + "/comments?count=50", {
        headers: { Authorization: "Bearer " + rec.access_token, "X-Restli-Protocol-Version": "2.0.0" }
      });
      const els = d.elements || [];
      const mine = (e) => e.actor === rec.person_urn;
      for (const c of els) {
        if (mine(c)) continue;
        const urn = c.$URN || c.commentUrn || "";
        const id = "li:" + (urn || c.id);
        const replied = els.some((r) => mine(r) && r.parentComment && r.parentComment === urn);
        if (replied || done[id]) continue;
        items.push({
          id,
          channel: "linkedin",
          kind: "LinkedIn comment",
          ref: q.liUrn + "|" + urn,
          name: "LinkedIn member",
          subject: "On: " + String(q.body || "").split("\n")[0].slice(0, 80),
          snippet: c.message && c.message.text || "",
          at: c.created && c.created.time || Date.parse(q.postedAt),
          link: "https://www.linkedin.com/feed/update/" + q.liUrn + "/"
        });
      }
    } catch (e) {
      if (e.status === 403 || e.status === 401) denied = e;
    }
  }));
  if (denied && !items.length) {
    const e = new Error("LinkedIn does not let this app read comments yet (it needs the r_member_social permission). Replies can still be posted once comments are visible.");
    e.links = posts.slice(0, 5).map((q) => ({ label: String(q.body || "").split("\n")[0].slice(0, 70), href: "https://www.linkedin.com/feed/update/" + q.liUrn + "/" }));
    throw e;
  }
  return items;
}
__name(ibxLiList, "ibxLiList");
async function ibxLiReply(env, ref, text) {
  const rec = await ibxLi(env);
  const [postUrn, commentUrn] = String(ref).split("|");
  if (!commentUrn) return liComment(env, postUrn, text);
  const r = await liRaw(
    "https://api.linkedin.com/v2/socialActions/" + encodeURIComponent(commentUrn) + "/comments",
    rec.access_token,
    { actor: rec.person_urn, object: postUrn, parentComment: commentUrn, message: { text: String(text) } }
  );
  if (!r.ok) throw new Error("LinkedIn reply failed (HTTP " + r.status + "): " + (r.json && (r.json.message || r.json.raw) || r.text).toString().slice(0, 200));
  return true;
}
__name(ibxLiReply, "ibxLiReply");

// ---------- Claude drafts ----------
var IBX_VOICE = [
  "You draft short replies for Sean Spencer of Sean & Barb, Premier Sotheby's International Realty, Central Florida luxury real estate.",
  "Write the way Sean talks. Conversational, warm, direct, never salesy. Shorter is better, usually two to four sentences.",
  "Never use em dashes, en dashes, colons, or semicolons. No industry jargon. Say homes, never product.",
  "Never promise a price, value, or fact that is not in the message. Suggest a call or a next step when it fits.",
  "Return only the reply text with no greeting line labels, no signature block, and no quotes around it."
].join(" ");
async function ibxDraft(env, p) {
  if (!env.ANTHROPIC_API_KEY) throw new Error("Drafting needs ANTHROPIC_API_KEY in the Worker settings.");
  const convo = (p.messages || []).slice(-6).map((m) => (m.name || "Them") + ": " + String(m.text || "").slice(0, 3e3)).join("\n\n");
  const ask = "Channel: " + (p.kind || p.channel) + "\n\nConversation so far:\n" + convo + (p.current ? "\n\nSean's rough draft to improve:\n" + p.current : "") + "\n\nWrite Sean's reply.";
  const r = await ibxFetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({ model: env.ANTHROPIC_MODEL || MODEL_DEFAULT, max_tokens: 600, system: IBX_VOICE, messages: [{ role: "user", content: ask }] })
  });
  const text = (r.content || []).filter((b) => b.type === "text").map((b) => b.text).join("").trim();
  return text.replace(/\s*[—–]\s*/g, ", ").replace(/;\s*(\w)/g, (_, c) => ". " + c.toUpperCase());
}
__name(ibxDraft, "ibxDraft");

// ---------- routes ----------
async function inboxRoutes(request, env, url) {
  const path = url.pathname;
  if (path === "/inbox" || path === "/inbox/") {
    return new Response(INBOX_HTML, { headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex", "Cache-Control": "no-store" } });
  }
  if (!path.startsWith("/api/inbox/")) return null;
  if (request.method === "POST") {
    const o = request.headers.get("Origin");
    if (o && o !== url.origin || request.headers.get("X-SB-Inbox") !== "1") return ibxJson({ ok: false, error: "Forbidden" }, 403);
  }
  const fn = path.slice(11);
  const run = async (f) => {
    try {
      const items = await f();
      return { ok: true, items, warning: items.warning || null };
    } catch (e) {
      return { ok: false, error: e.message, reconnect: e.reconnect || null, links: e.links || null };
    }
  };
  try {
    if (fn === "list" && request.method === "GET") {
      const done = await ibxDoneMap(env);
      const [email, linkedin, facebook] = await Promise.all([
        run(() => ibxGmailList(env, done)),
        run(() => ibxLiList(env, done)),
        run(() => ibxFbList(env, done))
      ]);
      return ibxJson({ ok: true, email, linkedin, facebook, at: Date.now() });
    }
    if (request.method !== "POST") return ibxJson({ ok: false, error: "Not found" }, 404);
    const p = await request.json().catch(() => ({}));
    if (fn === "thread") {
      if (p.channel === "email") return ibxJson({ ok: true, ...await ibxGmailThread(env, p.ref) });
      if (p.channel === "facebook") return ibxJson({ ok: true, ...await ibxFbThread(env, p.kind, p.ref) });
      if (p.channel === "linkedin") return ibxJson({ ok: true, title: p.subject || "LinkedIn comment", sub: "LinkedIn", messages: [{ name: p.name, at: p.at, text: p.snippet }] });
    }
    if (fn === "reply") {
      const text = String(p.text || "").trim();
      if (!text) return ibxJson({ ok: false, error: "Write a reply first." }, 400);
      if (p.channel === "email") await ibxGmailReply(env, p.ref, text);
      else if (p.channel === "facebook") await ibxFbReply(env, p.kind, p.ref, text);
      else if (p.channel === "linkedin") await ibxLiReply(env, p.ref, text);
      else return ibxJson({ ok: false, error: "Unknown channel" }, 400);
      await ibxMarkDone(env, String(p.id));
      return ibxJson({ ok: true });
    }
    if (fn === "done") {
      if (p.archive && p.channel === "email") await ibxGmailArchive(env, p.ref);
      await ibxMarkDone(env, String(p.id), !!p.undo);
      return ibxJson({ ok: true });
    }
    if (fn === "draft") return ibxJson({ ok: true, text: await ibxDraft(env, p) });
    return ibxJson({ ok: false, error: "Not found" }, 404);
  } catch (e) {
    return ibxJson({ ok: false, error: e.message, reconnect: e.reconnect || null }, 500);
  }
}
__name(inboxRoutes, "inboxRoutes");
var INBOX_HTML = "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n<meta name=\"robots\" content=\"noindex\">\n<meta name=\"theme-color\" content=\"#0D1B2E\">\n<title>Inbox -- Sean & Barb</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Karla:wght@400;500;600;700&display=swap\">\n<style>\n:root{--navy:#0D1B2E;--gold:#C4952A;--gold-soft:#D9B86A;--cream:#F4F2EE;--paper:#FFFFFF;--tint:#FAF6EE;--line:#E6E1D8;--line2:#F0ECE4;--ink:#1C2433;--body:#2A3140;--muted:#6B7384;--side:#8A97AD;--li:#3F6E9E;--fb:#5A63A8;--em:#8A6A2C;--err:#9B2C2C}\n*{box-sizing:border-box}\nhtml,body{height:100%}\nbody{margin:0;background:var(--cream);color:var(--ink);font:15px/1.55 Karla,\"Helvetica Neue\",Arial,sans-serif;-webkit-font-smoothing:antialiased}\na{color:var(--gold)}a:hover{color:#9c7620}\nbutton{font:inherit;cursor:pointer}\n.serif{font-family:\"Cormorant Garamond\",Georgia,serif}\n.app{display:flex;height:100vh;height:100dvh}\n/* sidebar */\n.side{width:240px;flex:0 0 240px;background:var(--navy);color:#D9DEE8;display:flex;flex-direction:column;padding:28px 20px;gap:26px;overflow-y:auto}\n.brand{display:flex;flex-direction:column;gap:2px}\n.brand .serif{font-size:28px;color:#fff;letter-spacing:.5px;line-height:1.1}\n.brand small{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--gold)}\n.nav{display:flex;flex-direction:column;gap:3px}\n.nav button,.nav a{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border-radius:6px;border:0;background:none;color:#D9DEE8;font-size:14px;text-align:left;text-decoration:none}\n.nav button:hover,.nav a:hover{background:rgba(255,255,255,.06);color:#fff}\n.nav button.on{background:rgba(196,149,42,.18);color:#fff}\n.nav .n{font-size:12px;color:var(--side)}\n.nav button.on .n{color:var(--gold-soft)}\n.rule{height:1px;background:rgba(255,255,255,.1)}\n.conns{margin-top:auto;display:flex;flex-direction:column;gap:8px;font-size:12px;color:var(--side)}\n.conn{display:flex;align-items:center;gap:8px}\n.dot{width:7px;height:7px;border-radius:50%;background:#4b5a72;flex:0 0 7px}\n.dot.ok{background:#7FB08A}.dot.bad{background:#D9826B}\n.conn a{color:var(--gold-soft);margin-left:auto;text-decoration:none}\n/* list */\n.list{width:420px;flex:0 0 420px;background:var(--paper);border-right:1px solid var(--line);display:flex;flex-direction:column;min-height:0}\n.lhead{padding:28px 24px 14px;display:flex;flex-direction:column;gap:14px;border-bottom:1px solid var(--line2)}\n.lhead .row{display:flex;justify-content:space-between;align-items:center}\n.lhead h1{margin:0;font-size:32px;font-weight:600;color:var(--navy);line-height:1}\n.iconbtn{border:1px solid var(--line);background:#fff;border-radius:6px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;color:var(--muted)}\n.iconbtn:hover{color:var(--navy);border-color:#cfc7b8}\n.iconbtn svg{width:16px;height:16px}\n.chips{display:flex;gap:8px;font-size:13px}\n.chip{padding:6px 12px;border-radius:999px;border:1px solid #DDD6CA;background:#fff;color:#5B6475}\n.chip.on{background:var(--navy);border-color:var(--navy);color:#fff}\n.items{overflow-y:auto;flex:1;min-height:0}\n.item{display:flex;flex-direction:column;gap:4px;padding:15px 24px;border-bottom:1px solid var(--line2);border-left:3px solid transparent;cursor:pointer;background:#fff;width:100%;text-align:left;border-top:0;border-right:0}\n.item:hover{background:#FCFAF6}\n.item.sel{background:var(--tint);border-left-color:var(--gold)}\n.item .top{display:flex;justify-content:space-between;font-size:11.5px;letter-spacing:1px;text-transform:uppercase}\n.item .top time{letter-spacing:0;text-transform:none;color:var(--muted);font-size:12px}\n.k-email{color:var(--em)}.k-linkedin{color:var(--li)}.k-facebook{color:var(--fb)}\n.item .who{font-weight:700;font-size:15px;color:var(--ink);display:flex;align-items:center;gap:7px}\n.item .who i{width:7px;height:7px;border-radius:50%;background:var(--gold);display:inline-block}\n.item .subj{font-size:14px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.item .snip{font-size:13px;color:var(--muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.notice{margin:14px 24px 0;padding:12px 14px;border:1px solid var(--line);border-radius:8px;background:var(--tint);font-size:13px;color:var(--body)}\n.notice b{display:block;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--em);margin-bottom:3px}\n.notice a{font-weight:600}\n.notice ul{margin:6px 0 0;padding-left:18px}\n.empty{padding:48px 24px;text-align:center;color:var(--muted)}\n.empty .serif{font-size:24px;color:var(--navy);display:block;margin-bottom:4px}\n.skel{height:84px;margin:0;border-bottom:1px solid var(--line2);background:linear-gradient(90deg,#fff 0,#f6f3ec 50%,#fff 100%);background-size:200% 100%;animation:sh 1.2s infinite}\n@keyframes sh{to{background-position:-200% 0}}\n/* thread */\n.thread{flex:1;min-width:0;display:flex;flex-direction:column;padding:32px 40px;gap:20px;min-height:0}\n.thead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}\n.thead .eyebrow{font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--gold)}\n.thead h2{margin:4px 0 0;font-size:34px;font-weight:600;color:var(--navy);line-height:1.15}\n.tactions{display:flex;gap:8px;flex:0 0 auto}\n.btn{padding:8px 14px;border:1px solid #DDD6CA;border-radius:6px;background:#fff;color:var(--ink);font-size:13px;text-decoration:none;white-space:nowrap}\n.btn:hover{border-color:#bfb6a6}\n.back{display:none;margin-bottom:12px}\n.msgs{overflow-y:auto;display:flex;flex-direction:column;gap:12px;flex:1;min-height:0;padding-right:4px}\n.msg{background:#fff;border:1px solid var(--line);border-radius:10px;padding:20px 24px;display:flex;flex-direction:column;gap:10px}\n.msg .mh{display:flex;justify-content:space-between;font-size:13px;color:var(--muted);gap:12px}\n.msg .mh b{color:var(--ink)}\n.msg .mt{font-size:15px;line-height:1.65;color:var(--body);white-space:pre-wrap;word-wrap:break-word}\n.composer{background:#fff;border:1px solid var(--navy);border-radius:10px;display:flex;flex-direction:column;flex:0 0 auto}\n.composer textarea{border:0;outline:0;resize:vertical;min-height:140px;padding:18px 22px;font:15px/1.65 Karla,sans-serif;color:var(--body);border-radius:10px 10px 0 0;background:transparent}\n.cbar{display:flex;justify-content:space-between;align-items:center;padding:10px 12px 10px 22px;border-top:1px solid #EEE8DD;gap:12px}\n.tools{display:flex;gap:16px;font-size:13px}\n.tools button{border:0;background:none;color:var(--em);padding:0}\n.tools button:hover{color:var(--navy)}\n.tools button:disabled{opacity:.5;cursor:default}\n.send{padding:10px 22px;background:var(--navy);color:#fff;border:0;border-radius:6px;font-size:14px;font-weight:600}\n.send:disabled{opacity:.55;cursor:default}\n.status{font-size:13px;color:var(--muted)}\n.status.err{color:var(--err)}\n.blank{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--muted);text-align:center;gap:6px}\n.blank .serif{font-size:30px;color:var(--navy)}\n.toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:var(--navy);color:#fff;padding:10px 16px;border-radius:8px;font-size:14px;display:none;gap:14px;align-items:center;box-shadow:0 10px 30px -10px rgba(13,27,46,.5)}\n.toast button{background:none;border:0;color:var(--gold-soft);font-weight:700}\n.mobbar{display:none}\n@media (max-width:1100px){.side{display:none}.mobbar{display:flex}}\n@media (max-width:1100px){\n  .mobbar{align-items:center;justify-content:space-between;background:var(--navy);color:#fff;padding:12px 16px}\n  .mobbar .serif{font-size:22px}\n  .mobbar select{background:transparent;color:var(--gold-soft);border:1px solid rgba(255,255,255,.2);border-radius:6px;padding:6px 8px;font:13px Karla,sans-serif}\n  .app{flex-direction:column}\n  .main{display:flex;flex:1;min-height:0}\n}\n@media (min-width:1101px){.main{display:contents}}\n@media (max-width:760px){\n  .list{width:100%;flex:1 1 auto;border-right:0}\n  .thread{display:none;padding:20px 16px;gap:14px}\n  .app.open .list{display:none}\n  .app.open .thread{display:flex}\n  .back{display:inline-flex}\n  .thead{flex-direction:column;gap:10px}\n  .thead h2{font-size:26px}\n  .lhead{padding:18px 16px 12px}\n  .item{padding:14px 16px}\n  .msg{padding:16px}\n  .composer textarea{min-height:120px;padding:14px 16px}\n  .cbar{padding:10px 10px 10px 16px}\n}\n</style>\n</head>\n<body>\n<div class=\"app\" id=\"app\">\n  <aside class=\"side\">\n    <div class=\"brand\"><span class=\"serif\">Sean &amp; Barb</span><small>Inbox</small></div>\n    <nav class=\"nav\" id=\"filters\">\n      <button data-f=\"all\" class=\"on\"><span>All messages</span><span class=\"n\" data-c=\"all\"></span></button>\n      <button data-f=\"email\"><span>Email</span><span class=\"n\" data-c=\"email\"></span></button>\n      <button data-f=\"linkedin\"><span>LinkedIn</span><span class=\"n\" data-c=\"linkedin\"></span></button>\n      <button data-f=\"facebook\"><span>Facebook</span><span class=\"n\" data-c=\"facebook\"></span></button>\n    </nav>\n    <div class=\"rule\"></div>\n    <nav class=\"nav\">\n      <a href=\"/\">Scheduled posts</a>\n      <a href=\"/generate\">Generate</a>\n      <a href=\"/bulk\">Bulk loader</a>\n      <a href=\"/metrics\">Metrics</a>\n      <a href=\"/cards\">Card scanner</a>\n      <a href=\"/links\">Link stats</a>\n      <a href=\"/transactions\">Transactions</a>\n      <a href=\"/cma\">CMA reports</a>\n    </nav>\n    <div class=\"conns\" id=\"conns\"></div>\n  </aside>\n  <div class=\"mobbar\"><span class=\"serif\">Sean &amp; Barb</span>\n    <select id=\"mobnav\" aria-label=\"Go to\"><option value=\"\">Inbox</option><option value=\"/\">Scheduled posts</option><option value=\"/generate\">Generate</option><option value=\"/bulk\">Bulk loader</option><option value=\"/metrics\">Metrics</option><option value=\"/cards\">Card scanner</option><option value=\"/links\">Link stats</option><option value=\"/transactions\">Transactions</option><option value=\"/cma\">CMA reports</option></select>\n  </div>\n  <div class=\"main\">\n    <section class=\"list\">\n      <div class=\"lhead\">\n        <div class=\"row\"><h1 class=\"serif\">Needs a reply</h1>\n          <button class=\"iconbtn\" id=\"refresh\" title=\"Refresh\" aria-label=\"Refresh\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12a9 9 0 1 1-2.64-6.36\"/><path d=\"M21 3v6h-6\"/></svg></button>\n        </div>\n        <div class=\"chips\" id=\"chips\">\n          <button class=\"chip on\" data-f=\"all\">All</button>\n          <button class=\"chip\" data-f=\"email\">Email</button>\n          <button class=\"chip\" data-f=\"linkedin\">LinkedIn</button>\n          <button class=\"chip\" data-f=\"facebook\">Facebook</button>\n        </div>\n      </div>\n      <div id=\"notices\"></div>\n      <div class=\"items\" id=\"items\"><div class=\"skel\"></div><div class=\"skel\"></div><div class=\"skel\"></div></div>\n    </section>\n    <section class=\"thread\" id=\"thread\">\n      <div class=\"blank\"><span class=\"serif\">Pick a message</span><span>Replies send from here to Gmail, LinkedIn or Facebook.</span></div>\n    </section>\n  </div>\n</div>\n<div class=\"toast\" id=\"toast\"><span id=\"toastmsg\"></span><button id=\"undo\">Undo</button></div>\n<script>\n(function(){\n  var state = { data:null, items:[], filter:\"all\", sel:null, thread:null };\n  var $ = function(id){ return document.getElementById(id); };\n  var LABEL = { email:\"Email\", linkedin:\"LinkedIn\", facebook:\"Facebook\" };\n  function esc(s){ return String(s == null ? \"\" : s).replace(/[&<>\"']/g, function(c){ return {\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\",\"'\":\"&#39;\"}[c]; }); }\n  function when(ms){\n    if(!ms) return \"\";\n    var d = new Date(ms), now = new Date();\n    if(d.toDateString() === now.toDateString()) return d.toLocaleTimeString(\"en-US\",{hour:\"numeric\",minute:\"2-digit\"});\n    var y = new Date(now); y.setDate(now.getDate()-1);\n    if(d.toDateString() === y.toDateString()) return \"Yesterday\";\n    if(now - d < 6*864e5) return d.toLocaleDateString(\"en-US\",{weekday:\"short\"});\n    return d.toLocaleDateString(\"en-US\",{month:\"short\",day:\"numeric\"});\n  }\n  function api(fn, body){\n    var opts = body ? { method:\"POST\", headers:{ \"Content-Type\":\"application/json\", \"X-SB-Inbox\":\"1\" }, body:JSON.stringify(body) } : {};\n    return fetch(\"/api/inbox/\" + fn, opts).then(function(r){ return r.json().catch(function(){ return { ok:false, error:\"HTTP \" + r.status }; }); });\n  }\n  function load(){\n    $(\"items\").innerHTML = '<div class=\"skel\"></div><div class=\"skel\"></div><div class=\"skel\"></div>';\n    api(\"list\").then(function(d){\n      state.data = d;\n      var all = [];\n      [\"email\",\"linkedin\",\"facebook\"].forEach(function(ch){ if(d[ch] && d[ch].ok) all = all.concat(d[ch].items); });\n      all.sort(function(a,b){ return b.at - a.at; });\n      state.items = all;\n      renderConns(); renderList();\n    }).catch(function(e){\n      $(\"items\").innerHTML = '<div class=\"empty\"><span class=\"serif\">Could not load</span>' + esc(e.message) + '</div>';\n    });\n  }\n  function renderConns(){\n    var d = state.data || {};\n    $(\"conns\").innerHTML = [\"email\",\"linkedin\",\"facebook\"].map(function(ch){\n      var s = d[ch] || {};\n      var fix = !s.ok && s.reconnect ? '<a href=\"' + esc(s.reconnect) + '\">Connect</a>' : \"\";\n      return '<div class=\"conn\"><span class=\"dot ' + (s.ok ? \"ok\" : \"bad\") + '\"></span>' + LABEL[ch] + fix + '</div>';\n    }).join(\"\");\n    var counts = { all: state.items.length };\n    state.items.forEach(function(i){ counts[i.channel] = (counts[i.channel]||0) + 1; });\n    document.querySelectorAll(\"[data-c]\").forEach(function(el){ var n = counts[el.getAttribute(\"data-c\")]; el.textContent = n ? n : \"\"; });\n  }\n  function renderList(){\n    var d = state.data || {};\n    var chans = state.filter === \"all\" ? [\"email\",\"linkedin\",\"facebook\"] : [state.filter];\n    $(\"notices\").innerHTML = chans.map(function(ch){\n      var s = d[ch];\n      if(!s) return \"\";\n      if(s.ok){ return s.warning ? '<div class=\"notice\"><b>' + LABEL[ch] + \"</b>\" + esc(s.warning) + ' <a href=\"/auth/meta\">Reconnect</a></div>' : \"\"; }\n      var links = s.links && s.links.length ? \"<ul>\" + s.links.map(function(l){ return '<li><a target=\"_blank\" rel=\"noopener\" href=\"' + esc(l.href) + '\">' + esc(l.label || \"Open post\") + \"</a></li>\"; }).join(\"\") + \"</ul>\" : \"\";\n      return '<div class=\"notice\"><b>' + LABEL[ch] + \"</b>\" + esc(s.error) + (s.reconnect ? ' <a href=\"' + esc(s.reconnect) + '\">Connect</a>' : \"\") + links + \"</div>\";\n    }).join(\"\");\n    var list = state.items.filter(function(i){ return state.filter === \"all\" || i.channel === state.filter; });\n    if(!list.length){\n      $(\"items\").innerHTML = '<div class=\"empty\"><span class=\"serif\">All caught up</span>Nothing is waiting on a reply.</div>';\n      return;\n    }\n    $(\"items\").innerHTML = list.map(function(i){\n      return '<button class=\"item' + (state.sel && state.sel.id === i.id ? \" sel\" : \"\") + '\" data-id=\"' + esc(i.id) + '\">' +\n        '<span class=\"top\"><span class=\"k-' + i.channel + '\">' + esc(i.kind) + '</span><time>' + esc(when(i.at)) + '</time></span>' +\n        '<span class=\"who\">' + (i.unread ? \"<i></i>\" : \"\") + esc(i.name) + '</span>' +\n        '<span class=\"subj\">' + esc(i.subject) + '</span>' +\n        '<span class=\"snip\">' + esc(i.snippet) + '</span></button>';\n    }).join(\"\");\n  }\n  function setFilter(f){\n    state.filter = f;\n    document.querySelectorAll(\"[data-f]\").forEach(function(b){ b.classList.toggle(\"on\", b.getAttribute(\"data-f\") === f); });\n    renderList();\n  }\n  function open(item){\n    state.sel = item; state.thread = null;\n    item.unread = false;\n    renderList();\n    $(\"app\").classList.add(\"open\");\n    var link = item.link ? '<a class=\"btn\" target=\"_blank\" rel=\"noopener\" href=\"' + esc(item.link) + '\">Open on ' + LABEL[item.channel] + '</a>' : \"\";\n    var archive = item.channel === \"email\" ? '<button class=\"btn\" id=\"archive\">Archive</button>' : \"\";\n    $(\"thread\").innerHTML =\n      '<div class=\"thead\"><div><button class=\"btn back\" id=\"back\">Back</button>' +\n      '<div class=\"eyebrow\">' + esc(item.kind) + '</div><h2 class=\"serif\">' + esc(item.subject) + '</h2></div>' +\n      '<div class=\"tactions\">' + link + archive + '<button class=\"btn\" id=\"done\">Mark done</button></div></div>' +\n      '<div class=\"msgs\" id=\"msgs\"><div class=\"msg\"><div class=\"mh\"><b>' + esc(item.name) + '</b><span>' + esc(when(item.at)) + '</span></div><div class=\"mt\">' + esc(item.snippet) + '</div></div></div>' +\n      '<div class=\"composer\"><textarea id=\"reply\" placeholder=\"Write your reply to ' + esc(item.name) + '\"></textarea>' +\n      '<div class=\"cbar\"><div class=\"tools\"><button id=\"draft\">Draft with Claude</button><span class=\"status\" id=\"st\"></span></div>' +\n      '<button class=\"send\" id=\"send\">Send reply</button></div></div>';\n    $(\"back\").onclick = function(){ $(\"app\").classList.remove(\"open\"); };\n    $(\"done\").onclick = function(){ finish(item, false); };\n    if($(\"archive\")) $(\"archive\").onclick = function(){ finish(item, true); };\n    $(\"draft\").onclick = function(){ draft(item); };\n    $(\"send\").onclick = function(){ send(item); };\n    api(\"thread\", item).then(function(t){\n      if(state.sel !== item) return;\n      if(!t.ok){ $(\"st\").textContent = t.error || \"Could not load the full conversation.\"; $(\"st\").className = \"status err\"; return; }\n      state.thread = t;\n      if(t.messages && t.messages.length){\n        $(\"msgs\").innerHTML = t.messages.map(function(m){\n          return '<div class=\"msg\"><div class=\"mh\"><b>' + esc(m.name) + '</b><span>' + esc(when(m.at)) + '</span></div><div class=\"mt\">' + esc(m.text) + '</div></div>';\n        }).join(\"\");\n        $(\"msgs\").scrollTop = $(\"msgs\").scrollHeight;\n      }\n    });\n  }\n  function status(msg, err){ var s = $(\"st\"); if(s){ s.textContent = msg || \"\"; s.className = \"status\" + (err ? \" err\" : \"\"); } }\n  function draft(item){\n    var b = $(\"draft\"); b.disabled = true; status(\"Drafting...\");\n    var msgs = state.thread && state.thread.messages || [{ name:item.name, text:item.snippet }];\n    api(\"draft\", { channel:item.channel, kind:item.kind, messages:msgs, current:$(\"reply\").value }).then(function(d){\n      b.disabled = false;\n      if(!d.ok){ status(d.error, true); return; }\n      $(\"reply\").value = d.text; status(\"Draft ready. Edit before sending.\");\n    });\n  }\n  function send(item){\n    var text = $(\"reply\").value.trim();\n    if(!text){ status(\"Write a reply first.\", true); return; }\n    var b = $(\"send\"); b.disabled = true; status(\"Sending...\");\n    api(\"reply\", { id:item.id, channel:item.channel, kind:item.kind, ref:item.ref, text:text }).then(function(d){\n      b.disabled = false;\n      if(!d.ok){ status(d.error, true); return; }\n      removeItem(item); toast(\"Reply sent\", null);\n    }).catch(function(e){ b.disabled = false; status(e.message, true); });\n  }\n  function finish(item, archive){\n    api(\"done\", { id:item.id, channel:item.channel, ref:item.ref, archive:archive }).then(function(d){\n      if(!d.ok){ status(d.error, true); return; }\n      removeItem(item);\n      toast(archive ? \"Archived\" : \"Marked done\", archive ? null : function(){\n        api(\"done\", { id:item.id, undo:true }).then(function(){ state.items.push(item); state.items.sort(function(a,b){ return b.at - a.at; }); renderConns(); renderList(); });\n      });\n    });\n  }\n  function removeItem(item){\n    state.items = state.items.filter(function(i){ return i.id !== item.id; });\n    var list = state.items.filter(function(i){ return state.filter === \"all\" || i.channel === state.filter; });\n    renderConns(); renderList();\n    $(\"app\").classList.remove(\"open\");\n    if(list.length && window.innerWidth > 760) open(list[0]);\n    else { state.sel = null; $(\"thread\").innerHTML = '<div class=\"blank\"><span class=\"serif\">All caught up</span><span>Nothing else is waiting.</span></div>'; }\n  }\n  var tt;\n  function toast(msg, undo){\n    $(\"toastmsg\").textContent = msg; $(\"undo\").style.display = undo ? \"\" : \"none\";\n    $(\"undo\").onclick = function(){ $(\"toast\").style.display = \"none\"; if(undo) undo(); };\n    $(\"toast\").style.display = \"flex\"; clearTimeout(tt); tt = setTimeout(function(){ $(\"toast\").style.display = \"none\"; }, 5000);\n  }\n  document.addEventListener(\"click\", function(e){\n    var f = e.target.closest(\"[data-f]\"); if(f){ setFilter(f.getAttribute(\"data-f\")); return; }\n    var it = e.target.closest(\".item\"); if(it){ var id = it.getAttribute(\"data-id\"); var item = state.items.find(function(i){ return i.id === id; }); if(item) open(item); }\n  });\n  $(\"refresh\").onclick = load;\n  $(\"mobnav\").onchange = function(){ if(this.value) location.href = this.value; };\n  load();\n})();\n</script>\n</body>\n</html>\n";

// worker.js
var LINKEDIN_SCOPE = "openid profile email w_member_social";
var META_CONFIG_ID = "1653906553410858";
var CAMPAIGNS = { physician: "Physician Relocation", probate: "Probate Attorneys" };
function normCampaign(c) {
  return c === "probate" ? "probate" : "physician";
}
__name(normCampaign, "normCampaign");
var GO_HOME = "https://www.seanandbarb.com/";
var SB_LOGO_B64 = "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";
var SB_LOGO_ASPECT = 0.3583;
var DEFAULT_LINKS = {
  "canopy": { label: "Canopy Oaks Home Valuation Request", url: "https://www.seanandbarb.com/selling-your-home/#sv-valuation", src: "qr-canopy-letter" },
  "contact": { label: "General Contact Us", url: "https://www.seanandbarb.com/contact/", src: "qr-contact-letter" }
};
function taggedUrl(dest, tag) {
  try {
    const u = new URL(dest);
    if (tag && !u.searchParams.get("src")) u.searchParams.set("src", tag);
    return u.toString();
  } catch (_) {
    return dest;
  }
}
__name(taggedUrl, "taggedUrl");
var worker_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = url.origin;
    const path = url.pathname;
    const method = request.method;
    try {
      const inbox = await inboxRoutes(request, env, url);
      if (inbox) return inbox;
      const cma = await cmaRoutes(request, env, ctx);
      if (cma) return cma;
      if (path.startsWith("/cal/")) return calFeed(request, env, path);
      if (url.hostname.toLowerCase().startsWith("go.")) return goRedirect(request, env, ctx, path);
      if (path === "/links") return linksPage(request, env, origin);
      if (path === "/transactions") return txnPage(request, env, origin);
      if (path === "/api/txn" && method === "POST") return txnSave(request, env, origin);
      if (path === "/api/link" && method === "POST") return linkSave(request, env, origin);
      if (path === "/") return dashboard(request, env, origin);
      if (path === "/api/status") return statusJson(env);
      if (path === "/auth/linkedin") return startLinkedIn(env, origin);
      if (path === "/auth/linkedin/callback") return cbLinkedIn(request, env, origin);
      if (path === "/auth/meta") return startMeta(env, origin);
      if (path === "/auth/meta/callback") return cbMeta(request, env, origin);
      if (path === "/api/linkedin/refresh" && method === "POST") return refreshLinkedIn(env, origin);
      if (path === "/api/meta/refresh" && method === "POST") return refreshMeta(env, origin);
      if (path === "/api/disconnect" && method === "POST") return disconnect(request, env, origin);
      if (path === "/api/compose" && method === "POST") return compose(request, env, origin);
      if (path === "/api/queue/delete" && method === "POST") return queueDelete(request, env, origin);
      if (path === "/api/queue/retry" && method === "POST") return queueRetry(request, env, origin);
      if (path === "/api/post" && method === "POST") return apiPostNow(request, env);
      if (path === "/api/queue" && method === "GET") return queueJson(env);
      if (path === "/bulk") return bulkPage(request, env, origin);
      if (path === "/api/bulk" && method === "POST") return bulkLoad(request, env, origin);
      if (path === "/generate") return generatePage(env, origin);
      if (path === "/api/generate" && method === "POST") return apiGenerate(request, env);
      if (path === "/metrics") return metricsPage(request, env, origin);
      if (path === "/api/metrics" && method === "POST") return metricsSave(request, env, origin);
      if (path === "/cards") return cardsPage();
      if (path.startsWith("/api/cards/") && method === "POST") return cardsApi(request, env, path.slice(11));
      if (path === "/auth/google") return startGoogle(env, origin);
      if (path === "/auth/google/callback") return cbGoogle(request, env, origin);
      if (path === "/auth/google/reset") return resetGoogle(request, env, origin);
      return new Response("Not found", { status: 404 });
    } catch (e) {
      return htmlResponse(page2("Error", `
        <div class="card err">
          <h2>Something went wrong</h2>
          <pre>${esc2(String(e && e.stack || e))}</pre>
          <p><a class="btn" href="/">Back to dashboard</a></p>
        </div>`), 500);
    }
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(runScheduler(env));
  }
};
function requireEnv(env, keys) {
  for (const k of keys) {
    if (!env[k]) throw new Error("Missing required secret: " + k + ". Set it in the Worker settings under Variables and Secrets.");
  }
}
__name(requireEnv, "requireEnv");
async function kvJson(env, key) {
  const r = await env.TOKENS.get(key);
  return r ? JSON.parse(r) : null;
}
__name(kvJson, "kvJson");
async function fetchJson(url, opts) {
  const r = await fetch(url, opts);
  const text = await r.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (_) {
    data = { raw: text };
  }
  if (!r.ok) {
    const msg = data && (data.error_description || data.message) || data && data.error && (data.error.message || data.error) || text;
    throw new Error("HTTP " + r.status + " from " + url + ": " + (typeof msg === "string" ? msg : JSON.stringify(msg)));
  }
  return data;
}
__name(fetchJson, "fetchJson");
async function makeState(env, provider) {
  const nonce = crypto.randomUUID();
  await env.TOKENS.put("state:" + nonce, JSON.stringify({ provider, t: Date.now() }), { expirationTtl: 600 });
  return nonce;
}
__name(makeState, "makeState");
async function checkState(env, provider, nonce) {
  if (!nonce) throw new Error("Missing state parameter");
  const raw = await env.TOKENS.get("state:" + nonce);
  if (!raw) throw new Error("Invalid or expired state. Start the connection again.");
  const s = JSON.parse(raw);
  if (s.provider !== provider) throw new Error("State provider mismatch");
  await env.TOKENS.delete("state:" + nonce);
}
__name(checkState, "checkState");
function daysLeft(ts) {
  if (!ts) return null;
  return Math.round((ts - Date.now()) / 864e5);
}
__name(daysLeft, "daysLeft");
function esc2(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
__name(esc2, "esc");
function htmlResponse(html, status) {
  return new Response(html, { status: status || 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
}
__name(htmlResponse, "htmlResponse");
async function startLinkedIn(env, origin) {
  requireEnv(env, ["LINKEDIN_CLIENT_ID", "LINKEDIN_CLIENT_SECRET"]);
  const state = await makeState(env, "linkedin");
  const p = new URLSearchParams({
    response_type: "code",
    client_id: env.LINKEDIN_CLIENT_ID,
    redirect_uri: origin + "/auth/linkedin/callback",
    scope: LINKEDIN_SCOPE,
    state
  });
  return Response.redirect("https://www.linkedin.com/oauth/v2/authorization?" + p.toString(), 302);
}
__name(startLinkedIn, "startLinkedIn");
async function cbLinkedIn(request, env, origin) {
  const u = new URL(request.url);
  const err = u.searchParams.get("error");
  if (err) throw new Error("LinkedIn returned: " + err + " " + (u.searchParams.get("error_description") || ""));
  await checkState(env, "linkedin", u.searchParams.get("state"));
  const code = u.searchParams.get("code");
  if (!code) throw new Error("No authorization code from LinkedIn");
  const tok = await fetchJson("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: origin + "/auth/linkedin/callback",
      client_id: env.LINKEDIN_CLIENT_ID,
      client_secret: env.LINKEDIN_CLIENT_SECRET
    }).toString()
  });
  const me = await fetchJson("https://api.linkedin.com/v2/userinfo", {
    headers: { Authorization: "Bearer " + tok.access_token }
  });
  const now = Date.now();
  const rec = {
    access_token: tok.access_token,
    refresh_token: tok.refresh_token || null,
    expires_at: now + (tok.expires_in || 0) * 1e3,
    refresh_expires_at: tok.refresh_token_expires_in ? now + tok.refresh_token_expires_in * 1e3 : null,
    person_urn: "urn:li:person:" + me.sub,
    name: me.name || [me.given_name, me.family_name].filter(Boolean).join(" ") || "(unknown)",
    scope: tok.scope || LINKEDIN_SCOPE,
    obtained_at: now
  };
  await env.TOKENS.put("tok:linkedin", JSON.stringify(rec));
  return Response.redirect(origin + "/?connected=linkedin", 302);
}
__name(cbLinkedIn, "cbLinkedIn");
async function refreshLinkedIn(env, origin) {
  const rec = await kvJson(env, "tok:linkedin");
  if (!rec) return Response.redirect(origin + "/?err=LinkedIn+is+not+connected", 302);
  if (!rec.refresh_token) return Response.redirect(origin + "/?err=No+refresh+token.+Reconnect+LinkedIn.", 302);
  try {
    const tok = await fetchJson("https://www.linkedin.com/oauth/v2/accessToken", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: rec.refresh_token,
        client_id: env.LINKEDIN_CLIENT_ID,
        client_secret: env.LINKEDIN_CLIENT_SECRET
      }).toString()
    });
    const now = Date.now();
    rec.access_token = tok.access_token;
    rec.expires_at = now + (tok.expires_in || 0) * 1e3;
    if (tok.refresh_token) rec.refresh_token = tok.refresh_token;
    if (tok.refresh_token_expires_in) rec.refresh_expires_at = now + tok.refresh_token_expires_in * 1e3;
    rec.obtained_at = now;
    await env.TOKENS.put("tok:linkedin", JSON.stringify(rec));
    return Response.redirect(origin + "/?refreshed=LinkedIn", 302);
  } catch (e) {
    return Response.redirect(origin + "/?err=" + encodeURIComponent("LinkedIn refresh failed (refresh may require partner access). Reconnect instead. " + e.message), 302);
  }
}
__name(refreshLinkedIn, "refreshLinkedIn");
async function startMeta(env, origin) {
  requireEnv(env, ["META_APP_ID", "META_APP_SECRET"]);
  const ver = env.META_API_VERSION || "v23.0";
  const state = await makeState(env, "meta");
  const p = new URLSearchParams({
    client_id: env.META_APP_ID,
    redirect_uri: origin + "/auth/meta/callback",
    state,
    response_type: "code",
    config_id: META_CONFIG_ID
  });
  return Response.redirect("https://www.facebook.com/" + ver + "/dialog/oauth?" + p.toString(), 302);
}
__name(startMeta, "startMeta");
async function cbMeta(request, env, origin) {
  const u = new URL(request.url);
  const ver = env.META_API_VERSION || "v23.0";
  const err = u.searchParams.get("error");
  if (err) throw new Error("Meta returned: " + err + " " + (u.searchParams.get("error_description") || ""));
  await checkState(env, "meta", u.searchParams.get("state"));
  const code = u.searchParams.get("code");
  if (!code) throw new Error("No authorization code from Meta");
  const redirect = origin + "/auth/meta/callback";
  const sl = await fetchJson("https://graph.facebook.com/" + ver + "/oauth/access_token?" + new URLSearchParams({
    client_id: env.META_APP_ID,
    redirect_uri: redirect,
    client_secret: env.META_APP_SECRET,
    code
  }).toString());
  const ll = await fetchJson("https://graph.facebook.com/" + ver + "/oauth/access_token?" + new URLSearchParams({
    grant_type: "fb_exchange_token",
    client_id: env.META_APP_ID,
    client_secret: env.META_APP_SECRET,
    fb_exchange_token: sl.access_token
  }).toString());
  const userToken = ll.access_token;
  const now = Date.now();
  const pages = await fetchJson("https://graph.facebook.com/" + ver + "/me/accounts?" + new URLSearchParams({
    fields: "id,name,access_token",
    access_token: userToken
  }).toString());
  const list = pages.data || [];
  if (!list.length && env.META_PAGE_ID) {
    const pt = await fetchJson("https://graph.facebook.com/" + ver + "/" + env.META_PAGE_ID + "?" + new URLSearchParams({
      fields: "id,name,access_token",
      access_token: userToken
    }).toString());
    if (pt && pt.access_token) list.push(pt);
  }
  if (!list.length) throw new Error("No Facebook Pages found. Make sure you are an admin of the Sean & Barb Page and granted Page access during login.");
  let page3 = list[0];
  if (env.META_PAGE_ID) {
    const found = list.find((p) => p.id === env.META_PAGE_ID);
    if (found) page3 = found;
  }
  let igId = null, igUser = null, igNote = null;
  try {
    const igRes = await fetchJson("https://graph.facebook.com/" + ver + "/" + page3.id + "?" + new URLSearchParams({
      fields: "instagram_business_account{id,username}",
      access_token: page3.access_token
    }).toString());
    if (igRes.instagram_business_account) {
      igId = igRes.instagram_business_account.id;
      igUser = igRes.instagram_business_account.username || null;
    } else {
      igNote = "No Instagram Business account is linked to this Page.";
    }
  } catch (e) {
    igNote = "Could not read Instagram link: " + e.message;
  }
  const rec = {
    user_token: userToken,
    expires_at: ll.expires_in ? now + ll.expires_in * 1e3 : null,
    page_id: page3.id,
    page_name: page3.name,
    page_token: page3.access_token,
    ig_user_id: igId,
    ig_username: igUser,
    ig_note: igNote,
    pages_available: list.map((p) => ({ id: p.id, name: p.name })),
    obtained_at: now
  };
  await env.TOKENS.put("tok:meta", JSON.stringify(rec));
  return Response.redirect(origin + "/?connected=meta", 302);
}
__name(cbMeta, "cbMeta");
async function refreshMeta(env, origin) {
  const rec = await kvJson(env, "tok:meta");
  if (!rec) return Response.redirect(origin + "/?err=Meta+is+not+connected", 302);
  const ver = env.META_API_VERSION || "v23.0";
  try {
    const ll = await fetchJson("https://graph.facebook.com/" + ver + "/oauth/access_token?" + new URLSearchParams({
      grant_type: "fb_exchange_token",
      client_id: env.META_APP_ID,
      client_secret: env.META_APP_SECRET,
      fb_exchange_token: rec.user_token
    }).toString());
    const now = Date.now();
    rec.user_token = ll.access_token;
    rec.expires_at = ll.expires_in ? now + ll.expires_in * 1e3 : rec.expires_at;
    const pages = await fetchJson("https://graph.facebook.com/" + ver + "/me/accounts?" + new URLSearchParams({
      fields: "id,name,access_token",
      access_token: rec.user_token
    }).toString());
    const list = pages.data || [];
    const page3 = list.find((p) => p.id === rec.page_id) || list[0];
    if (page3) {
      rec.page_id = page3.id;
      rec.page_name = page3.name;
      rec.page_token = page3.access_token;
    }
    rec.obtained_at = now;
    await env.TOKENS.put("tok:meta", JSON.stringify(rec));
    return Response.redirect(origin + "/?refreshed=Meta", 302);
  } catch (e) {
    return Response.redirect(origin + "/?err=" + encodeURIComponent("Meta refresh failed. Reconnect instead. " + e.message), 302);
  }
}
__name(refreshMeta, "refreshMeta");
async function disconnect(request, env, origin) {
  const provider = new URL(request.url).searchParams.get("provider");
  if (provider === "linkedin") await env.TOKENS.delete("tok:linkedin");
  else if (provider === "meta") await env.TOKENS.delete("tok:meta");
  return Response.redirect(origin + "/?disconnected=" + (provider || ""), 302);
}
__name(disconnect, "disconnect");
async function statusJson(env) {
  const li = await kvJson(env, "tok:linkedin");
  const meta = await kvJson(env, "tok:meta");
  const body = {
    linkedin: li ? { connected: true, name: li.name, person_urn: li.person_urn, expires_at: li.expires_at, days_left: daysLeft(li.expires_at) } : { connected: false },
    facebook: meta ? { connected: true, page_name: meta.page_name, page_id: meta.page_id } : { connected: false },
    instagram: meta && meta.ig_user_id ? { connected: true, username: meta.ig_username, ig_user_id: meta.ig_user_id } : { connected: false },
    meta_token: meta ? { expires_at: meta.expires_at, days_left: daysLeft(meta.expires_at) } : null
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { "Content-Type": "application/json" } });
}
__name(statusJson, "statusJson");
async function dashboard(request, env, origin) {
  const u = new URL(request.url);
  const tab = normCampaign(u.searchParams.get("tab"));
  const li = await kvJson(env, "tok:linkedin");
  const meta = await kvJson(env, "tok:meta");
  const flash = [];
  if (u.searchParams.get("connected")) flash.push(["ok", "Connected " + u.searchParams.get("connected") + "."]);
  if (u.searchParams.get("refreshed")) flash.push(["ok", "Refreshed " + u.searchParams.get("refreshed") + " token."]);
  if (u.searchParams.get("disconnected")) flash.push(["ok", "Disconnected " + u.searchParams.get("disconnected") + "."]);
  if (u.searchParams.get("posted")) flash.push(["ok", u.searchParams.get("posted")]);
  if (u.searchParams.get("queued")) flash.push(["ok", u.searchParams.get("queued")]);
  if (u.searchParams.get("err")) flash.push(["err", u.searchParams.get("err")]);
  const editId = u.searchParams.get("edit");
  let editItem = null;
  if (editId) {
    editItem = await kvJson(env, "q:" + editId);
    if (!editItem || editItem.status !== "scheduled") {
      flash.push(["err", "That queued post is no longer editable. It may have already published."]);
      editItem = null;
    }
  }
  let genItem = null;
  const genRef = u.searchParams.get("gen");
  if (genRef && !editItem) {
    genItem = await kvJson(env, "gen:" + genRef);
    if (genItem) genItem.id = genRef;
  }
  const missing = [];
  if (!env.LINKEDIN_CLIENT_ID || !env.LINKEDIN_CLIENT_SECRET) missing.push("LINKEDIN_CLIENT_ID / LINKEDIN_CLIENT_SECRET");
  if (!env.META_APP_ID || !env.META_APP_SECRET) missing.push("META_APP_ID / META_APP_SECRET");
  const liDays = li ? daysLeft(li.expires_at) : null;
  const liCard = li ? `<div class="badge ok">Connected</div>
       <div class="kv"><span>Profile</span><b>${esc2(li.name)}</b></div>
       <div class="kv"><span>Author URN</span><code>${esc2(li.person_urn)}</code></div>
       <div class="kv"><span>Token</span><b class="${liDays <= 7 ? "warn" : ""}">${liDays} days left</b></div>
       <div class="row">
         <form method="post" action="/api/linkedin/refresh"><button class="btn ghost">Refresh token</button></form>
         <a class="btn ghost" href="/auth/linkedin">Reconnect</a>
         <form method="post" action="/api/disconnect?provider=linkedin"><button class="btn danger">Disconnect</button></form>
       </div>` : `<div class="badge">Not connected</div>
       <p class="muted">Posts to your personal LinkedIn feed (text, image, link). Free Consumer tier.</p>
       <a class="btn gold" href="/auth/linkedin">Connect LinkedIn</a>`;
  const metaDays = meta ? daysLeft(meta.expires_at) : null;
  const igLine = meta ? meta.ig_user_id ? `<div class="kv"><span>Instagram</span><b>@${esc2(meta.ig_username || meta.ig_user_id)}</b></div>` : `<div class="kv"><span>Instagram</span><b class="warn">${esc2(meta.ig_note || "not linked")}</b></div>` : "";
  const pagesPicker = meta && meta.pages_available && meta.pages_available.length > 1 ? `<p class="muted">You administer ${meta.pages_available.length} Pages. Currently using <b>${esc2(meta.page_name)}</b>. To pin a different one, set <code>META_PAGE_ID</code> and reconnect. Available: ${meta.pages_available.map((p) => esc2(p.name) + " (" + esc2(p.id) + ")").join(", ")}.</p>` : "";
  const metaCard = meta ? `<div class="badge ok">Connected</div>
       <div class="kv"><span>Facebook Page</span><b>${esc2(meta.page_name)}</b></div>
       ${igLine}
       <div class="kv"><span>Token</span><b class="${metaDays <= 7 ? "warn" : ""}">${metaDays} days left</b></div>
       ${pagesPicker}
       <div class="row">
         <form method="post" action="/api/meta/refresh"><button class="btn ghost">Refresh token</button></form>
         <a class="btn ghost" href="/auth/meta">Reconnect</a>
         <form method="post" action="/api/disconnect?provider=meta"><button class="btn danger">Disconnect</button></form>
       </div>` : `<div class="badge">Not connected</div>
       <p class="muted">One login covers your Facebook Page and the linked Instagram Business account.</p>
       <a class="btn gold" href="/auth/meta">Connect Meta (Facebook + Instagram)</a>`;
  const setupBox = missing.length ? `<div class="card warnbox">
        <h3>Finish setup</h3>
        <p>These secrets are not set yet on this Worker: <code>${missing.map(esc2).join("</code>, <code>")}</code></p>
        <p>Add them under <b>Settings &gt; Variables and Secrets</b>, then reload. See SETUP.md for how to get them.</p>
       </div>` : "";
  const redirects = `<div class="card subtle">
      <h3>Redirect URLs (paste these into the apps exactly)</h3>
      <div class="kv"><span>LinkedIn</span><code>${esc2(origin)}/auth/linkedin/callback</code></div>
      <div class="kv"><span>Meta</span><code>${esc2(origin)}/auth/meta/callback</code></div>
    </div>`;
  const allQueue = li ? await queueList(env) : [];
  const queue = allQueue.filter((q) => normCampaign(q.campaign) === tab);
  const otherTab = tab === "physician" ? "probate" : "physician";
  const countOther = allQueue.filter((q) => normCampaign(q.campaign) === otherTab && q.status === "scheduled").length;
  const tabBar = li ? `
    <div class="tabbar">
      <a class="tab ${tab === "physician" ? "on" : ""}" href="/?tab=physician">${esc2(CAMPAIGNS.physician)}</a>
      <a class="tab ${tab === "probate" ? "on" : ""}" href="/?tab=probate">${esc2(CAMPAIGNS.probate)}</a>
      <a class="tab mtab" href="/metrics?tab=${esc2(tab)}">Metrics</a>
    </div>
    ${countOther ? `<p class="muted" style="margin-top:-6px">${countOther} scheduled post${countOther === 1 ? "" : "s"} in the ${esc2(CAMPAIGNS[otherTab])} tab.</p>` : ""}` : "";
  const ei = editItem;
  const metaOn = !!(meta && meta.page_token);
  const composeCard = li ? `
    <div class="card">
      <h2><span class="dot li"></span>${ei ? "Edit scheduled post" : "Compose &amp; schedule"} <small>${esc2(CAMPAIGNS[tab])}</small> <a class="btn ghost sm" style="margin-left:auto;margin-top:0" href="/bulk?tab=${esc2(tab)}">Bulk load</a></h2>
      ${ei ? `<p class="muted">Editing the post scheduled for <b>${esc2(fmtEastern(ei.scheduledFor))}</b>. Saving replaces the original. <a href="/?tab=${esc2(tab)}">Cancel</a></p>` : ""}
      <form method="post" action="/api/compose" enctype="multipart/form-data">
        <input type="hidden" name="campaign" value="${esc2(tab)}">
        ${ei ? `<input type="hidden" name="edit_id" value="${esc2(ei.id)}">` : ""}${genItem ? `<input type="hidden" name="gen_image" value="${esc2(genItem.id)}">` : ""}
        <label class="lbl">Post text</label>
        <textarea name="body" rows="6" class="ta" placeholder="Paste the post body from your Claude Project. Keep the link OUT of here.">${ei ? esc2(ei.body || "") : genItem ? esc2(genItem.body || "") : ""}</textarea>
        <label class="lbl">First comment (the link)</label>
        <textarea name="comment" rows="2" class="ta" placeholder="${tab === "probate" ? "https://www.seanandbarb.com/probate-real-estate/" : "https://www.seanandbarb.com/lifestyles/physician-relocation/"}">${ei ? esc2(ei.comment || "") : genItem ? esc2(genItem.comment || "") : ""}</textarea>
        <label class="lbl">Post to</label>
        <div class="whenrow">
          <label class="radio"><input type="checkbox" name="platforms" value="linkedin"${!ei || !ei.platforms || ei.platforms.indexOf("linkedin") !== -1 ? " checked" : ""}> LinkedIn</label>
          <label class="radio"><input type="checkbox" name="platforms" value="facebook"${ei && ei.platforms && ei.platforms.indexOf("facebook") !== -1 ? " checked" : ""}${metaOn ? "" : " disabled"}> Facebook Page${metaOn ? "" : ' <span class="muted">(connect Meta first)</span>'}</label>
        </div>
        <label class="lbl">Image (optional, JPEG/PNG/GIF, under 4MB)</label>
        <input type="file" name="image" accept="image/jpeg,image/png,image/gif" class="dt">
        ${ei && ei.imageB64 ? `<p class="muted">This post has an image attached. It stays unless you choose a new file.</p>` : ""}${genItem && genItem.imageB64 ? `<p class="muted">AI-generated image attached. It is used unless you choose a file.</p>` : ""}
        <label class="lbl">Image alt text (what the image shows, for accessibility and AEO)</label>
        <textarea name="alt" rows="2" class="ta" placeholder="State income tax savings calculator comparing New York to Florida for a physician earning $500K">${ei ? esc2(ei.imageAlt || "") : genItem ? esc2(genItem.alt || "") : ""}</textarea>
        <label class="lbl">When (times are Eastern)</label>
        <div class="whenrow">
          <label class="radio"><input type="radio" name="when" value="now"${ei ? "" : " checked"}> Post now</label>
          <label class="radio"><input type="radio" name="when" value="schedule"${ei ? " checked" : ""}> Schedule for</label>
          <input type="datetime-local" name="dt" class="dt" value="${ei ? esc2(easternLocalValue(ei.scheduledFor)) : ""}">
        </div>
        <p class="muted">Schedule your Tue / Wed / Thu slots. The poster checks every 15 minutes.</p>
        <button class="btn gold" type="submit">${ei ? "Save changes" : "Post / Schedule"}</button>
      </form>
    </div>` : "";
  const queueRows = queue.length ? queue.map((q) => `
      <div class="qitem">
        <div class="qmeta">
          <span class="qstatus ${esc2(q.status)}">${esc2(q.status)}</span>${q.label ? `<span class="qstatus" style="background:#0D1B2E;color:#E0BC6B">${esc2(q.label)}</span>` : ""}
          <span class="qwhen">${q.scheduledFor ? esc2(fmtEastern(q.scheduledFor)) : "-"}</span>
        </div>
        <div class="qbody"><span style="color:#8a8478">[${(q.platforms && q.platforms.length ? q.platforms : ["linkedin"]).map(esc2).join(" + ")}]</span> ${q.imageType || q.imageB64 ? "[image] " : ""}${esc2((q.body || "").slice(0, 120))}${(q.body || "").length > 120 ? "..." : ""}</div>
        ${q.commentStatus === "pending" && q.commentDueAt ? `<div class="muted" style="font-size:.85rem;margin-top:4px">Link comment goes up ${esc2(fmtEastern(q.commentDueAt))}</div>` : ""}
        ${q.commentStatus === "failed" ? `<div class="qerr">Link comment failed: ${esc2(q.commentError || "unknown")}</div>` : ""}
        ${q.error ? `<div class="qerr">${esc2(q.error)}</div>` : ""}
        ${q.status === "scheduled" ? `<div class="row" style="margin-top:8px;gap:6px"><a class="btn ghost sm" style="margin-top:0" href="/?edit=${esc2(q.id)}&tab=${esc2(tab)}">Edit</a><form method="post" action="/api/queue/delete" style="margin:0"><input type="hidden" name="id" value="${esc2(q.id)}"><input type="hidden" name="tab" value="${esc2(tab)}"><button class="btn danger sm" style="margin-top:0">Remove</button></form></div>` : ""}
        ${q.status === "failed" ? `<div class="row" style="margin-top:8px;gap:6px"><form method="post" action="/api/queue/retry" style="margin:0"><input type="hidden" name="id" value="${esc2(q.id)}"><input type="hidden" name="tab" value="${esc2(tab)}"><button class="btn gold sm" style="margin-top:0">Retry</button></form><form method="post" action="/api/queue/delete" style="margin:0"><input type="hidden" name="id" value="${esc2(q.id)}"><input type="hidden" name="tab" value="${esc2(tab)}"><button class="btn danger sm" style="margin-top:0">Remove</button></form></div>` : ""}
      </div>`).join("") : `<p class="muted">Nothing queued in ${esc2(CAMPAIGNS[tab])} yet.</p>`;
  const queueCard = li ? `<div class="card"><h2>Queue <small>${esc2(CAMPAIGNS[tab])}</small> <a class="btn ghost sm" style="margin-left:auto;margin-top:0" href="/bulk?tab=${esc2(tab)}">Bulk load</a></h2>${queueRows}</div>` : "";
  const flashHtml = flash.map(([t, m]) => `<div class="flash ${t}">${esc2(m)}</div>`).join("");
  const helpCard = `
    <details class="card">
      <summary>First time here? How this app works</summary>
      <ol style="margin:0;padding-left:20px;font-size:.93rem;line-height:1.7">
        <li><b>Connect accounts</b> in the two cards below. LinkedIn posts to your personal feed; Meta covers your Facebook Page (Instagram posting arrives in the next phase).</li>
        <li><b>Pick a campaign tab.</b> Physician Relocation and Probate Attorneys keep separate queues, composers, and metrics. Posts are tagged with whichever tab you compose in.</li>
        <li><b>Create a post</b> three ways: the Compose form below (one post), the <a href="/generate">Generate</a> page (AI writes the post and the image for you), or <a href="/bulk">Bulk load</a> (paste a JSON batch of many posts at once).</li>
        <li><b>Pick platforms and a time.</b> Check LinkedIn and/or Facebook on each post. Times are Eastern. "Post now" publishes immediately; "Schedule for" adds it to the queue.</li>
        <li><b>The queue does the rest.</b> A robot checks every 15 minutes and publishes anything due. Upcoming posts sort to the top; use <b>Edit</b> or <b>Remove</b> on any scheduled item.</li>
        <li><b>Links ride in the comment.</b> On LinkedIn the link posts as the first comment, held back about 75 minutes after publishing so it does not blunt the post's early reach; on Facebook it is appended to the post text. Change COMMENT_DELAY_MIN in wrangler.toml to adjust, or set it to 0 for instant.</li>
        <li><b>Track results</b> on the <a href="/metrics">Metrics</a> page: type in each post's LinkedIn numbers weekly and the app keeps the history per campaign.</li>
        <li><b>If something fails</b>, the item turns red in the queue with the exact error. Fix and re-schedule with Edit.</li>
      </ol>
    </details>`;
  return htmlResponse(page2("Social Poster", `
    ${flashHtml}
    ${setupBox}
    ${helpCard}
    ${tabBar}
    <div class="grid">
      <div class="card">
        <h2><span class="dot li"></span>LinkedIn <small>personal profile</small></h2>
        ${liCard}
      </div>
      <div class="card">
        <h2><span class="dot meta"></span>Facebook + Instagram <small>Meta</small></h2>
        ${metaCard}
      </div>
    </div>
    ${composeCard}
    ${queueCard}
    ${redirects}
    <p class="foot">LinkedIn posting and scheduling are live. Meta (Facebook + Instagram) posting is next.</p>
  `));
}
__name(dashboard, "dashboard");
async function liRaw(url, token, payload) {
  const r = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0"
    },
    body: JSON.stringify(payload)
  });
  const text = await r.text();
  let json3 = null;
  try {
    json3 = text ? JSON.parse(text) : null;
  } catch (_) {
    json3 = { raw: text };
  }
  return { ok: r.ok, status: r.status, headers: r.headers, json: json3, text };
}
__name(liRaw, "liRaw");
function bytesToB64(u8) {
  let s = "";
  const CH = 32768;
  for (let i = 0; i < u8.length; i += CH) s += String.fromCharCode.apply(null, u8.subarray(i, i + CH));
  return btoa(s);
}
__name(bytesToB64, "bytesToB64");
function b64ToBytes(b64) {
  const bin = atob(b64);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}
__name(b64ToBytes, "b64ToBytes");
async function liUploadImage(token, author, bytes, contentType) {
  const reg = await liRaw("https://api.linkedin.com/v2/assets?action=registerUpload", token, {
    registerUploadRequest: {
      recipes: ["urn:li:digitalmediaRecipe:feedshare-image"],
      owner: author,
      serviceRelationships: [{ relationshipType: "OWNER", identifier: "urn:li:userGeneratedContent" }]
    }
  });
  if (!reg.ok) {
    const m = reg.json && (reg.json.message || reg.json.raw) || reg.text;
    throw new Error("LinkedIn image register failed (HTTP " + reg.status + "): " + m);
  }
  const val = reg.json && reg.json.value;
  const mech = val && val.uploadMechanism && val.uploadMechanism["com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"];
  const uploadUrl = mech && mech.uploadUrl;
  const asset = val && val.asset;
  if (!uploadUrl || !asset) throw new Error("LinkedIn image register returned no upload URL.");
  const up = await fetch(uploadUrl, {
    method: "PUT",
    headers: { Authorization: "Bearer " + token, "Content-Type": contentType || "image/jpeg" },
    body: bytes
  });
  if (!up.ok) throw new Error("LinkedIn image upload failed (HTTP " + up.status + ").");
  return asset;
}
__name(liUploadImage, "liUploadImage");
async function liPublish(env, body, comment, image, opts) {
  const rec = await kvJson(env, "tok:linkedin");
  if (!rec) throw new Error("LinkedIn is not connected.");
  if (rec.expires_at && rec.expires_at < Date.now()) throw new Error("LinkedIn token has expired. Reconnect LinkedIn.");
  const token = rec.access_token;
  const author = rec.person_urn;
  const share = {
    shareCommentary: { text: body },
    shareMediaCategory: "NONE"
  };
  if (image && (image.bytes || image.b64)) {
    const bytes = image.bytes || b64ToBytes(image.b64);
    const asset = await liUploadImage(token, author, bytes, image.type);
    share.shareMediaCategory = "IMAGE";
    share.media = [{
      status: "READY",
      media: asset,
      description: { text: (image.alt || "").slice(0, 200) }
    }];
  }
  const postRes = await liRaw("https://api.linkedin.com/v2/ugcPosts", token, {
    author,
    lifecycleState: "PUBLISHED",
    specificContent: { "com.linkedin.ugc.ShareContent": share },
    visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" }
  });
  if (!postRes.ok) {
    const m = postRes.json && (postRes.json.message || postRes.json.raw) || postRes.text;
    throw new Error("LinkedIn post failed (HTTP " + postRes.status + "): " + m);
  }
  const postUrn = postRes.headers.get("x-restli-id") || postRes.json && postRes.json.id;
  if (!postUrn) throw new Error("Post created but no URN was returned, so the first comment could not be added.");
  let commentPosted = false, commentError = null, commentDeferred = false;
  const c = (comment || "").trim();
  if (c && opts && opts.deferComment) {
    commentDeferred = true;
  } else if (c) {
    const cRes = await liRaw(
      "https://api.linkedin.com/v2/socialActions/" + encodeURIComponent(postUrn) + "/comments",
      token,
      { actor: author, message: { text: c } }
    );
    if (cRes.ok) commentPosted = true;
    else commentError = "HTTP " + cRes.status + ": " + (cRes.json && (cRes.json.message || cRes.json.raw) || cRes.text);
  }
  return { postUrn, commentPosted, commentDeferred, commentError };
}
__name(liPublish, "liPublish");
function commentDelayMs(env) {
  const raw = env && env.COMMENT_DELAY_MIN;
  const n = raw === void 0 || raw === null || raw === "" ? 75 : parseInt(raw, 10);
  return (isNaN(n) || n < 0 ? 75 : n) * 60 * 1e3;
}
__name(commentDelayMs, "commentDelayMs");
async function liComment(env, postUrn, text) {
  const rec = await kvJson(env, "tok:linkedin");
  if (!rec) throw new Error("LinkedIn is not connected.");
  if (rec.expires_at && rec.expires_at < Date.now()) throw new Error("LinkedIn token has expired. Reconnect LinkedIn.");
  const cRes = await liRaw(
    "https://api.linkedin.com/v2/socialActions/" + encodeURIComponent(postUrn) + "/comments",
    rec.access_token,
    { actor: rec.person_urn, message: { text: String(text) } }
  );
  if (!cRes.ok) throw new Error("HTTP " + cRes.status + ": " + (cRes.json && (cRes.json.message || cRes.json.raw) || cRes.text));
  return true;
}
__name(liComment, "liComment");
async function fbPublish(env, body, comment, image) {
  const rec = await kvJson(env, "tok:meta");
  if (!rec || !rec.page_token) throw new Error("Facebook is not connected.");
  const ver = env.META_API_VERSION || "v23.0";
  const base = "https://graph.facebook.com/" + ver + "/";
  let postId = null;
  if (image && (image.bytes || image.b64)) {
    const bytes = image.bytes || b64ToBytes(image.b64);
    const fd = new FormData();
    fd.append("source", new Blob([bytes], { type: image.type || "image/jpeg" }), "post.jpg");
    fd.append("message", body + (comment ? "\n\n" + comment : ""));
    fd.append("access_token", rec.page_token);
    const r = await fetch(base + rec.page_id + "/photos", { method: "POST", body: fd });
    const j2 = await r.json();
    if (!r.ok) throw new Error("Facebook photo post failed: " + JSON.stringify(j2.error || j2).slice(0, 200));
    postId = j2.post_id || j2.id;
  } else {
    const r = await fetch(base + rec.page_id + "/feed", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ message: body + (comment ? "\n\n" + comment : ""), access_token: rec.page_token }).toString()
    });
    const j2 = await r.json();
    if (!r.ok) throw new Error("Facebook post failed: " + JSON.stringify(j2.error || j2).slice(0, 200));
    postId = j2.id;
  }
  let commentPosted = false, commentError = null;
  const c = (comment || "").trim();
  if (false) {
    const r = await fetch(base + postId + "/comments", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ message: c, access_token: rec.page_token }).toString()
    });
    const j2 = await r.json();
    if (r.ok) commentPosted = true;
    else commentError = JSON.stringify(j2.error || j2).slice(0, 200);
  }
  return { postUrn: postId, commentPosted, commentError };
}
__name(fbPublish, "fbPublish");
async function publishAll(env, platforms, body, comment, image, opts) {
  const list = platforms && platforms.length ? platforms : ["linkedin"];
  const results = {};
  for (const p of list) {
    try {
      if (p === "linkedin") results[p] = { ok: true, ...await liPublish(env, body, comment, image, opts) };
      else if (p === "facebook") results[p] = { ok: true, ...await fbPublish(env, body, comment, image) };
      else results[p] = { ok: false, error: "unsupported platform: " + p };
    } catch (e) {
      results[p] = { ok: false, error: e.message };
    }
  }
  const names = Object.keys(results);
  const oks = names.filter((n) => results[n].ok);
  const parts = [];
  for (const n of names) {
    const r = results[n];
    if (r.ok) parts.push(n + ": posted" + (r.commentDeferred ? " (link comment queued)" : r.commentPosted ? " with comment" : comment ? " (comment FAILED: " + (r.commentError || "unknown") + ")" : ""));
    else parts.push(n + ": FAILED (" + r.error + ")");
  }
  return { results, okCount: oks.length, failCount: names.length - oks.length, note: parts.join(" | ") };
}
__name(publishAll, "publishAll");
function tzOffsetMs(tz, utcMs) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  const p = dtf.formatToParts(new Date(utcMs)).reduce((a, x) => (a[x.type] = x.value, a), {});
  const asUTC = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second);
  return asUTC - utcMs;
}
__name(tzOffsetMs, "tzOffsetMs");
function easternToUTC(local) {
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(local || "");
  if (!m) return /* @__PURE__ */ new Date(NaN);
  const guess = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]);
  const first = guess - tzOffsetMs("America/New_York", guess);
  return new Date(guess - tzOffsetMs("America/New_York", first));
}
__name(easternToUTC, "easternToUTC");
function easternLocalValue(iso) {
  if (!iso) return "";
  const p = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).formatToParts(new Date(iso)).reduce((a, x) => (a[x.type] = x.value, a), {});
  const hh = p.hour === "24" ? "00" : p.hour;
  return p.year + "-" + p.month + "-" + p.day + "T" + hh + ":" + p.minute;
}
__name(easternLocalValue, "easternLocalValue");
function fmtEastern(iso) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }).format(new Date(iso)) + " ET";
}
__name(fmtEastern, "fmtEastern");
function newId() {
  return "q_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
}
__name(newId, "newId");
async function queueAdd(env, item) {
  const rec = {
    id: newId(),
    body: item.body,
    comment: item.comment || "",
    label: item.label || null,
    campaign: normCampaign(item.campaign),
    platforms: item.platforms && item.platforms.length ? item.platforms : ["linkedin"],
    scheduledFor: item.scheduledFor || null,
    imageB64: item.imageB64 || null,
    imageType: item.imageType || null,
    imageAlt: item.imageAlt || null,
    status: "scheduled",
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    postedAt: null,
    postUrn: null,
    liUrn: null,
    commentStatus: null,
    commentDueAt: null,
    commentPostedAt: null,
    commentError: null,
    error: null
  };
  await qPut(env, rec);
  return rec;
}
__name(queueAdd, "queueAdd");
// sb-social KV fix (2026-09-16): queue records carry status in KV list metadata, so the
// 15-minute scheduler lists once and only reads records that are due or pending a comment.
async function qPut(env, it) {
  await env.TOKENS.put("q:" + it.id, JSON.stringify(it), { metadata: { s: it.status || "", c: it.commentStatus || "" } });
}
__name(qPut, "qPut");
async function queueListActive(env) {
  const out = [];
  let cursor;
  let migrated = 0;
  do {
    const res = await env.TOKENS.list({ prefix: "q:", cursor });
    for (const k of res.keys) {
      const m = k.metadata;
      if (m && m.s !== "scheduled" && m.c !== "pending") continue;
      const v = await env.TOKENS.get(k.name);
      if (!v) continue;
      const it = JSON.parse(v);
      if (!m && migrated < 50) { migrated++; await qPut(env, it); }
      out.push(it);
    }
    cursor = res.list_complete ? null : res.cursor;
  } while (cursor);
  return out;
}
__name(queueListActive, "queueListActive");
async function queueList(env) {
  const out = [];
  let cursor;
  do {
    const res = await env.TOKENS.list({ prefix: "q:", cursor });
    for (const k of res.keys) {
      const v = await env.TOKENS.get(k.name);
      if (v) out.push(JSON.parse(v));
    }
    cursor = res.list_complete ? null : res.cursor;
  } while (cursor);
  out.sort((a, b) => {
    const ra = a.status === "scheduled" ? 0 : 1;
    const rb = b.status === "scheduled" ? 0 : 1;
    if (ra !== rb) return ra - rb;
    if (ra === 0) return String(a.scheduledFor || a.createdAt).localeCompare(String(b.scheduledFor || b.createdAt));
    return String(b.postedAt || b.scheduledFor || b.createdAt).localeCompare(String(a.postedAt || a.scheduledFor || a.createdAt));
  });
  return out;
}
__name(queueList, "queueList");
async function queueJson(env) {
  return new Response(JSON.stringify(await queueList(env), null, 2), { headers: { "Content-Type": "application/json" } });
}
__name(queueJson, "queueJson");
async function queueDelete(request, env, origin) {
  const form = await request.formData();
  const id = form.get("id");
  const tab = normCampaign(form.get("tab"));
  if (id) await env.TOKENS.delete("q:" + String(id));
  return Response.redirect(origin + "/?tab=" + tab + "&queued=Removed+from+queue", 302);
}
__name(queueDelete, "queueDelete");
async function queueRetry(request, env, origin) {
  const form = await request.formData();
  const id = (form.get("id") || "").toString();
  const tab = normCampaign(form.get("tab"));
  const it = await kvJson(env, "q:" + id);
  if (!it || it.status !== "failed") {
    return Response.redirect(origin + "/?tab=" + tab + "&err=" + encodeURIComponent("Only failed posts can be retried."), 302);
  }
  it.status = "scheduled";
  it.scheduledFor = (/* @__PURE__ */ new Date()).toISOString();
  it.error = null;
  it.postedAt = null;
  await qPut(env, it);
  return Response.redirect(origin + "/?tab=" + tab + "&queued=" + encodeURIComponent("Retry queued. It posts within 15 minutes" + (it.imageB64 ? " with its image." : ". Note: this item has no stored image.")), 302);
}
__name(queueRetry, "queueRetry");
var BRAND_PROMPT = [
  "You write LinkedIn and Facebook posts for Sean Spencer of the Sean & Barb team, Premier Sotheby's International Realty, Central Florida luxury real estate and physician relocation specialists (60+ years combined).",
  "VOICE: confident, precise, understated luxury. Data-first: real numbers beat adjectives. Write like a market analyst who happens to sell houses.",
  "BANNED: the phrase off-market, stunning, dream home, hot market, exclamation points, emojis. Use the word Physician as primary; doctor only in passing.",
  "MAY 2026 CLOSED MLS DATA (median sold / closings / dollars per sqft / balance):",
  "Orlando $404,900/889/$295/Balanced. Winter Garden $566,000/169/$285/Balanced. Windermere $835,000/73/$385/Balanced. Dr. Phillips $580,000/33/$340/Balanced. Lake Nona $705,000/37/$310/Balanced. Winter Park $650,000/59/$420/Sellers. Maitland $535,000/22/$310/Sellers. Longwood $480,000/86/$265/Sellers. Lake Mary $450,000/61/$278/Sellers. Oviedo $515,000/83/$255/Sellers.",
  "FACTS YOU MAY USE: Florida has zero state income tax. Physician loans run 0-10% down, no PMI, commonly past $1M, usable before start dates. Maitland trades about 25% below Winter Park per square foot with canal access to the same chain of lakes. Windermere is the Butler Chain: Isleworth, Keene's Pointe, Chaine du Lac; direct lakefront roughly $3M-$10M+. Lake Nona is Medical City: Nemours, the VA, UCF College of Medicine. Dr. Phillips is Bay Hill, Arnold Palmer's club, and Restaurant Row. Never invent numbers not listed here.",
  "LINK PAGES (choose the most relevant one for the first comment): https://www.seanandbarb.com/lifestyles/physician-relocation/ | https://www.seanandbarb.com/relocation/california-to-florida/ | https://www.seanandbarb.com/cities/orlando-homes-for-sale/ | https://www.seanandbarb.com/cities/winter-garden-homes-for-sale/ | https://www.seanandbarb.com/cities/windermere-homes-for-sale/ | https://www.seanandbarb.com/cities/dr-phillips-homes-for-sale/ | https://www.seanandbarb.com/cities/lake-nona-homes-for-sale/ | https://www.seanandbarb.com/cities/winter-park-homes-for-sale/ | https://www.seanandbarb.com/cities/maitland-homes-for-sale/ | https://www.seanandbarb.com/cities/longwood-homes-for-sale/ | https://www.seanandbarb.com/cities/lake-mary-homes-for-sale/ | https://www.seanandbarb.com/cities/oviedo-homes-for-sale/",
  "PROBATE CAMPAIGN (when the brief mentions probate, estates, attorneys, or personal representatives): audience is Orange and Seminole County probate attorneys and personal representatives. Tone stays analyst-grade; never give legal advice; never state or imply testimony in probate cases. Facts you may use: complimentary date-of-death valuation analyses documented comparable by comparable; net-to-estate calculator and Florida probate timeline estimator at https://www.seanandbarb.com/probate-real-estate/ ; Fla. Stat. 733.613 power of sale; 3-month creditor claim period; summary administration under 735.201 ($75,000 or less, or death more than 2 years ago); homestead passes to heirs. Preferred first-comment link: https://www.seanandbarb.com/probate-real-estate/",
  "FORMAT: first line is a hook under 200 characters with a number or a tension. Body 100-180 words, short paragraphs, generous line breaks. End with one quiet question. Max 3 niche hashtags. The URL never appears in the body.",
  "OUTPUT EXACTLY THIS SHAPE, nothing else:",
  "BODY:",
  "<the post text including hashtags>",
  "FIRST COMMENT:",
  "<one sentence of context ending with the chosen link>"
].join("\n");
async function aiText(env, brief) {
  if (!brief || !brief.trim()) throw new Error("Describe what the post should cover first.");
  let text = "";
  if (env.ANTHROPIC_API_KEY) {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: env.ANTHROPIC_MODEL || "claude-sonnet-4-6", max_tokens: 1200, system: BRAND_PROMPT, messages: [{ role: "user", content: brief }] })
    });
    const d = await r.json();
    if (!r.ok) throw new Error("Anthropic API: " + JSON.stringify(d.error || d).slice(0, 180));
    text = (d.content || []).map((c) => c.text || "").join("");
  } else if (env.AI) {
    const r = await env.AI.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", {
      messages: [{ role: "system", content: BRAND_PROMPT }, { role: "user", content: brief }],
      max_tokens: 900
    });
    text = r && r.response || "";
  } else {
    throw new Error("No AI is configured yet. Add the Workers AI binding (name it AI) in Settings, or an ANTHROPIC_API_KEY secret.");
  }
  const bi = text.indexOf("BODY:");
  const ci = text.indexOf("FIRST COMMENT:");
  if (bi === -1 || ci === -1 || ci < bi) return { body: text.trim(), comment: "" };
  return { body: text.slice(bi + 5, ci).trim(), comment: text.slice(ci + 14).trim() };
}
__name(aiText, "aiText");
async function apiGenerate(request, env) {
  const j = /* @__PURE__ */ __name((o, s) => new Response(JSON.stringify(o), { status: s || 200, headers: { "Content-Type": "application/json" } }), "j");
  let p = {};
  try {
    p = await request.json();
  } catch (_) {
  }
  try {
    if (p.kind === "post") {
      const out = await aiText(env, String(p.brief || ""));
      return j({ ok: true, body: out.body, comment: out.comment });
    }
    if (p.kind === "image") {
      if (!env.AI) return j({ ok: false, error: "Image generation needs the Workers AI binding (name it AI) in the Worker settings." }, 400);
      const r = await env.AI.run("@cf/black-forest-labs/flux-1-schnell", { prompt: String(p.prompt || ""), steps: 8 });
      const b64 = r && r.image || r && r.images && r.images[0];
      if (!b64) throw new Error("The image model returned nothing. Try a simpler prompt.");
      const bytes = b64ToBytes(b64);
      const type = bytes.length > 4 && bytes[0] === 137 && bytes[1] === 80 ? "image/png" : "image/jpeg";
      const id = "g_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
      await env.TOKENS.put("gen:" + id, JSON.stringify({ imageB64: b64, imageType: type }), { expirationTtl: 86400 });
      return j({ ok: true, id, dataUrl: "data:" + type + ";base64," + b64 });
    }
    if (p.kind === "stash") {
      let imageB64 = null, imageType = null;
      if (p.image_id) {
        const g = await kvJson(env, "gen:" + String(p.image_id));
        if (g) {
          imageB64 = g.imageB64;
          imageType = g.imageType;
        }
      }
      const id = "g_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
      await env.TOKENS.put("gen:" + id, JSON.stringify({
        body: String(p.body || ""),
        comment: String(p.comment || ""),
        alt: String(p.alt || ""),
        imageB64,
        imageType
      }), { expirationTtl: 86400 });
      return j({ ok: true, id });
    }
    return j({ ok: false, error: "unknown kind" }, 400);
  } catch (e) {
    return j({ ok: false, error: e.message }, 500);
  }
}
__name(apiGenerate, "apiGenerate");
function generatePage(env, origin) {
  const hasAI = !!env.AI;
  const hasKey = !!env.ANTHROPIC_API_KEY;
  const setup = !hasAI && !hasKey ? '<div class="card warnbox"><h3>One-time setup needed</h3><p class="muted" style="margin-bottom:6px">AI is not connected yet. In this Worker: <b>Settings &gt; Bindings &gt; Add &gt; Workers AI</b>, set the variable name to <code>AI</code>, save, then redeploy. That enables both writing and images (generous free tier, runs on your Cloudflare account). Optional upgrade: add a secret named <code>ANTHROPIC_API_KEY</code> under Variables and Secrets to have Claude write the copy instead.</p></div>' : !hasAI ? '<div class="card subtle"><p class="muted" style="margin:0">Text generation is ready. For AI images, add the Workers AI binding named <code>AI</code> in Settings.</p></div>' : "";
  return htmlResponse(page2("Generate", '<div class="card"><h2>Generate a post with AI</h2><ol style="margin:0 0 10px;padding-left:20px;font-size:.9rem;line-height:1.65" class="mutedol"><li>Describe the post you want in plain words (topic, market, angle). Mention probate or attorneys and it writes for the probate campaign.</li><li>Click <b>Generate post</b>. Review and edit the draft right here -- always read before you publish.</li><li>Optionally describe a picture and click <b>Generate image</b>.</li><li>Click <b>Send to Compose</b>: everything lands in the compose form where you pick platforms and the time.</li></ol><label class="lbl">What should the post be about?</label><textarea id="brief" rows="3" class="ta" placeholder="Example: a post about Maitland being 25% cheaper per square foot than Winter Park, aimed at buyers priced out of the Vias"></textarea><div style="margin-top:10px"><button class="btn gold" id="genpost" type="button">Generate post</button></div><div id="result" style="display:none"><label class="lbl">Post text (edit freely)</label><textarea id="body" rows="9" class="ta"></textarea><label class="lbl">First comment (the link)</label><textarea id="comment" rows="2" class="ta"></textarea><label class="lbl">Image prompt (optional)</label><textarea id="imgprompt" rows="2" class="ta" placeholder="Example: photorealistic Florida lakefront estate at sunrise, live oaks, misty water, no text, no people"></textarea><div style="margin-top:8px"><button class="btn ghost" id="genimg" type="button">Generate image</button></div><div id="previewwrap" style="display:none;margin-top:10px"><img id="preview" style="max-width:100%;border-radius:10px;border:1px solid var(--line)"></div><label class="lbl">Image alt text (describe the image)</label><textarea id="alt" rows="2" class="ta"></textarea><div style="margin-top:12px"><button class="btn gold" id="tocompose" type="button">Send to Compose</button> <a class="btn ghost" href="/">Cancel</a></div></div></div>' + setup + '<script>(function(){function $(i){return document.getElementById(i)}function post(d,cb){fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then(function(r){return r.json()}).then(cb).catch(function(e){alert("Request failed: "+e)})}$("genpost").addEventListener("click",function(){var b=$("genpost");b.disabled=true;b.textContent="Writing...";post({kind:"post",brief:$("brief").value},function(r){b.disabled=false;b.textContent="Generate post";if(!r.ok){alert(r.error);return}$("body").value=r.body;$("comment").value=r.comment;$("result").style.display="block"})});$("genimg").addEventListener("click",function(){var b=$("genimg");b.disabled=true;b.textContent="Painting...";post({kind:"image",prompt:$("imgprompt").value},function(r){b.disabled=false;b.textContent="Generate image";if(!r.ok){alert(r.error);return}window._imgId=r.id;$("preview").src=r.dataUrl;$("previewwrap").style.display="block"})});$("tocompose").addEventListener("click",function(){var b=$("tocompose");b.disabled=true;post({kind:"stash",body:$("body").value,comment:$("comment").value,alt:$("alt").value,image_id:window._imgId||""},function(r){if(!r.ok){b.disabled=false;alert(r.error);return}location.href="/?gen="+r.id})});})();<\/script>'));
}
__name(generatePage, "generatePage");
function bulkPage(request, env, origin) {
  const tab = normCampaign(new URL(request.url).searchParams.get("tab"));
  return htmlResponse(page2("Bulk load", `
    <div class="card">
      <h2>Bulk load the queue <small>${esc2(CAMPAIGNS[tab])}</small></h2>
      <p class="muted">Paste the JSON batch, attach every image file it references (matched by exact file name), and load. Times in the JSON are Eastern wall-clock, for example 2026-07-21T08:30. Each post may also include <code>"platforms": ["linkedin", "facebook"]</code> -- if omitted, it posts to LinkedIn only. Posts load into the campaign selected below unless a post carries its own <code>"campaign"</code> field.</p>
      <form method="post" action="/api/bulk" enctype="multipart/form-data">
        <label class="lbl">Campaign for this batch</label>
        <select name="campaign" class="dt">
          <option value="physician"${tab === "physician" ? " selected" : ""}>${esc2(CAMPAIGNS.physician)}</option>
          <option value="probate"${tab === "probate" ? " selected" : ""}>${esc2(CAMPAIGNS.probate)}</option>
        </select>
        <label class="lbl">JSON batch</label>
        <textarea name="payload" rows="14" class="ta" placeholder='{"posts":[{"label":"P1","when":"2026-08-18T08:30","body":"...","comment":"https://...","image":"1_1.jpg","alt":"..."}]}'></textarea>
        <label class="lbl">Images referenced by the batch</label>
        <input type="file" name="images" multiple accept="image/jpeg,image/png,image/gif" class="dt">
        <div style="margin-top:14px"><button class="btn gold" type="submit">Load queue</button> <a class="btn ghost" href="/?tab=${esc2(tab)}">Cancel</a></div>
      </form>
    </div>`));
}
__name(bulkPage, "bulkPage");
async function bulkLoad(request, env, origin) {
  const form = await request.formData();
  const batchCampaign = normCampaign(form.get("campaign"));
  let data;
  try {
    data = JSON.parse((form.get("payload") || "").toString());
  } catch (e) {
    return htmlResponse(page2("Bulk load", `<div class="card err"><h2>Invalid JSON</h2><pre>${esc2(e.message)}</pre><p><a class="btn" href="/bulk">Back</a></p></div>`), 400);
  }
  const posts = Array.isArray(data) ? data : data.posts || [];
  const files = {};
  for (const f of form.getAll("images")) {
    if (f && typeof f === "object" && f.name) files[f.name] = f;
  }
  const okTypes = ["image/jpeg", "image/png", "image/gif"];
  const rows = [];
  let queued = 0;
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i] || {};
    const label = String(p.label || "#" + (i + 1));
    try {
      const body = String(p.body || "").trim();
      if (!body) throw new Error("body is empty");
      const instant = easternToUTC(String(p.when || "").trim());
      if (isNaN(instant.getTime())) throw new Error("bad or missing when: " + (p.when || "(none)"));
      let imageB64 = null, imageType = null;
      if (p.image) {
        const f = files[String(p.image)];
        if (!f) throw new Error("image file not attached: " + p.image);
        if (!okTypes.includes(f.type)) throw new Error("image must be JPEG, PNG, or GIF");
        if (f.size > 4 * 1024 * 1024) throw new Error("image is over 4MB");
        imageB64 = bytesToB64(new Uint8Array(await f.arrayBuffer()));
        imageType = f.type;
      }
      await queueAdd(env, {
        label,
        body,
        comment: String(p.comment || ""),
        campaign: p.campaign ? normCampaign(String(p.campaign)) : batchCampaign,
        platforms: Array.isArray(p.platforms) && p.platforms.length ? p.platforms.map(String) : void 0,
        scheduledFor: instant.toISOString(),
        imageB64,
        imageType,
        imageAlt: String(p.alt || "")
      });
      queued++;
      rows.push(`<div class="qitem"><div class="qmeta"><span class="qstatus posted">queued</span><span class="qstatus" style="background:#0D1B2E;color:#E0BC6B">${esc2(label)}</span><span class="qwhen">${esc2(fmtEastern(instant.toISOString()))}</span></div><div class="qbody">${imageB64 ? "[image] " : ""}${esc2(body.slice(0, 90))}...</div></div>`);
    } catch (e) {
      rows.push(`<div class="qitem"><div class="qmeta"><span class="qstatus failed">error</span><span class="qstatus" style="background:#0D1B2E;color:#E0BC6B">${esc2(label)}</span></div><div class="qerr">${esc2(e.message)}</div></div>`);
    }
  }
  return htmlResponse(page2("Bulk load", `<div class="card"><h2>Bulk result: ${queued} of ${posts.length} queued into ${esc2(CAMPAIGNS[batchCampaign])}</h2>${rows.join("")}<p style="margin-top:14px"><a class="btn gold" href="/?tab=${esc2(batchCampaign)}">Back to dashboard</a> <a class="btn ghost" href="/bulk?tab=${esc2(batchCampaign)}">Load another batch</a></p></div>`));
}
__name(bulkLoad, "bulkLoad");
async function compose(request, env, origin) {
  const form = await request.formData();
  const body = (form.get("body") || "").toString().trim();
  const comment = (form.get("comment") || "").toString().trim();
  const when = (form.get("when") || "now").toString();
  const campaign = normCampaign((form.get("campaign") || "").toString());
  const back = origin + "/?tab=" + campaign;
  if (!body) return Response.redirect(back + "&err=Post+text+is+empty", 302);
  let platforms = form.getAll("platforms").map(String).filter(Boolean);
  if (!platforms.length) platforms = ["linkedin"];
  let image = null;
  const file = form.get("image");
  if (file && typeof file === "object" && typeof file.arrayBuffer === "function" && file.size > 0) {
    const okTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!okTypes.includes(file.type)) return Response.redirect(back + "&err=" + encodeURIComponent("Image must be JPEG, PNG, or GIF."), 302);
    if (file.size > 4 * 1024 * 1024) return Response.redirect(back + "&err=" + encodeURIComponent("Image is over 4MB. Compress it first."), 302);
    const bytes = new Uint8Array(await file.arrayBuffer());
    image = { bytes, type: file.type, alt: (form.get("alt") || "").toString().trim() };
  }
  if (!image) {
    const genRef = (form.get("gen_image") || "").toString();
    if (genRef) {
      const g = await kvJson(env, "gen:" + genRef);
      if (g && g.imageB64) image = { b64: g.imageB64, type: g.imageType || "image/jpeg", alt: (form.get("alt") || "").toString().trim() };
    }
  }
  const editIdRaw = (form.get("edit_id") || "").toString();
  let existing = null;
  if (editIdRaw) {
    existing = await kvJson(env, "q:" + editIdRaw);
    if (!existing || existing.status !== "scheduled") {
      return Response.redirect(back + "&err=" + encodeURIComponent("That queued post is no longer editable. It may have already published."), 302);
    }
  }
  if (when === "now") {
    try {
      const pubImage = image || (existing && existing.imageB64 ? { b64: existing.imageB64, type: existing.imageType, alt: existing.imageAlt } : null);
      const nowDelay = commentDelayMs(env);
      const d = await publishAll(env, platforms, body, comment, pubImage, { deferComment: nowDelay > 0 });
      const liRes = d.results.linkedin;
      const deferred = !!(liRes && liRes.commentDeferred && liRes.postUrn);
      if (existing) {
        existing.body = body;
        existing.comment = comment;
        existing.platforms = platforms;
        existing.campaign = campaign;
        existing.imageB64 = null;
        existing.status = d.okCount > 0 ? "posted" : "failed";
        existing.postedAt = (/* @__PURE__ */ new Date()).toISOString();
        existing.liUrn = liRes && liRes.postUrn || null;
        existing.postUrn = existing.liUrn;
        if (deferred) {
          existing.commentStatus = "pending";
          existing.commentDueAt = new Date(Date.now() + nowDelay).toISOString();
        }
        existing.error = d.failCount === 0 && d.note.indexOf("FAILED") === -1 ? null : d.note;
        await qPut(env, existing);
      } else if (d.okCount > 0) {
        const rec = await queueAdd(env, { body, comment, campaign, platforms, scheduledFor: null });
        rec.status = "posted";
        rec.postedAt = (/* @__PURE__ */ new Date()).toISOString();
        rec.liUrn = liRes && liRes.postUrn || null;
        rec.postUrn = rec.liUrn || d.results.facebook && d.results.facebook.postUrn || null;
        if (deferred) {
          rec.commentStatus = "pending";
          rec.commentDueAt = new Date(Date.now() + nowDelay).toISOString();
        }
        rec.error = d.failCount === 0 && d.note.indexOf("FAILED") === -1 ? null : d.note;
        await qPut(env, rec);
      }
      if (d.okCount === 0) return Response.redirect(back + "&err=" + encodeURIComponent(d.note), 302);
      return Response.redirect(back + "&posted=" + encodeURIComponent(d.note), 302);
    } catch (e) {
      return Response.redirect(back + "&err=" + encodeURIComponent(e.message), 302);
    }
  }
  const dtRaw = (form.get("dt") || "").toString();
  if (!dtRaw) return Response.redirect(back + "&err=Pick+a+date+and+time+to+schedule", 302);
  const instant = easternToUTC(dtRaw);
  if (isNaN(instant.getTime())) return Response.redirect(back + "&err=Invalid+schedule+time", 302);
  if (existing) {
    existing.body = body;
    existing.comment = comment;
    existing.platforms = platforms;
    existing.campaign = campaign;
    existing.scheduledFor = instant.toISOString();
    if (image) {
      existing.imageB64 = image.b64 || bytesToB64(image.bytes);
      existing.imageType = image.type;
      existing.imageAlt = image.alt;
    }
    await qPut(env, existing);
    return Response.redirect(back + "&queued=" + encodeURIComponent("Updated. Scheduled for " + fmtEastern(existing.scheduledFor)), 302);
  }
  await queueAdd(env, {
    body,
    comment,
    campaign,
    platforms,
    scheduledFor: instant.toISOString(),
    imageB64: image ? image.b64 || bytesToB64(image.bytes) : null,
    imageType: image ? image.type : null,
    imageAlt: image ? image.alt : null
  });
  return Response.redirect(back + "&queued=" + encodeURIComponent("Scheduled for " + fmtEastern(instant.toISOString())), 302);
}
__name(compose, "compose");
async function apiPostNow(request, env) {
  let payload = {};
  try {
    payload = await request.json();
  } catch (_) {
  }
  const body = (payload.body || "").toString().trim();
  const comment = (payload.comment || "").toString().trim();
  const j = /* @__PURE__ */ __name((obj, status) => new Response(JSON.stringify(obj), { status: status || 200, headers: { "Content-Type": "application/json" } }), "j");
  if (!body) return j({ ok: false, error: "body is required" }, 400);
  const image = payload.image_b64 ? { b64: payload.image_b64, type: payload.image_type || "image/jpeg", alt: payload.image_alt || "" } : null;
  try {
    return j({ ok: true, ...await liPublish(env, body, comment, image) });
  } catch (e) {
    return j({ ok: false, error: e.message }, 500);
  }
}
__name(apiPostNow, "apiPostNow");
async function metricsPage(request, env, origin) {
  const u = new URL(request.url);
  const tab = normCampaign(u.searchParams.get("tab"));
  const flash = [];
  if (u.searchParams.get("ok")) flash.push(["ok", u.searchParams.get("ok")]);
  if (u.searchParams.get("err")) flash.push(["err", u.searchParams.get("err")]);
  const flashHtml = flash.map(([t, m]) => `<div class="flash ${t}">${esc2(m)}</div>`).join("");
  const all = await queueList(env);
  const posted = all.filter((q) => q.status === "posted" && normCampaign(q.campaign) === tab);
  let totI = 0, totR = 0, totC = 0, totS = 0, withData = 0;
  const rows = [];
  for (const q of posted) {
    const m = await kvJson(env, "metrics:" + q.id);
    const snaps = m && m.snapshots || [];
    const last = snaps.length ? snaps[snaps.length - 1] : null;
    if (last) {
      totI += last.i || 0;
      totR += last.r || 0;
      totC += last.c || 0;
      totS += last.s || 0;
      withData++;
    }
    const er = last && last.i ? (((last.r || 0) + (last.c || 0) + (last.s || 0)) / last.i * 100).toFixed(1) + "%" : "-";
    const hist = snaps.length > 1 ? `<div class="mhist">${snaps.map((s2) => esc2(s2.date) + ": " + (s2.i || 0).toLocaleString() + " imp").join(" &rarr; ")}</div>` : "";
    rows.push(`
      <div class="qitem">
        <div class="qmeta">
          ${q.label ? `<span class="qstatus" style="background:#0D1B2E;color:#E0BC6B">${esc2(q.label)}</span>` : `<span class="qstatus posted">posted</span>`}
          <span class="qwhen">${q.postedAt ? esc2(fmtEastern(q.postedAt)) : "-"}</span>
        </div>
        <div class="qbody">${esc2((q.body || "").slice(0, 110))}${(q.body || "").length > 110 ? "..." : ""}</div>
        <div class="mrow">
          <span class="mnow">${last ? `<b>${(last.i || 0).toLocaleString()}</b> imp &middot; ${last.r || 0} reactions &middot; ${last.c || 0} comments &middot; ${last.s || 0} reposts &middot; ER ${er} <span class="muted">(as of ${esc2(last.date)})</span>` : `<span class="muted">no data yet</span>`}</span>
        </div>
        ${hist}
        <div class="mrow inputs">
          <input class="dt mi" name="imp_${esc2(q.id)}" inputmode="numeric" placeholder="impressions">
          <input class="dt mi" name="rea_${esc2(q.id)}" inputmode="numeric" placeholder="reactions">
          <input class="dt mi" name="com_${esc2(q.id)}" inputmode="numeric" placeholder="comments">
          <input class="dt mi" name="rep_${esc2(q.id)}" inputmode="numeric" placeholder="reposts">
        </div>
      </div>`);
  }
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(/* @__PURE__ */ new Date());
  const summary = withData ? `<div class="card subtle"><h3>${esc2(CAMPAIGNS[tab])} totals <small>(latest snapshot per post, ${withData} of ${posted.length} posts have data)</small></h3>
       <div class="kv"><span>Impressions</span><b>${totI.toLocaleString()}</b></div>
       <div class="kv"><span>Reactions</span><b>${totR.toLocaleString()}</b></div>
       <div class="kv"><span>Comments</span><b>${totC.toLocaleString()}</b></div>
       <div class="kv"><span>Reposts</span><b>${totS.toLocaleString()}</b></div>
       <div class="kv"><span>Engagement rate</span><b>${totI ? ((totR + totC + totS) / totI * 100).toFixed(1) + "%" : "-"}</b></div></div>` : "";
  const entryCard = posted.length ? `
    <form method="post" action="/api/metrics">
      <input type="hidden" name="campaign" value="${esc2(tab)}">
      <div class="card">
        <h2>Enter numbers <small>from LinkedIn &gt; your post &gt; View analytics</small></h2>
        <label class="lbl">These numbers are as of (date)</label>
        <input type="date" name="date" class="dt" value="${esc2(today)}">
        <p class="muted" style="margin-top:10px">Fill any boxes below (blank rows are skipped), or paste lines here as <code>label, impressions, reactions, comments, reposts</code> - one post per line. Pasted lines win over the boxes.</p>
        <textarea name="paste" rows="4" class="ta" placeholder="C1, 1450, 32, 6, 2&#10;C2, 980, 18, 3, 1"></textarea>
        ${rows.join("")}
        <div style="margin-top:14px"><button class="btn gold" type="submit">Save snapshot</button> <a class="btn ghost" href="/?tab=${esc2(tab)}">Back to dashboard</a></div>
      </div>
    </form>` : `<div class="card"><p class="muted">No posted items in ${esc2(CAMPAIGNS[tab])} yet. Numbers can be entered once posts publish.</p><p><a class="btn ghost" href="/?tab=${esc2(tab)}">Back to dashboard</a></p></div>`;
  const tabBar = `
    <div class="tabbar">
      <a class="tab ${tab === "physician" ? "on" : ""}" href="/metrics?tab=physician">${esc2(CAMPAIGNS.physician)}</a>
      <a class="tab ${tab === "probate" ? "on" : ""}" href="/metrics?tab=probate">${esc2(CAMPAIGNS.probate)}</a>
    </div>`;
  return htmlResponse(page2("Metrics", flashHtml + tabBar + summary + entryCard));
}
__name(metricsPage, "metricsPage");
async function metricsSave(request, env, origin) {
  const form = await request.formData();
  const tab = normCampaign(form.get("campaign"));
  const date = (form.get("date") || "").toString() || new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(/* @__PURE__ */ new Date());
  const all = await queueList(env);
  const posted = all.filter((q) => q.status === "posted" && normCampaign(q.campaign) === tab);
  const byLabel = {};
  for (const q of posted) {
    if (q.label) byLabel[String(q.label).toLowerCase()] = q;
    byLabel[q.id.toLowerCase()] = q;
  }
  const updates = {};
  const paste = (form.get("paste") || "").toString().trim();
  const badLines = [];
  if (paste) {
    for (const line of paste.split(/\r?\n/)) {
      const t = line.trim();
      if (!t) continue;
      const parts = t.split(/[,\t]+/).map((x) => x.trim());
      if (parts.length < 2) {
        badLines.push(t);
        continue;
      }
      const q = byLabel[parts[0].toLowerCase()];
      if (!q) {
        badLines.push(t + " (no posted item with that label in " + CAMPAIGNS[tab] + ")");
        continue;
      }
      const nums = parts.slice(1).map((x) => parseInt(x.replace(/[^0-9]/g, ""), 10) || 0);
      updates[q.id] = { i: nums[0] || 0, r: nums[1] || 0, c: nums[2] || 0, s: nums[3] || 0 };
    }
  }
  for (const q of posted) {
    if (updates[q.id]) continue;
    const gv = /* @__PURE__ */ __name((k) => {
      const v = (form.get(k + "_" + q.id) || "").toString().replace(/[^0-9]/g, "");
      return v ? parseInt(v, 10) : null;
    }, "gv");
    const i = gv("imp"), r = gv("rea"), c = gv("com"), s = gv("rep");
    if (i === null && r === null && c === null && s === null) continue;
    updates[q.id] = { i: i || 0, r: r || 0, c: c || 0, s: s || 0 };
  }
  let saved = 0;
  for (const qid of Object.keys(updates)) {
    const key = "metrics:" + qid;
    const m = await kvJson(env, key) || { snapshots: [] };
    m.snapshots = m.snapshots.filter((s2) => s2.date !== date);
    m.snapshots.push({ date, ...updates[qid] });
    m.snapshots.sort((a, b) => String(a.date).localeCompare(String(b.date)));
    await env.TOKENS.put(key, JSON.stringify(m));
    saved++;
  }
  const msg = saved + " snapshot" + (saved === 1 ? "" : "s") + " saved for " + date + (badLines.length ? ". Skipped: " + badLines.join(" | ") : "");
  const param = badLines.length ? "err" : "ok";
  return Response.redirect(origin + "/metrics?tab=" + tab + "&" + param + "=" + encodeURIComponent(msg), 302);
}
__name(metricsSave, "metricsSave");
async function runScheduler(env) {
  const now = Date.now();
  const items = await queueListActive(env);
  for (const it of items) {
    if (it.status !== "scheduled") continue;
    if (!it.scheduledFor || new Date(it.scheduledFor).getTime() > now) continue;
    try {
      const img = it.imageB64 ? { b64: it.imageB64, type: it.imageType, alt: it.imageAlt } : null;
      const delay = commentDelayMs(env);
      const d = await publishAll(env, it.platforms, it.body, it.comment, img, { deferComment: delay > 0 });
      if (d.okCount > 0) it.imageB64 = null;
      it.status = d.okCount > 0 ? "posted" : "failed";
      it.postedAt = (/* @__PURE__ */ new Date()).toISOString();
      it.liUrn = d.results.linkedin && d.results.linkedin.postUrn || null;
      it.postUrn = it.liUrn || d.results.facebook && d.results.facebook.postUrn || null;
      if (d.results.linkedin && d.results.linkedin.commentDeferred && it.liUrn) {
        it.commentStatus = "pending";
        it.commentDueAt = new Date(Date.now() + delay).toISOString();
      }
      it.error = d.failCount === 0 && d.note.indexOf("FAILED") === -1 ? null : d.note;
    } catch (e) {
      it.status = "failed";
      it.error = e.message;
    }
    await qPut(env, it);
  }
  await runPendingComments(env, items);
  await sentinel(env);
  if (env.HC_HEARTBEAT_URL) {
    try {
      await fetch(env.HC_HEARTBEAT_URL);
    } catch (_) {
    }
  }
}
__name(runScheduler, "runScheduler");
async function runPendingComments(env, preloaded) {
  const now = Date.now();
  const items = preloaded || await queueListActive(env);
  for (const it of items) {
    if (it.commentStatus !== "pending") continue;
    if (!it.liUrn || !(it.comment || "").trim()) {
      it.commentStatus = "skipped";
    } else if (!it.commentDueAt || new Date(it.commentDueAt).getTime() > now) continue;
    else {
      try {
        await liComment(env, it.liUrn, it.comment.trim());
        it.commentStatus = "posted";
        it.commentPostedAt = (/* @__PURE__ */ new Date()).toISOString();
        it.commentError = null;
      } catch (e) {
        it.commentStatus = "failed";
        it.commentError = e.message;
      }
    }
    await qPut(env, it);
  }
}
__name(runPendingComments, "runPendingComments");
async function sentinel(env) {
  if (!env.HC_TOKEN_URL) return;
  try {
    const last = await env.TOKENS.get("sentinel:last");
    if (last && Date.now() - parseInt(last, 10) < 55 * 60 * 1e3) return;
    await env.TOKENS.put("sentinel:last", String(Date.now()));
    const problems = [];
    const li = await kvJson(env, "tok:linkedin");
    if (!li) problems.push("LinkedIn is not connected.");
    else {
      const r = await fetch("https://api.linkedin.com/v2/userinfo", { headers: { Authorization: "Bearer " + li.access_token } });
      if (r.status === 401 || r.status === 403) problems.push("LinkedIn token is DEAD (HTTP " + r.status + ": revoked or expired). Reconnect at social.seanandbarb.com before the next post slot.");
      else {
        const d = daysLeft(li.expires_at);
        if (d !== null && d <= 5) problems.push("LinkedIn token expires in " + d + " day(s). Reconnect at social.seanandbarb.com.");
      }
    }
    const meta = await kvJson(env, "tok:meta");
    if (meta) {
      const md = daysLeft(meta.expires_at);
      if (md !== null && md <= 5) problems.push("Meta token expires in " + md + " day(s). Hit Refresh token on the Meta card.");
    }
    if (problems.length) {
      try {
        await fetch(env.HC_TOKEN_URL + "/fail", { method: "POST", body: problems.join(" | ") });
      } catch (_) {
      }
    } else {
      try {
        await fetch(env.HC_TOKEN_URL);
      } catch (_) {
      }
    }
  } catch (_) {
  }
}
__name(sentinel, "sentinel");
async function goRedirect(request, env, ctx, path) {
  if (!env.LINKS) return Response.redirect(GO_HOME, 302);
  const slug = decodeURIComponent(path.slice(1)).replace(/\/+$/, "").toLowerCase();
  if (!/^[a-z0-9-]{1,40}$/.test(slug)) return Response.redirect(GO_HOME, 302);
  let link = null;
  try {
    const v = await env.LINKS.get("link:" + slug);
    if (v) link = JSON.parse(v);
  } catch (_) {
  }
  if (!link) link = DEFAULT_LINKS[slug];
  if (!link || !link.url) return Response.redirect(GO_HOME, 302);
  const cookie = request.headers.get("Cookie") || "";
  const returning = cookie.indexOf("sbq=1") !== -1;
  ctx.waitUntil(goLog(env, slug, request, returning));
  const target = taggedUrl(link.url, link.src || "qr-" + slug);
  const h = new Headers({ Location: target, "Cache-Control": "no-store" });
  if (!returning) h.append("Set-Cookie", "sbq=1; Max-Age=15552000; Path=/; SameSite=Lax; Secure");
  return new Response(null, { status: 302, headers: h });
}
__name(goRedirect, "goRedirect");
async function goLog(env, slug, request, returning) {
  try {
    const now = /* @__PURE__ */ new Date();
    const day = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(now);
    const hour = parseInt(new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "2-digit", hour12: false }).format(now), 10) % 24;
    const key = "hits:" + slug + ":" + day;
    const raw = await env.LINKS.get(key);
    const rec = raw ? JSON.parse(raw) : { n: 0, mobile: 0, desktop: 0, countries: {} };
    if (!rec.hours) rec.hours = {};
    if (!rec.regions) rec.regions = {};
    if (rec.fresh === void 0) rec.fresh = 0;
    if (rec.repeat === void 0) rec.repeat = 0;
    rec.n += 1;
    rec.hours[hour] = (rec.hours[hour] || 0) + 1;
    if (returning) rec.repeat += 1;
    else rec.fresh += 1;
    const ua = (request.headers.get("User-Agent") || "").toLowerCase();
    if (/mobile|iphone|android|ipad/.test(ua)) rec.mobile += 1;
    else rec.desktop += 1;
    const cf = request.cf || {};
    const co = cf.country || "??";
    rec.countries[co] = (rec.countries[co] || 0) + 1;
    const reg = cf.region || cf.city || null;
    if (reg) rec.regions[reg] = (rec.regions[reg] || 0) + 1;
    await env.LINKS.put(key, JSON.stringify(rec));
  } catch (_) {
  }
}
__name(goLog, "goLog");
async function goSlugs(env) {
  const found = new Set(Object.keys(DEFAULT_LINKS));
  let cursor;
  do {
    const res = await env.LINKS.list({ prefix: "link:", cursor });
    for (const k of res.keys) found.add(k.name.slice(5));
    cursor = res.list_complete ? null : res.cursor;
  } while (cursor);
  return [...found].sort();
}
__name(goSlugs, "goSlugs");
async function goDays(env, slug) {
  const out = [];
  let cursor;
  do {
    const res = await env.LINKS.list({ prefix: "hits:" + slug + ":", cursor });
    for (const k of res.keys) {
      const v = await env.LINKS.get(k.name);
      if (v) out.push({ day: k.name.split(":")[2], ...JSON.parse(v) });
    }
    cursor = res.list_complete ? null : res.cursor;
  } while (cursor);
  out.sort((a, b) => a.day.localeCompare(b.day));
  return out;
}
__name(goDays, "goDays");
async function linkSave(request, env, origin) {
  if (!env.LINKS) return Response.redirect(origin + "/links?err=" + encodeURIComponent("The LINKS binding is not set up yet."), 302);
  const form = await request.formData();
  const slug = (form.get("slug") || "").toString().trim().toLowerCase();
  const label = (form.get("label") || "").toString().trim();
  const dest = (form.get("url") || "").toString().trim();
  if (!/^[a-z0-9-]{1,40}$/.test(slug)) return Response.redirect(origin + "/links?err=" + encodeURIComponent("Slug can use letters, numbers and hyphens only."), 302);
  if (!/^https:\/\//.test(dest)) return Response.redirect(origin + "/links?err=" + encodeURIComponent("Destination must start with https://"), 302);
  const src = (form.get("src") || "").toString().trim().replace(/[^A-Za-z0-9._-]/g, "") || "qr-" + slug;
  await env.LINKS.put("link:" + slug, JSON.stringify({ label: label || slug, url: dest, src, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }));
  return Response.redirect(origin + "/links?ok=" + encodeURIComponent("Saved /" + slug), 302);
}
__name(linkSave, "linkSave");
async function linksPage(request, env, origin) {
  const u = new URL(request.url);
  const flash = [];
  if (u.searchParams.get("ok")) flash.push(["ok", u.searchParams.get("ok")]);
  if (u.searchParams.get("err")) flash.push(["err", u.searchParams.get("err")]);
  const flashHtml = flash.map(([t2, m]) => `<div class="flash ${t2}">${esc2(m)}</div>`).join("");
  if (!env.LINKS) {
    return htmlResponse(page2("QR Links", flashHtml + `<div class="card warnbox">
      <h3>One-time setup needed</h3>
      <p class="muted">Add the KV binding so this app can read the QR link data:<br>
      Settings &gt; Bindings &gt; Add &gt; KV namespace &gt; variable name <code>LINKS</code> &gt; namespace <code>go-links</code>, then redeploy.</p>
      <p><a class="btn ghost" href="/">Back to dashboard</a></p></div>`));
  }
  const slugs = await goSlugs(env);
  const cards = [];
  for (const slug of slugs) {
    let link = null;
    try {
      const v = await env.LINKS.get("link:" + slug);
      if (v) link = JSON.parse(v);
    } catch (_) {
    }
    if (!link) link = DEFAULT_LINKS[slug] || { label: slug, url: "" };
    const days = await goDays(env, slug);
    const total = days.reduce((a, d) => a + (d.n || 0), 0);
    const mob = days.reduce((a, d) => a + (d.mobile || 0), 0);
    const desk = days.reduce((a, d) => a + (d.desktop || 0), 0);
    const fresh = days.reduce((a, d) => a + (d.fresh || 0), 0);
    const repeat = days.reduce((a, d) => a + (d.repeat || 0), 0);
    const hours = {};
    const regions = {};
    for (const d of days) {
      for (const h in d.hours || {}) hours[h] = (hours[h] || 0) + d.hours[h];
      for (const r in d.regions || {}) regions[r] = (regions[r] || 0) + d.regions[r];
    }
    const peak = Object.entries(hours).sort((a, b) => b[1] - a[1])[0];
    const hourLabel = /* @__PURE__ */ __name((h) => {
      const n2 = parseInt(h, 10);
      const ap = n2 < 12 ? "am" : "pm";
      const hh = n2 % 12 === 0 ? 12 : n2 % 12;
      return hh + ap;
    }, "hourLabel");
    const maxH = Object.values(hours).reduce((a, b) => Math.max(a, b), 0);
    const bars = maxH ? Array.from({ length: 24 }, (_, h) => {
      const v = hours[h] || 0;
      const pct = Math.round(v / maxH * 100);
      return `<div class="hb" title="${hourLabel(h)}: ${v}"><i style="height:${pct}%"></i></div>`;
    }).join("") : "";
    const topReg = Object.entries(regions).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([r, n2]) => esc2(r) + " " + n2).join(" &middot; ");
    const recent = days.slice(-10).map((d) => `<tr><td>${esc2(d.day)}</td><td style="text-align:right">${d.n}</td></tr>`).join("");
    cards.push(`<div class="card lcard">
      <div class="lhead">
        <div class="ltitle">${esc2(link.label)}</div>
        <div class="lslug">go.seanandbarb.com/${esc2(slug)}</div>
      </div>
      <div class="lbig"><b>${total}</b><span>total scan${total === 1 ? "" : "s"}</span></div>
      <div class="lgrid">
        <div class="lstat"><span>New</span><b>${fresh}</b></div>
        <div class="lstat"><span>Returning</span><b>${repeat}</b></div>
        <div class="lstat"><span>Mobile</span><b>${mob}</b></div>
        <div class="lstat"><span>Desktop</span><b>${desk}</b></div>
      </div>
      ${peak || topReg ? `<div class="lfacts">
        ${peak ? `<div><span>Busiest hour</span><b>${hourLabel(peak[0])}</b></div>` : ""}
        ${topReg ? `<div><span>Top areas</span><b>${topReg}</b></div>` : ""}
      </div>` : ""}
      ${bars ? `<div class="lsec">When people scan</div><div class="hours">${bars}</div><div class="hoursx"><span>12am</span><span>6am</span><span>noon</span><span>6pm</span><span>11pm</span></div>` : `<p class="muted" style="margin:.4em 0 0">No scans logged yet.</p>`}
      ${recent ? `<details><summary>Day by day</summary><table class="days"><tr><th>Day</th><th>Scans</th></tr>${recent}</table></details>` : ""}
      <details class="qrbox" data-slug="${esc2(slug)}" data-url="https://go.seanandbarb.com/${esc2(slug)}">
        <summary>QR code</summary>
        <div class="qrwrap"></div>
        <div class="row" style="margin-top:8px;gap:6px">
          <button type="button" class="btn ghost sm dlsvg" style="margin-top:0">Download SVG</button>
          <button type="button" class="btn ghost sm dlpng" style="margin-top:0">Download PNG</button>
        </div>
        <p class="muted" style="margin:.5em 0 0">SVG for print shops, PNG for everything else. Scan-test a printed sample before any print run.</p>
      </details>
      <details><summary>Settings</summary>
        <form method="post" action="/api/link">
          <input type="hidden" name="slug" value="${esc2(slug)}">
          <label class="lbl">Label</label>
          <input class="dt full" name="label" value="${esc2(link.label)}">
          <label class="lbl">Destination this code points to</label>
          <input class="dt full" name="url" value="${esc2(link.url)}">
          <label class="lbl">Lead tag added to the link</label>
          <input class="dt full" name="src" value="${esc2(link.src || "qr-" + slug)}">
          <button class="btn gold sm" style="margin-top:10px">Save changes</button>
        </form>
      </details>
    </div>`);
  }
  return htmlResponse(page2("QR Links", flashHtml + `
    <p class="muted">Printed QR codes point at these short links. Change a destination here and every code already in the wild follows, no reprinting.</p>
    ${cards.join("")}
    <div class="card subtle"><h2>Add a link</h2>
      <form method="post" action="/api/link">
        <input class="dt" style="width:100%;margin-top:6px" name="slug" placeholder="slug, for example guide">
        <input class="dt" style="width:100%;margin-top:6px" name="label" placeholder="Label">
        <input class="dt" style="width:100%;margin-top:6px" name="url" placeholder="https://www.seanandbarb.com/...">
        <input class="dt" style="width:100%;margin-top:6px" name="src" placeholder="lead tag, optional, for example qr-openhouse-may">
        <button class="btn gold sm" style="margin-top:8px">Create</button>
      </form>
      <p class="muted" style="margin-top:8px">After creating a link, open its QR code panel to download the artwork.</p>
    </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"><\/script>
<script>
(function(){
  var NAVY="#0d1b2e", GOLD="#c4952a";
  var LOGO="data:image/png;base64,${SB_LOGO_B64}", ASPECT=${SB_LOGO_ASPECT};
  function buildSvg(text){
    if (typeof qrcode !== "function") return null;
    var q=qrcode(0,"H"); q.addData(text); q.make();
    var n=q.getModuleCount(), S=10, B=4, W=(n+2*B)*S, o=B*S, c=W/2;
    function inFin(y,x){
      return (y<7&&x<7)||(y<7&&x>=n-7)||(y>=n-7&&x<7);
    }
    var p=[];
    var disc=(0.7072*n*S)+(3*S), r1=disc+S*0.9, r2=disc+S*2.2;
    var total=2*(r2+S*0.6), off=total/2-c;
    p.push('<circle cx="'+(c+off)+'" cy="'+(c+off)+'" r="'+r2+'" fill="none" stroke="'+GOLD+'" stroke-width="'+(S*0.9)+'"/>');
    p.push('<circle cx="'+(c+off)+'" cy="'+(c+off)+'" r="'+r1+'" fill="none" stroke="'+GOLD+'" stroke-width="'+(S*0.3)+'"/>');
    for(var y=0;y<n;y++){for(var x=0;x<n;x++){
      if(!q.isDark(y,x)||inFin(y,x))continue;
      p.push('<circle cx="'+(o+x*S+S/2+off)+'" cy="'+(o+y*S+S/2+off)+'" r="'+(S*0.52)+'" fill="'+NAVY+'"/>');
    }}
    var fins=[[0,0],[0,n-7],[n-7,0]];
    for(var i=0;i<3;i++){
      var X=o+fins[i][1]*S+off, Y=o+fins[i][0]*S+off;
      p.push('<rect x="'+X+'" y="'+Y+'" width="'+(7*S)+'" height="'+(7*S)+'" rx="'+(S*1.1)+'" fill="'+NAVY+'"/>');
      p.push('<rect x="'+(X+S)+'" y="'+(Y+S)+'" width="'+(5*S)+'" height="'+(5*S)+'" rx="'+(S*0.85)+'" fill="#ffffff"/>');
      p.push('<rect x="'+(X+2*S)+'" y="'+(Y+2*S)+'" width="'+(3*S)+'" height="'+(3*S)+'" rx="'+(S*0.6)+'" fill="'+NAVY+'"/>');
    }
    var bw=n*S*0.26, bh=bw*ASPECT, padx=bw*0.08;
    var px=total/2-bw/2-padx, py=total/2-bh/2-padx;
    p.push('<rect x="'+px+'" y="'+py+'" width="'+(bw+2*padx)+'" height="'+(bh+2*padx)+'" rx="'+(bh*0.28)+'" fill="#ffffff"/>');
    p.push('<image x="'+(total/2-bw/2)+'" y="'+(total/2-bh/2)+'" width="'+bw+'" height="'+bh+'" href="'+LOGO+'"/>');
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+total+' '+total+'">'+p.join("")+'</svg>';
  }
  function dl(name, blob){
    var a=document.createElement("a"), u=URL.createObjectURL(blob);
    a.href=u; a.download=name; document.body.appendChild(a); a.click();
    setTimeout(function(){URL.revokeObjectURL(u); a.remove();},300);
  }
  var boxes=document.querySelectorAll(".qrbox");
  for(var i=0;i<boxes.length;i++){(function(box){
    var built=false;
    box.addEventListener("toggle",function(){
      if(!box.open||built)return;
      var svg=buildSvg(box.getAttribute("data-url"));
      if(!svg){box.querySelector(".qrwrap").innerHTML='<p class="muted">Could not load the QR builder. Check the connection and reopen.</p>';return;}
      box.querySelector(".qrwrap").innerHTML=svg; built=true;
    });
    box.querySelector(".dlsvg").addEventListener("click",function(){
      var svg=box.querySelector(".qrwrap").innerHTML; if(!svg)return;
      dl("qr-"+box.getAttribute("data-slug")+".svg", new Blob([svg],{type:"image/svg+xml"}));
    });
    box.querySelector(".dlpng").addEventListener("click",function(){
      var svg=box.querySelector(".qrwrap").innerHTML; if(!svg)return;
      var img=new Image();
      img.onload=function(){
        var cv=document.createElement("canvas"); cv.width=2000; cv.height=2000;
        var ctx=cv.getContext("2d"); ctx.drawImage(img,0,0,2000,2000);
        cv.toBlob(function(b){ dl("qr-"+box.getAttribute("data-slug")+".png", b); });
      };
      img.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(svg)));
    });
  })(boxes[i]);}
})();
<\/script>`));
}
__name(linksPage, "linksPage");
function page2(title, inner) {
  return `<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${esc2(title)} -- Sean & Barb</title>
<style>
  :root{ --cream:#F5F0E8; --navy:#0D1B2E; --gold:#C4952A; --ink:#1A1A1A; --line:#e3dccd; }
  *{box-sizing:border-box}
  body{margin:0;background:var(--cream);color:var(--ink);font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;-webkit-text-size-adjust:100%}
  header{background:var(--navy);color:var(--cream);padding:18px 20px}
  header b{color:var(--gold)}
  .wrap{max-width:780px;margin:0 auto;padding:18px 16px 60px}
  .grid{display:grid;gap:16px;grid-template-columns:1fr}
  @media(min-width:680px){.grid{grid-template-columns:1fr 1fr}}
  .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px}
  .card.subtle{background:#fffdf8}
  .card h2{margin:.1em 0 .7em;font-size:1.15rem;display:flex;align-items:center;gap:8px}
  .card h2 small{color:#8a8478;font-weight:400;font-size:.8rem}
  .card h3{margin:.1em 0 .5em;font-size:1rem}
  .dot{width:11px;height:11px;border-radius:50%;display:inline-block}
  .dot.li{background:#0a66c2}.dot.meta{background:#1877f2}
  .badge{display:inline-block;font-size:.74rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;padding:3px 9px;border-radius:999px;background:#efe9db;color:#6b6457;margin-bottom:10px}
  .badge.ok{background:#e6f4ea;color:#1e7a3c}
  .kv{display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px dashed var(--line);font-size:.93rem}
  .kv span{color:#8a8478}
  .kv code{font-size:.78rem;word-break:break-all;text-align:right}
  .row{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
  .row form{margin:0}
  .btn{display:inline-block;border:0;border-radius:10px;padding:11px 16px;font-size:.9rem;font-weight:600;cursor:pointer;text-decoration:none;color:#fff;background:var(--navy)}
  .btn.gold{background:var(--gold);color:#1a1206}
  .btn.ghost{background:#f0ebdf;color:var(--ink)}
  .btn.danger{background:#fff;color:#a4302a;border:1px solid #e6c9c6}
  .muted{color:#8a8478;font-size:.9rem;margin:.3em 0 1em}
  .warn{color:#b5790a}
  .flash{padding:11px 14px;border-radius:10px;margin-bottom:14px;font-size:.92rem}
  .flash.ok{background:#e6f4ea;color:#1e7a3c}
  .flash.err{background:#fbeae9;color:#a4302a}
  .warnbox{background:#fff7e8;border-color:#eed9a8}
  .err pre{white-space:pre-wrap;background:#fbeae9;padding:12px;border-radius:8px;font-size:.8rem}
  .foot{color:#8a8478;font-size:.84rem;margin-top:26px;text-align:center}
  .lbl{display:block;font-size:.8rem;color:#8a8478;margin:12px 0 4px;font-weight:600}
  .ta{width:100%;border:1px solid var(--line);border-radius:10px;padding:10px;font:inherit;font-size:.9rem;resize:vertical}
  .whenrow{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-top:4px}
  .radio{font-size:.9rem;display:flex;align-items:center;gap:5px}
  .dt{border:1px solid var(--line);border-radius:8px;padding:7px 9px;font:inherit;font-size:.85rem}
  .btn.sm{padding:6px 10px;font-size:.78rem;margin-top:8px}
  .qitem{border:1px solid var(--line);border-radius:10px;padding:10px 12px;margin-bottom:8px}
  .qmeta{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:4px}
  .qstatus{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:2px 8px;border-radius:999px;background:#efe9db;color:#6b6457}
  .qstatus.scheduled{background:#e7eefb;color:#2456c9}
  .qstatus.posted{background:#e6f4ea;color:#1e7a3c}
  .qstatus.failed{background:#fbeae9;color:#a4302a}
  .qwhen{font-size:.82rem;color:#8a8478}
  .qbody{font-size:.86rem;color:var(--ink)}
  .qerr{font-size:.78rem;color:#a4302a;margin-top:4px}
  a{color:#0a66c2}
  .hnav a{color:#E6D6BC;text-decoration:none;margin-left:14px;font-size:.88rem}
  .hnav a:hover{color:#C4952A}
  details.card summary{cursor:pointer;font-weight:700;font-size:1.02rem;color:#0D1B2E}
  details.card[open] summary{margin-bottom:10px}
  .tabbar{display:flex;gap:6px;margin:0 0 16px;border-bottom:2px solid var(--line);padding-bottom:0}
  .tab{display:inline-block;padding:9px 16px;border-radius:10px 10px 0 0;font-size:.9rem;font-weight:600;text-decoration:none;color:#6b6457;background:#efe9db;border:1px solid var(--line);border-bottom:none}
  .tab.on{background:var(--navy);color:#E0BC6B}
  .tab.mtab{margin-left:auto;background:#fff}
  .mrow{margin-top:6px;font-size:.85rem}
  .mrow.inputs{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
  .mi{width:110px;font-size:.82rem}
  .mnow b{color:#0D1B2E}
  .mhist{font-size:.75rem;color:#8a8478;margin-top:4px}
  .hours{display:flex;align-items:flex-end;gap:2px;height:46px;margin:6px 0 2px}
  .hours .hb{flex:1;height:100%;display:flex;align-items:flex-end;background:#f4efe4;border-radius:2px}
  .hours .hb i{display:block;width:100%;background:#C4952A;border-radius:2px;min-height:1px}
  .hoursx{display:flex;justify-content:space-between;font-size:.68rem;color:#8a8478;margin-bottom:8px}
  .lcard{padding:16px 18px 12px}
  .lhead{border-bottom:1px solid var(--line);padding-bottom:9px;margin-bottom:11px}
  .ltitle{font-weight:700;font-size:1.04rem;color:#0D1B2E;line-height:1.3}
  .lslug{font-size:.78rem;color:#8a6410;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;margin-top:3px;word-break:break-all}
  .lbig{display:flex;align-items:baseline;gap:8px;margin-bottom:11px}
  .lbig b{font-size:2.1rem;line-height:1;color:#0D1B2E;font-weight:700}
  .lbig span{font-size:.82rem;color:#8a8478}
  .lgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:11px}
  .lstat{background:#faf6ee;border:1px solid var(--line);border-radius:9px;padding:8px 6px;text-align:center}
  .lstat span{display:block;font-size:.68rem;text-transform:uppercase;letter-spacing:.04em;color:#8a8478;margin-bottom:2px}
  .lstat b{font-size:1.12rem;color:#0D1B2E}
  .lfacts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-bottom:11px}
  .lfacts div{font-size:.85rem}
  .lfacts span{color:#8a8478;margin-right:6px}
  .lfacts b{color:#0D1B2E}
  .lsec{font-size:.7rem;text-transform:uppercase;letter-spacing:.05em;color:#8a8478;font-weight:600;margin-bottom:3px}
  .dt.full{width:100%;margin-top:3px}
  .lcard details{border-top:1px solid var(--line);margin-top:9px;padding-top:8px}
  .lcard summary{font-size:.85rem;color:#8a6410;font-weight:600}
  .lcard .days{width:100%;margin-top:6px}
  @media(max-width:520px){ .lgrid{grid-template-columns:repeat(2,1fr)} }
  .qrwrap{margin-top:10px;text-align:center}
  .qrwrap svg{width:230px;height:230px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:8px}
</style></head><body>
${sbHeader()}
<div class="wrap">${inner}</div>
</body></html>`;
}
__name(page2, "page");
var TXN_ROWS = [
  "Effective Date",
  "Closing Date",
  "Inspection Period Ends",
  "Loan Approval Due Date"
];
var TXN_RETIRED = [
  "Escrow Deposit Due Date",
  "Additional Deposit",
  "Loan Application",
  "Title Commitment Due Date"
];
var TXN_FEED_REV = 4;
var TXN_START_ROW = "Effective Date";
var TXN_END_ROW = "Closing Date";
var TXN_PERIODS = {
  "Inspection Period Ends": { min: 0, max: 15, from: TXN_START_ROW, def: 15 },
  "Loan Approval Due Date": { min: 0, max: 31, from: TXN_START_ROW, loan: true, def: 30 }
};
function txnIso(d) {
  const m = d.getUTCMonth() + 1, day = d.getUTCDate();
  return d.getUTCFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
}
__name(txnIso, "txnIso");
function txnParse(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ""));
  if (!m) return null;
  return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
}
__name(txnParse, "txnParse");
function txnAddDays(d, n) {
  const x = new Date(d.getTime());
  x.setUTCDate(x.getUTCDate() + n);
  return x;
}
__name(txnAddDays, "txnAddDays");
function txnNthDow(y, mo, dow, n) {
  const first = new Date(Date.UTC(y, mo, 1));
  const add = (dow - first.getUTCDay() + 7) % 7;
  return new Date(Date.UTC(y, mo, 1 + add + (n - 1) * 7));
}
__name(txnNthDow, "txnNthDow");
function txnLastDow(y, mo, dow) {
  let d = new Date(Date.UTC(y, mo + 1, 0));
  while (d.getUTCDay() !== dow) d = txnAddDays(d, -1);
  return d;
}
__name(txnLastDow, "txnLastDow");
var TXN_HOL_CACHE = {};
function txnHolidays(y) {
  if (TXN_HOL_CACHE[y]) return TXN_HOL_CACHE[y];
  const set = {};
  [[0, 1], [5, 19], [6, 4], [10, 11], [11, 25]].forEach(([mo, day]) => {
    const d = new Date(Date.UTC(y, mo, day));
    set[txnIso(d)] = 1;
    const g = d.getUTCDay();
    if (g === 6) set[txnIso(txnAddDays(d, -1))] = 1;
    else if (g === 0) set[txnIso(txnAddDays(d, 1))] = 1;
  });
  [
    txnNthDow(y, 0, 1, 3),
    // MLK Day
    txnNthDow(y, 1, 1, 3),
    // Washington's Birthday
    txnLastDow(y, 4, 1),
    // Memorial Day
    txnNthDow(y, 8, 1, 1),
    // Labor Day
    txnNthDow(y, 9, 1, 2),
    // Columbus Day
    txnNthDow(y, 10, 4, 4)
    // Thanksgiving
  ].forEach((d) => {
    set[txnIso(d)] = 1;
  });
  TXN_HOL_CACHE[y] = set;
  return set;
}
__name(txnHolidays, "txnHolidays");
function txnIsGood(d) {
  const g = d.getUTCDay();
  if (g === 0 || g === 6) return false;
  return !txnHolidays(d.getUTCFullYear())[txnIso(d)];
}
__name(txnIsGood, "txnIsGood");
function txnComputePeriod(anchorStr, days, back) {
  const anchor = txnParse(anchorStr);
  if (!anchor || !days) return null;
  let d = txnAddDays(anchor, back ? -days : days);
  let rolled = 0;
  while (!txnIsGood(d)) {
    d = txnAddDays(d, 1);
    rolled++;
  }
  return { date: txnIso(d), rolled };
}
__name(txnComputePeriod, "txnComputePeriod");
var TXN_DIR = /^(N|S|E|W|NE|NW|SE|SW|NORTH|SOUTH|EAST|WEST)\.?$/i;
var TXN_SUFFIX = /^(ST|STREET|DR|DRIVE|CT|COURT|CIR|CIRCLE|LN|LANE|RD|ROAD|WAY|BLVD|BOULEVARD|PL|PLACE|TER|TERR|TERRACE|PKWY|PARKWAY|TRL|TRAIL|LOOP|AVE|AVENUE|AV|HWY|HIGHWAY|RUN|PATH|PT|POINT|CV|COVE|SQ|SQUARE|BND|BEND|XING|CROSSING|WALK|ROW|GLN|GLEN|PASS|RIDGE|RDG|CREST|MNR|MANOR)\.?$/i;
function txnStreetName(addr) {
  const whole = String(addr || "").split(",")[0].trim();
  if (!whole) return "";
  let s = whole.replace(/\s+(#\S+|(?:APT|UNIT|STE|SUITE|LOT)\.?\s*\S+)$/i, "").trim();
  let parts = s.split(/\s+/);
  if (parts.length > 1 && /^\d+[A-Za-z]?$/.test(parts[0])) parts.shift();
  if (parts.length > 1 && TXN_DIR.test(parts[0])) parts.shift();
  if (parts.length > 1 && TXN_DIR.test(parts[parts.length - 1])) parts.pop();
  if (parts.length > 1 && TXN_SUFFIX.test(parts[parts.length - 1])) parts.pop();
  let name = parts.join(" ").trim();
  if (!name) return whole;
  if (!/[a-z]/.test(name)) {
    name = name.toLowerCase().replace(/\b[a-z]/g, function(c) {
      return c.toUpperCase();
    });
    name = name.replace(/\bMc([a-z])/g, function(m, c) {
      return "Mc" + c.toUpperCase();
    });
    name = name.replace(/\bO'([a-z])/g, function(m, c) {
      return "O'" + c.toUpperCase();
    });
  }
  return name;
}
__name(txnStreetName, "txnStreetName");
function txnNewId() {
  return "t_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
}
__name(txnNewId, "txnNewId");
function txnNorm(rec) {
  if (!rec) return rec;
  rec.dates = rec.dates || {};
  if (!rec.periods) {
    rec.periods = {};
    if (rec.days) rec.periods["Inspection Period"] = rec.days;
  }
  if (!rec.auto) {
    rec.auto = {};
    if (rec.inspAuto === false) rec.auto["Inspection Period"] = false;
  }
  if (rec.finance !== "cash") rec.finance = "financed";
  if (rec.dates["Inspection Period"] && !rec.dates["Inspection Period Ends"]) {
    rec.dates["Inspection Period Ends"] = rec.dates["Inspection Period"];
  }
  if (rec.periods["Inspection Period"] && !rec.periods["Inspection Period Ends"]) {
    rec.periods["Inspection Period Ends"] = rec.periods["Inspection Period"];
  }
  if (rec.auto["Inspection Period"] === false && rec.auto["Inspection Period Ends"] === void 0) {
    rec.auto["Inspection Period Ends"] = false;
  }
  ["Inspection Period"].concat(TXN_RETIRED).forEach(function(l) {
    delete rec.dates[l];
    delete rec.periods[l];
    delete rec.auto[l];
  });
  return rec;
}
__name(txnNorm, "txnNorm");
async function txnList(env) {
  const out = [];
  let cursor;
  do {
    const res = await env.TOKENS.list({ prefix: "txn:", cursor });
    for (const k of res.keys) {
      const v = await env.TOKENS.get(k.name);
      if (v) out.push(txnNorm(JSON.parse(v)));
    }
    cursor = res.list_complete ? null : res.cursor;
  } while (cursor);
  out.sort((a, b) => String(a.addr || "").localeCompare(String(b.addr || "")));
  return out;
}
__name(txnList, "txnList");
function txnNext(t) {
  const today = txnIso(/* @__PURE__ */ new Date());
  const set = TXN_ROWS.filter((l) => t.dates && t.dates[l]).map((l) => ({ label: l, date: t.dates[l] }));
  set.sort((a, b) => a.date.localeCompare(b.date));
  return set.find((x) => x.date >= today) || null;
}
__name(txnNext, "txnNext");
async function txnSave(request, env, origin) {
  const form = await request.formData();
  const action = (form.get("action") || "save").toString();
  const back = origin + "/transactions";
  if (action === "add") {
    const addr2 = (form.get("addr") || "").toString().trim();
    if (!addr2) return Response.redirect(back + "?err=" + encodeURIComponent("Add a street address."), 302);
    const rec2 = {
      id: txnNewId(),
      addr: addr2.slice(0, 120),
      rep: "seller",
      finance: "financed",
      periods: {},
      auto: {},
      dates: {},
      rev: 0,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await env.TOKENS.put("txn:" + rec2.id, JSON.stringify(rec2));
    return Response.redirect(back + "?p=" + rec2.id + "&ok=" + encodeURIComponent("Added " + rec2.addr), 302);
  }
  if (action === "delete") {
    const id2 = (form.get("id") || "").toString();
    const rec2 = await kvJson(env, "txn:" + id2);
    if (rec2) await env.TOKENS.delete("txn:" + id2);
    return Response.redirect(back + "?ok=" + encodeURIComponent(rec2 ? "Removed " + rec2.addr + ". It disappears from both calendars on the next refresh." : "Nothing to remove."), 302);
  }
  if (action === "newcal") {
    const who = (form.get("who") || "").toString().trim().slice(0, 40) || "Calendar";
    const token = crypto.randomUUID().replace(/-/g, "").slice(0, 22);
    await env.TOKENS.put("caltok:" + token, JSON.stringify({ who, createdAt: (/* @__PURE__ */ new Date()).toISOString() }));
    return Response.redirect(back + "?ok=" + encodeURIComponent("Created a calendar link for " + who + ". Send it to that person and nobody else."), 302);
  }
  if (action === "revokecal") {
    const token = (form.get("token") || "").toString();
    if (token) await env.TOKENS.delete("caltok:" + token);
    return Response.redirect(back + "?ok=" + encodeURIComponent("Link revoked. That phone stops updating; existing events stay until removed by hand."), 302);
  }
  const id = (form.get("id") || "").toString();
  const rec = txnNorm(await kvJson(env, "txn:" + id));
  if (!rec) return Response.redirect(back + "?err=" + encodeURIComponent("That property no longer exists."), 302);
  const addr = (form.get("addr") || "").toString().trim();
  if (addr) rec.addr = addr.slice(0, 120);
  rec.rep = (form.get("rep") || "").toString() === "buyer" ? "buyer" : "seller";
  rec.finance = (form.get("finance") || "").toString() === "cash" ? "cash" : "financed";
  try {
    const a = JSON.parse((form.get("auto") || "{}").toString());
    const clean = {};
    for (const l in TXN_PERIODS) if (a[l] === false) clean[l] = false;
    rec.auto = clean;
  } catch (_) {
    rec.auto = rec.auto || {};
  }
  const cash = rec.finance === "cash";
  for (const label in TXN_PERIODS) {
    const raw = (form.get("n_" + label) || "").toString();
    let n = raw === "" ? 0 : parseInt(raw, 10);
    if (isNaN(n) || n < 0 || n > TXN_PERIODS[label].max) n = 0;
    if (n) rec.periods[label] = n;
    else delete rec.periods[label];
  }
  rec.dates = rec.dates || {};
  for (const label of TXN_ROWS) {
    const v = (form.get("d_" + label) || "").toString().trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(v)) rec.dates[label] = v;
    else delete rec.dates[label];
  }
  if (cash) {
    for (const label in TXN_PERIODS) {
      if (!TXN_PERIODS[label].loan) continue;
      delete rec.periods[label];
      delete rec.dates[label];
    }
  }
  for (const label in TXN_PERIODS) {
    const cfg = TXN_PERIODS[label];
    if (cash && cfg.loan) continue;
    if (!rec.periods[label]) {
      delete rec.dates[label];
      continue;
    }
    const anchor = rec.dates[cfg.from];
    if (!rec.dates[label] && anchor) {
      const calc = txnComputePeriod(anchor, rec.periods[label], cfg.back);
      if (calc) rec.dates[label] = calc.date;
    }
  }
  rec.rev = (rec.rev || 0) + 1;
  rec.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  await env.TOKENS.put("txn:" + rec.id, JSON.stringify(rec));
  return Response.redirect(back + "?p=" + rec.id + "&ok=" + encodeURIComponent("Saved. Both calendars pick this up on their next refresh."), 302);
}
__name(txnSave, "txnSave");
function icsEscape(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}
__name(icsEscape, "icsEscape");
function icsFold(line) {
  if (line.length <= 74) return line;
  const parts = [line.slice(0, 74)];
  let rest = line.slice(74);
  while (rest.length > 73) {
    parts.push(" " + rest.slice(0, 73));
    rest = rest.slice(73);
  }
  if (rest.length) parts.push(" " + rest);
  return parts.join("\r\n");
}
__name(icsFold, "icsFold");
function icsStamp(d) {
  const p = /* @__PURE__ */ __name((n) => (n < 10 ? "0" : "") + n, "p");
  return d.getUTCFullYear() + p(d.getUTCMonth() + 1) + p(d.getUTCDate()) + "T" + p(d.getUTCHours()) + p(d.getUTCMinutes()) + p(d.getUTCSeconds()) + "Z";
}
__name(icsStamp, "icsStamp");
function txnAlarmUtc(dayStr, hhmm) {
  const inst = easternToUTC(dayStr + "T" + hhmm);
  return isNaN(inst.getTime()) ? null : icsStamp(inst);
}
__name(txnAlarmUtc, "txnAlarmUtc");
async function calFeed(request, env, path) {
  const token = path.replace(/^\/cal\//, "").replace(/\.ics$/i, "").trim();
  if (!/^[a-z0-9]{10,40}$/i.test(token)) return new Response("Not found", { status: 404 });
  const owner = await kvJson(env, "caltok:" + token);
  if (!owner) return new Response("Not found", { status: 404 });
  const items = await txnList(env);
  const now = /* @__PURE__ */ new Date();
  const stamp = icsStamp(now);
  const L = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sean and Barb//Transactions//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:SB Transactions",
    "X-WR-TIMEZONE:America/New_York",
    "REFRESH-INTERVAL;VALUE=DURATION:PT15M",
    "X-PUBLISHED-TTL:PT15M"
  ];
  for (const t of items) {
    const street = txnStreetName(t.addr);
    const side = t.rep === "buyer" ? "BUYER" : "SELLER";
    for (const label of TXN_ROWS) {
      const day = t.dates && t.dates[label];
      if (!day || !/^\d{4}-\d{2}-\d{2}$/.test(day)) continue;
      const d = txnParse(day);
      if (!d) continue;
      const compact = day.replace(/-/g, "");
      const endCompact = txnIso(txnAddDays(d, 1)).replace(/-/g, "");
      const prevDay = txnIso(txnAddDays(d, -1));
      const uid = t.id + "-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "@seanandbarb.com";
      const summary = street + " - " + side + " - " + label;
      const cfg = TXN_PERIODS[label];
      const n = t.periods && t.periods[label];
      const manual = t.auto && t.auto[label] === false;
      const rule = n ? n + " calendar days " + (cfg && cfg.back ? "before Closing Date" : "from the Effective Date") : "";
      const desc = [
        t.addr,
        t.rep === "buyer" ? "Buyer side" : "Seller side",
        t.finance === "cash" ? "Cash" : "Financed",
        manual ? "Date entered by hand" + (rule ? ", overriding " + rule : "") : rule
      ].filter(Boolean).join(". ") + ".";
      L.push("BEGIN:VEVENT");
      L.push("UID:" + uid);
      L.push("DTSTAMP:" + stamp);
      L.push("SEQUENCE:" + (TXN_FEED_REV * 1e4 + (t.rev || 0)));
      L.push("DTSTART;VALUE=DATE:" + compact);
      L.push("DTEND;VALUE=DATE:" + endCompact);
      L.push(icsFold("SUMMARY:" + icsEscape(summary)));
      L.push(icsFold("DESCRIPTION:" + icsEscape(desc)));
      L.push("TRANSP:TRANSPARENT");
      L.push("CATEGORIES:SB TRANSACTIONS");
      const a1 = txnAlarmUtc(prevDay, "12:00");
      if (a1) {
        L.push("BEGIN:VALARM");
        L.push("ACTION:DISPLAY");
        L.push("TRIGGER;VALUE=DATE-TIME:" + a1);
        L.push(icsFold("DESCRIPTION:" + icsEscape("Tomorrow - " + summary)));
        L.push("END:VALARM");
      }
      const a2 = txnAlarmUtc(day, "08:00");
      if (a2) {
        L.push("BEGIN:VALARM");
        L.push("ACTION:DISPLAY");
        L.push("TRIGGER;VALUE=DATE-TIME:" + a2);
        L.push(icsFold("DESCRIPTION:" + icsEscape("Today - " + summary)));
        L.push("END:VALARM");
      }
      L.push("END:VEVENT");
    }
  }
  L.push("END:VCALENDAR");
  return new Response(L.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Cache-Control": "no-store",
      "Content-Disposition": 'inline; filename="sb-transactions.ics"'
    }
  });
}
__name(calFeed, "calFeed");
async function txnPage(request, env, origin) {
  const u = new URL(request.url);
  const flash = [];
  if (u.searchParams.get("ok")) flash.push(["ok", u.searchParams.get("ok")]);
  if (u.searchParams.get("err")) flash.push(["err", u.searchParams.get("err")]);
  const flashHtml = flash.map(([t2, m]) => `<div class="flash ${t2}">${esc2(m)}</div>`).join("");
  const items = await txnList(env);
  const want = (u.searchParams.get("p") || "").toString();
  const cur = items.find((x) => x.id === want) || items[0] || null;
  const toks = [];
  let cursor;
  do {
    const res = await env.TOKENS.list({ prefix: "caltok:", cursor });
    for (const k of res.keys) {
      const v = await env.TOKENS.get(k.name);
      if (v) toks.push({ token: k.name.slice(7), ...JSON.parse(v) });
    }
    cursor = res.list_complete ? null : res.cursor;
  } while (cursor);
  toks.sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt)));
  const host = u.hostname.replace(/^social\./i, "go.");
  const calRows = toks.length ? toks.map((t2) => `<div class="qitem">
        <div class="qmeta"><span class="qstatus posted">${esc2(t2.who)}</span>
        <form method="post" action="/api/txn" style="margin:0" onsubmit="return confirm('Revoke the link for ${esc2(t2.who)}? That phone stops receiving updates.')">
          <input type="hidden" name="action" value="revokecal">
          <input type="hidden" name="token" value="${esc2(t2.token)}">
          <button class="btn danger sm" style="margin-top:0">Revoke</button>
        </form></div>
        <div class="lslug">webcal://${esc2(host)}/cal/${esc2(t2.token)}.ics</div>
      </div>`).join("") : `<p class="muted">No calendar links yet. Create one for yourself and one for Barb.</p>`;
  const calCard = `<details class="card">
    <summary>Calendar links</summary>
    <p class="muted">Each person gets their own link. Text it to them once, they tap it, and every date below lands on their phone from then on. Treat a link like a password, anyone holding it can see these dates. Revoking one does not affect the other.</p>
    ${calRows}
    <form method="post" action="/api/txn" class="row" style="margin-top:12px">
      <input type="hidden" name="action" value="newcal">
      <input class="dt" name="who" placeholder="Whose calendar, for example Barb" style="flex:1 1 200px">
      <button class="btn gold sm" style="margin-top:0">Create link</button>
    </form>
    <p class="muted" style="margin-top:10px">These links use the go host on purpose. The social host sits behind a login and a phone cannot get past it.</p>
    <p class="muted">On the iPhone: tap the link, then Subscribe. Leave <b>Remove Alarms</b> OFF or the reminders get stripped. Then Settings, Apps, Calendar, Accounts, Fetch New Data, and set it to every 15 or 30 minutes. On Android, add it at calendar.google.com under Other calendars, From URL, using the https form, or use an app such as ICSx5 to get the alerts. Alerts land 12pm the day before and 8am the day of.</p>
  </details>`;
  const importCard = `<details class="card" id="sbImport">
    <summary>Import from the contract</summary>
    <p class="muted">Pick the executed PDF. Your browser reads it on this device and nothing is uploaded, so no client names or figures leave your machine. Only the blanks and the paragraph 8 box are read. Scanned copies cannot be read, type those by hand.</p>
    <input type="file" id="sbFile" accept="application/pdf" class="dt full">
    <p class="muted" id="sbStatus" style="margin:8px 0 0"></p>
    <div id="sbReview"></div>
    <button type="button" class="btn gold sm" id="sbApply" style="display:none">Apply to the form below</button>
  </details>`;
  const picker = `<div class="card subtle">
    <label class="lbl" for="pick">Property</label>
    <div class="row" style="margin-top:0">
      <select id="pick" class="dt" style="flex:1 1 200px" ${items.length ? "" : "disabled"}
        onchange="if(this.value)location.href='/transactions?p='+this.value">
        ${items.length ? items.map((x) => `<option value="${esc2(x.id)}"${cur && x.id === cur.id ? " selected" : ""}>${esc2(x.addr)}</option>`).join("") : "<option>No properties yet</option>"}
      </select>
    </div>
    <form method="post" action="/api/txn" class="row" style="margin-top:10px">
      <input type="hidden" name="action" value="add">
      <input class="dt" name="addr" placeholder="1428 Bella Vista Ct, Windermere" style="flex:1 1 220px">
      <button class="btn gold sm" style="margin-top:0">Add property</button>
    </form>
  </div>`;
  let card = `<div class="card"><p class="muted" style="margin:0">No properties yet. Add an address above, then set the dates from that contract.</p></div>`;
  if (cur) {
    const nx = txnNext(cur);
    const rows = TXN_ROWS.map((label) => {
      const v = cur.dates && cur.dates[label] || "";
      const cfg = TXN_PERIODS[label];
      let per = "";
      if (cfg) {
        const have = cur.periods && cur.periods[label] || 0;
        let opts = cfg.min === 0 ? "" : `<option value=""${have ? "" : " selected"}>-</option>`;
        for (let k = cfg.min === 0 ? 0 : 1; k <= cfg.max; k++) {
          opts += `<option value="${k}"${have === k ? " selected" : ""}>${k}</option>`;
        }
        per = `<div class="per"><label>Days ${cfg.back ? "before closing" : ""}</label><select name="n_${esc2(label)}" class="dt persel" data-period="${esc2(label)}" aria-label="${esc2(label)} length in days">${opts}</select></div>`;
      }
      const loanRow = cfg && cfg.loan ? ' data-loan="1"' : "";
      return `<div class="trow"${loanRow}>
        <div class="tname"><b>${esc2(label)}</b>${per}<span class="tnote" data-note="${esc2(label)}"></span></div>
        <input type="date" name="d_${esc2(label)}" value="${esc2(v)}" class="dt tdate${v ? " set" : ""}" data-label="${esc2(label)}" aria-label="${esc2(label)}">
      </div>`;
    }).join("");
    card = `<form method="post" action="/api/txn" id="txnform">
      <input type="hidden" name="action" value="save">
      <input type="hidden" name="id" value="${esc2(cur.id)}">
      <input type="hidden" name="auto" id="autoState" value="${esc2(JSON.stringify(cur.auto || {}))}">
      <div class="card">
        <h2>${esc2(cur.addr)}</h2>
        <p class="muted" style="margin-top:-6px">Calendar entries read <b>${esc2(txnStreetName(cur.addr))} - ${cur.rep === "buyer" ? "BUYER" : "SELLER"} - Inspection Period</b>.${nx ? ` Next up: <b>${esc2(nx.label)}</b> on ${esc2(nx.date)}.` : ""}</p>
        <label class="lbl">Street address</label>
        <input class="dt full" name="addr" value="${esc2(cur.addr)}">
        <label class="lbl">Representation</label>
        <div class="seg">
          <label class="segb"><input type="radio" name="rep" value="buyer"${cur.rep === "buyer" ? " checked" : ""}> Buyer side</label>
          <label class="segb"><input type="radio" name="rep" value="seller"${cur.rep !== "buyer" ? " checked" : ""}> Seller side</label>
        </div>
        <label class="lbl">Paragraph 8</label>
        <div class="seg">
          <label class="segb"><input type="radio" name="finance" value="financed" id="finFin"${cur.finance !== "cash" ? " checked" : ""}> Financing 8(b)</label>
          <label class="segb"><input type="radio" name="finance" value="cash" id="finCash"${cur.finance === "cash" ? " checked" : ""}> Cash 8(a)</label>
        </div>
        <p class="muted" style="margin:6px 0 0" id="finNote"></p>
        <label class="lbl">Contract dates</label>
        <p class="muted" style="margin:0 0 4px">Calendar days per paragraph 17F, extending past a weekend or national legal holiday. Every date stays editable by hand.</p>
        ${rows}
        <div class="row">
          <button class="btn gold" type="submit">Save dates</button>
        </div>
      </div>
    </form>
    <form method="post" action="/api/txn" onsubmit="return confirm('Remove ${esc2(cur.addr)} and all of its dates from both calendars?')">
      <input type="hidden" name="action" value="delete">
      <input type="hidden" name="id" value="${esc2(cur.id)}">
      <input type="hidden" name="auto" id="autoState" value="${esc2(JSON.stringify(cur.auto || {}))}">
      <div class="card subtle"><button class="btn danger sm" style="margin-top:0">Remove this property</button></div>
    </form>`;
  }
  const style = `<style>
    .trow{display:flex;align-items:center;gap:10px;padding:11px 0;border-bottom:1px solid var(--line)}
    .trow:last-of-type{border-bottom:none}
    .trow.off{opacity:.45}
    .tname{flex:1 1 auto;min-width:0}
    .tname b{display:block;font-size:.9rem;color:#0D1B2E;line-height:1.3}
    .tnote{display:block;font-size:.75rem;color:#8a8478;margin-top:2px}
    .tnote.due{color:#8a6a12;font-weight:600}
    .tnote.gone{color:#1e7a3c}
    .tnote.bad{color:#a4302a;font-weight:600}
    .tdate{flex:0 0 auto;width:150px;min-height:40px;font-size:.9rem}
    .tdate.set{border-color:var(--gold);font-weight:600;color:#0D1B2E}
    .per{display:flex;align-items:center;gap:6px;margin:5px 0 1px}
    .per label{font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;color:#8a8478;font-weight:700}
    .per select{padding:4px 8px;font-size:.82rem;font-weight:600}
    .seg{display:flex;gap:8px;flex-wrap:wrap;margin-top:2px}
    .segb{font-size:.88rem;display:flex;align-items:center;gap:6px;background:#f4efe4;border:1px solid var(--line);border-radius:999px;padding:7px 14px;cursor:pointer}
    .linkbtn{background:none;border:none;padding:0;font:inherit;font-size:.75rem;font-weight:700;color:var(--gold);text-decoration:underline;cursor:pointer}
    .sbtab{width:100%;border-collapse:collapse;margin-top:10px;font-size:.85rem}
    .sbtab th{text-align:left;font-weight:600;color:#6b6457;padding:5px 8px 5px 0;vertical-align:top;width:47%}
    .sbtab td{padding:5px 0;vertical-align:top}
    .sbok{color:#1e7a3c;font-weight:600}
    .sbdef{color:#8a8478}
    .sbask{color:#a4302a;font-weight:600}
    .sbbad{color:#a4302a}
    .sbwarn{background:#fff7e8;border:1px solid #eed9a8;border-radius:10px;padding:10px 12px;margin-top:10px;font-size:.82rem}
    .sbwarn ul{margin:6px 0 0;padding-left:18px}
    .sbask2{background:#fbeae9;border:1px solid #e6c9c6;border-radius:10px;padding:10px 12px;margin-top:10px;font-size:.85rem}
    .sbask2 .segb{margin-top:8px;display:inline-flex}
  </style>`;
  const script = `<script>
(function(){
  var ROWS=${JSON.stringify(TXN_ROWS)}, PERIODS=${JSON.stringify(TXN_PERIODS)};
  var START=${JSON.stringify(TXN_START_ROW)}, END=${JSON.stringify(TXN_END_ROW)};
  var form=document.getElementById("txnform"); if(!form) return;
  var auto=${cur ? JSON.stringify(cur.auto || {}) : "{}"};
  function iso(d){var m=d.getUTCMonth()+1,y=d.getUTCDate();return d.getUTCFullYear()+"-"+(m<10?"0":"")+m+"-"+(y<10?"0":"")+y;}
  function parse(s){var m=/^(\\d{4})-(\\d{2})-(\\d{2})$/.exec(s||"");return m?new Date(Date.UTC(+m[1],+m[2]-1,+m[3])):null;}
  function add(d,n){var x=new Date(d.getTime());x.setUTCDate(x.getUTCDate()+n);return x;}
  function nth(y,mo,dw,n){var f=new Date(Date.UTC(y,mo,1)),a=(dw-f.getUTCDay()+7)%7;return new Date(Date.UTC(y,mo,1+a+(n-1)*7));}
  function last(y,mo,dw){var d=new Date(Date.UTC(y,mo+1,0));while(d.getUTCDay()!==dw)d=add(d,-1);return d;}
  var HC={};
  function hol(y){if(HC[y])return HC[y];var s={};
    [[0,1],[5,19],[6,4],[10,11],[11,25]].forEach(function(p){var d=new Date(Date.UTC(y,p[0],p[1])),g=d.getUTCDay();
      s[iso(d)]=1;
      if(g===6)s[iso(add(d,-1))]=1;else if(g===0)s[iso(add(d,1))]=1;});
    [nth(y,0,1,3),nth(y,1,1,3),last(y,4,1),nth(y,8,1,1),nth(y,9,1,2),nth(y,10,4,4)].forEach(function(d){s[iso(d)]=1;});
    HC[y]=s;return s;}
  function good(d){var g=d.getUTCDay();if(g===0||g===6)return false;return !hol(d.getUTCFullYear())[iso(d)];}
  function calc(anchor,days,back){var s=parse(anchor);if(!s||!days)return null;
    var d=add(s,back?-days:days),rolled=0;
    while(!good(d)){d=add(d,1);rolled++;}
    return {date:iso(d),rolled:rolled};}
  function today(){var n=new Date();return new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()));}
  function out(s){return Math.round((parse(s)-today())/86400000);}
  function phrase(n){if(n<0)return n===-1?"Yesterday":Math.abs(n)+" days ago";if(n===0)return "Today";if(n===1)return "Tomorrow";return "In "+n+" days";}
  function fmt(s){var d=parse(s);return d?d.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}):s;}
  function inp(l){return form.querySelector('input[data-label="'+l+'"]');}
  function note(l){return form.querySelector('[data-note="'+l+'"]');}
  function sel(l){return form.querySelector('select[data-period="'+l+'"]');}
  function days(l){var s=sel(l);if(!s)return 0;var v=parseInt(s.value,10);return isNaN(v)?0:v;}
  function isCash(){return document.getElementById("finCash").checked;}

  function applyFinance(changed){
    var cash=isCash();
    document.getElementById("finNote").textContent = cash
      ? "Cash. No loan contingency, so the loan approval row is off."
      : "Financing. The paragraph 8(b) blank is 30 days for loan approval when left empty.";
    Object.keys(PERIODS).forEach(function(l){
      if(!PERIODS[l].loan)return;
      var row=inp(l).closest(".trow"), s=sel(l), i=inp(l);
      row.className="trow"+(cash?" off":"");
      s.disabled=cash; i.disabled=cash;
      if(cash){ s.value=PERIODS[l].min===0?"0":""; i.value=""; }
      else if(changed && !days(l) && PERIODS[l].def){ s.value=String(PERIODS[l].def); }
    });
    var t="Title Commitment Due Date", ts=sel(t);
    if(changed && ts){
      ts.value=String(cash?PERIODS[t].defCash:PERIODS[t].defFinanced);
      auto[t]=true;
    }
  }

  function recalc(l){
    var cfg=PERIODS[l], a=inp(cfg.from).value, dv=days(l);
    if(!a||!dv)return;
    inp(l).value=calc(a,dv,cfg.back).date;
    auto[l]=true;
  }

  function paint(){
    var st=document.getElementById("autoState");
    if(st)st.value=JSON.stringify(auto);
    ROWS.forEach(function(l){
      var i=inp(l), n=note(l); if(!i||!n)return;
      i.className="dt tdate"+(i.value?" set":"");
      n.innerHTML="";
      var cfg=PERIODS[l];
      if(cfg){
        if(cfg.loan&&isCash()){n.className="tnote";n.textContent="Not applicable on a cash deal";return;}
        var dv=days(l), a=inp(cfg.from).value;
        if(!dv){n.className="tnote";n.textContent=i.value?(fmt(i.value)+" \\u00b7 "+phrase(out(i.value))+". Typed by hand"):"Not set";return;}
        if(!a){n.className="tnote due";n.textContent="Set the "+cfg.from+" to calculate";return;}
        var c=calc(a,dv,cfg.back);
        if(i.value&&c&&i.value!==c.date){
          n.className="tnote";
          n.innerHTML=fmt(i.value)+" \\u00b7 "+phrase(out(i.value))+". Edited, calculated was "+fmt(c.date)+' <button type="button" class="linkbtn" data-recalc="'+l+'">Use it</button>';
          return;
        }
        if(i.value&&c){
          var closing=inp(END).value;
          if(cfg.back&&closing&&i.value>=closing){
            n.className="tnote bad";
            n.textContent=fmt(i.value)+". The extension pushed this onto or past Closing. Pick a larger number.";
            return;
          }
          n.className="tnote";
          n.textContent=fmt(i.value)+" \\u00b7 "+phrase(out(i.value))+". "+dv+" calendar days "+(cfg.back?"before Closing Date":"from Effective Date")+(c.rolled?", extended "+c.rolled+" day"+(c.rolled>1?"s":"")+" off a weekend or holiday":"");
          return;
        }
        n.className="tnote";n.textContent="Not set";return;
      }
      if(!i.value){n.className="tnote";n.textContent="Not set";return;}
      var d=out(i.value);
      n.className="tnote"+(d<0?" gone":(d<=3?" due":""));
      n.textContent=fmt(i.value)+" \\u00b7 "+phrase(d);
    });
    form.querySelectorAll("[data-recalc]").forEach(function(b){
      b.addEventListener("click",function(){recalc(b.getAttribute("data-recalc"));paint();});
    });
  }

  ["finFin","finCash"].forEach(function(idx){
    document.getElementById(idx).addEventListener("change",function(){
      applyFinance(true);
      Object.keys(PERIODS).forEach(function(l){ if(auto[l]!==false)recalc(l); });
      paint();
    });
  });
  Object.keys(PERIODS).forEach(function(l){
    var s=sel(l); if(!s)return;
    s.addEventListener("change",function(){
      var dv=days(l);
      if(!dv){inp(l).value="";auto[l]=true;}
      else recalc(l);
      paint();
    });
  });
  ROWS.forEach(function(l){
    var i=inp(l); if(!i)return;
    i.addEventListener("change",function(){
      if(PERIODS[l])auto[l]=false;
      if(l===START||l===END){
        Object.keys(PERIODS).forEach(function(pl){
          if(PERIODS[pl].from===l&&auto[pl]!==false)recalc(pl);
        });
      }
      paint();
    });
  });
  window.SBTXN = { calc: calc, iso: iso, parse: parse, good: good };
  applyFinance(false);
  paint();
})();

// SB contract reader. Runs entirely in the browser against a pdf.js document.
// Reads only the blanks and boxes needed for deadlines. Never touches the
// parties, addresses of persons, signatures, or dollar amounts beyond the
// single presence test on the additional deposit.

var SBX = (function () {
  "use strict";

  var MARKS = ["\\u2716", "\\u2717", "\\u2718", "\\u2612", "\\u2611", "\\u2714", "\\u2713"];

  // Group a page's text items into visual lines, left to right.
  function pageLines(items) {
    var rows = [];
    items.forEach(function (it) {
      var s = it.str;
      if (s === null || s === undefined) return;
      var x = it.transform[4], y = it.transform[5];
      var row = null;
      for (var i = 0; i < rows.length; i++) {
        if (Math.abs(rows[i].y - y) <= 4.0) { row = rows[i]; break; }
      }
      if (!row) { row = { y: y, parts: [] }; rows.push(row); }
      row.parts.push({ x: x, s: s });
    });
    rows.forEach(function (r) {
      r.parts.sort(function (a, b) { return a.x - b.x; });
      r.text = r.parts.map(function (p) { return p.s; }).join("");
    });
    rows.sort(function (a, b) { return b.y - a.y; });
    return rows;
  }

  function strip(s) { return String(s).replace(/_+/g, "").replace(/\\s+/g, " ").trim(); }

  // Pull the value out of one blank: text between two fixed phrases on the
  // same line, with the underscore fill removed.
  function between(lines, anchor, after, before) {
    for (var i = 0; i < lines.length; i++) {
      var t = lines[i].text;
      if (t.indexOf(anchor) === -1) continue;
      var ai = t.indexOf(after);
      if (ai === -1) continue;
      var rest = t.slice(ai + after.length);
      var bi = rest.indexOf(before);
      if (bi === -1) continue;
      return { value: strip(rest.slice(0, bi)), line: t };
    }
    return null;
  }

  // Some platforms stamp the typed value as its own text object sitting on
  // top of the printed line rather than inside it. Collect the short objects
  // on the anchor's line and let the field's own validator choose.
  function overlay(lines, anchor, validator) {
    // Some generators emit the same sentence more than once (a visual copy and
    // a reflowed copy), so gather candidates from every matching line.
    var hits = [], seen = false;
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].text.indexOf(anchor) === -1) continue;
      seen = true;
      // The left margin carries the contract's own line numbers. Anything to
      // the left of the printed sentence is not a value.
      // Generators sometimes split the anchor sentence across text objects,
      // so fall back to a tail of it, then to the form's body margin.
      var anchorX = 1e9, tail = anchor.slice(-10);
      lines[i].parts.forEach(function (p) {
        if (p.s.indexOf(anchor) !== -1 && p.x < anchorX) anchorX = p.x;
      });
      if (anchorX === 1e9) {
        lines[i].parts.forEach(function (p) {
          if (p.s.indexOf(tail) !== -1 && p.x < anchorX) anchorX = p.x;
        });
      }
      if (anchorX === 1e9) anchorX = 50;
      lines[i].parts.forEach(function (p) {
        var s = strip(p.s);
        if (!s || s.length > 15) return;
        if (p.x < anchorX) return;
        if (p.s.indexOf(anchor) !== -1) return;
        if (validator(s)) hits.push(s);
      });
    }
    if (!seen) return null;
    var uniq = hits.filter(function (v, k) { return hits.indexOf(v) === k; });
    if (uniq.length === 1) return { value: uniq[0] };
    if (uniq.length > 1) return { ambiguous: uniq };
    return { value: "" };
  }
  var isDayCount = function (s) { return /^\\d{1,2}$/.test(s); };
  var isDateish  = function (s) { return toIso(s) !== null; };

  // A day count is one or two digits and nothing else. Anything else is a
  // signature stamp or an amendment collision, so it becomes a question.
  function days(hit, lines, anchor) {
    if (hit && hit.value === "" && lines) {
      var ov = overlay(lines, anchor, isDayCount);
      if (ov && ov.ambiguous) return { state: "ambiguous", raw: ov.ambiguous.join(" / ") };
      if (ov && ov.value) hit = ov;
    }
    if (!hit) return { state: "missing" };
    var v = hit.value;
    if (v === "") return { state: "blank" };
    if (/^\\d{1,2}$/.test(v)) return { state: "read", n: parseInt(v, 10) };
    return { state: "unreadable", raw: v };
  }

  var MONTHS = ["january","february","march","april","may","june","july",
                "august","september","october","november","december"];
  function toIso(raw) {
    if (!raw) return null;
    var s = raw.replace(/\\s+/g, " ").trim();
    var m = /^(\\d{1,2})\\/(\\d{1,2})\\/(\\d{2,4})$/.exec(s);
    if (m) {
      var y = parseInt(m[3], 10); if (y < 100) y += 2000;
      return pad(y, parseInt(m[1], 10), parseInt(m[2], 10));
    }
    m = /^([A-Za-z]+)\\.?\\s+(\\d{1,2}),?\\s+(\\d{4})$/.exec(s);
    if (m) {
      var mi = MONTHS.indexOf(m[1].toLowerCase());
      if (mi >= 0) return pad(parseInt(m[3], 10), mi + 1, parseInt(m[2], 10));
    }
    return null;
  }
  function pad(y, m, d) {
    if (m < 1 || m > 12 || d < 1 || d > 31) return null;
    return y + "-" + (m < 10 ? "0" : "") + m + "-" + (d < 10 ? "0" : "") + d;
  }
  function dateField(hit, lines, anchor) {
    if (hit && hit.value === "" && lines) {
      var ov = overlay(lines, anchor, isDateish);
      if (ov && ov.ambiguous) return { state: "ambiguous", raw: ov.ambiguous.join(" / ") };
      if (ov && ov.value) hit = ov;
    }
    if (!hit) return { state: "missing" };
    if (hit.value === "") return { state: "blank" };
    var iso = toIso(hit.value);
    return iso ? { state: "read", iso: iso } : { state: "unreadable", raw: hit.value };
  }

  // Checked boxes that signing platforms write as a glyph. Returns the clause
  // text sitting to the right of each mark.
  function glyphMarks(items) {
    var out = [];
    items.forEach(function (it) {
      var s = it.str || "";
      var hasMark = false;
      for (var i = 0; i < MARKS.length; i++) if (s.indexOf(MARKS[i]) !== -1) hasMark = true;
      if (!hasMark) return;
      out.push({ x: it.transform[4], y: it.transform[5] });
    });
    return out;
  }
  function clauseAt(lines, mark) {
    for (var i = 0; i < lines.length; i++) {
      if (Math.abs(lines[i].y - mark.y) > 5) continue;
      var right = lines[i].parts.filter(function (p) { return p.x >= mark.x - 1; });
      var s = right.map(function (p) { return p.s; }).join("");
      for (var k = 0; k < MARKS.length; k++) s = s.split(MARKS[k]).join(" ");
      return s.replace(/\\s+/g, " ").trim();
    }
    return "";
  }

  // Latest signature date on the document. Used only for the Effective Date,
  // which paragraph 3(b) defines as the last signature.
  function latestDateOld(allText) {
    var best = null, re = /(?:^|[^\\d\\/])(\\d{1,2})\\/(\\d{1,2})\\/(\\d{2}|\\d{4})(?![\\d\\/])/g, m;
    while ((m = re.exec(allText))) {
      var y = parseInt(m[3], 10); if (y < 100) y += 2000;
      if (y < 2000 || y > 2100) continue;
      var iso = pad(y, parseInt(m[1], 10), parseInt(m[2], 10));
      if (iso && (!best || iso > best)) best = iso;
    }
    return best;
  }

  // pages: array of { items: [pdf.js text items] }
  function read(pages) {
    var lines = [], allText = "", marks = [], sigDates = [];
    pages.forEach(function (p, pi) {
      var last = (pi === pages.length - 1);
      // A date counts toward the Effective Date only if it is part of a
      // signature stamp or sits in the Date column of the signature page.
      var stamps = p.items.filter(function (it) { return /dotloop verified|Authentisign/i.test(it.str); });
      p.items.forEach(function (it) {
        var m = /(?:^|[^\\d\\/])(\\d{1,2})\\/(\\d{1,2})\\/(\\d{2}|\\d{4})(?![\\d\\/])/.exec(it.str);
        if (!m) return;
        var y = parseInt(m[3], 10); if (y < 100) y += 2000;
        if (y < 2000 || y > 2100) return;
        var iso = pad(y, parseInt(m[1], 10), parseInt(m[2], 10));
        if (!iso) return;
        var timed = /\\d\\s*[AP]M\\s*E[DS]T/i.test(it.str);
        var nearStamp = stamps.some(function (s) {
          return Math.abs(s.transform[5] - it.transform[5]) < 14 &&
                 Math.abs(s.transform[4] - it.transform[4]) < 40;
        });
        var dateCol = last && it.transform[4] > 450;
        if (timed || nearStamp || dateCol) sigDates.push(iso);
      });
      var L = pageLines(p.items);
      lines = lines.concat(L);
      L.forEach(function (r) { allText += r.text + "\\n"; });
      glyphMarks(p.items).forEach(function (mk) {
        marks.push({ clause: clauseAt(L, mk) });
      });
    });

    var out = { flags: [], marks: marks };

    out.address = (function () {
      var h = between(lines, "Street address, city, zip", "zip:", "\\u0000");
      if (!h) {
        for (var i = 0; i < lines.length; i++) {
          var t = lines[i].text;
          var k = t.indexOf("Street address, city, zip:");
          if (k !== -1) return { state: "read", text: strip(t.slice(k + 26)) };
        }
        return { state: "missing" };
      }
      return { state: "read", text: h.value };
    })();

    out.closing = dateField(between(lines, "Closing shall occur on", "occur on", "(\\u201cClosing")
                         || between(lines, "Closing shall occur on", "occur on", "(\\"Closing")
                         || { value: "" }, lines, "Closing shall occur on");

    out.depositDays = days(between(lines, "is to be made within", "made within", "(if left") || { value: "" }, lines, "is to be made within");
    out.addlDays    = days(between(lines, "Additional deposit to be delivered", "within", "(if left") || { value: "" }, lines, "Additional deposit to be delivered");
    out.approvalDays= days(between(lines, "This Contract is contingent upon, within", "within", "(if left") || { value: "" }, lines, "This Contract is contingent upon, within");
    out.applyDays   = days(between(lines, "make application for Financing within", "within", "(if left") || { value: "" }, lines, "make application for Financing within");
    out.titleDays   = days(between(lines, "TITLE EVIDENCE AND INSURANCE: At least", "At least", "(if left") || { value: "" }, lines, "TITLE EVIDENCE AND INSURANCE: At least");
    out.inspectDays = days(between(lines, "RIGHT TO CANCEL: Buyer shall have", "shall have", "(if left") || { value: "" }, lines, "RIGHT TO CANCEL: Buyer shall have");

    // Is there an additional deposit at all? Only a presence test.
    out.addlAmount = (function () {
      for (var i = 0; i < lines.length; i++) {
        if (lines[i].text.indexOf("Additional deposit to be delivered") === -1) continue;
        var blob = lines[i].text + " " + (lines[i + 1] ? lines[i + 1].text : "") +
                   " " + (lines[i + 2] ? lines[i + 2].text : "");
        return /\\d{1,3},\\d{3}(\\.\\d{2})?/.test(blob) ? "present" : "absent";
      }
      return "unknown";
    })();

    // Paragraph 8, read from a glyph mark when the platform writes one.
    out.finance = { state: "unknown" };
    marks.forEach(function (m) {
      if (/^\\(?a\\)?\\s*This is a cash transaction/i.test(m.clause)) out.finance = { state: "read", value: "cash" };
      if (/^\\(?b\\)?\\s*This Contract is contingent upon/i.test(m.clause)) out.finance = { state: "read", value: "financed" };
    });

    out.effective = (function () {
      var iso = sigDates.length ? sigDates.sort()[sigDates.length - 1] : null;
      return iso ? { state: "read", iso: iso } : { state: "missing" };
    })();

    // Anything that can override the printed dates.
    var addenda = marks.filter(function (m) {
      return /^(Other|[A-Z]{1,2}\\.)\\s/.test(m.clause) && m.clause.length < 60;
    }).length;
    if (addenda) out.flags.push(addenda + " box(es) ticked in paragraph 19, riders can override these dates");
    for (var i = 0; i < lines.length; i++) {
      var t = lines[i].text;
      if (t.indexOf("ADDITIONAL TERMS") !== -1) {
        var extra = strip(t.split("ADDITIONAL TERMS:")[1] || "");
        if (extra.length > 2) out.flags.push("Paragraph 20 has text: " + extra.slice(0, 80));
        break;
      }
    }
    if (out.finance.state !== "read") out.flags.push("Paragraph 8 could not be read, confirm cash or financed");
    // Only the rows the app still carries are worth warning about.
    ["approvalDays","inspectDays"].forEach(function (k) {
      if (out[k].state === "unreadable") out.flags.push(k + " came back as " + JSON.stringify(out[k].raw) + ", confirm by hand");
    });
    return out;
  }

  return { read: read, pageLines: pageLines, toIso: toIso };
})();



(function () {
  "use strict";
  var box = document.getElementById("sbImport");
  if (!box) return;
  var fileEl = document.getElementById("sbFile");
  var outEl = document.getElementById("sbReview");
  var statusEl = document.getElementById("sbStatus");
  var applyEl = document.getElementById("sbApply");
  var CDN = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
  var pending = null;

  function say(msg, bad) {
    statusEl.className = bad ? "muted sbbad" : "muted";
    statusEl.textContent = msg;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function loadPdfJs(cb) {
    if (window.pdfjsLib) return cb(null);
    var s = document.createElement("script");
    s.src = CDN + "pdf.min.js";
    s.onload = function () {
      if (!window.pdfjsLib) return cb("The PDF reader loaded but did not start.");
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = CDN + "pdf.worker.min.js";
      cb(null);
    };
    s.onerror = function () { cb("Could not load the PDF reader. Check the connection and try again."); };
    document.head.appendChild(s);
  }

  var LABEL = {
    inspectDays: "Inspection Period, days",
    approvalDays: "Loan approval, days"
  };
  var DEFAULTS = { inspectDays: 15, approvalDays: 30 };
  var RANGE = { inspectDays: [0, 15], approvalDays: [0, 31] };

  function cell(state, text) {
    var cls = state === "read" ? "sbok" : (state === "blank" ? "sbdef" : "sbask");
    return '<span class="' + cls + '">' + esc(text) + "</span>";
  }

  function render(r) {
    var cash = r.finance.state === "read" && r.finance.value === "cash";
    var rows = [];
    rows.push(["Property address", cell(r.address.state, r.address.text || "not found")]);
    rows.push(["Effective Date", cell(r.effective.state,
      r.effective.state === "read" ? r.effective.iso + " (latest signature)" : "type it in")]);
    rows.push(["Closing Date", cell(r.closing.state,
      r.closing.state === "read" ? r.closing.iso : "type it in")]);
    rows.push(["Paragraph 8", r.finance.state === "read"
      ? cell("read", r.finance.value === "cash" ? "Cash 8(a)" : "Financing 8(b)")
      : cell("ask", "not readable, confirm below")]);

    ["inspectDays", "approvalDays"].forEach(function (k) {
      var f = r[k], txt, st = f.state;
      if (cash && k === "approvalDays") { txt = "not applicable, cash"; st = "blank"; }
      else if (st === "read") {
        txt = f.n + " days";
        var rg = RANGE[k];
        if (rg && (f.n < rg[0] || f.n > rg[1])) { txt = f.n + " days, outside the selector range"; st = "ask"; }
      }
      else if (st === "blank") txt = "blank, contract default " + DEFAULTS[k];
      else txt = "could not read" + (f.raw ? ": " + f.raw : "");
      rows.push([LABEL[k], cell(st, txt)]);
    });

    var html = '<table class="sbtab">' + rows.map(function (r2) {
      return "<tr><th>" + esc(r2[0]) + "</th><td>" + r2[1] + "</td></tr>";
    }).join("") + "</table>";

    if (r.flags.length) {
      html += '<div class="sbwarn"><b>Read the contract on these</b><ul>' +
        r.flags.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></div>";
    }
    if (r.finance.state !== "read") {
      html += '<div class="sbask2"><b>Is this deal cash or financed?</b><br>' +
        '<label class="segb"><input type="radio" name="sbfin" value="financed" checked> Financing 8(b)</label> ' +
        '<label class="segb"><input type="radio" name="sbfin" value="cash"> Cash 8(a)</label></div>';
    }
    outEl.innerHTML = html;
    applyEl.style.display = "";
  }

  function pick(f, key, cash) {
    if (f.state === "read") {
      var rg = RANGE[key];
      if (rg && (f.n < rg[0] || f.n > rg[1])) return null;
      return f.n;
    }
    if (f.state !== "blank") return null;
    return DEFAULTS[key];
  }

  function fire(el) {
    if (!el) return;
    el.dispatchEvent(new Event("change", { bubbles: true }));
  }
  function inp(label) { return document.querySelector('#txnform input[data-label="' + label + '"]'); }
  function sel(label) { return document.querySelector('#txnform select[data-period="' + label + '"]'); }

  function apply() {
    var r = pending;
    if (!r) return;
    var form = document.getElementById("txnform");
    if (!form) { say("Add the property first, then import into it.", true); return; }
    var M = window.SBTXN;
    var chosen = document.querySelector('input[name="sbfin"]:checked');
    var cash = r.finance.state === "read"
      ? r.finance.value === "cash"
      : (chosen && chosen.value === "cash");

    var fin = document.getElementById(cash ? "finCash" : "finFin");
    if (fin) { fin.checked = true; fire(fin); }

    [["Inspection Period Ends", "inspectDays"],
     ["Loan Approval Due Date", "approvalDays"]].forEach(function (pair) {
      if (cash && pair[1] === "approvalDays") return;
      var n = pick(r[pair[1]], pair[1], cash);
      var s = sel(pair[0]);
      if (s && n !== null) { s.value = String(n); fire(s); }
    });

    if (r.effective.state === "read") { var e = inp("Effective Date"); if (e) { e.value = r.effective.iso; fire(e); } }
    if (r.closing.state === "read") { var c = inp("Closing Date"); if (c) { c.value = r.closing.iso; fire(c); } }

    say("Filled in. Check every row against the contract, then press Save dates.");
    applyEl.style.display = "none";
    outEl.innerHTML = "";
    fileEl.value = "";
    pending = null;
  }

  fileEl.addEventListener("change", function () {
    var f = fileEl.files && fileEl.files[0];
    if (!f) return;
    outEl.innerHTML = ""; applyEl.style.display = "none"; pending = null;
    say("Reading " + f.name + " on this device...");
    loadPdfJs(function (err) {
      if (err) return say(err, true);
      var fr = new FileReader();
      fr.onload = function () {
        window.pdfjsLib.getDocument({ data: new Uint8Array(fr.result) }).promise.then(function (doc) {
          var pages = [], chain = Promise.resolve();
          for (var i = 1; i <= doc.numPages; i++) {
            (function (n) {
              chain = chain.then(function () {
                return doc.getPage(n).then(function (pg) {
                  return pg.getTextContent().then(function (tc) { pages[n - 1] = { items: tc.items }; });
                });
              });
            })(i);
          }
          return chain.then(function () {
            var r = SBX.read(pages);
            var got = ["effective", "closing"].filter(function (k) { return r[k].state === "read"; }).length;
            if (!got && r.address.state !== "read") {
              return say("Nothing readable in that file. If it was scanned rather than signed digitally, type the dates by hand.", true);
            }
            pending = r;
            say("Read on this device. Nothing was uploaded. Check every row.");
            render(r);
          });
        }).catch(function (e) { say("Could not open that PDF: " + e.message, true); });
      };
      fr.readAsArrayBuffer(f);
    });
  });

  applyEl.addEventListener("click", apply);
})();


<\/script>`;
  return htmlResponse(page2("Transactions", style + flashHtml + `
    <p class="muted">Enter the dates off each contract. They publish to every subscribed calendar, yours and Barb's, with alerts 12pm the day before and 8am the day of. Nothing here is legal advice, the contract is still the contract.</p>
    ${calCard}
    ${importCard}
    ${picker}
    ${card}
    ${script}`));
}
__name(txnPage, "txnPage");
export {
  worker_default as default
};

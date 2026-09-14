/* self-sufficient: load the shared hospitals data on any page that embeds this map */
(function(){ if (!window.SB_HOSPITALS && !document.querySelector('script[src*="sb-hospitals"]')){
  var s = document.createElement('script'); s.src = '/schools/sb-hospitals.js'; document.head.appendChild(s);
}})();
/* self-sufficient: load the shared grades data on any page that embeds this map */
(function(){ if (!window.SB_GRADES && !document.querySelector('script[src*="sb-grades-2026"]')){
  var s = document.createElement('script'); s.src = '/schools/sb-grades-2026.js'; document.head.appendChild(s);
}})();
/* Sean & Barb - zoned schools map + address autocomplete (self-hosted Leaflet) */
(function(){
  var COLORS = { elementary:'#1E9E45', middle:'#1A73E8', high:'#F08C00' };
  var LABELS = { elementary:'Elementary', middle:'Middle', high:'High' };
  var ABBR   = { elementary:'ES', middle:'MS', high:'HS' };
  var GREEN  = '#18DA3D';
  var GOLD   = '#C4952A';
  var VIOLET = '#7A4FB5';
  var IS_MAC = /Mac|iPhone|iPad|iPod/.test((navigator.platform||'') + ' ' + (navigator.userAgent||''));
  (function(){ if(window.__sbTagStyle) return; window.__sbTagStyle=1; var st=document.createElement('style'); st.textContent='.leaflet-tooltip.sb-addr-tag{background:#0D1B2E;color:#F5EEDF;border:none;border-radius:6px;box-shadow:0 1px 5px rgba(0,0,0,.3);font-family:Inter,system-ui,sans-serif;font-size:11px;font-weight:600;padding:3px 9px;white-space:nowrap;}.leaflet-tooltip.sb-addr-tag.leaflet-tooltip-top:before{border-top-color:#0D1B2E;}'; (document.head||document.documentElement).appendChild(st); })();

  function ensureLeaflet(cb){
    if (window.L){ cb(); return; }
    window.__sbLfCbs = window.__sbLfCbs || [];
    window.__sbLfCbs.push(cb);
    if (window.__sbLfLoading) return;
    window.__sbLfLoading = true;
    var css = document.createElement('link');
    css.rel = 'stylesheet'; css.href = '/vendor/leaflet/leaflet.css';
    document.head.appendChild(css);
    var js = document.createElement('script');
    js.src = '/vendor/leaflet/leaflet.js';
    js.onload = function(){ var cbs = window.__sbLfCbs || []; window.__sbLfCbs = []; cbs.forEach(function(f){ try{ f(); }catch(e){} }); };
    js.onerror = function(){ window.__sbLfLoading = false; };
    document.head.appendChild(js);
  }

  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g, function(c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]; }); }

  function teardrop(fill, stroke, inner){
    return '<svg width="30" height="30" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">'
      + '<path d="M14 1C8 1 4 4.8 4 9.8 4 16.2 14 27 14 27S24 16.2 24 9.8C24 4.8 20 1 14 1z" fill="'+fill+'" stroke="'+stroke+'" stroke-width="1.6"/>'
      + inner + '</svg>';
  }
  function homeIcon(){
    var glyph = '<path d="M9.4 12.4v-1.7L14 7l4.6 3.7v1.7" fill="none" stroke="#0B5E1A" stroke-width="1.4" stroke-linejoin="round"/>'
              + '<rect x="12.2" y="11.8" width="3.6" height="3.6" fill="#0B5E1A"/>';
    return L.divIcon({ html: teardrop(GREEN,'#0B5E1A',glyph), className:'sb-pin', iconSize:[30,30], iconAnchor:[15,28], popupAnchor:[0,-26], tooltipAnchor:[0,-24] });
  }
  function schoolIcon(color, abbr){
    var txt = '<text x="14" y="12.6" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="8.4" font-weight="700" fill="#fff">'+abbr+'</text>';
    return L.divIcon({ html: teardrop(color,'#fff',txt), className:'sb-pin', iconSize:[28,28], iconAnchor:[14,26], popupAnchor:[0,-24] });
  }
  function privateIcon(){
    var txt = '<text x="14" y="12.6" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="8" font-weight="700" fill="#fff">PV</text>';
    return L.divIcon({ html: teardrop(GOLD,'#fff',txt), className:'sb-pin', iconSize:[28,28], iconAnchor:[14,26], popupAnchor:[0,-24] });
  }
  function privatePopup(p){
    var GOLDD = '#9A6F12';
    var h = '<div style="font-family:Inter,system-ui,sans-serif;min-width:170px;max-width:240px;">';
    h += '<div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:'+GOLD+';margin-bottom:3px;">Private School</div>';
    var nm = esc(p.name);
    if (p.website){ var w = /^https?:/i.test(p.website) ? p.website : ('https://'+p.website); nm = '<a href="'+esc(w)+'" target="_blank" rel="noopener" style="color:#0D1B2E;text-decoration:underline;">'+esc(p.name)+'</a>'; }
    h += '<div style="font-family:\'Cormorant Garamond\',Georgia,serif;font-style:italic;font-size:18px;color:#0D1B2E;line-height:1.15;margin-bottom:4px;">'+nm+'</div>'; if (window.SB_GRADE_LINE){ h += window.SB_GRADE_LINE(s, 'popup'); }
    if (p.grades){ h += '<div style="font-size:11px;color:'+GOLDD+';font-weight:600;margin-bottom:3px;">Grades '+esc(p.grades)+'</div>'; }
    if (p.address){ h += '<div style="font-size:12px;color:#5C5546;line-height:1.4;">'+esc(p.address)+'</div>'; }
    if (p.phone){ h += '<div style="font-size:12px;margin-top:3px;"><a href="tel:'+esc(String(p.phone).replace(/[^0-9+]/g,''))+'" style="color:'+GOLDD+';text-decoration:none;">'+esc(p.phone)+'</a></div>'; }
    if (typeof p.dist === 'number' && isFinite(p.dist)){ h += '<div style="margin-top:6px;"><span style="display:inline-block;background:#F5EFE2;color:#7A5E12;border:1px solid #E3D2A6;border-radius:999px;padding:2px 9px;font-size:11px;font-weight:700;"><span style="color:#B8881F;text-transform:uppercase;letter-spacing:.07em;font-size:9px;">Distance to School</span> '+p.dist.toFixed(1)+' mi</span></div>'; }
    h += '</div>';
    return h;
  }

  function prepIcon(){
    var txt = '<text x="14" y="12.6" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="8" font-weight="700" fill="#fff">PR</text>';
    return L.divIcon({ html: teardrop('#0D1B2E','#C4952A',txt), className:'sb-pin', iconSize:[28,28], iconAnchor:[14,26], popupAnchor:[0,-24] });
  }
  function prepPopup(p){
    var h = '<div style="font-family:Inter,system-ui,sans-serif;min-width:170px;max-width:240px;">';
    h += '<div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:#0D1B2E;margin-bottom:3px;">Preparatory School</div>';
    var nm = esc(p.name);
    if (p.website){ var w = /^https?:/i.test(p.website) ? p.website : ('https://'+p.website); nm = '<a href="'+esc(w)+'" target="_blank" rel="noopener" style="color:#0D1B2E;text-decoration:underline;">'+esc(p.name)+'</a>'; }
    h += '<div style="font-family:\'Cormorant Garamond\',Georgia,serif;font-style:italic;font-size:18px;color:#0D1B2E;line-height:1.15;margin-bottom:4px;">'+nm+'</div>'; if (window.SB_GRADE_LINE){ h += window.SB_GRADE_LINE(p, 'popup'); }
    if (p.grades){ h += '<div style="font-size:11px;color:#9A6F12;font-weight:600;margin-bottom:3px;">Grades '+esc(p.grades)+'</div>'; }
    if (p.address){ h += '<div style="font-size:12px;color:#5C5546;line-height:1.4;">'+esc(p.address)+'</div>'; }
    if (p.phone){ h += '<div style="font-size:12px;margin-top:3px;"><a href="tel:'+esc(String(p.phone).replace(/[^0-9+]/g,''))+'" style="color:#0D1B2E;text-decoration:none;">'+esc(p.phone)+'</a></div>'; }
    if (typeof p.dist === 'number' && isFinite(p.dist)){ h += '<div style="margin-top:6px;"><span style="display:inline-block;background:#EAEEF4;color:#1B3151;border:1px solid #C4D0DF;border-radius:999px;padding:2px 9px;font-size:11px;font-weight:700;"><span style="color:#3C5A86;text-transform:uppercase;letter-spacing:.07em;font-size:9px;">Distance to School</span> '+p.dist.toFixed(1)+' mi</span></div>'; }
    h += '</div>';
    return h;
  }

  function charterIcon(){
    var txt = '<text x="14" y="12.6" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="8" font-weight="700" fill="#fff">CH</text>';
    return L.divIcon({ html: teardrop(VIOLET,'#fff',txt), className:'sb-pin', iconSize:[28,28], iconAnchor:[14,26], popupAnchor:[0,-24] });
  }
  function charterPopup(p){
    var V='#5E3A92';
    var h = '<div style="font-family:Inter,system-ui,sans-serif;min-width:170px;max-width:240px;">';
    h += '<div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:'+VIOLET+';margin-bottom:3px;">Charter School</div>';
    var nm = esc(p.name);
    if (p.website){ var w = /^https?:/i.test(p.website) ? p.website : ('https://'+p.website); nm = '<a href="'+esc(w)+'" target="_blank" rel="noopener" style="color:#0D1B2E;text-decoration:underline;">'+esc(p.name)+'</a>'; }
    h += '<div style="font-family:\'Cormorant Garamond\',Georgia,serif;font-style:italic;font-size:18px;color:#0D1B2E;line-height:1.15;margin-bottom:4px;">'+nm+'</div>'; if (window.SB_GRADE_LINE){ h += window.SB_GRADE_LINE(p, 'popup'); }
    if (p.grades){ h += '<div style="font-size:11px;color:'+V+';font-weight:600;margin-bottom:3px;">Grades '+esc(p.grades)+'</div>'; }
    if (p.address){ h += '<div style="font-size:12px;color:#5C5546;line-height:1.4;">'+esc(p.address)+'</div>'; }
    if (p.phone){ h += '<div style="font-size:12px;margin-top:3px;"><a href="tel:'+esc(String(p.phone).replace(/[^0-9+]/g,''))+'" style="color:'+V+';text-decoration:none;">'+esc(p.phone)+'</a></div>'; }
    if (typeof p.dist === 'number' && isFinite(p.dist)){ h += '<div style="margin-top:6px;"><span style="display:inline-block;background:#F0EBF6;color:'+V+';border:1px solid #D6C7E8;border-radius:999px;padding:2px 9px;font-size:11px;font-weight:700;"><span style="color:'+VIOLET+';text-transform:uppercase;letter-spacing:.07em;font-size:9px;">Distance to School</span> '+p.dist.toFixed(1)+' mi</span></div>'; }
    h += '</div>';
    return h;
  }

  function hospIcon(type){
    var er = type === 'er';
    var bg = er ? '#FFFFFF' : '#B3282D';
    var fg = er ? '#B3282D' : '#FFFFFF';
    var html = '<div style="width:26px;height:26px;border-radius:50%;background:'+bg+';border:2.5px solid #B3282D;box-shadow:0 2px 6px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;">'
      + '<svg width="14" height="14" viewBox="0 0 24 24" fill="'+fg+'"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/></svg></div>';
    return L.divIcon({ className:'', html: html, iconSize:[26,26], iconAnchor:[13,13], popupAnchor:[0,-14] });
  }
  function hospPopup(h, dmi, origin){
    var mins = Math.max(4, Math.round(dmi * 2.2));
    var dirs = 'https://www.google.com/maps/dir/?api=1&origin=' + origin.lat + ',' + origin.lng + '&destination=' + encodeURIComponent(h.address);
    var kind = h.type === 'er' ? 'Freestanding ER' : 'Hospital';
    var html = '<div style="font-family:Inter,system-ui,sans-serif;min-width:180px;max-width:240px;">';
    html += '<div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:#B3282D;margin-bottom:3px;">' + esc(h.system) + ' &middot; ' + kind + '</div>';
    html += '<div style="font-family:\'Cormorant Garamond\',Georgia,serif;font-style:italic;font-size:17px;color:#0D1B2E;line-height:1.15;margin-bottom:4px;">' + esc(h.name) + '</div>';
    html += '<div style="font-size:12px;color:#5C5546;line-height:1.4;">' + esc(h.address) + '</div>';
    if (h.phone){ html += '<div style="font-size:12px;margin-top:3px;"><a href="tel:' + h.phone.replace(/[^0-9+]/g,'') + '" style="color:#8a6d1f;font-weight:600;text-decoration:none;">' + esc(h.phone) + '</a></div>'; }
    html += '<div style="margin-top:6px;"><span style="display:inline-block;background:rgba(179,40,45,.10);color:#B3282D;border:1px solid rgba(179,40,45,.4);border-radius:999px;padding:3px 10px;font-size:11px;font-weight:600;">est. ' + mins + ' min drive &middot; ' + dmi.toFixed(1) + ' mi</span></div>';
    html += '<div style="margin-top:5px;"><a href="' + dirs + '" target="_blank" rel="noopener" style="font-size:11px;color:#0D1B2E;font-weight:600;text-decoration:underline;">Directions &rarr;</a></div>';
    html += '</div>';
    return html;
  }
  function buildHospLayer(map, data){
    if (!map._sbHosp){ map._sbHosp = L.layerGroup(); }
    map._sbHosp.clearLayers();
    if (!window.SB_HOSPITALS) return false;
    window.SB_HOSPITALS.forEach(function(h){
      if (typeof h.lat !== 'number' || typeof h.lng !== 'number') return;
      var dmi = miles(data.lat, data.lng, h.lat, h.lng);
      L.marker(L.latLng(h.lat, h.lng), { icon: hospIcon(h.type) }).bindPopup(hospPopup(h, dmi, data)).addTo(map._sbHosp);
    });
    return true;
  }
  function addHospControl(map, container, data){
    map._sbHospData = data;
    if (map._sbHospCtl) return;
    var Ctl = L.Control.extend({ options:{ position:'topright' }, onAdd:function(){
      var btn = L.DomUtil.create('div');
      btn.style.cssText = 'background:#fff;border:1.5px solid #B3282D;border-radius:8px;padding:6px 10px;font-family:Inter,system-ui,sans-serif;font-size:10.5px;font-weight:700;letter-spacing:.03em;color:#B3282D;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.18);user-select:none;';
      btn.innerHTML = '+ Hospitals &amp; ERs';
      function sync(on){
        btn.style.background = on ? '#B3282D' : '#fff';
        btn.style.color = on ? '#fff' : '#B3282D';
        btn.innerHTML = on ? '&#10003; Hospitals &amp; ERs' : '+ Hospitals &amp; ERs';
      }
      L.DomEvent.on(btn, 'click', function(e){
        L.DomEvent.stopPropagation(e); L.DomEvent.preventDefault(e);
        var on = map.hasLayer(map._sbHosp);
        if (on){ map.removeLayer(map._sbHosp); container._sbHospOn = false; sync(false); }
        else {
          if (!map._sbHosp || !map._sbHosp.getLayers().length){ buildHospLayer(map, map._sbHospData); }
          map.addLayer(map._sbHosp); container._sbHospOn = true; sync(true);
        }
      });
      L.DomEvent.disableClickPropagation(btn);
      sync(container._sbHospOn === true);
      return btn;
    }});
    map._sbHospCtl = new Ctl();
    map.addControl(map._sbHospCtl);
  }
  function miles(lat1,lng1,lat2,lng2){
    var R=3958.8, toR=Math.PI/180;
    var dLat=(lat2-lat1)*toR, dLng=(lng2-lng1)*toR;
    var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(lat1*toR)*Math.cos(lat2*toR)*Math.sin(dLng/2)*Math.sin(dLng/2);
    return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
  }

  function popupHtml(s, level, dist){
    var color = COLORS[level], label = LABELS[level];
    var h = '<div style="font-family:Inter,system-ui,sans-serif;min-width:170px;max-width:230px;">';
    h += '<div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:'+color+';margin-bottom:3px;">'+label+' School</div>';
    var nm = esc(s.name);
    if (s.website){ var w = /^https?:/i.test(s.website) ? s.website : ('https://'+s.website); nm = '<a href="'+esc(w)+'" target="_blank" rel="noopener" style="color:#0D1B2E;text-decoration:underline;">'+esc(s.name)+'</a>'; }
    h += '<div style="font-family:\'Cormorant Garamond\',Georgia,serif;font-style:italic;font-size:18px;color:#0D1B2E;line-height:1.15;margin-bottom:4px;">'+nm+'</div>'; if (window.SB_GRADE_LINE){ h += window.SB_GRADE_LINE(s, 'popup'); }
    if (s.grades){ h += '<div style="font-size:11px;color:'+color+';font-weight:600;margin-bottom:3px;">Grades '+esc(s.grades)+'</div>'; }
    if (s.address){ h += '<div style="font-size:12px;color:#5C5546;line-height:1.4;">'+esc(s.address)+'</div>'; }
    if (s.phone){ h += '<div style="font-size:12px;margin-top:3px;"><a href="tel:'+esc(s.phone.replace(/[^0-9+]/g,''))+'" style="color:'+color+';text-decoration:none;">'+esc(s.phone)+'</a></div>'; }
    if (typeof dist === 'number' && isFinite(dist)){ h += '<div style="margin-top:6px;"><span style="display:inline-block;background:#F5EFE2;color:#7A5E12;border:1px solid #E3D2A6;border-radius:999px;padding:2px 9px;font-size:11px;font-weight:700;"><span style="color:#B8881F;text-transform:uppercase;letter-spacing:.07em;font-size:9px;">Distance to School</span> '+dist.toFixed(1)+' mi</span></div>'; }
    h += '</div>';
    return h;
  }

  function legend(map, levels, hasPriv, hasPrep, hasCharter){
    var ctl = L.control({ position:'bottomright' });
    ctl.onAdd = function(){
      var d = L.DomUtil.create('div');
      d.style.cssText = 'background:rgba(255,255,255,.94);padding:8px 10px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.18);font-family:Inter,system-ui,sans-serif;font-size:11px;color:#3A3527;line-height:1.7;';
      var html = '<div style="display:flex;align-items:center;gap:6px;"><span style="width:11px;height:11px;border-radius:2px;background:'+GREEN+';border:1.4px solid #0B5E1A;display:inline-block;"></span>Address</div>';
      levels.forEach(function(k){
        html += '<div style="display:flex;align-items:center;gap:6px;"><span style="width:13px;height:13px;border-radius:50%;background:'+COLORS[k]+';color:#fff;font-size:7.5px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;">'+ABBR[k]+'</span>'+LABELS[k]+'</div>';
      });
      if (hasPrep){
        html += '<div style="display:flex;align-items:center;gap:6px;"><span style="width:13px;height:13px;border-radius:50%;background:#0D1B2E;color:#fff;font-size:7px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;">PR</span>Prep</div>';
      }
      if (hasCharter){
        html += '<div style="display:flex;align-items:center;gap:6px;"><span style="width:13px;height:13px;border-radius:50%;background:'+VIOLET+';color:#fff;font-size:7px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;">CH</span>Charter</div>';
      }
      if (hasPriv){
        html += '<div style="display:flex;align-items:center;gap:6px;"><span style="width:13px;height:13px;border-radius:50%;background:'+GOLD+';color:#fff;font-size:7px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;">PV</span>Private</div>';
      }
      d.innerHTML = html;
      return d;
    };
    ctl.addTo(map);
    return ctl;
  }

  function addTrackpadZoom(map, container){
    var hint = document.createElement('div');
    hint.textContent = (IS_MAC ? 'Pinch, or \u2318 + scroll, to zoom' : 'Pinch, or Ctrl + scroll, to zoom');
    hint.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:600;background:rgba(13,27,46,.82);color:#fff;font-family:Inter,system-ui,sans-serif;font-size:13px;padding:9px 16px;border-radius:20px;pointer-events:none;opacity:0;transition:opacity .18s;white-space:nowrap;';
    container.appendChild(hint);
    var ht;
    function flash(){ hint.style.opacity='1'; clearTimeout(ht); ht=setTimeout(function(){ hint.style.opacity='0'; }, 1100); }
    var pending = 0, raf = null, ll = null;
    function apply(){
      raf = null;
      if (!pending) return;
      var dz = pending; pending = 0;
      if (dz > 2) dz = 2; else if (dz < -2) dz = -2;   // sanity guard only
      var z = Math.max(map.getMinZoom(), Math.min(map.getMaxZoom(), map.getZoom() + dz));
      if (ll) map.setZoomAround(ll, z, { animate:false }); else map.setZoom(z, { animate:false });
    }
    container.addEventListener('wheel', function(e){
      if (e.ctrlKey || e.metaKey){           // pinch-zoom and Ctrl/Cmd+scroll both land here
        e.preventDefault();
        try { ll = map.containerPointToLatLng(map.mouseEventToContainerPoint(e)); } catch(_){}
        var d = e.deltaY;
        if (e.deltaMode === 1) d *= 16;        // lines -> px
        else if (e.deltaMode === 2) d *= 100;  // pages -> px
        pending += -d * 0.06;
        if (!raf) raf = requestAnimationFrame(apply);
      } else {
        flash();
      }
    }, { passive:false });
  }

  function draw(container, data, opts){
    opts = opts || {};
    if (!data || typeof data.lat !== 'number' || typeof data.lng !== 'number') return;
    var reuse = !!(opts.keepView && container._sbMap);
    var map;
    if (reuse){
      map = container._sbMap;
    } else {
      if (container._sbMap){ try{ container._sbMap.remove(); }catch(e){} container._sbMap = null; }
      map = L.map(container, { scrollWheelZoom:false, zoomControl:true, zoomSnap:0, zoomDelta:0.6, wheelPxPerZoomLevel:120 });
      container._sbMap = map;
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        maxZoom:19, maxNativeZoom:16, zIndex:1, attribution:'Tiles &copy; Esri &copy; OpenStreetMap contributors'
      }).addTo(map);
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
        maxZoom:19, maxNativeZoom:16, zIndex:2
      }).addTo(map);
      var satLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom:19, zIndex:3, attribution:'Imagery &copy; Esri' });
      var satLabels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', { maxZoom:19, zIndex:4 });
      var satCtl = L.control({ position:'topright' });
      satCtl.onAdd = function(){
        var wrap = L.DomUtil.create('div'); wrap.style.cssText = 'margin:8px;';
        var btn = L.DomUtil.create('button', '', wrap); btn.type = 'button';
        var on = !!container._sbSat;
        function apply(){
          if (on){ satLayer.addTo(map); satLabels.addTo(map); btn.textContent='Street'; btn.setAttribute('aria-pressed','true'); btn.style.background='#0D1B2E'; btn.style.color='#fff'; }
          else { map.removeLayer(satLayer); map.removeLayer(satLabels); btn.textContent='Satellite'; btn.setAttribute('aria-pressed','false'); btn.style.background='#fff'; btn.style.color='#0D1B2E'; }
        }
        btn.style.cssText = 'font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:600;letter-spacing:.04em;padding:8px 13px;border-radius:8px;border:1px solid rgba(13,27,46,.18);box-shadow:0 2px 8px rgba(0,0,0,.18);cursor:pointer;';
        L.DomEvent.disableClickPropagation(wrap);
        L.DomEvent.on(btn, 'click', function(){ on = !on; container._sbSat = on; apply(); });
        apply();
        return wrap;
      };
      satCtl.addTo(map);
      addTrackpadZoom(map, container);
    }
    if (map._sbLegend){ try{ map.removeControl(map._sbLegend); }catch(e){} map._sbLegend = null; }
    if (!map._sbDyn){ map._sbDyn = L.layerGroup().addTo(map); } else { map._sbDyn.clearLayers(); }
    var dyn = map._sbDyn;

    var bounds = L.latLngBounds([]);
    var addrText = opts.address || data.address || 'Entered address';
    var home = L.marker([data.lat, data.lng], { icon: homeIcon(), zIndexOffset:1000 }).addTo(dyn);
    home.bindTooltip(esc(addrText), { permanent:true, direction:'top', offset:[0,-6], className:'sb-addr-tag' });
    bounds.extend([data.lat, data.lng]);

    var schools = data.schools || {};
    var drawn = [], placed = [];
    function dejitter(ll){
      for (var i=0;i<placed.length;i++){
        if (Math.abs(placed[i].lat-ll.lat)<0.0006 && Math.abs(placed[i].lng-ll.lng)<0.0006){
          ll = L.latLng(ll.lat+0.0009, ll.lng+0.0012);
        }
      }
      placed.push(ll); return ll;
    }
    ['elementary','middle','high'].forEach(function(k){
      var s = schools[k]; if (!s) return;
      var color = COLORS[k], center = null;
      if (s.zone){
        try {
          var gj = L.geoJSON({ type:'Feature', geometry:s.zone }, { style:{ color:color, weight:2.5, opacity:.95, fillColor:color, fillOpacity:.10 } }).addTo(dyn);
          var zb = gj.getBounds();
          if (zb.isValid()){ bounds.extend(zb); center = zb.getCenter(); }
        } catch(e){}
      }
      var pt = (typeof s.lat==='number' && typeof s.lng==='number') ? L.latLng(s.lat, s.lng) : center;
      if (pt){
        pt = dejitter(pt);
        var dmi = (typeof s.lat==='number' && typeof s.lng==='number') ? miles(data.lat, data.lng, s.lat, s.lng) : null;
        L.marker(pt, { icon: schoolIcon(color, ABBR[k]) }).addTo(dyn).bindPopup(popupHtml(s, k, dmi));
        bounds.extend(pt);
      }
      drawn.push(k);
    });

    var privs = (data.privates || opts.privates || []);
    var hasPriv = false, hasPrep = false;
    privs.forEach(function(p){
      if (typeof p.lat !== 'number' || typeof p.lng !== 'number') return;
      var pll = dejitter(L.latLng(p.lat, p.lng));
      if (p.prep){ hasPrep = true; L.marker(pll, { icon: prepIcon(), zIndexOffset:500 }).addTo(dyn).bindPopup(prepPopup(p)); }
      else { hasPriv = true; L.marker(pll, { icon: privateIcon() }).addTo(dyn).bindPopup(privatePopup(p)); }
      bounds.extend(pll);
    });

    var chars = (data.charters || opts.charters || []);
    var hasCharter = false;
    chars.forEach(function(c){
      if (typeof c.lat !== 'number' || typeof c.lng !== 'number') return;
      var cll = dejitter(L.latLng(c.lat, c.lng));
      hasCharter = true;
      L.marker(cll, { icon: charterIcon() }).addTo(dyn).bindPopup(charterPopup(c));
      bounds.extend(cll);
    });

    if (drawn.length || privs.length || chars.length) map._sbLegend = legend(map, drawn, hasPriv, hasPrep, hasCharter);
    if (container._sbHospOn === undefined) container._sbHospOn = true;
    buildHospLayer(map, data);
    addHospControl(map, container, data);
    if (container._sbHospOn === true){ map.addLayer(map._sbHosp); }
    if (!reuse){
      var hlat = data.lat, hlng = data.lng;
      if (bounds.isValid()){
        var dLat = Math.max(Math.abs(bounds.getNorth()-hlat), Math.abs(hlat-bounds.getSouth()));
        var dLng = Math.max(Math.abs(bounds.getEast()-hlng), Math.abs(hlng-bounds.getWest()));
        if (dLat < 0.002 && dLng < 0.002){ map.setView([hlat, hlng], 14); }
        else {
          var symB = L.latLngBounds([hlat-dLat, hlng-dLng], [hlat+dLat, hlng+dLng]);
          var z = map.getBoundsZoom(symB, false, L.point(40,40));
          map.setView([hlat, hlng], Math.min(z, 15), { animate:false });
        }
      } else {
        map.setView([hlat, hlng], 13);
      }
    }
    setTimeout(function(){ map.invalidateSize(); }, 80);
  }

  window.SBZonedMap = {
    render: function(container, data, opts){
      if (!container) return;
      ensureLeaflet(function(){ draw(container, data, opts); });
    }
  };
  window.SBGeo = { miles: miles };

  /* ---------- Address autocomplete ---------- */
  window.SBAddr = {
    attach: function(input, onPick){
      if (!input || input._sbAC) return; input._sbAC = true;
      var box = document.createElement('div');
      box.style.cssText = 'position:fixed;z-index:99999;background:#fff;border:1px solid #E2D9C7;border-radius:10px;box-shadow:0 10px 28px rgba(0,0,0,.18);overflow:hidden;display:none;font-family:Inter,system-ui,sans-serif;';
      document.body.appendChild(box);
      var items=[], active=-1, timer=null, lastQ='';
      function place(){ var r=input.getBoundingClientRect(); box.style.left=r.left+'px'; box.style.top=(r.bottom+4)+'px'; box.style.width=Math.max(r.width,220)+'px'; }
      function hide(){ box.style.display='none'; active=-1; }
      function setActive(i){ active=i; for (var c=0;c<box.children.length;c++){ box.children[c].style.background = (c===i)?'#F5EFE2':'#fff'; } }
      function choose(i){ var s=items[i]; if(!s) return; input.value=s.label; input._sbPick={label:s.label,lat:s.lat,lng:s.lng}; hide(); if(onPick) onPick(input._sbPick); }
      function render(sugs){
        items=sugs; box.innerHTML=''; active=-1;
        if(!sugs.length){ hide(); return; }
        sugs.forEach(function(s,i){
          var d=document.createElement('div');
          d.textContent=s.label;
          d.style.cssText='padding:10px 13px;font-size:13.5px;color:#3A3527;cursor:pointer;border-bottom:1px solid #F0EBE0;line-height:1.35;';
          d.addEventListener('mousedown',function(ev){ ev.preventDefault(); choose(i); });
          d.addEventListener('mouseenter',function(){ setActive(i); });
          box.appendChild(d);
        });
        if (box.lastChild) box.lastChild.style.borderBottom='none';
        place(); box.style.display='block';
      }
      function fetchSugs(q){
        fetch('/api/geo-suggest?q='+encodeURIComponent(q)).then(function(r){return r.json();}).then(function(j){
          if(input.value.trim()!==q) return;
          render((j&&j.suggestions)||[]);
        }).catch(function(){ hide(); });
      }
      input.setAttribute('autocomplete','off');
      input.setAttribute('autocorrect','off');
      input.setAttribute('autocapitalize','off');
      input.setAttribute('spellcheck','false');
      input.addEventListener('input',function(){
        input._sbPick=null;
        var q=input.value.trim();
        if(q.length<3){ hide(); lastQ=''; return; }
        if(q===lastQ) return; lastQ=q;
        clearTimeout(timer); timer=setTimeout(function(){ fetchSugs(q); },220);
      });
      input.addEventListener('keydown',function(e){
        if(box.style.display==='none') return;
        if(e.key==='ArrowDown'){ e.preventDefault(); setActive(active+1>=items.length?0:active+1); }
        else if(e.key==='ArrowUp'){ e.preventDefault(); setActive(active<=0?items.length-1:active-1); }
        else if(e.key==='Enter' && active>=0){ e.preventDefault(); e.stopImmediatePropagation(); choose(active); }
        else if(e.key==='Escape'){ hide(); }
      }, true);
      input.addEventListener('blur',function(){ setTimeout(hide,150); });
      window.addEventListener('scroll',function(){ if(box.style.display!=='none') place(); }, true);
      window.addEventListener('resize',function(){ if(box.style.display!=='none') place(); });
    }
  };
})();

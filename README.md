# Anubisz Vaskapuja — Erőezotéria és Vastarot Intézet

Szatirikus, nem kereskedelmi weboldal: az edzőtermi bro-science és az ezoterikus jóslás
totális összemosása. Statikus HTML, nincs backend, nincs adatgyűjtés, semmi sem eladó.

## Szerkezet

    index.html      – az oldal váza (szekciók)
    css/style.css   – design (obsidian / arany / csont paletta)
    js/data.js      – MINDEN szöveg és tartalom: lapok, horoszkóp, rontások, bolt, orákulum-szókészlet…
    js/app.js       – logika (vetés, orákulum, szkenner, aura-főkönyv, naptár…)
    kepek/          – a 22 lap eredeti PNG-je (00–21, nagy felbontás)
    kepek/web/      – ugyanezek webre optimalizálva (JPG, ~130 KB/db) – az oldal EZEKET használja
    kepek/og.jpg    – közösségi előnézeti kép (Facebook/Messenger megosztáshoz)
    404.html        – a Kapuőr 404-es oldala (GitHub Pages automatikusan használja)

## Megosztható dolgok

Minden lapnak saját linkje van: `#lap-15` = XV. Az Ego. A vetés, a rontás, a kvíz-eredmény és az oklevél
megosztógombja a Web Share API-t használja (mobilon), asztali gépen vágólapra másol.

## Tartalom szerkesztése

Minden szöveg a `js/data.js`-ben van. Új rontás, termék, aura-tétel, GYIK-kérdés vagy
orákulum-szó hozzáadásához elég ott bővíteni a megfelelő tömböt, kód nem kell hozzá.

Új lapkép: tedd a `kepek/` mappába `NN.png` néven, majd generáld újra a webes változatot:

    python -c "from PIL import Image;import glob,os;[Image.open(f).convert('RGB').resize((640,960)).save('kepek/web/'+os.path.basename(f)[:-4]+'.jpg','JPEG',quality=82,optimize=True) for f in glob.glob('kepek/*.png')]"

## Kipróbálás helyben

    python -m http.server 8765

majd http://localhost:8765

## GitHub Pages

Settings → Pages → Source: „Deploy from a branch”, branch: `main`, mappa: `/ (root)`.

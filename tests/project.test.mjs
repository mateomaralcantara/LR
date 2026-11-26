import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
test('archivos esenciales presentes',()=>{for(const file of ['package.json','app/page.tsx','app/api/chat/route.ts','app/globals.css','README.md'])assert.ok(fs.existsSync(path.join(root,file)),file)});
test('marca ChatLR presente en la interfaz',()=>{const s=fs.readFileSync(path.join(root,'app/page.tsx'),'utf8');assert.ok(s.includes("'ChatLR'"));assert.ok(s.includes('LIDERAZGO'))});
test('sin claves API en código cliente',()=>{const s=fs.readFileSync(path.join(root,'app/page.tsx'),'utf8');assert.ok(!s.includes('process.env.OPENAI_API_KEY'))});
test('43 proyectos y 20 perfiles bibliotecarios',()=>{const p=fs.readFileSync(path.join(root,'lib/lr-projects.ts'),'utf8');const a=fs.readFileSync(path.join(root,'lib/library-agents.ts'),'utf8');assert.equal((p.match(/^\[/gm)||[]).length,43);assert.equal((a.match(/^\['lr-/gm)||[]).length,20)});
test('migración y harness conectados al frontend',()=>{const s=fs.readFileSync(path.join(root,'app/page.tsx'),'utf8');assert.ok(s.includes('mergeLRProjects(load'));assert.ok(s.includes('<LibraryHarness/>'));assert.ok(fs.existsSync(path.join(root,'app/api/library/route.ts')))});

test('catálogo agrupado conectado',()=>{const s=fs.readFileSync(path.join(root,'app/page.tsx'),'utf8');assert.ok(s.includes('<ProjectCatalog'));const c=fs.readFileSync(path.join(root,'components/ProjectCatalog.tsx'),'utf8');assert.ok(c.includes('lrProjectSources'));assert.ok(c.includes('Por áreas'));assert.ok(c.includes('Por etapas'))});

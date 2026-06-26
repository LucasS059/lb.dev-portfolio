# Setup do Portfólio — Lucas Barboza

## 1. Clonar e instalar localmente

```bash
# Na pasta onde quer salvar o projeto
npm create vite@latest portfolio -- --template react-ts
cd portfolio

# Instalar dependências
npm install
npm install tailwindcss@3 postcss autoprefixer @emailjs/browser lucide-react
npx tailwindcss init -p

# Rodar local
npm run dev
# Acessa http://localhost:5173
```

## 2. Estrutura de pastas

```
src/
  components/    → Navbar, Hero, About, Projects, Stack, Contact, Footer, ProjectModal
  data/          → projects.ts (seus projetos), stack.ts (suas tecnologias)
  hooks/         → useTheme.ts
  types/         → index.ts
```

## 3. Como adicionar imagens dos projetos

Crie a pasta `public/images/` e coloque:
- `wassaquiz.png`
- `fitmind.png`
- `metro.png`
- `fsales.png`

Use prints das telas mais impressionantes (as que selecionamos no LinkedIn).

## 4. Configurar EmailJS (formulário de contato)

1. Acesse https://emailjs.com e crie conta grátis (200 emails/mês)
2. Vá em **Email Services** → Add New Service → Gmail (ou outro)
3. Vá em **Email Templates** → Create New Template

Template sugerido:
```
De: {{from_name}} ({{from_email}})
Assunto: {{subject}}

{{message}}
```

4. Pegue as credenciais:
   - **Service ID**: na aba Email Services
   - **Template ID**: na aba Email Templates
   - **Public Key**: em Account → General

5. Cole em `src/components/Contact.tsx`:
```ts
const EMAILJS_SERVICE_ID = 'service_xxxxxx'
const EMAILJS_TEMPLATE_ID = 'template_xxxxxx'
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxx'
```

6. Coloque seu WhatsApp real:
```ts
href="https://wa.me/55119XXXXXXXX"
```

## 5. Deploy na Vercel (gratuito, sem cold start)

```bash
# Instalar CLI da Vercel
npm install -g vercel

# Fazer login
vercel login

# Build e deploy
npm run build
vercel --prod
```

Ou conecte pelo site:
1. Acesse https://vercel.com
2. Import Git Repository → selecione seu repo
3. Framework: Vite
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy → domínio custom em Settings → Domains

## 6. Adicionar projetos novos

Edite `src/data/projects.ts` e adicione um novo objeto seguindo o padrão existente.
Depois: `git push` → Vercel faz deploy automático.

## 7. Alterar seu nome/links

- `src/components/Hero.tsx` → links do GitHub e LinkedIn
- `src/components/Contact.tsx` → email e WhatsApp
- `src/components/Footer.tsx` → nome no rodapé
- `index.html` → meta tags de SEO

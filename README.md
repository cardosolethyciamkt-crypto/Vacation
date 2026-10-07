# 🌴 Site da Viagem de Fim de Ano

Site com contagem regressiva, datas, hotel, roteiro, checklist da mala e contatos.

## Como mudar as informações

Tudo fica no arquivo **`viagem.js`**. No GitHub:

1. Clique no arquivo `viagem.js`
2. Clique no ícone de lápis ✏️ ("Edit this file")
3. Troque os textos entre aspas pelas informações reais
4. Clique em **"Commit changes"** (botão verde) para salvar

Regras simples:
- Não apague as aspas `" "`, as vírgulas `,` nem as chaves `{ }`.
- Datas no formato `"2026-12-18"` (ano-mês-dia) e horários no formato `"17:20"`.
- Para incluir mais um passeio, copie uma linha `{ hora: ..., nome: ..., local: ... },` e cole embaixo.
- Textos no formato `{ pt: "...", en: "..." }` têm versão em português e em inglês. Escreva nas duas línguas.
  Textos só entre aspas (nome de hotel, número de voo) aparecem iguais nas duas.

## Como colocar fotos das cidades

1. No GitHub, abra a pasta **`fotos`** e clique em **Add file → Upload files**
2. Envie a foto (ex.: `nova-york.jpg`) e clique em **Commit changes**
3. No `viagem.js`, na cidade certa, escreva o nome do arquivo em `foto:`
   → `foto: "fotos/nova-york.jpg",`

Enquanto não houver foto, o site mostra uma cena animada da cidade (neve, pôr do sol, fogos).
Dica: fotos deitadas (horizontais) ficam melhores.

## Português / English

No topo do site há o botão **🇧🇷 PT / 🇺🇸 EN**. O site lembra a língua escolhida em cada celular.

## Como colocar o site no ar (de graça, com GitHub Pages)

1. No repositório, vá em **Settings** → **Pages**
2. Em "Branch", escolha a branch do site e a pasta `/ (root)` → **Save**
3. Em 1–2 minutos aparece o link (algo como `https://SEU-USUARIO.github.io/Vacation/`)
4. Mande o link no grupo da família 🎉

## Sobre o checklist

Cada pessoa marca os itens no próprio celular. As marcações ficam salvas naquele aparelho.

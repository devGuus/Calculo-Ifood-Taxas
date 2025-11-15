# 🍪 Calculadora iFood — Web Version

Uma aplicação simples, bonita e responsiva com tema de **cookies**, desenvolvida com **HTML, CSS e JavaScript**, que ajuda o usuário a calcular o preço ideal para produtos vendidos no iFood considerando taxas e mensalidades.

---

## 📌 Objetivo

Fornecer uma forma rápida e intuitiva para vendedores simularem o preço de venda necessário no iFood para manter uma margem de lucro correta, considerando:

* Taxa da plataforma
* Taxa de pagamento
* Mensalidade iFood
* Quantidade média de vendas por mês

---

## 🧮 Cálculos Utilizados

```
taxa_venda = 0.23
taxa_pagamento = 0.035
taxa_total = taxa_venda + taxa_pagamento

preco_sem_mensalidade = valor_produto / (1 - taxa_total)
custo_mensalidade_por_venda = mensalidade / vendas_mensais
preco_com_mensalidade = (valor_produto + custo_mensalidade_por_venda) / (1 - taxa_total)
```

---

## 🖥️ Tecnologias Utilizadas

| Tecnologia | Finalidade                                    |
| ---------- | --------------------------------------------- |
| HTML5      | Estrutura da aplicação                        |
| CSS3       | Estilização com tema cookies + responsividade |
| JavaScript | Cálculo e lógica do sistema                   |

---

## 🎨 Destaques Visuais

* Tema visual inspirado em cookies 🍪
* Fundo decorativo personalizado
* Animações suaves e interativas
* Layout responsivo para celular, tablet e desktop
* Design limpo, amigável e voltado ao público de confeitaria

---

## 📂 Estrutura do Projeto

```
/
├── index.html
├── style.css
└── script.js
```

---

## 🚀 Como usar

1. Baixe ou clone o repositório
2. Abra o arquivo `index.html` em qualquer navegador
3. Insira os valores solicitados
4. Clique em **Calcular 💡**
5. Veja o resultado imediatamente na própria tela

---

## 📱 Responsividade

Este projeto se adapta automaticamente para:
✔ Smartphones
✔ Tablets
✔ Monitores widescreen

---

## 🧩 Possíveis Melhorias Futuras

* Modo escuro 🌙
* Exportar resultado em PDF
* Salvamento local das simulações
* Gráficos comparativos interativos
* Transformação em PWA (instalável no celular)

---

## 🤝 Contribuição

Pull requests são bem-vindos! Caso queira contribuir com melhorias, correções ou novas ideias, fique à vontade.

---

## 📜 Licença

Este projeto é de uso livre. Sinta-se à vontade para modificá-lo.

---

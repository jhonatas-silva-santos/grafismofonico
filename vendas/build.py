#!/usr/bin/env python3
"""Gera src/index.html a partir de index.template.html, colocando o CSS dentro do HTML.

Sempre que mudar o index.template.html ou o src/css/style.css, rode:  python3 build.py
(o src/css/style.css continua a ser usado pelas outras páginas: upsell, obrigado, termos...)
"""
import pathlib
raiz = pathlib.Path(__file__).parent
css = (raiz / "src/css/style.css").read_text(encoding="utf-8")
css = css.replace("url(../fonts/", "url(fonts/")          # caminhos relativos à raiz do site
css = css.strip()
modelo = (raiz / "index.template.html").read_text(encoding="utf-8")
assert "<!--CSS-->" in modelo
html = modelo.replace("<!--CSS-->", "<style>" + css + "</style>")
(raiz / "src/index.html").write_text(html, encoding="utf-8")
print("src/index.html gerado:", len(html.encode()), "bytes")

<?php
# Slovník
$dict = array(
	# Menu
	"menu_buttonId_home" => "uvod",
	"menu_buttonId_about" => "kdo-jsem",
	"menu_buttonId_portfolio" => "portfolio",
	"menu_buttonId_references" => "reference",
	"menu_buttonId_contact" => "kontakt",
	"menu_button_about" => "O mně",
	"menu_button_portfolio" => "Portfolio",
	"menu_button_references" => "Reference",
	"menu_button_contact" => "Kontakt",

	# Meta tags
	"meta_description" => "Jan Elznic - Osobní webová stránka",

	# Cite
	"cite_text" => "Nejvíce chyb v životě dělají ti nejúspěšnější z nás,<br /> kdo nedělá žádné chyby, nemá příležitost k poznání.",
	"cite_author" => "(moje motto)",

	# About
	"about_title" => "O mně",
	"about_text" => array(
		"Jmenuji se Jan Elznic, jsem fullstack vývojář a softwarový architekt, v současnosti je mi",
		"let a zabývám se vývojem software pro webové, mobilní a ostatní platformy. Mám téměř 20 let profesních zkušeností s vývojem aplikací a moderních backend systémů se zaměřením na bezpečnost, škálovatelnost a výkon. První web jsem napsal v roce 1998 ještě ve škole. Deset let poté (2008) jsem oficiálně zahájil podnikání. Několik let jsem pracoval jako freelancer, vyzkoušel jsem si i práci na plný úvazek pro české i zahraniční startupy, střední firmy a velké mezinárodní korporace. Více o mé profesní kariéře se můžete dozvědět z mého",
		"Aktuálně aktivně hledám nové příležitosti na HPP nebo dlouhodobý projekt (B2B). Ve své poslední práci jsem se podílel na více krátkodobých projektech v rámci zakázkového vývoje, rád bych se nyní soustředil nejlépe na jeden hlavní produkt, ten dlouhodobě rozvíjel a spolupráci s jasným směrem a horizontem. Ukázky mé práce najdete na",
		"V neposlední řadě mě baví umělá inteligence (AI) a LLM chatboti, bezpečnost, přístupnost. Zdrojový kód testuji tak, abych dosáhl co nejvyšší možné kvality, použitelnosti a výkonu za co nejkratší možný čas. Používám mimo jiné unit testy, end2end testy, performance testy, penetrační testy a integrační testy, a to i automatické (pipelines), spolupracuji úzce s týmem, jsem zvyklý dělat denní code reviews a sdílet výsledky své práce, radit se s kolegy, implementovat změny, refaktorovat. Mezi mé oblíbené moderní nástroje pro testování patří třeba Playwright a Jest.",
    "Nejčastěji se setkávám JavaScriptem/TypeScriptem (Angular, React), v Node.js mám oblíbený framework NestJS, moderní AdonisJS, v Pythonu se setkávám nejčastěji s FastAPI, ale historicky mám zkušenost s některými projekty psanými v Djangu. V neposlední řadě mám za sebou větší množství aplikací napsaných v Javě, v korporátním prostředí za použití Spring Boot a Hibernate ORM, nebojím se sáhnout ani po C#/.net, když je třeba, přestože nepatří mezi mé n+ejsilnější dovednosti.",
		"Ve volném čase se věnuji svým dětem, setkávání s přáteli, kultuře, sportu a pohybu venku (kolo, lyže, jízda na koni, v létě jezdím vodu), ale také vývoji rozšíření pro prohlížeče (např. Add To Reading List), chatbotů pro komunitní portály."
	),
	"about_cv_text" => "životopisu",
	"about_github_link" => "GitHubu",
	"about_cv_button" => "Životopis v PDF",

	# Portfolio
	"portf_title" => "Portfolio",
	"portf_subtitle" => "Mám profesní zkušenosti více než %d let v IT, %d let v mezinárodním prostředí, %d let v technologickém managementu&hellip;",
	"portf_web_frontend_title" => "Webový frontend",
	"portf_web_frontend" => array(
		"HTML(5), CSS(3), Less/Sass",
		"Responsivní webdesign pro desktop i mobil",
		"JavaScript (ECMAScript6+), TypeScript",
		"Angular (Ionic), React (Native), Vue, Next.js",
		"Mikrofrontendy, PWA aplikace, Animace",
		"Zkušenosti s vývojem pro Android a iOS",
		"Tailwind, Material UI, Bootstrap, Figma"
	),
	"portf_backend_title" => "Backend aplikace",
	"portf_backend" => array(
		"Node.js + TypeScript &#8212; Express, NestJS",
		"Python &#8212; Django, FastAPI, SQLAlchemy",
		"PHP &#8212; nette, Laravel, Symfony, WordPress",
    "Java &#8212; Spring Boot, Hibernate, Liferay",
		"Go &#8212; Temporal.io, C/C++, základy C#/.net",
		"REST, GraphQL, WebSockets",
    "RabbitMQ, Kafka, ElasticSearch, Redis",
	),
  "portf_system_design_title" => "System Design & Databáze",
  "portf_system_design" => array(
    "Návrh systémové architektury a databází",
    "Monolit, microservices, event-driven, serverless, integrace, architektura, UML",
    "API &#8212; REST/OpenAPI, GraphQL, WebSockets",
    "MySQL, PostgreSQL, indexy, migrace",
    "MongoDB, Redis, Elasticsearch, Neo4j",
    "Škálovatelnost, výkon, bezpečnost, náklady",
  ),
	"portf_administration_title" => "DevOps + Cloud",
	"portf_administration" => array(
		"Microsoft Azure, AWS, GCP, Docker, K8S",
		"Linux &#8212; Debian/Ubuntu, RHEL/CentOS",
		"Správa sítí, TCP/IP, DNS, VPN, loadbalancing",
		"Webové servery - apache2, nginx",
		"Automatizace, bash, helm, CI/CD pipelines",
    "GNU/Make, Sentry, Prometheus, KeyCloack",
		"Observability &#8212; Prometheus, Grafana, ELK",
	),
	"portf_management_title" => "Management",
	"portf_management" => array(
 		"Budování firemní strategie v oblasti IT",
		"Zkušenosti s řízením větších týmů",
		"Plánování rozpočtů a cílů (KPI)",
		"Leadership, rozvoj a mentoring",
		"Nábor nováčků a vedení pohovorů",
		"Projektové plánování, příprava školení",
		"Komunikace s partnery, legislativa",
	),
	"portf_ai_title" => "AI, LLM a chatboti",
	"portf_ai" => array(
		"Chatboti, voiceboti, omnichannel řešení",
		"LLM &#8212; OpenAI, Anthropic, Ollama",
		"RAG pipeline: embeddings, vektorové databáze, kontext &#8212; pgvector, Qdrant",
		"LangChain, LlamaIndex, prompt engineering",
		"OCR - easyocr, Azure Vision",
    "Copilot, ChatGPT, Claude, Cursor, WindSurf"
	),

	# References
	"refs_title" => "Reference",
	"refs_clients_title" => "Vybrané subjekty, se kterými jsem doposud spoluracoval",
	"refs_projects_title" => "Vybrané projekty z poslední doby",
	"refs_col_client" => "Klient",
	"refs_col_scope" => "Rozsah",
	"refs_col_technologies" => "Technologie",
	"refs_col_date" => "Termín realizace",
	"refs_col_length" => "Časová náročnost",
	"refs_col_hours" => "hodin",
	"refs_other_title" => "Další vybrané reference",
	"refs_other_text" => "Webové projekty, flash bannery a další ukázky z let 2005 až",
	"refs_other_opensource_text" => "Pokud Vás zajímají moje příspěvky do OpenSource světa, navštivte můj",

	# Contact
	"contact_title" => "Kontakt",
	"contact_phone" => "Telefon",
	"contact_email" => "E-mail",
	"contact_jabber" => "Jabber/XMPP",
	"contact_hangouts" => "Hangouts",
	"contact_skype" => "Skype ID",
	"contact_icq" => "ICQ",
	"contact_download_vcard" => "Stáhnout vizitku ve formátu vCard",
	"contact_qrcode_wiki" => "//cs.wikipedia.org/wiki/QR_k%C3%B3d",
	"contact_qrcode_title" => "QR kód (chytrá značka)",
	"contact_form_title" => "&hellip;nebo mi pošlete zprávu přes online formulář&hellip;",
	"contact_form_name" => "Jméno",
	"contact_form_email" => "E-mail",
	"contact_form_message" => "Zpráva",
	"contact_form_submit" => "Odeslat",
	"contact_form_reset" => "Vymazat",
	"form_errEmpty" => "Formulář nelze odeslat, dokud nebudou vyplněna všechna jeho pole.",
	"form_err400" => "E-mailová adresa není zadaná ve správném tvaru.",
	"form_err403" => "Nastala chyba. Přístup byl zamítnut.",
	"form_err500" => "Nastala vnitřní chyba serveru. Formulář bohužel v tuto chvíli nelze odeslat. Zkuste to později.",
	"form_ok" => "Formulář byl odeslán.",

	# Preloader
	"loading" => "Nahrávám",

	"copyright" => "Všechna práva vyhrazena."
);
?>

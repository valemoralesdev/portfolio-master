export const languages = {
	en: {
		code: "en",
		name: "English",
	},
	es: {
		code: "es",
		name: "Español",
	},
};

export const defaultLang = "en";

export const showDefaultLang = false;

export const ui = {
			en: {
		"layout.title": "Valentina's Portfolio — MSc in Medical Physics & Bioengineer",
		"layout.description":
			"MSc in Medical Physics and Bioengineer with experience in Clinical Engineering and Molecular Biology. I build healthcare applications and workflows focused on quality and efficiency.",
		"navbar.experience": "Experience",
		"navbar.projects": "Projects",
		"navbar.about-me": "About me",
		"hero.badge": "Thesis student at Instituto Balseiro",
		"hero.greet": "Hey, I'm",
		"hero.rol": "MSc in Medical Physics & Bioengineer",
		"hero.description":
			"MSc in Medical Physics and Bioengineer with experience in Clinical Engineering and Molecular Biology. I build healthcare applications and workflows focused on quality and efficiency.",
		"hero.contact": "Contact me",
		"hero.resume": "Download CV",
		"index.experience": "Experience",
		"index.projects": "Projects",
		"index.about": "About me",
		exp: [
			{
			date: "May 2024 – July 2024",
			title: "Senior Clinical Engineering Technician",
			company: "Swiss Medical Group",
			description:
				"Preventive and corrective maintenance of biomedical equipment. Hospital management (SAP). QA support and technical documentation.",
			latest: true,
			},
			{
			date: "January 2024 – April 2024",
			title: "Bioengineer",
			company: "Martinazzo Tecnología Médica",
			description:
				"Preventive/corrective maintenance of medical and non-medical equipment. Maintenance Plan drafting, supplies management, cross-department coordination, and administrative tasks.",
			},
			{
			date: "April 2023 – July 2023",
			title: "Clinical Engineering Intern",
			company: "Hospital Público Descentralizado Dr. Guillermo Rawson",
			description:
				"Preventive and corrective maintenance of biomedical equipment. Implementation of Quality Management processes. Project: feasibility study for an Audiometer Calibration Laboratory in San Juan.",
			},
			{
			date: "July 2022 – April 2024",
			title: "Teaching Assistant (2nd category)",
			company: "School of Engineering, UNSJ",
			description:
				"Laboratory practice sessions. Maintenance of lab equipment and facilities.",
			},
		],
		"exp.latest": "Latest",

		projects: [
			{
			title: "qPCR-Viewer",
			description:
				"RT-qPCR analysis tool: CSV/XLSX import, automatic ΔCt/ΔΔCt, efficiency estimation, quality control, and reporting. Designed for reproducible workflows and reduced lab errors.",
			github: "",
			image: "/images/projects/qpcr.webp",
			tags: ["PYTHON", "PANDAS", "PLOTLY", "DASH"],
			},
			{
			title: "OMNIQA – Medical Imaging QA",
			description:
				"Automated QA pipeline for Mammography and CT: MTF, NNPS, d′, ring-based uniformity, and series summaries. DICOM/Orthanc integration, ingestion API with MongoDB storage, and interactive dashboards.",
			github: "",
			image: "/images/projects/omniqa.webp",
			tags: ["PYTHON", "FLASK", "DICOM", "ORTHANC", "MONGODB", "DOCKER", "DASH"],
			},
		],

		"about.bio": `<p>
			I'm <strong>Valentina</strong>, a Bioengineer and <strong>MSc in Medical Physics</strong>. I chose this path to make a tangible impact: the clinical setting connects me with the <strong>real needs</strong> of patients and healthcare teams and lets me iterate with <strong>direct feedback</strong>.
		</p>
		<p>
			I blend <strong>engineering, science, and programming</strong> to turn everyday problems into <strong>sustainable solutions</strong>: automations, apps, and reproducible <em>pipelines</em> that streamline workflows and traceability. I'm excited by <strong>medical imaging</strong>, DICOM, QA, and data analysis that leads to <strong>useful decisions</strong>.
		</p>
		<p>
			I'm <strong>self-taught</strong>, <strong>responsible</strong>, and <strong>organized</strong>. I enjoy <strong>challenges</strong> and continuous learning. I come from <strong>volleyball</strong>, so I believe in <strong>teamwork</strong> as the way to reach goals.
		</p>`,

		"footer.about": "About me",
		"footer.contact": "Contact me",
		},

	es: {
		"layout.title": "Portfolio de Valentina - Mgtr en Física Médica y Bioingeniera",
		"layout.description":
			"Mgt en Física Médica y Bioingeniera con experiencia Ingeniería Clínica y Biología Molecular. Desarrollo de aplicaciones y flujos de trabajo para salud con foco en calidad y eficiencia.",
		"navbar.experience": "Experiencia",
		"navbar.projects": "Proyectos",
		"navbar.about-me": "Sobre mí",
		"hero.badge": "Tesista en Instituto Balseiro",
		"hero.greet": "Hey, soy",
		"hero.rol": "Mgtr en Física Médica y Bioingeniera",
		"hero.description":
			"Mgtr en Física Médica y Bioingeniera con experiencia Ingeniería Clínica y Biología Molecular. Desarrollo de aplicaciones y flujos de trabajo para salud con foco en calidad y eficiencia.",
		"hero.contact": "Contáctame",
		"hero.resume": "Descargar CV",
		"index.experience": "Experiencia",
		"index.projects": "Proyectos",
		"index.about": "Sobre mí",
		exp: [
		{
			date: "Mayo 2024 – Julio 2024",
			title: "Técnica Sr. en Ingeniería Clínica",
			company: "Swiss Medical Group",
			description:
			"Mantenimiento preventivo y correctivo de equipamiento biomédico. Gestión hospitalaria (SAP). Apoyo a QA y documentación técnica.",
			latest: true,
		},
		{
			date: "Enero 2024 – Abril 2024",
			title: "Bioingeniera",
			company: "Martinazzo Tecnología Médica",
			description:
			"Mantenimiento preventivo/correctivo de equipamiento médico y no médico. Elaboración de Plan de Mantenimiento, gestión de insumos, coordinación interdepartamental y tareas administrativas.",
		},
		{
			date: "Abril 2023 – Julio 2023",
			title: "Pasante de Ingeniería Clínica",
			company: "Hospital Público Descentralizado Dr. Guillermo Rawson",
			description:
			"Mantenimientos preventivos y correctivos de equipamiento biomédico. Implementación de procesos de Gestión de Calidad. Proyecto: factibilidad para un Laboratorio de Calibración de Audiómetros en San Juan.",
		},
		{
			date: "Julio 2022 – Abril 2024",
			title: "Auxiliar Docente (2da categoría)",
			company: "Facultad de Ingeniería, UNSJ",
			description:
			"Prácticas de laboratorio. Mantenimiento de equipamiento e instalaciones del laboratorio.",
		},
		],
		"exp.latest": "Último",

		projects: [
		{
			title: "qPCR-Viewer",
			description:
			"Herramienta para análisis de RT-qPCR: lectura de CSV/XLSX, cálculo automático de ΔCt/ΔΔCt, estimación de eficiencias, control de calidad y reportes. Pensado para flujos reproducibles y reducción de errores en laboratorio.",
			github: "",
			image: "/images/projects/qpcr.webp",
			tags: ["PYTHON", "PANDAS", "PLOTLY", "DASH"],
		},
		{
			title: "OMNIQA – QA de Imágenes Médicas",
			description:
			"Pipeline de control de calidad automatizado para mamografía y CT: MTF, NNPS, d′, uniformidad por anillos y resúmenes por serie. Integración DICOM/Orthanc, API para ingestión y almacenamiento en MongoDB, dashboards interactivos.",
			github: "",
			image: "/images/projects/omniqa.webp",
			tags: ["PYTHON", "FLASK", "DICOM", "ORTHANC", "MONGODB", "DOCKER", "DASH"],
		},
		],
			"about.bio": `<p>
			Soy <strong>Valentina</strong>, Bioingeniera y <strong>Magíster en Física Médica</strong>. Elegí este camino para ayudar de forma concreta: el entorno clínico me conecta con las <strong>necesidades reales</strong> de pacientes y equipos de salud, y me permite iterar con <strong>feedback directo</strong>.
			</p>
			<p>
			Cruzo <strong>ingeniería, ciencia y programación</strong> para transformar problemas diarios en <strong>soluciones sostenibles</strong>: automatizaciones, apps y <em>pipelines</em> reproducibles que ordenan el flujo de trabajo y la trazabilidad. Me entusiasman las <strong>imágenes médicas</strong>, DICOM, QA y el análisis de datos que termina en <strong>decisiones útiles</strong>.
			</p>
			<p>
			Soy <strong>autodidacta</strong>, <strong>responsable</strong> y <strong>organizada</strong>. Disfruto los <strong>desafíos</strong> y aprender todo el tiempo. Vengo del <strong>voleibol</strong>, así que creo en el <strong>trabajo en equipo</strong> como la forma de alcanzar objetivos.
			</p>
			</p>`,
		"footer.about": "Sobre mí",
		"footer.contact": "Contáctame",
	},
} as const;

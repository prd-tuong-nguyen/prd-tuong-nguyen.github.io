const project_data = [
    {
        "name": "CMS Dynamic Content Search",
        "description": "The Neural Search Service leverages advanced natural language processing techniques to deliver highly accurate and relevant search results.",
        "icon": "./assets/img/project/7399647.png",
        "detail": "https://paradoxai.atlassian.net/wiki/spaces/~801178356/pages/2556133494/Neural+Search",
        "link": "https://tool-rasa-k8s-dev-use1.paradox.sdm.network/olivia-nlp-test",
        "tags": ["Embedding model", "Vector database", "Released"]
    },
    {
        "name": "Paradox Rasa",
        "description": "The Rasa Service is designed to classify user intents and extract relevant entities, making it ideal for job search applications.",
        "icon": "./assets/img/project/images.png",
        "detail": "https://docs.google.com/presentation/d/1eWhYD2R_F719DQ7Zv723O2bO6Xmy5C2gsqI4wd78kmw/edit#slide=id.g1b19cc4e7a2_0_271",
        "link": "https://tool-rasa-k8s-dev-use1.paradox.sdm.network/olivia-nlp-test",
        "tags": ["Intent classifier", "NER", "Released"]
    },
    {
        "name": "Content Parser",
        "description": "The Content Parser Service is designed to read and analyze documents such as PDFs and DOC files, extracting valuable information. It generates question and answer pairs from the content, making it easier to understand and utilize the information within the documents.",
        "icon": "https://pandermatt.ch/multilingual-question-generation/flan-logo.png",
        "detail": "https://drive.google.com/file/d/18_GZYsp9UU1L10i_SfnOwQjz6ITsdI3l/view",
        "link": "",
        "tags": ["LLM", "Pipeline", "Released"]
    },
    {
        "name": "PDF Parser",
        "description": "The PDF Parser Service is designed to extract text from PDFs while preserving the document's original structure and layout.",
        "icon": "https://editor.analyticsvidhya.com/uploads/51130download.png",
        "detail": "https://paradoxai.atlassian.net/wiki/spaces/TECH/pages/2956329153/PDF+Parser+Enhance+extracting+Result+from+PDF+file",
        "link": "",
        "tags": ["Computer vision", "Prototype"]
    },
    {
        "name": "Paradox Translation",
        "description": "Our Selfhosted Translation Model is designed to provide accurate and efficient translations across multiple languages. ",
        "icon": "https://store-images.s-microsoft.com/image/apps.50108.14056881113182363.a95f37ff-7b9d-43ff-8072-2df8de461120.41ab5e02-0179-47ac-b4fb-6bf5ab010ca2?h=464",
        "detail": "https://paradoxai.atlassian.net/wiki/spaces/TECH/pages/2916221049/Self-hosted+Translation+Engine+Google+Translation+Alternative",
        "link": "https://tool-rasa-k8s-dev-use1.paradox.sdm.network/apps/get/f/tool/prd_translator",
        "tags": ["Machine translation", "Prototype"]
    },
    {
        "name": "Language detection",
        "description": "The Language Detection Service accurately identifies the language of a given text, supporting a wide range of languages.",
        "icon": "https://streampipes.apache.org/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.languagedetection/icon.png",
        "detail": "https://paradoxai.atlassian.net/wiki/spaces/TECH/pages/2787311668/Self-hosted+Language+Detection+Yandex+Google+Language+Detection+alternative",
        "link": "https://tool-rasa-k8s-dev-use1.paradox.sdm.network/apps/get/f/tool/prd_translator",
        "tags": ["Machine learning", "Prototype"]
    },
    {
        "name": "Selfhosted LLM",
        "description": "The Selfhosted LLM model is designed to support thousands of LoRa connections simultaneously, ensuring robust and scalable performance.",
        "icon": "https://cdn.prod.website-files.com/6082f2094ccb2d6ff32eb5d8/65325315a9d2e2a0e3efa52e_LLM%20Optimization%20Parameters.png",
        "detail": "https://paradoxai.atlassian.net/wiki/spaces/TECH/pages/2887352435/PARADOX+-+LLM+PROXY",
        "link": "",
        "tags": ["LLM", "Released"]
    },
    {
        "name": "LLM Finetuning service",
        "description": "The LLM Finetuning LoRa Service enables the customization of language models to better suit specific applications and datasets",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4TBmw-Iy4oegtuQ1YxTuHuDVQQQKkbIXYA&s",
        "detail": "https://paradoxai.atlassian.net/wiki/spaces/TECH/pages/2868805662/LLM+LORA+FINETUNING+DOCS",
        "link": "https://github.com/ParadoxAi/rasa_nlp/actions/workflows/finetune-llm.yml/",
        "tags": ["LLM", "Released"]
    },
    {
        "name": "Resume Based Interview supporter",
        "description": "The Resume-Based Interview Supporter Service generates tailored interview questions and scenarios based on a candidate's resume. By analyzing the candidate's skills and experiences, it provides interviewers with relevant and insightful prompts.",
        "icon": "https://resources.biginterview.com/wp-content/uploads/2022/12/BI-Resume-Hub-Cover.webp",
        "detail": "",
        "link": "",
        "tags": ["LLM", "Human loop", "Prototype"]

    },
    {
        "name": "Semantic Job Search",
        "description": "The Resume-Based Semantic Job Search Service allows users to find job opportunities by analyzing and matching their resumes with relevant job listings.",
        "icon": "https://cdn-icons-png.flaticon.com/512/2936/2936630.png",
        "detail": "https://paradoxai.atlassian.net/wiki/spaces/TECH/pages/2906292240/Semantic+Job+Search+Prototype",
        "link": "",
        "tags": ["LLM", "Embedding model", "Prototype"]

    },
    {
        "name": "LLM Evaluator",
        "description": "The LLM Evaluator is designed to assess the quality and accuracy of outputs generated by our Language Model (LLM) service. ",
        "icon": "https://blog.qasource.com/hs-fs/hubfs/Optimal-Methods-and-Metrics-for-LLM-Evaluation-and-Testing.png?width=840&height=528&name=Optimal-Methods-and-Metrics-for-LLM-Evaluation-and-Testing.png",
        "detail": "https://paradoxai.atlassian.net/wiki/spaces/TECH/pages/2917826908/LLM+evaluation+with+multi-metrics+and+monitoring",
        "link": "https://tool-rasa-k8s-dev-use1.paradox.sdm.network/apps/get/f/demo/sentiment_analysis",
        "tags": ["LLM", "Evaluator", "Released"]
    },
    {
        "name": "Sentiment Analysis",
        "description": "The sentiment analysis service is designed to analyze and classify the sentiment of text data, providing valuable insights for improving customer satisfaction and engagement.",
        "icon": "https://analytx4t.com/wp-content/uploads/2019/12/4-1-6.png",
        "detail": "https://paradoxai.atlassian.net/wiki/spaces/TECH/pages/3048800327/Sentiment+Analysis+tool",
        "link": "https://tool-rasa-k8s-dev-use1.paradox.sdm.network/apps/get/f/demo/sentiment_analysis",
        "tags": ["LLM", "Evaluator", "Prototype"]
    },
    {
        "name": "Inquiry Detection",
        "description": "The Inquiry Detection Service classifies whether a message is an inquiry or not, enabling more accurate and relevant responses. ",
        "icon": "https://cdn1.iconfinder.com/data/icons/miscellaneous-150-mix/168/inquiry_inspection_survey_investigation_examination_checkout_analysis-512.png",
        "detail": "#",
        "link": "https://tool-rasa-k8s-dev-use1.paradox.sdm.network/apps/get/f/tool/inquiry_detection",
        "tags": ["LLM", "Evaluator", "Prototype"]
    }
]
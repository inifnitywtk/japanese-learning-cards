// 日文學習數據
const japaneseData = {
    chapter1: [
        {
            number: 1,
            japanese: "わたし",
            meaning: "I",
            examples: []
        },
        {
            number: 2,
            japanese: "あなた",
            meaning: "You",
            examples: ["\"あなた\" is used to address someone with whom one is very familiar, such as husbands, wives, romantic partners, etc."]
        },
        {
            number: 3,
            japanese: "あの人(ひと)",
            meaning: "That person",
            examples: ["That person = あの方(かた)", "\"あの方\" is the polite equivalent of\"あの人\""]
        },
        {
            number: 4,
            japanese: "～さん",
            meaning: "Mr. ~, Miss ~",
            examples: ["\"～さん\" is added to a name for expressing politeness", "➢ミラーさん", "➢佐藤さん"]
        },
        {
            number: 5,
            japanese: "～ちゃん",
            meaning: "",
            examples: ["\"～ちゃん\" is added to a child's name", "➢テレーザちゃん"]
        },
        {
            number: 6,
            japanese: "～人 (じん)",
            meaning: "",
            examples: ["\"～人\" means \"a national of\"", "➢アメリカ人 (American)"]
        },
        {
            number: 7,
            japanese: "先生(せんせい)",
            meaning: "teacher, instructor",
            examples: ["\"先生\" is not used to refer to one's own job"]
        },
        {
            number: 8,
            japanese: "教師 (きょうし)",
            meaning: "teacher, instructor",
            examples: []
        },
        {
            number: 9,
            japanese: "学生 (がくせい)",
            meaning: "student",
            examples: []
        },
        {
            number: 10,
            japanese: "会社員 (かいしゃいん）",
            meaning: "company employee",
            examples: []
        },
        {
            number: 11,
            japanese: "社員 (しゃいん)",
            meaning: "employee of ~ company",
            examples: ["\"社員\" is used with the company's name", "➢ＩＭＣの社員"]
        },
        {
            number: 12,
            japanese: "銀行員(ぎんこういん)",
            meaning: "bank employee",
            examples: []
        },
        {
            number: 13,
            japanese: "医者(いしゃ)",
            meaning: "doctor",
            examples: []
        },
        {
            number: 14,
            japanese: "研究者(けんきゅうしゃ)",
            meaning: "researcher, scholar",
            examples: []
        },
        {
            number: 15,
            japanese: "大学(だいがく)",
            meaning: "university",
            examples: []
        },
        {
            number: 16,
            japanese: "病院(びょういん)",
            meaning: "hospital",
            examples: []
        },
        {
            number: 17,
            japanese: "だれ",
            meaning: "who",
            examples: ["どなた = who", "\"どなた\" is the polite equivalent of\"だれ\""]
        },
        {
            number: 18,
            japanese: "～歳(さい)",
            meaning: "~ years old",
            examples: []
        },
        {
            number: 19,
            japanese: "何歳(なんさい)",
            meaning: "how old",
            examples: ["おいくつ = how old", "\"おいくつ\" is the polite equivalent of\"何歳\""]
        },
        {
            number: 20,
            japanese: "はい",
            meaning: "yes",
            examples: []
        },
        {
            number: 21,
            japanese: "いいえ",
            meaning: "no",
            examples: []
        },
        // 國家名
        {
            section: "國家名",
            number: 1,
            japanese: "日本(にほん)",
            meaning: "Japan",
            examples: []
        },
        {
            number: 2,
            japanese: "韓(かん)国(こく)",
            meaning: "South Korea",
            examples: []
        },
        {
            number: 3,
            japanese: "中(ちゅう)国(ごく)",
            meaning: "China",
            examples: []
        },
        {
            number: 4,
            japanese: "アメリカ",
            meaning: "the USA",
            examples: []
        },
        {
            number: 5,
            japanese: "イギリス",
            meaning: "the UK",
            examples: []
        },
        {
            number: 6,
            japanese: "インド",
            meaning: "India",
            examples: []
        },
        {
            number: 7,
            japanese: "インドネシア",
            meaning: "Indonesia",
            examples: []
        },
        {
            number: 8,
            japanese: "タイ",
            meaning: "Thailand",
            examples: []
        },
        {
            number: 9,
            japanese: "ドイツ",
            meaning: "Germany",
            examples: []
        },
        {
            number: 10,
            japanese: "ブラジル",
            meaning: "Brazil",
            examples: []
        },
        // 架空のことば
        {
            section: "架空のことば(虛構的詞語)",
            number: 1,
            japanese: "ＩＭＣ (アイエムシー)",
            meaning: "",
            examples: []
        },
        {
            number: 2,
            japanese: "パワー電(でん)気(き)",
            meaning: "",
            examples: []
        },
        {
            number: 3,
            japanese: "ブラジルエアー",
            meaning: "",
            examples: []
        },
        {
            number: 4,
            japanese: "ＡＫＣ(エイケイシー)",
            meaning: "",
            examples: []
        },
        {
            number: 5,
            japanese: "神(こう)戸(べ)病(びょう)院(いん)",
            meaning: "",
            examples: []
        },
        {
            number: 6,
            japanese: "さくら大(だい)学(がく)",
            meaning: "",
            examples: []
        },
        {
            number: 7,
            japanese: "富(ふ)士(じ)大(だい)学(がく)",
            meaning: "",
            examples: []
        },
        // 問答句子
        {
            section: "問答句子",
            number: 1,
            japanese: "初(はじ)めまして。",
            meaning: "初次見面(請多關照)",
            examples: ["(used as the first phrase when introducing oneself)"]
        },
        {
            number: 2,
            japanese: "～から来(き)ました。",
            meaning: "I am from ~.",
            examples: []
        },
        {
            number: 3,
            japanese: "（どうぞ）よろしく（お願(ねが)いします）。",
            meaning: "Pleased to meet you. /Please be nice to me.",
            examples: ["(used as the last phrase when introducing oneself)"]
        },
        {
            number: 4,
            japanese: "失(しつ)礼(れい)ですが",
            meaning: "Excuse me, but",
            examples: ["(used when asking someone for personal information)"]
        },
        {
            number: 5,
            japanese: "お名(な)前(まえ)は？",
            meaning: "May I have your name?",
            examples: []
        },
        {
            number: 6,
            japanese: "こちらは～さんです。",
            meaning: "This is Mr./Miss ~.",
            examples: []
        }
    ],
    chapter2: [
        {
            number: 1,
            japanese: "これ",
            meaning: "this (item here)",
            examples: []
        },
        {
            number: 2,
            japanese: "それ",
            meaning: "that (item near the listener)",
            examples: []
        },
        {
            number: 3,
            japanese: "あれ",
            meaning: "that (item over there)",
            examples: []
        },
        {
            number: 4,
            japanese: "この",
            meaning: "this",
            examples: []
        },
        {
            number: 5,
            japanese: "その",
            meaning: "that (near the listener)",
            examples: []
        },
        {
            number: 6,
            japanese: "あの",
            meaning: "that (over there)",
            examples: []
        },
        {
            number: 7,
            japanese: "本(ほん)",
            meaning: "book",
            examples: []
        },
        {
            number: 8,
            japanese: "辞(じ)書(しょ)",
            meaning: "dictionary",
            examples: []
        },
        {
            number: 9,
            japanese: "雑(ざっ)誌(し)",
            meaning: "magazine",
            examples: []
        },
        {
            number: 10,
            japanese: "新(しん)聞(ぶん)",
            meaning: "news",
            examples: []
        },
        {
            number: 11,
            japanese: "ノート",
            meaning: "notebook",
            examples: []
        },
        {
            number: 12,
            japanese: "手(て)帳(ちょう)",
            meaning: "personal organizer",
            examples: []
        },
        {
            number: 13,
            japanese: "名(めい)刺(し)",
            meaning: "business card",
            examples: []
        },
        {
            number: 14,
            japanese: "カード",
            meaning: "(credit) card",
            examples: []
        },
        {
            number: 15,
            japanese: "鉛(えん)筆(ぴつ)",
            meaning: "pencil",
            examples: []
        },
        {
            number: 16,
            japanese: "ボールペン",
            meaning: "ballpoint pen",
            examples: []
        },
        {
            number: 17,
            japanese: "シャープペンシル",
            meaning: "mechanical pencil, propelling pencil",
            examples: []
        },
        {
            number: 18,
            japanese: "かぎ",
            meaning: "key",
            examples: []
        },
        {
            number: 19,
            japanese: "時計(とけい)",
            meaning: "watch, clock",
            examples: []
        },
        {
            number: 20,
            japanese: "傘(かさ)",
            meaning: "umbrella",
            examples: []
        },
        {
            number: 21,
            japanese: "かばん",
            meaning: "bag, briefcase",
            examples: []
        },
        {
            number: 22,
            japanese: "ＣＤ(シーディー)",
            meaning: "compact disc",
            examples: []
        },
        {
            number: 23,
            japanese: "テレビ",
            meaning: "television",
            examples: []
        },
        {
            number: 24,
            japanese: "ラジオ",
            meaning: "radio",
            examples: []
        },
        {
            number: 25,
            japanese: "カメラ",
            meaning: "camera",
            examples: []
        },
        {
            number: 26,
            japanese: "コンピューター",
            meaning: "computer",
            examples: []
        },
        {
            number: 27,
            japanese: "車(くるま)",
            meaning: "car, vehicle",
            examples: []
        },
        {
            number: 28,
            japanese: "机(つくえ)",
            meaning: "desk",
            examples: []
        },
        {
            number: 29,
            japanese: "いす",
            meaning: "chair",
            examples: []
        },
        {
            number: 30,
            japanese: "チョコレート",
            meaning: "chocolate",
            examples: []
        },
        {
            number: 31,
            japanese: "コーヒー",
            meaning: "coffee",
            examples: []
        },
        {
            number: 32,
            japanese: "（お）土産(みやげ)",
            meaning: "souvenir, present",
            examples: []
        },
        {
            number: 33,
            japanese: "英(えい)語(ご)",
            meaning: "the English language",
            examples: []
        },
        {
            number: 34,
            japanese: "日本(にほん)語(ご)",
            meaning: "the Japanese language",
            examples: []
        },
        {
            number: 35,
            japanese: "～語(ご)",
            meaning: "~language",
            examples: []
        },
        {
            number: 36,
            japanese: "何(なん)",
            meaning: "what",
            examples: []
        },
        {
            number: 37,
            japanese: "そう",
            meaning: "so",
            examples: []
        },
        {
            number: 38,
            japanese: "あのう",
            meaning: "er…",
            examples: ["\"あのう\" is used to show hesitation"]
        },
        {
            number: 39,
            japanese: "えっ",
            meaning: "Oh? What!",
            examples: ["\"えっ\" is used when hearing something unexpected"]
        },
        {
            number: 40,
            japanese: "どうぞ。",
            meaning: "Here you are.",
            examples: ["(used when offering someone something)"]
        },
        {
            number: 41,
            japanese: "これからお世(せ)話(わ)になります。",
            meaning: "Thank you in advance for your kindness.",
            examples: ["(今後要請你多多關照我。)"]
        },
        {
            number: 42,
            japanese: "こちらこそ（どうぞ）よろしく（お願(ねが)いします）。",
            meaning: "Pleased to meet you, too.",
            examples: ["\"こちらこそ（どうぞ）よろしく お 願 い し ま す\" is the response to\" （ ど う ぞ  よろしく（お願いします）\""]
        },
        {
            number: 43,
            japanese: "（どうも）ありがとう（ございます）。",
            meaning: "Thank you (very much).",
            examples: []
        },
        {
            number: 44,
            japanese: "そうですか。",
            meaning: "I see.",
            examples: []
        },
        {
            number: 45,
            japanese: "違(ちが)います。",
            meaning: "No, it isn't. You are wrong.",
            examples: []
        },
        {
            number: 46,
            japanese: "あ",
            meaning: "Oh!",
            examples: ["\"あ\" is used when becoming aware of something"]
        }
    ],
    chapter3: [
        // 名詞(Here, there, that place)
        {
            section: "名詞(Here, there, that place)",
            number: 1,
            japanese: "ここ(Koko)",
            meaning: "here, this place",
            examples: []
        },
        {
            number: 2,
            japanese: "こちら(Kochira)",
            meaning: "this way, this place",
            examples: ["\"こちら\" is the polite equivalent of\"ここ\""]
        },
        {
            number: 3,
            japanese: "そこ(Soko)",
            meaning: "there, that place near the listener",
            examples: []
        },
        {
            number: 4,
            japanese: "そちら(Sochira)",
            meaning: "that way, that place near the listener",
            examples: ["\"そちら\" is the polite equivalent of\"そこ\""]
        },
        {
            number: 5,
            japanese: "あそこ(Asoko)",
            meaning: "that place over there",
            examples: []
        },
        {
            number: 6,
            japanese: "あちら(Achira)",
            meaning: "that way, that place over there",
            examples: ["\"あちら\" is the polite equivalent of\"あそこ\""]
        },
        // 疑問詞(Where)
        {
            section: "疑問詞(Where)",
            number: 1,
            japanese: "どこ(Doko)",
            meaning: "where, what place",
            examples: []
        },
        {
            number: 2,
            japanese: "どちら(Dochira)",
            meaning: "which way, where",
            examples: ["\"どちら\" is the polite equivalent of\"どこ\""]
        },
        // 第二段 名詞(Here, there, that place)
        {
            section: "名詞(Here, there, that place)",
            number: 1,
            japanese: "教室(きょうしつ)",
            meaning: "Classroom",
            examples: []
        },
        {
            number: 2,
            japanese: "食堂(しょくどう)",
            meaning: "Dining Hall, Canteen",
            examples: []
        },
        {
            number: 3,
            japanese: "事務所(じむしょ)",
            meaning: "Office",
            examples: []
        },
        {
            number: 4,
            japanese: "会議室(かいぎしつ)",
            meaning: "Conference room, Meeting room",
            examples: []
        },
        {
            number: 5,
            japanese: "受付(うけつけ)",
            meaning: "Reception desk",
            examples: []
        },
        {
            number: 6,
            japanese: "ロビー(Robi)",
            meaning: "Lobby",
            examples: []
        },
        {
            number: 7,
            japanese: "部屋(へや)",
            meaning: "Room",
            examples: []
        },
        {
            number: 8,
            japanese: "トイレ(Toire)",
            meaning: "Toilet, Rest Room",
            examples: ["お手(て)洗(あら)い = Toilet, Rest Room"]
        },
        {
            number: 9,
            japanese: "階段(かいだん)",
            meaning: "Staircase",
            examples: []
        },
        {
            number: 10,
            japanese: "エレベーター(Erebeta)",
            meaning: "Elevator",
            examples: []
        },
        {
            number: 11,
            japanese: "エスカレーター(Esukareta)",
            meaning: "Escalator",
            examples: []
        },
        {
            number: 12,
            japanese: "自動販売機(じどうはんばいき)",
            meaning: "Vending machine",
            examples: []
        },
        {
            number: 13,
            japanese: "電話(でんわ)",
            meaning: "Telephone handset, Telephone call",
            examples: []
        },
        {
            number: 14,
            japanese: "（お）国(くに)",
            meaning: "Country",
            examples: []
        },
        {
            number: 15,
            japanese: "会(かい)社(しゃ)",
            meaning: "company",
            examples: []
        },
        {
            number: 16,
            japanese: "うち",
            meaning: "home, house",
            examples: []
        },
        {
            number: 17,
            japanese: "靴(くつ)",
            meaning: "shoes",
            examples: []
        },
        {
            number: 18,
            japanese: "ネクタイ(Nekutai)",
            meaning: "tie, necktie",
            examples: []
        },
        {
            number: 19,
            japanese: "ワイン",
            meaning: "wine",
            examples: []
        },
        {
            number: 20,
            japanese: "売(う)り場(ば)",
            meaning: "department, counter (in a department store, etc.)",
            examples: []
        },
        {
            number: 21,
            japanese: "地(ち)下(か)",
            meaning: "basement",
            examples: []
        },
        {
            number: 22,
            japanese: "～階(かい）",
            meaning: "~th floor",
            examples: []
        },
        {
            number: 23,
            japanese: "何階(なんがい)",
            meaning: "what floor",
            examples: []
        },
        {
            number: 24,
            japanese: "～円(えん)",
            meaning: "~yen",
            examples: []
        },
        {
            number: 25,
            japanese: "いくら",
            meaning: "how much",
            examples: []
        },
        {
            number: 26,
            japanese: "百(ひゃく)",
            meaning: "hundred",
            examples: []
        },
        {
            number: 27,
            japanese: "千(せん)",
            meaning: "thousand",
            examples: []
        },
        {
            number: 28,
            japanese: "万(まん)",
            meaning: "ten thousand",
            examples: []
        },
        {
            number: 29,
            japanese: "じゃ",
            meaning: "well, then, in that case",
            examples: []
        },
        // 國家
        {
            section: "國家",
            number: 1,
            japanese: "イタリア",
            meaning: "Italy",
            examples: []
        },
        {
            number: 2,
            japanese: "スイス",
            meaning: "Switzerland",
            examples: []
        },
        {
            number: 3,
            japanese: "フランス",
            meaning: "France",
            examples: []
        },
        {
            number: 4,
            japanese: "ジャカルタ",
            meaning: "Jakarata",
            examples: []
        },
        {
            number: 5,
            japanese: "バンコク",
            meaning: "Bangkok",
            examples: []
        },
        {
            number: 6,
            japanese: "ベルリン",
            meaning: "Berlin",
            examples: []
        },
        {
            number: 7,
            japanese: "新(しん)大(おお)阪(さか)",
            meaning: "Shin-Osaka",
            examples: ["\"新大阪\" is the name of a station in Osaka"]
        },
        // 會話
        {
            section: "會話",
            number: 1,
            japanese: "いらっしゃいませ。",
            meaning: "Welcome.May I help you?",
            examples: ["(a greeting to a customer or a guest entering a shop, etc.)"]
        },
        {
            number: 2,
            japanese: "（～を）見(み)せてください。",
            meaning: "Please show me (~).",
            examples: []
        },
        {
            number: 3,
            japanese: "（～を）ください。",
            meaning: "Give me (~), please.",
            examples: []
        },
        {
            number: 4,
            japanese: "すみません。",
            meaning: "Excuse me.",
            examples: []
        },
        {
            number: 5,
            japanese: "どうも。",
            meaning: "Thanks.",
            examples: []
        }
    ]
};

// DOM元素
const flashcardsContainer = document.getElementById('flashcards');
const toggleJapaneseBtn = document.getElementById('toggleJapanese');
const toggleMeaningBtn = document.getElementById('toggleMeaning');
const chapterSelect = document.getElementById('chapterSelect');

// 狀態
let hideJapanese = false;
let hideMeaning = false;
let currentChapter = 'chapter1';

// 初始化
function init() {
    // 綁定事件監聽器
    toggleJapaneseBtn.addEventListener('click', toggleJapanese);
    toggleMeaningBtn.addEventListener('click', toggleMeaning);
    chapterSelect.addEventListener('change', changeChapter);
    
    // 載入初始章節
    renderCards(currentChapter);
}

// 檢測字符是否為日文（包括平假名、片假名和日文漢字）
function isJapaneseChar(char) {
    const code = char.charCodeAt(0);
    return (
        // 平假名
        (code >= 0x3040 && code <= 0x309F) ||
        // 片假名
        (code >= 0x30A0 && code <= 0x30FF) ||
        // 日文符號與標點
        (code >= 0x3000 && code <= 0x303F) ||
        // CJK統一表意文字(日文漢字也在這範圍內)
        (code >= 0x4E00 && code <= 0x9FAF)
    );
}

// 處理文本，識別並標記日文字符
function processText(text) {
    const textElement = document.createElement('span');
    let currentSpan = null;
    let isCurrentJapanese = false;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const isJapanese = isJapaneseChar(char);
        
        // 如果字符類型改變或者是第一個字符，創建新的span
        if (isJapanese !== isCurrentJapanese || i === 0) {
            if (currentSpan) {
                textElement.appendChild(currentSpan);
            }
            
            currentSpan = document.createElement('span');
            if (isJapanese) {
                currentSpan.className = 'jp-char';
            }
            
            isCurrentJapanese = isJapanese;
        }
        
        currentSpan.textContent += char;
    }
    
    // 添加最後一個span
    if (currentSpan) {
        textElement.appendChild(currentSpan);
    }
    
    return textElement;
}

// 渲染所有卡片
function renderCards(chapter) {
    // 清空容器
    flashcardsContainer.innerHTML = '';
    
    let currentSection = null;
    
    // 遍歷所選章節的數據
    japaneseData[chapter].forEach(item => {
        // 如果有新的章節，添加章節標題
        if (item.section && item.section !== currentSection) {
            currentSection = item.section;
            const sectionTitle = document.createElement('h2');
            sectionTitle.className = 'section-title';
            sectionTitle.textContent = currentSection;
            flashcardsContainer.appendChild(sectionTitle);
        }
        
        // 創建卡片
        const card = document.createElement('div');
        card.className = 'card';
        
        // 添加序號
        const cardNumber = document.createElement('div');
        cardNumber.className = 'card-number';
        cardNumber.textContent = item.number;
        card.appendChild(cardNumber);
        
        // 添加日文
        const japanese = document.createElement('div');
        japanese.className = 'japanese';
        
        // 將日文文本包裝在span中，標記為日文
        const japaneseText = document.createElement('span');
        japaneseText.className = 'jp-char';
        japaneseText.textContent = item.japanese;
        japanese.appendChild(japaneseText);
        
        if (hideJapanese) {
            japanese.classList.add('hidden-text');
            japanese.addEventListener('click', function(e) {
                this.classList.toggle('hidden-text');
                e.stopPropagation();
            });
        }
        card.appendChild(japanese);
        
        // 創建解釋區域的容器
        const meaningContainer = document.createElement('div');
        meaningContainer.className = 'meaning-container';
        
        // 添加解釋
        if (item.meaning) {
            const meaning = document.createElement('div');
            meaning.className = 'meaning';
            
            // 處理解釋文本，識別並標記日文字符
            meaning.appendChild(processText(item.meaning));
            
            meaningContainer.appendChild(meaning);
        }
        
        // 添加例子
        if (item.examples && item.examples.length > 0) {
            const exampleContainer = document.createElement('div');
            exampleContainer.className = 'example';
            
            item.examples.forEach(ex => {
                const example = document.createElement('div');
                
                // 處理例子文本，識別並標記日文字符
                example.appendChild(processText(ex));
                
                exampleContainer.appendChild(example);
            });
            
            meaningContainer.appendChild(exampleContainer);
        }
        
        // 如果需要隱藏解釋，則將整個解釋區域設為隱藏
        if (hideMeaning && (item.meaning || (item.examples && item.examples.length > 0))) {
            meaningContainer.classList.add('hidden-text');
            meaningContainer.addEventListener('click', function(e) {
                this.classList.toggle('hidden-text');
                e.stopPropagation();
            });
        }
        
        card.appendChild(meaningContainer);
        
        // 將卡片添加到容器
        flashcardsContainer.appendChild(card);
    });
    
    // 更新所有日文字符的顯示狀態
    updateJapaneseChars();
}

// 更新所有日文字符的顯示狀態
function updateJapaneseChars() {
    const jpChars = document.querySelectorAll('.jp-char');
    jpChars.forEach(char => {
        if (hideJapanese) {
            char.classList.add('jp-hidden');
            // 添加點擊事件，使日文字符可以單獨顯示
            char.addEventListener('click', toggleJapaneseChar);
        } else {
            char.classList.remove('jp-hidden');
            char.classList.remove('jp-visible');
            // 移除點擊事件
            char.removeEventListener('click', toggleJapaneseChar);
        }
    });
}

// 切換單個日文字符的顯示狀態
function toggleJapaneseChar(e) {
    this.classList.toggle('jp-visible');
    e.stopPropagation(); // 防止事件冒泡
}

// 切換日文顯示/隱藏
function toggleJapanese() {
    hideJapanese = !hideJapanese;
    toggleJapaneseBtn.textContent = hideJapanese ? '顯示日文' : '遮住日文';
    updateJapaneseChars();
}

// 切換解釋顯示/隱藏
function toggleMeaning() {
    hideMeaning = !hideMeaning;
    toggleMeaningBtn.textContent = hideMeaning ? '顯示解釋' : '遮住解釋';
    renderCards(currentChapter);
}

// 切換章節
function changeChapter() {
    currentChapter = chapterSelect.value;
    renderCards(currentChapter);
}

// 文本點擊顯示/隱藏功能 - 修改以避免影響特定點擊行為
document.addEventListener('click', function(e) {
    // 不進行任何操作，讓各元素的獨立點擊處理程序處理
});

// 啟動應用
document.addEventListener('DOMContentLoaded', init); 
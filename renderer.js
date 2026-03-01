// 简化版的 pinyin 函数，用于在渲染进程中运行
function pinyin(char, options) {
    const pinyinMap = {
        '你': ['ni'],
        '好': ['hao'],
        '摩': ['mo'],
        '斯': ['si'],
        '喵': ['miao'],
        '语': ['yu']
    };
    return pinyinMap[char] ? [pinyinMap[char]] : [[char]];
}

// 摩斯电码字典
const morseCodeDict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
};

// 反向摩斯电码字典
const reverseMorseDict = {};
for (const [key, value] of Object.entries(morseCodeDict)) {
    reverseMorseDict[value] = key;
}

// 转换规则：摩斯点 → 喵，摩斯划 → 呜，分隔符 → ……
function morseToMeow(morse) {
    return morse
        .replace(/\./g, '喵')
        .replace(/-/g, '呜')
        .replace(/\//g, '……')
        .replace(/ /g, ' ');
}

// 喵语转摩斯电码
function meowToMorse(meow) {
    return meow
        .replace(/喵/g, '.')
        .replace(/呜/g, '-')
        .replace(/……/g, '/')
        .replace(/ /g, ' ');
}

// 字母转摩斯电码（支持汉字自动转拼音）
function letterToMorse(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        if (char.match(/[A-Z0-9]/)) {
            result += morseCodeDict[char] + ' ';
        } else if (char.match(/[\u4e00-\u9fa5]/)) {
            // 汉字转拼音
            const pinyinArr = pinyin(char, { style: pinyin.STYLE_NORMAL });
            if (pinyinArr && pinyinArr[0]) {
                for (let j = 0; j < pinyinArr[0][0].length; j++) {
                    const pinyinChar = pinyinArr[0][0][j].toUpperCase();
                    if (morseCodeDict[pinyinChar]) {
                        result += morseCodeDict[pinyinChar] + ' ';
                    }
                }
                result += '/ ';
            }
        } else if (char === ' ') {
            result += '/ ';
        }
    }
    return result.trim();
}

// 摩斯电码转字母
function morseToLetter(morse) {
    const words = morse.split(' / ');
    let result = '';
    
    for (const word of words) {
        const letters = word.split(' ');
        for (const letter of letters) {
            if (reverseMorseDict[letter]) {
                result += reverseMorseDict[letter];
            }
        }
        result += ' ';
    }
    
    return result.trim();
}

// 复制结果到剪贴板
function copyResult() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('复制成功！');
}

// 转换为摩斯电码
function convertToMorse() {
    const input = document.getElementById('inputText').value;
    const output = letterToMorse(input);
    document.getElementById('outputText').value = output;
}

// 转换为喵语
function convertToMeow() {
    const input = document.getElementById('inputText').value;
    let morse;
    
    // 检测输入类型
    if (input.includes('喵') || input.includes('呜')) {
        // 已经是喵语，先转摩斯
        morse = meowToMorse(input);
    } else if (input.includes('.') || input.includes('-')) {
        // 已经是摩斯电码
        morse = input;
    } else {
        // 是字母，先转摩斯
        morse = letterToMorse(input);
    }
    
    const output = morseToMeow(morse);
    document.getElementById('outputText').value = output;
}

// 转换为字母
function convertToLetter() {
    const input = document.getElementById('inputText').value;
    let morse;
    
    // 检测输入类型
    if (input.includes('喵') || input.includes('呜')) {
        // 是喵语，先转摩斯
        morse = meowToMorse(input);
    } else {
        // 已经是摩斯电码
        morse = input;
    }
    
    const output = morseToLetter(morse);
    document.getElementById('outputText').value = output;
}

// 打开关于页面
function openAbout() {
    window.open('about.html', '_blank', 'width=600,height=400');
}

// 打开声明页面
function openDeclaration() {
    window.open('declaration.html', '_blank', 'width=600,height=400');
}

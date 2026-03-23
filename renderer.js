// 扩展版的 pinyin 函数，支持更多汉字
function pinyin(char, options) {
    const pinyinMap = {
        // 常用汉字
        '你': ['ni'], '好': ['hao'], '摩': ['mo'], '斯': ['si'], '喵': ['miao'], '语': ['yu'],
        '我': ['wo'], '他': ['ta'], '她': ['ta'], '它': ['ta'], '们': ['men'],
        '一': ['yi'], '二': ['er'], '三': ['san'], '四': ['si'], '五': ['wu'],
        '六': ['liu'], '七': ['qi'], '八': ['ba'], '九': ['jiu'], '十': ['shi'],
        '大': ['da'], '小': ['xiao'], '多': ['duo'], '少': ['shao'], '上': ['shang'],
        '下': ['xia'], '左': ['zuo'], '右': ['you'], '前': ['qian'], '后': ['hou'],
        '中': ['zhong'], '国': ['guo'], '人': ['ren'], '民': ['min'], '生': ['sheng'],
        '活': ['huo'], '快': ['kuai'], '乐': ['le'], '开': ['kai'], '心': ['xin'],
        '学': ['xue'], '习': ['xi'], '工': ['gong'], '作': ['zuo'], '朋': ['peng'],
        '友': ['you'], '家': ['jia'], '庭': ['ting'], '爱': ['ai'], '情': ['qing'],
        '时': ['shi'], '间': ['jian'], '日': ['ri'], '月': ['yue'], '星': ['xing'],
        '期': ['qi'], '天': ['tian'], '地': ['di'], '风': ['feng'], '雨': ['yu'],
        '雪': ['xue'], '花': ['hua'], '鸟': ['niao'], '虫': ['chong'], '鱼': ['yu'],
        '猫': ['mao'], '狗': ['gou'], '马': ['ma'], '牛': ['niu'], '羊': ['yang'],
        '车': ['che'], '船': ['chuan'], '飞': ['fei'], '机': ['ji'], '电': ['dian'],
        '脑': ['nao'], '手': ['shou'], '机': ['ji'], '电': ['dian'], '视': ['shi'],
        '电': ['dian'], '话': ['hua'], '文': ['wen'], '字': ['zi'], '图': ['tu'],
        '片': ['pian'], '音': ['yin'], '乐': ['yue'], '游': ['you'], '戏': ['xi'],
        '运': ['yun'], '动': ['dong'], '健': ['jian'], '康': ['kang'], '美': ['mei'],
        '丽': ['li'], '漂': ['piao'], '亮': ['liang'], '聪': ['cong'], '明': ['ming'],
        '智': ['zhi'], '慧': ['hui'], '勇': ['yong'], '敢': ['gan'], '善': ['shan'],
        '良': ['liang'], '友': ['you'], '好': ['hao'], '和': ['he'], '平': ['ping'],
        '友': ['you'], '谊': ['yi'], '万': ['wan'], '岁': ['sui'], '中': ['zhong'],
        '华': ['hua'], '民': ['min'], '族': ['zu'], '万': ['wan'], '岁': ['sui']
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

// 获取配置的摩斯电码符号
async function getMorseSymbols() {
    try {
        const dot = await window.db.getSetting('dotSymbol', '.');
        const dash = await window.db.getSetting('dashSymbol', '-');
        const separator = await window.db.getSetting('separator', '/');
        return {
            dot,
            dash,
            separator
        };
    } catch (error) {
        console.error('Error getting morse symbols:', error);
        return {
            dot: '.',
            dash: '-',
            separator: '/'
        };
    }
}

// 转换规则：摩斯点 → 喵，摩斯划 → 呜，分隔符 → ……
async function morseToMeow(morse) {
    const symbols = await getMorseSymbols();
    // 转义正则表达式中的特殊字符
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    return morse
        .replace(new RegExp(escapeRegExp(symbols.dot), 'g'), '喵')
        .replace(new RegExp(escapeRegExp(symbols.dash), 'g'), '呜')
        .replace(new RegExp(escapeRegExp(symbols.separator), 'g'), '……')
        .replace(/ /g, ' ');
}

// 喵语转摩斯电码
async function meowToMorse(meow) {
    const symbols = await getMorseSymbols();
    return meow
        .replace(/喵/g, symbols.dot)
        .replace(/呜/g, symbols.dash)
        .replace(/……/g, symbols.separator)
        .replace(/ /g, ' ');
}

// 字母转摩斯电码（支持汉字自动转拼音）
async function letterToMorse(text) {
    const symbols = await getMorseSymbols();
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
                result += symbols.separator + ' ';
            }
        } else if (char === ' ') {
            result += symbols.separator + ' ';
        }
    }
    return result.trim();
}

// 摩斯电码转字母
async function morseToLetter(morse) {
    const symbols = await getMorseSymbols();
    const words = morse.split(' ' + symbols.separator + ' ');
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

// 显示加载动画
function showLoading() {
    // 创建加载动画元素
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loadingOverlay);
    
    // 添加动画效果
    setTimeout(() => {
        loadingOverlay.style.opacity = '1';
    }, 10);
}

// 隐藏加载动画
function hideLoading() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            if (loadingOverlay.parentNode) {
                loadingOverlay.parentNode.removeChild(loadingOverlay);
            }
        }, 300);
    }
}

// 清空输入
function clearInput() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

// 复制结果到剪贴板
function copyResult() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert(t('copySuccess'));
}

// 保存转译历史
async function saveHistory(input, output, type) {
    try {
        console.log('Saving history...');
        console.log('Input:', input);
        console.log('Output:', output);
        console.log('Type:', type);
        
        const saveHistory = await window.db.getSetting('saveHistory', 'true');
        console.log('saveHistory setting:', saveHistory);
        
        if (saveHistory !== 'true') {
            console.log('saveHistory is not true, skipping');
            return;
        }
        
        console.log('Calling addHistory...');
        await window.db.addHistory(input, output, type);
        console.log('addHistory completed');
        
        // 限制历史记录数量为50条
        const history = await window.db.getHistory();
        console.log('History length after add:', history.length);
        
        if (history.length > 50) {
            console.log('History length exceeds 50, deleting oldest records');
            // 删除最旧的记录
            for (let i = 50; i < history.length; i++) {
                await window.db.deleteHistory(history[i].id);
            }
            console.log('Oldest records deleted');
        }
        console.log('Save history completed');
    } catch (error) {
        console.error('Error saving history:', error);
    }
}

// 转换为摩斯电码
async function convertToMorse() {
    showLoading();
    try {
        console.log('Converting to Morse...');
        const input = document.getElementById('inputText').value;
        console.log('Input:', input);
        const output = await letterToMorse(input);
        console.log('Output:', output);
        document.getElementById('outputText').value = output;
        console.log('Calling saveHistory...');
        await saveHistory(input, output, '摩斯电码');
        console.log('saveHistory completed');
    } catch (error) {
        console.error('Error converting to Morse:', error);
        alert('转换失败，请重试');
    } finally {
        hideLoading();
    }
}

// 转换为喵语
async function convertToMeow() {
    showLoading();
    try {
        const input = document.getElementById('inputText').value;
        let morse;
        
        // 检测输入类型
        if (input.includes('喵') || input.includes('呜')) {
            // 已经是喵语，先转摩斯
            morse = await meowToMorse(input);
        } else if (input.includes('.') || input.includes('-')) {
            // 已经是摩斯电码
            morse = input;
        } else {
            // 是字母，先转摩斯
            morse = await letterToMorse(input);
        }
        
        const output = await morseToMeow(morse);
        document.getElementById('outputText').value = output;
        await saveHistory(input, output, '喵语');
    } catch (error) {
        console.error('Error converting to Meow:', error);
        alert('转换失败，请重试');
    } finally {
        hideLoading();
    }
}

// 转换为字母
async function convertToLetter() {
    showLoading();
    try {
        const input = document.getElementById('inputText').value;
        let morse;
        
        // 检测输入类型
        if (input.includes('喵') || input.includes('呜')) {
            // 是喵语，先转摩斯
            morse = await meowToMorse(input);
        } else {
            // 已经是摩斯电码
            morse = input;
        }
        
        const output = await morseToLetter(morse);
        document.getElementById('outputText').value = output;
        await saveHistory(input, output, '字母');
    } catch (error) {
        console.error('Error converting to Letter:', error);
        alert('转换失败，请重试');
    } finally {
        hideLoading();
    }
}

// 打开关于页面
function openAbout() {
    window.open('about.html', '_blank', 'width=600,height=400');
}

// 打开声明页面
function openDeclaration() {
    window.open('declaration.html', '_blank', 'width=600,height=400');
}

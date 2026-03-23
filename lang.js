// 语言包
const lang = {
    zh: {
        // 通用
        home: '首页',
        history: '转译历史',
        settings: '系统设置',
        about: '关于',
        declaration: '声明',
        memMeow: 'MemMeow',
        morseMeowTranslator: '摩斯喵语转换器',
        projectAddress: '项目地址',
        close: '关闭',
        
        // 引导页
        welcomeToMemMeow: '欢迎使用 MemMeow',
        selectLanguage: '选择语言',
        pleaseSelectYourPreferredInterfaceLanguage: '请选择您偏好的界面语言',
        simplifiedChinese: '简体中文',
        english: 'English',
        confirm: '确定',
        step: '第',
        selectTheme: '选择主题',
        selectYourPreferredInterfaceAppearance: '选择您喜欢的界面外观',
        mode: '模式',
        light: '浅色',
        dark: '深色',
        previous: '上一步',
        next: '下一步',
        readyToStartUsingMemMeow: '准备就绪，开始使用 MemMeow 吧！',
        easilyConvertMorseMeow: '轻松转换摩斯喵语',
        completeTranslationHistory: '完整的转译历史',
        startUsing: '开始使用',
        
        // 首页
        morseMeowTranslatorTitle: '摩斯喵语转译器',
        inputContent: '输入内容',
        convertToMorse: '转摩斯电码',
        convertToMeow: '转喵语',
        convertToLetter: '转字母',
        conversionResult: '转换结果',
        copyResult: '复制结果',
        inputPlaceholder: '请输入字母、摩斯电码或喵语',
        outputPlaceholder: '转换结果将显示在这里',
        copySuccess: '复制成功！',
        
        // 历史页面
        translationHistory: '转译历史',
        pastTranslationRecords: '过往转译记录',
        clearHistory: '清空历史',
        noTranslationHistory: '暂无转译历史',
        input: '输入',
        output: '输出',
        type: '类型',
        copy: '复制',
        delete: '删除',
        confirmClearHistory: '确定要清空所有转译历史吗？',
        
        // 设置页面
        systemSettings: '系统设置',
        basicSettings: '基本设置',
        interfaceLanguage: '界面语言',
        themeMode: '深色模式',
        saveTranslationHistory: '保存转译历史',
        translationRules: '转译规则',
        morseDotSymbol: '摩斯点符号',
        morseDashSymbol: '摩斯划符号',
        separator: '分隔符',
        saveSettings: '保存设置',
        settingsSavedSuccessfully: '设置保存成功！',
        
        // 关于页面
        aboutMorseMeowTranslator: '关于摩斯喵语转译器',
        morseCodeTable: '摩斯电码对照表',
        letterNumber: '字母/数字',
        morseCode: '摩斯电码',
        meowLanguageConversionRules: '喵语转换规则',
        example: '示例',
        inputExample: '输入',
        morseCodeExample: '摩斯电码',
        meowLanguageExample: '喵语',
        version: '版本',
        author: '作者',
        features: '功能',
       实现字母支持汉字自动转拼音摩斯电码喵语三者之间的双向转换: '实现字母（支持汉字自动转拼音）、摩斯电码、喵语三者之间的双向转换',
        
        // 声明页面
        projectDeclaration: '项目声明',
        disclaimer: '免责声明',
        dataSecurityDeclaration: '数据安全声明',
        allConversionOperationsAreDoneLocally: '本工具所有转换操作均在本地完成，不会将您的输入内容或转换结果上传到任何服务器。',
        allDataIsStoredOnlyOnYourLocalDevice: '所有数据仅存储在您的本地设备上，确保您的隐私安全。',
        openSourceLibraryDeclaration: '开源库声明',
        copyrightInformation: '版权信息',
        contactInformation: '联系方式',
        thisToolIsForEntertainmentPurposesOnly: '本工具为纯娱乐用途，仅用于趣味体验，不应用于任何实际通信或商业用途。',
        thisProjectUsesTheFollowingOpenSourceLibraries: '本项目使用了以下开源库：',
        electron: 'Electron',
        forBuildingCrossPlatformDesktopApplications: '用于构建跨平台桌面应用',
        pinyin: 'pinyin',
        forChineseCharacterToPinyinFunctionality: '用于汉字转拼音功能',
        thisProjectIsOpenSourceUnderTheMITLicense: '本项目采用 MIT 许可证开源，您可以自由使用、修改和分发代码。',
        ifYouHaveAnyQuestionsOrSuggestions: '如有任何问题或建议，欢迎联系我们：',
        projectAddressLink: '项目地址：',
        
        // 日期时间
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss'
    },
    en: {
        // 通用
        home: 'Home',
        history: 'History',
        settings: 'Settings',
        about: 'About',
        declaration: 'Declaration',
        memMeow: 'MemMeow',
        morseMeowTranslator: 'Morse Meow Translator',
        projectAddress: 'Project Address',
        close: 'Close',
        
        // 引导页
        welcomeToMemMeow: 'Welcome to MemMeow',
        selectLanguage: 'Select Language',
        pleaseSelectYourPreferredInterfaceLanguage: 'Please select your preferred interface language',
        simplifiedChinese: 'Simplified Chinese',
        english: 'English',
        confirm: 'Confirm',
        step: 'Step',
        selectTheme: 'Select Theme',
        selectYourPreferredInterfaceAppearance: 'Select your preferred interface appearance',
        mode: 'Mode',
        light: 'Light',
        dark: 'Dark',
        previous: 'Previous',
        next: 'Next',
        readyToStartUsingMemMeow: 'Ready to start using MemMeow!',
        easilyConvertMorseMeow: 'Easily convert Morse Meow',
        completeTranslationHistory: 'Complete translation history',
        startUsing: 'Start Using',
        
        // 首页
        morseMeowTranslatorTitle: 'Morse Meow Translator',
        inputContent: 'Input Content',
        convertToMorse: 'Convert to Morse',
        convertToMeow: 'Convert to Meow',
        convertToLetter: 'Convert to Letter',
        conversionResult: 'Conversion Result',
        copyResult: 'Copy Result',
        inputPlaceholder: 'Please enter letters, Morse code, or meow language',
        outputPlaceholder: 'Conversion result will be displayed here',
        copySuccess: 'Copied successfully!',
        
        // 历史页面
        translationHistory: 'Translation History',
        pastTranslationRecords: 'Past Translation Records',
        clearHistory: 'Clear History',
        noTranslationHistory: 'No translation history',
        input: 'Input',
        output: 'Output',
        type: 'Type',
        copy: 'Copy',
        delete: 'Delete',
        confirmClearHistory: 'Are you sure you want to clear all translation history?',
        
        // 设置页面
        systemSettings: 'System Settings',
        basicSettings: 'Basic Settings',
        interfaceLanguage: 'Interface Language',
        themeMode: 'Dark Mode',
        saveTranslationHistory: 'Save Translation History',
        translationRules: 'Translation Rules',
        morseDotSymbol: 'Morse Dot Symbol',
        morseDashSymbol: 'Morse Dash Symbol',
        separator: 'Separator',
        saveSettings: 'Save Settings',
        settingsSavedSuccessfully: 'Settings saved successfully!',
        
        // 关于页面
        aboutMorseMeowTranslator: 'About Morse Meow Translator',
        morseCodeTable: 'Morse Code Table',
        letterNumber: 'Letter/Number',
        morseCode: 'Morse Code',
        meowLanguageConversionRules: 'Meow Language Conversion Rules',
        example: 'Example',
        inputExample: 'Input',
        morseCodeExample: 'Morse Code',
        meowLanguageExample: 'Meow Language',
        version: 'Version',
        author: 'Author',
        features: 'Features',
        实现字母支持汉字自动转拼音摩斯电码喵语三者之间的双向转换: 'Implements bidirectional conversion between letters (with Chinese auto-pinyin conversion), Morse code, and meow language',
        
        // 声明页面
        projectDeclaration: 'Project Declaration',
        disclaimer: 'Disclaimer',
        dataSecurityDeclaration: 'Data Security Declaration',
        allConversionOperationsAreDoneLocally: 'All conversion operations in this tool are done locally and will not upload your input content or conversion results to any server.',
        allDataIsStoredOnlyOnYourLocalDevice: 'All data is stored only on your local device to ensure your privacy and security.',
        openSourceLibraryDeclaration: 'Open Source Library Declaration',
        copyrightInformation: 'Copyright Information',
        contactInformation: 'Contact Information',
        thisToolIsForEntertainmentPurposesOnly: 'This tool is for entertainment purposes only, intended for fun experience, and should not be used for any actual communication or commercial purposes.',
        thisProjectUsesTheFollowingOpenSourceLibraries: 'This project uses the following open source libraries:',
        electron: 'Electron',
        forBuildingCrossPlatformDesktopApplications: 'For building cross-platform desktop applications',
        pinyin: 'pinyin',
        forChineseCharacterToPinyinFunctionality: 'For Chinese character to pinyin functionality',
        thisProjectIsOpenSourceUnderTheMITLicense: 'This project is open source under the MIT License. You are free to use, modify, and distribute the code.',
        ifYouHaveAnyQuestionsOrSuggestions: 'If you have any questions or suggestions, please feel free to contact us:',
        projectAddressLink: 'Project Address:',
        
        // 日期时间
        dateTimeFormat: 'MM/dd/yyyy HH:mm:ss'
    },
    za: {
        // 通用
        home: '摆烂主页',
        history: '摆烂记录',
        settings: '瞎改设置',
        about: '摆烂说明',
        declaration: '摆烂声明',
        memMeow: '喵了个咪',
        morseMeowTranslator: '杂鱼摩斯喵转译器',
        projectAddress: '摆烂地址',
        close: '溜了溜了',

        // 引导页
        welcomeToMemMeow: '尊嘟假嘟？你居然用这玩意',
        selectLanguage: '挑个话式',
        pleaseSelectYourPreferredInterfaceLanguage: '选个你看得懂的，别瞎选',
        simplifiedChinese: '人话版',
        english: '洋文版',
        confirm: '就这吧',
        step: '摆烂第',
        selectTheme: '挑个皮儿',
        selectYourPreferredInterfaceAppearance: '选个顺眼的，反正都摆烂',
        mode: '样儿',
        light: '亮堂点',
        dark: '摸黑摆',
        previous: '回上步',
        next: '下一秒',
        readyToStartUsingMemMeow: '摆烂就绪，凑合用吧！',
        easilyConvertMorseMeow: '瞎转摩斯喵，主打一个摆烂',
        completeTranslationHistory: '摆烂记录全留着',
        startUsing: '开摆',

        // 首页
        morseMeowTranslatorTitle: '杂鱼摩斯喵瞎转器',
        inputContent: '瞎敲点啥',
        convertToMorse: '转成滴滴滴',
        convertToMeow: '转成喵喵喵',
        convertToLetter: '转回人话',
        conversionResult: '摆烂结果',
        copyResult: '顺走结果',
        inputPlaceholder: '敲字母/滴滴滴/喵喵喵都行，摆烂随意',
        outputPlaceholder: '摆烂结果搁这，爱看不看',
        copySuccess: '顺走成功！溜了~',

        // 历史页面
        translationHistory: '摆烂转译记录',
        pastTranslationRecords: '之前瞎转的玩意',
        clearHistory: '清了摆烂记录',
        noTranslationHistory: '还没摆烂，暂无记录',
        input: '瞎敲的',
        output: '转出来的',
        type: '摆烂类型',
        copy: '顺走',
        delete: '删了拉倒',
        confirmClearHistory: '确定清光所有摆烂记录？删了可找不回咯',

        // 设置页面
        systemSettings: '杂鱼瞎改设置',
        basicSettings: '瞎改基础项',
        interfaceLanguage: '话式挑挑',
        themeMode: '摸黑模式',
        saveTranslationHistory: '留着摆烂记录',
        translationRules: '瞎转规则',
        morseDotSymbol: '滴滴点符号',
        morseDashSymbol: '哒哒划符号',
        separator: '瞎分符号',
        saveSettings: '存下瞎改的',
        settingsSavedSuccessfully: '瞎改的存上了！',

        // 关于页面
        aboutMorseMeowTranslator: '关于杂鱼摩斯喵瞎转器',
        morseCodeTable: '滴滴哒哒对照表',
        letterNumber: '字母/数字瞎敲',
        morseCode: '滴滴哒哒码',
        meowLanguageConversionRules: '喵喵喵转换摆烂规则',
        example: '瞎举例子',
        inputExample: '瞎敲的例子',
        morseCodeExample: '滴滴哒哒例子',
        meowLanguageExample: '喵喵喵例子',
        version: '摆烂版本',
        author: '摆烂作者',
        features: '摆烂功能',
        实现字母支持汉字自动转拼音摩斯电码喵语三者之间的双向转换: '瞎转字母（汉字自动转拼音）、滴滴哒哒、喵喵喵，主打双向摆烂',

        // 声明页面
        projectDeclaration: '摆烂项目声明',
        disclaimer: '摆烂免责，概不负责',
        dataSecurityDeclaration: '摆烂数据安全，就搁本地',
        allConversionOperationsAreDoneLocally: '这玩意全在本地瞎转，不传服务器，摆烂保隐私',
        allDataIsStoredOnlyOnYourLocalDevice: '所有破烂数据就搁你设备里，摆烂不泄露',
        openSourceLibraryDeclaration: '摆烂开源库声明',
        copyrightInformation: '摆烂版权，爱咋咋地',
        contactInformation: '摆烂联系方式，别瞎找',
        thisToolIsForEntertainmentPurposesOnly: '纯纯摆烂娱乐，别拿来干正事，商用达咩',
        thisProjectUsesTheFollowingOpenSourceLibraries: '这摆烂项目用了这些开源破烂：',
        electron: 'Electron',
        forBuildingCrossPlatformDesktopApplications: '凑合用着做跨平台摆烂软件',
        pinyin: 'pinyin',
        forChineseCharacterToPinyinFunctionality: '凑合用着把汉字转拼音摆烂',
        thisProjectIsOpenSourceUnderTheMITLicense: '摆烂项目MIT开源，瞎用瞎改瞎发，随便整',
        ifYouHaveAnyQuestionsOrSuggestions: '有问题有建议？随便说说，摆烂不一定看：',
        projectAddressLink: '摆烂地址：',

        // 日期时间
        dateTimeFormat: '摆烂年-摆烂月-摆烂日 摆烂时:摆烂分:摆烂秒'
    }
};

// 获取当前语言
function getCurrentLang() {
    return localStorage.getItem('language') || 'zh-CN';
}

// 获取语言对应的键值
function t(key) {
    const langKey = getCurrentLang().split('-')[0];
    return lang[langKey] && lang[langKey][key] ? lang[langKey][key] : key;
}

import React from "react";

export const AppState = {
    toggleLang: () => {},
    NavgationBar: {
        pages: [{
            name: '關於我們',
            pathName: '#aboutUs'
        }, {
            name: '解決方案',
            pathName: '#solution'
        }, {
            name: '案例實績',
            pathName: '#showcase'
        }, {
            name: '我們的優勢',
            pathName: '#strength'
        }, {
            name: '區域服務',
            pathName: '#localeService'
        }, {
        //     name: '媒體新聞',
        //     pathName: '#social'
        // }, {
            name: '相關問答',
            pathName: '#faq'
        }, {
            name: '聯絡我們',
            pathName: '#contactUs'
        }]
    },
    HeroSection: {
        title: '佳瑪環能科技',
        subtitle: '化腐朽為能源-廢棄物轉生物質能的循環經濟再利用'
    },
    AboutUsSection: {
        imagePart: [{
            title: '再生能源',
            description: '原材料可以再被利用生成能源，特性為用之不竭，不受能源短缺的影響，可促使未來家園與環境永續共生。'
        }, {
            title: '回收利用',
            description: '運用專業技術及客製化服務，將廢棄有機資材轉化發電，進而達到轉廢為能資源循環最新氣化技術。'
        }, {
            title: '循環經濟',
            description: '提升資源利用效率，減少生質廢棄物的產生，重視資源的再利用，創造廢棄物的新價值。'
        }],
        descriptionPart: {
            title: '關於我們',
            titileDes: '佳瑪環能運用特殊氣化(Gasification)技術，將有機廢棄資源轉化為廢棄物衍生燃料(Refuse derived fuel, RDF)中具有較高能源轉換效率的RDF-7合成氣(syngas)，再透過微型渦輪發電機(Micro Gas Turbine Generator, MTG)轉換成電力提供穩定的再生能源。',
            subtitleFirstLine: '生物質能為地球最大的資源之一',
            subtitleSecondLine: '生生質能源循環能兼顧環保與永續',
            contentFirstPara: '生質能源最大的價值在於「循環」，植物行光合作用會將空氣中的二氧化碳固定下來，可透過各種方法轉化為生質燃料，使用生物質燃料可將二氧化碳釋放回空氣中的友善循環。',
            contentSecondPara: '佳瑪環能的核心目標，係將廢棄物資材轉換成能源，舉凡一般生活、工業、及農業等生質廢棄物，都是我們關注的可用資源。此外佳瑪環能相當注重生質廢棄物能源化過程中所產生的污染是否符合環保規範。'
        }
    },
    SolutionSection: {
        title: '解決方案',
        titleDes: '首創微型高溫氣化熱裂解技術可有效解決垃圾焚化及能源不足等問題',
        subtitleFirst: '佳瑪環能的氣化技術具有下列的優點',
        contentFirst: [
            '生質廢棄物經超高溫氣化，剩餘灰分極少。',
            '順流固定床(下吸式)氣化爐，焦油經過熱焦炭床處理後產出非常低。',
            '加厚碳層設計，氣化更完全。',
            '操作界面簡易，1~2 人即可控制整個自動化系統。',
            '不會排放煙道氣。',
            'RDF-7合成氣直接透過微渦輪機轉換成電力，比焚化爐以汽電共生方式發電更具效率。',
            '可創造社區及微型電廠的基礎。'
        ],
        subtitleSecond: '以分散式能資源中心深化運用循環經濟模式遍地開花',
        contentSecond: [
            '垃圾處理一直是各城市的大議題，目前台灣的焚化爐大多採用三、四十年前的焚化技術，每日處理約一千噸混雜垃圾，對於環境的衝擊性相對大。加上一般焚化廠使用年限為二十年，隨著台灣多數垃圾焚化廠使用年限屆滿，須面對廢棄物的去化。',
            '綜觀台灣所面臨的廢棄物處理狀況，佳瑪環能所設計的廢棄物資源轉換系統，不僅可高效再利用有機廢棄物，也可將廢熱回收用來供熱CHP或製冷CCHP，能源轉換效率相對高。而能量轉換過程中的產生的碳黑、灰份、工業醋酸(木醋液)等，亦可提供工(農)業再利用，達成廢棄物皆資源化的目標。',
            '佳瑪環能擁有廢棄物能資源系統整合經驗及固定污染源處理執照 ; 在建置區域型微型發電廠方面採用特殊氣化技術將廢棄物轉換成RDF-7廢棄物衍生燃料供給高效率的微渦輪機發電，可24小時運轉且容量因素可達80-90，並將廢熱回收用來供暖或製冷，有別於其他使用固態廢棄物衍生燃料(Solid recovered fuel, SRF) 的電廠，則須先消耗能量將廢棄物製成SRF。'
        ]
    }
};

export const AppContext = React.createContext(AppState);
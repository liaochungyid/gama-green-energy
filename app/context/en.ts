import IPageProps from "types";

const context: IPageProps = {
    NavgationBar: {
        lang: 'en',
        pages: [{
            name: "About Us",
            pathName: "#aboutUs"
        }, {
            name: "Total Solution",
            pathName: "#solution"
        }, {
            name: "Case Study",
            pathName: "#showcase"
        }, {
            name: "Our advantage",
            pathName: "#strength"
        }, {
            name: "Q&A",
            pathName: "#faq"
        }, {
            name: "Contact Us",
            pathName: "#contactUs"
        }]
    },
    HeroSection: {
        title: "GAMA Green-Energy Technology",
        subtitle: "Waste to Energy. We are working on Circular economy reuse of waste to biomass energy."
    },
    AboutUsSection: {
        imagePart: [{
            title: "Renewable energy",
            description: "Raw materials can be reused to generate energy, which is inexhaustible and not affected by energy shortages. It can promote the sustainable coexistence with a friendly environment."
        }, {
            title: "Recycling",
            description: "With professional & customized technology to convert waste organic materials into power generation."
        }, {
            title: "Circular economy",
            description: "Improve the efficiency of resource utilization, reduce the generation of biomass waste, Reuse more possible resources, and create new value of waste."
        }],
        descriptionPart: {
            title: "About Us",
            titileDes: "GAMA uses special gasification technology to convert organic waste resources into syngas (RDF-7) with high energy conversion efficiency in Refuse derived fuel, which is then converted into electricity through micro-turbine generators (MTG) to provide stable regeneration energy.",
            subtitleFirstLine: "Biomass is one of the greatest resources on the Earth.",
            subtitleSecondLine: "Biomass energy cycles can take into account environmental protection and sustainability.",
            contentFirstPara: "The greatest value of biomass energy lies in the cycle. Photosynthesis will fix the carbon dioxide in the air, which can be converted into biomass fuel through various methods. A friendly cycle that releases carbon dioxide back into the air after using biomass fuels.",
            contentSecondPara: "The core goal of GAMA is to convert waste materials into energy. Biomass wastes such as general life, industry, and agriculture are all available resources that we are concerned about. In addition, GAMA pays great attention to whether the pollution generated in the process of biomass waste energy conversion meets environmental protection standards."
        }
    },
    SolutionSection: {
        title: "Total Solution",
        titleDes: "Our micro-high temperature gasification thermal technology can effectively solve the problems of incineration and energy shortage.",
        subtitleFirst: "GAMA's gasification technology has the following advantages:",
        contentFirst: [
            "Ultra-high temperature gasification of biomass waste leaves few residual ashes.",
            "A co-current fixed grate bed (down draft) gasifier, where the tar is processed in a hot coke bed has very low output.",
            "The thickened carbon layer is designed for more complete gasification.",
            "The operation interface is simple and less than two people can control the entire automation system.",
            "No flue gas emissions.",
            "Syngas can be converted into electricity in microturbines more efficiently than in incinerators using steam-electricity symbiosis.",
            "Can create a foundation for communities and micro-power distribution plants."
        ],
        subtitleSecond: ["Deepening application of decentralized energy resource center", "Circular economy model blossoms everywhere"],
        contentSecond: [
            "Garbage disposal has always been a major issue in various cities. At present, most of the incinerators in Taiwan use the incineration technology from 30 to 40 years ago, which treats about 1,000 tons of mixed garbage every day and has a relatively large impact on the environment. In addition, the service life of general incineration plants is 20 years. With the expiration of the service life of most waste incineration plants in Taiwan, garbage disposal must be faced.",
            "Looking at the waste treatment situation faced by Taiwan, the waste resource conversion system designed by GAMA not only reuse organic waste efficiently, but also recycle waste heat for heating CHP or cooling CCHP.The energy conversion efficiency is relatively high. The carbon black, ash, industrial acetic acid (wood vinegar), etc. produced in the energy conversion process can also be reused in the industrial (agricultural) industry to achieve the goal of recycling waste.",
            "GAMA is experienced in waste energy resource system integration and a fixed pollution source treatment with an official license. In the construction of regional micro-power plants, GAMA uses special gasification technology to convert waste into gaseous waste-derived fuel (RDF-7) for microturbine power generation and can recycle waste heat for heating or cooling, so it is different from other power plants using solid waste-derived fuels.",
            "Compared with the centralized power grid dominated by thermal power and nuclear power plants, GAMA has the advantage of setting up a micro-distributed energy resource conversion center. The center can not only serve as a stable backup support for Taiwan's electricity, but also handle the detoxification of biomass waste nearby and reduce carbon emissions from long-distance transportation."
        ],
        subtitleThird: "Aurelia® A400",
        contentThird: [
            "In response to the current increase in industrial power demand, tight power supply backup capacity and power outages caused by failures. GAMA (as Aurelia Taiwan exclusive agent) is matched with the high-tech Aurelia® A400 micro-turbine from Europe.The modular design reduces the huge investment and resistance required for the construction of transmission and distribution lines, and is the gas-powered power generation system that best meets the market demand.",
            "This is a new 400 kW micro-turbine with 40.2% energy conversion efficiency, which is about 20% higher than other micro-turbines on the market. It is the most efficient micro-turbine and can use natural gas, biogas and hydrogen various renewable and non-standard fuels.During operation, the pollution is extremely low, the waste heat can be fully reused, and the small size is easy to operate and maintain.In addition to small turbines and diesel generator sets, it is the most potential emergency power supply and small distributed generator sets."
        ]
    },
    CostEffectivenessSection: {
        title: "Cost-effectiveness",
        titleDes: "The first phase of GAMA will build a 400kW power generation equipment with a maximum annual power generation capacity of about 3.2 million kWh. equal to the 109 annual electricity carbon emission coefficients by 0.502 kg CO2e published by the Energy Bureau, about 1,600 metric tons of CO2 emissions can be reduced in one year, which is about 160 hectares of afforestation benefits (6.25 sets of Daan Forest Parks). In addition, GAMA Power Generation uses the energy recovered from biomass waste. It is estimated that the first phase can assist in the treatment of about 2,000 metric tons of waste per year, and the revenue will be obtained by collecting waste treatment fees and sales power to utility company (Taipower).",
        stage: ["Stage 1", "Stage 2"],
        listDescription: [
            "Power Generated",
            "Annual Power Generation",
            "CO2 Emissions Reduced",
            "Annual Waste Treatment"
        ]
    },
    PracticalCaseSection: {
        title: "Case Study",
        subtitleFirst: "Demonstration plant",
        contentFirst: "GAMA once set up an experimental base at the organic farm in Shoufeng Township, Hualien to solve the problem of agricultural waste removal. After the raw materials pass through appropriate pretreatment procedures such as separation and drying, they are converted into heat generation and electricity generation through gasification. This experiment proves that agricultural waste can be properly converted into energy resources and detoxified.",
        subtitleSecond: "The first legal standard factory in Taiwan",
        contentSecond: [
            "The initial business goal of GAMA is to complete the construction of the first-phase 400Kw power generation equipment in Taoyuan City. In the future, it will target 1,200Kw and use Taoyuan's first micro energy resource processing center to help solve the problem of biomass waste and power shortage.",
            "The waste treatment process mainly uses waste plastics, waste wood and other wastes as raw materials, and completes pre-treatment through a crushing and screening system.After the material is properly proportioned, it enters the gasifier to generate syngas, which is supplied to the micro-turbine to burn the combustible gas to generate electricity."
        ],
        subtitleThird: "Installation reference",
        contentThird: "GAMA gasification power plant",
        picGridSubtitle: [
            "Gasifier main part",
            "Control panel",
            "Waste inlet and outlet",
            "Feed inlet in progress",
            "Runing testing"
        ]
    },
    OurStrengthSection: {
        title: "Our advantage",
        cards: [{
            title: "Renewable energy power generation equipment",
            titleDes: "GAMA power generation efficiency reaches 40%. Green electricity sales revenue (1,200kWh) is around NT$37,902,720/year"
        }, {
            title: "Qualification for Waste Recycling",
            titleDes: "Environmental Protection Administration Executive Yuan 「Measures for the Management of Common Business Waste Reuse」 Ministry of Economic Affairs「Administrative Measures for the Reuse of Industrial Waste」 After applying for reuse inspection and obtaining the qualification of reuse agency, a processing fee can be charged and used as gas fuel for micro-turbine power generation."
        }, {
            title: "Fixed pollution source declaration",
            titleDes: "Environmental Protection Administration Executive Yuan 「Air Pollutant Emission Standards for Electric Power Facilities」The definition of micro-turbine can meet the air pollution control requirements, including: particulate pollutants (10mg/Nm^3), sulfur oxides (8ppm), nitrogen oxides (10ppm)."
        }]
    },
    FaqSection: {
        title: "Q&A",
        subtitleFuel: "Fuel",
        qaFuel: [{
            q: "What are the raw materials containing biomass energy?",
            a: "Biomass technology is the use of organic matter to produce energy. In principle, general waste containing organic substances, agricultural waste and industrial waste can be used as raw materials for GAMA power generation."
        }, {
            q: "Solid renewable fuel (SRF)",
            a: "Refers to the use of combustible waste as fuel, which has been sorted to meet the quality standards of solid renewable fuel."
        }, {
            q: "Waste-derived fuel (RDF)",
            a: "Refers to the use of physical or thermochemical methods to convert municipal waste, general industrial waste and agricultural waste and other wastes into uniform fuels by crushing, sorting, drying, cracking, gasification and homogenization. According to different waste treatment procedures, it is divided into RDF-1 to 7 types and grades. The higher the type and grade of fuel, the higher the efficiency of energy utilization."
        }],
        subtitleTechnology: "Technology",
        qaTechnology: [{
            q: "Gasification technology",
            a: "GAMA uses a special technology that converts carbonaceous feedstock into carbon monoxide, hydrogen and methane. The feedstock reacts at temperatures above 1100 degrees, without combustion, with a controlled amount ofoxygen and water. The resulting gas (syngas) is itself a fuel."
        }, {
            q: "Cogeneration, combined heat and power (CHP)",
            a: "Heat cannot be completely converted into electricity. In the process of generating heat and electricity separately in two different units, slightly more than half of the heat will be released as waste heat into the surrounding natural environment, for example, through cooling towers or fuel. Cogeneration allows for a more efficient use of fuel, as about 30% of the waste heat can be reused in the industry."
        }, {
            q: "Combined Cooling Heating and Power (CCHP)",
            a: "Based on the concept of energy cascade utilization, GAMA optimizes systematize power, cooling and heating generation. Higher temperature waste heat is used to generate electricity, whereas lower temperature waste heat is used for heating or cooling."
        }],
        subtitlePowGen: "Power generation",
        qaPowGen: [{
            q: "Will the high temperature vaporization power generation system produce noise or dioxin?",
            a: "The sound volume generated by the system operation does not meet the noise control standards of the Environmental Protection Agency of the Executive Yuan；The amount of dioxin produced is far below the control standard of the Environmental Protection Agency of the Executive Yuan."
        }, {
            q: "Will the high temperature vaporization power generation system pollute the water or soil?",
            a: "GAMA's system is a recycling process with zero emissions and zero pollution. Ash will be produced in the gasification system, and it is a soil conditioner with excellent properties. It also produces primary products of industrial wood vinegar that have passed the TCLP heavy metal test."
        }],
        subtitleApplication: "Application",
        qaApplication: [{
            q: "Calculation of wholesale electricity purchase rates for renewable energy?",
            a: "In 2022, the wholesale purchase rate for general and general utility waste power generation is 3.9482 yuan/kWh, and the wholesale purchase rate for agricultural waste power generation is 5.1407 yuan/kWh."
        }, {
            q: "How are by-products in the production process used?",
            a: "The by-products of high temperature gasification are mainly wood vinegar and carbon black.In agriculture, wood vinegar has the functions of sterilization, insect control, disease resistance, improving the activity of beneficial microorganisms in water and soil, and promoting crop growth. Carbon black has been widely used in plastics, ink coatings, electrical conductivity and rubber industries."
        }]
    },
    PartnerSection: {
        title: "Channel Partners",
        titleDes: "GAMA integrates the upstream and downstream equipment manufacturers of the industry, conducts systematic alliances, develops international teams, and assists countries in maintaining the environment and advancing the industry in a sustainable direction. In response to future trends and trends, ERP, virtual host and cloud management systems will be introduced to integrate the real-time operation data and databases of various distributed micro-energy resource conversion centers for intelligent operation management and industrial big data integration and application. In order to facilitate system performance optimization and international market development leading edge."
    },
    FooterSection: {
        title: "Contact Us",
        office: "No. 256, Daguan Rd, Dayuan District, Taoyuan City, 337, Taiwan, R.O.C.",
        phone: "+886-3-381-9840",
        fax: "+886-3-280-4423",
        workHour: "09:00 - 18:00",
        email: "service@gama-green.tw",
        cta: "send email to contact us."
    }
};

export default context;

function getFormValues() {
    const SpectaclesSelect = document.getElementById("gafas").value;
    const SpectaclesChecked = SpectaclesSelect === "si";
    
    const Spectacles_Age = document.getElementById("antiguedad").value;
    const LastEyeExam = document.getElementById("LastEyeExam").value;
    const presionTime = document.getElementById("PresionTime").value;
    const MedicationsUsed =document.getElementById("MedicationsUsed").value;
    const OtherConditionText =document.getElementById("OtherConditionText").value;
    const MedicationAllergiesText =document.getElementById("MedicationAllergiesText").value;
    const ODDistancePre =document.getElementById("ODDistancePre").value;
    const ODNearPre =document.getElementById("ODNearPre").value;
    const OSDistancePre =document.getElementById("OSDistancePre").value;
    const OSNearPre =document.getElementById("OSNearPre").value;
    const BloodPressure =document.getElementById("BloodPressure").value;
    const Glucosa =document.getElementById("Glucosa").value;
    const ODAutoSphere =document.getElementById("ODAutoSphere").value;
    const ODAutoCilinder =document.getElementById("ODAutoCilinder").value;
    const ODAutoGrades =document.getElementById("OSAutoSphere").value;
    const OSAutoSphere =document.getElementById("OSAutoSphere").value;
    const OSAutoGrades =document.getElementById("OSAutoGrades").value;
    const OSAutoCilinder =document.getElementById("OSAutoGrades").value;
    const IOPOD =document.getElementById("IOPOD").value;
    const IOPOS =document.getElementById("IOPOS").value;
    const ODFinalSphere =document.getElementById("ODFinalSphere").value;
    const ODFinalCilinder =document.getElementById("ODFinalCilinder").value;
    const ODFinalGrades =document.getElementById("ODFinalGrades").value;
    const OSFinalSphere =document.getElementById("OSFinalSphere").value;
    const OSFinalCilinder =document.getElementById("OSFinalCilinder").value;
    const OSFinalGrades =document.getElementById("OSFinalGrades").value;
    const PD =document.getElementById("PD").value;
    const BestAcuityODDistance =document.getElementById("BestAcuityODDistance").value;
    const BestAcuityODNear =document.getElementById("BestAcuityODNear").value;
    const BestAcuityOSDistance =document.getElementById("BestAcuityOSDistance").value;
    const BestAcuityOSNear =document.getElementById("BestAcuityOSNear").value;
    const Notes =document.getElementById("Notes").value;
    const diagOtrosText =document.getElementById("diagOtrosText").value;
    const tratOtrosTopicoText =document.getElementById("tratOtrosTopicoText").value;
    const tratOtrosOralText =document.getElementById("tratOtrosOralText").value;
    const refOtrosText =document.getElementById("refOtrosText").value;
    const PrimaryODSphere =document.getElementById("PrimaryODSphere").value;
    const PrimaryODCilinder =document.getElementById("PrimaryODCilinder").value;
    const PrimaryODGrades =document.getElementById("PrimaryODGrades").value;
    const PrimaryODADD =document.getElementById("PrimaryODADD").value;
    const PrimaryOSSphere =document.getElementById("PrimaryOSSphere").value;
    const PrimaryOSCilinder =document.getElementById("PrimaryOSCilinder").value;
    const PrimaryOSGrades =document.getElementById("PrimaryOSGrades").value;
    const PrimaryOSADD =document.getElementById("PrimaryOSADD").value;
    const SecundaryODSphere =document.getElementById("SecundaryODSphere").value;
    const SecundaryODCilinder =document.getElementById("SecundaryODCilinder").value;
    const SecundaryODGrades =document.getElementById("SecundaryODGrades").value;
    const SecundaryODADD =document.getElementById("SecundaryODADD").value;
    const SecundaryOSSphere =document.getElementById("SecundaryOSSphere").value;
    const SecundaryOSCilinder =document.getElementById("SecundaryOSCilinder").value;
    const SecundaryOSGrades =document.getElementById("SecundaryOSGrades").value;
    const SecundaryOSADD =document.getElementById("SecundaryOSADD").value;
    const Signature =document.getElementById("Signature").value;
    

    // Radios
    const Wear = document.querySelector('input[name="uso"]:checked')?.value || "";
    const Literate = document.querySelector('input[name="alfa"]:checked')?.value || "";

    // Checkboxes
    const BlurryNearVision = document.getElementById("BlurryNearVision").checked;
    const BlurryDistanceVision = document.getElementById("BlurryDistanceVision").checked;
    const EyePain = document.getElementById("EyePain").checked;
    const Infection = document.getElementById("Infection").checked;
    const Burning = document.getElementById("Burning").checked;
    const Itching = document.getElementById("Itching").checked;
    const LightSensitivity = document.getElementById("LightSensitivity").checked;
    const English = document.getElementById("English").checked;
    const Dilated = document.getElementById("Dilated").checked;
    const Diabetes = document.getElementById("Diabetes").checked;
    const HighBloodPressure = document.getElementById("HighBloodPressure").checked;
    const HeartDisease = document.getElementById("HeartDisease").checked;
    const Glaucoma = document.getElementById("Glaucoma").checked;
    const Cataract = document.getElementById("Cataract").checked;
    const Headaches = document.getElementById("Headaches").checked;
    const PregnantBreastfeeding = document.getElementById("Pregnant/Breastfeeding").checked;
    const OtherCondition = document.getElementById("OtherCondition").checked;
    const MedicationAllergies = document.getElementById("MedicationAllergies").checked;
    const ODNormalPupile = document.getElementById("ODNormalPupile").checked;
    const ODSlowPupile = document.getElementById("ODSlowPupile").checked;
    const ODFixedPupile = document.getElementById("ODFixedPupile").checked;
    const OSNormalPupile = document.getElementById("OSNormalPupile").checked;
    const OSSlowPupile = document.getElementById("OSSlowPupile").checked;
    const OSFixedPupile = document.getElementById("OSFixedPupile").checked;
    const OrthoDistance = document.getElementById("OrthoDistance").checked;
    const EsoDistance = document.getElementById("EsoDistance").checked;
    const ExoDistance = document.getElementById("ExoDistance").checked;
    const OrthoNear = document.getElementById("OrthoNear").checked;
    const EsoNear = document.getElementById("EsoNear").checked;
    const ExoNear = document.getElementById("ExoNear").checked;
    const Rhiper = document.getElementById("Rhiper").checked;
    const Lhiper = document.getElementById("Lhiper").checked;
    const AutoRefAuto = document.getElementById("AutoRefAuto").checked;
    const AutoRefRet = document.getElementById("AutoRefRet").checked;
    const Myopia = document.getElementById("Myopia").checked;
    const Hyperopia = document.getElementById("Hyperopia").checked;
    const Astigmatism = document.getElementById("Astigmatism").checked;
    const Presbyopia = document.getElementById("Presbyopia").checked;
    const Anisometropia = document.getElementById("Anisometropia").checked;
    const Amblyopia = document.getElementById("Amblyopia").checked;
    const Strabismus = document.getElementById("Strabismus").checked;
    const DiabeticRet = document.getElementById("DiabeticRet").checked;
    const HtnRet = document.getElementById("HtnRet").checked;
    const DryEye = document.getElementById("DryEye").checked;
    const Pinguecula = document.getElementById("Pinguecula").checked;
    const Pterygium = document.getElementById("Pterygium").checked;
    const Conjunctivitis = document.getElementById("Conjunctivitis").checked;
    const DiagGlaucoma = document.getElementById("DiagGlaucoma").checked;
    const CataractsOD = document.getElementById("CataractsOD").checked;
    const CataractsOS = document.getElementById("CataractsOS").checked;
    const PriorOD = document.getElementById("PriorOD").checked;
    const PriorOS = document.getElementById("Lhiper").checked;
    const TopicalAntiInfective = document.getElementById("TopicalAnti-Infective").checked;
    const TopicalSteroid = document.getElementById("TopicalSteroid").checked;
    const TopicalCombo = document.getElementById("TopicalCombo").checked;
    const TopicalNSAID = document.getElementById("TopicalNSAID").checked;
    const TopicalGlaucoma = document.getElementById("TopicalGlaucoma").checked;
    const TopicalArtificial = document.getElementById("TopicalArtificial").checked;
    const OralAntiInfective = document.getElementById("OralAnti-Infective").checked;
    const OralSteroid = document.getElementById("OralSteroid").checked;
    const OralNSAID = document.getElementById("OralNSAID").checked;
    const OralGlaucoma = document.getElementById("OralGlaucoma").checked;
    const RefGlaucoma = document.getElementById("TopicalSteroid").checked;
    const RefPterygium = document.getElementById("RefPterygium").checked;
    const RefRetina = document.getElementById("RefRetina").checked;
    const RefStrabismus = document.getElementById("RefStrabismus").checked;
    const RefForeign = document.getElementById("RefForeign").checked;
    const RefCataractOD = document.getElementById("RefCataractOD").checked;
    const RefCataractOS = document.getElementById("RefCataractOS").checked;
    const refOtros = document.getElementById("refOtros").checked;
    const PrimaryCustom = document.getElementById("PrimaryCustom").checked;
    const PrimaryPremade = document.getElementById("PrimaryPremade").checked;
    const PrimaryDistance = document.getElementById("PrimaryDistance").checked;
    const PrimaryNear = document.getElementById("PrimaryNear").checked;
    const SecundaryCustom = document.getElementById("SecundaryCustom").checked;
    const SecundaryPremade = document.getElementById("SecundaryPremade").checked;
    const SecundaryDistance = document.getElementById("SecundaryDistance").checked;
    const SecundaryNear = document.getElementById("SecundaryNear").checked;
    const Sunglasses = document.getElementById("Sunglasses").checked;


    return {
        SpectaclesChecked,
        Spectacles_Age,
        BlurryNearVision,
        BlurryDistanceVision,
        EyePain,
        Infection,
        Burning,
        Itching,
        LightSensitivity,
        Wear,
        Literate,
        English,
        Dilated,
        LastEyeExam,
        Diabetes,
        HighBloodPressure,
        HeartDisease,
        Glaucoma,
        Cataract,
        Headaches,
        PregnantBreastfeeding,
        OtherCondition,
        OtherConditionText,
        MedicationAllergies,
        presionTime,
        MedicationsUsed,
        MedicationAllergiesText,
        ODNormalPupile,
        ODSlowPupile,
        ODFixedPupile,
        OSNormalPupile,
        OSSlowPupile,
        OSFixedPupile,
        OrthoDistance,
        EsoDistance,
        ExoDistance,
        OrthoNear,
        EsoNear,
        ExoNear,
        Rhiper,
        Lhiper,
        AutoRefAuto,
        AutoRefRet,
        ODDistancePre,
        ODNearPre,
        OSDistancePre,
        OSNearPre,
        BloodPressure,
        Glucosa,
        ODAutoSphere,
        ODAutoCilinder,
        ODAutoGrades,
        OSAutoSphere,
        OSAutoGrades,
        OSAutoCilinder,
        IOPOD,
        IOPOS,
        ODFinalSphere,
        ODFinalCilinder,
        ODFinalGrades,
        OSFinalSphere,
        OSFinalCilinder,
        OSFinalGrades,
        PD,
        BestAcuityODDistance,
        BestAcuityODNear,
        BestAcuityOSDistance,
        BestAcuityOSNear,
        Notes,
        Myopia,
        Hyperopia,
        Astigmatism,
        Presbyopia,
        Anisometropia,
        Amblyopia,
        Strabismus,
        DiabeticRet,
        HtnRet,
        DryEye,
        Pinguecula,
        Pterygium,
        Conjunctivitis,
        DiagGlaucoma,
        diagOtrosText,
        CataractsOD,
        CataractsOS,
        PriorOD,
        PriorOS,
        TopicalAntiInfective,
        TopicalSteroid,
        TopicalCombo,
        TopicalNSAID,
        TopicalGlaucoma,
        TopicalArtificial,
        tratOtrosTopicoText,
        OralAntiInfective,
        OralSteroid,
        OralNSAID,
        OralGlaucoma,
        tratOtrosOralText,
        RefGlaucoma,
        RefPterygium,
        RefRetina,
        RefStrabismus,
        RefForeign,
        RefCataractOD,
        RefCataractOS,
        refOtros,
        refOtrosText,
        PrimaryODSphere,
        PrimaryODCilinder,
        PrimaryODGrades,
        PrimaryODADD,
        PrimaryOSSphere,
        PrimaryOSCilinder,
        PrimaryOSGrades,
        PrimaryOSADD,
        PrimaryCustom,
        PrimaryPremade,
        PrimaryDistance,
        PrimaryNear,
        SecundaryODSphere,
        SecundaryODCilinder,
        SecundaryODGrades,
        SecundaryODADD,
        SecundaryOSSphere,
        SecundaryOSCilinder,
        SecundaryOSGrades,
        SecundaryOSADD,
        SecundaryCustom,
        SecundaryPremade,
        SecundaryDistance,
        SecundaryNear,
        Sunglasses,
        Signature
    };
}

const { PDFDocument } = PDFLib;

const PDFMap = {
    Date: 'Text1',
    CountryID: 'Text2',
    PatientID: 'Text3',
    Urban: 'Button37',
    Rural: 'Button38',
    firstName: 'Text5',
    MI: 'Text4',
    lastName: 'Text6',
    Suffix: 'Text7',
    City: 'Text8',
    Agriculture: 'Button39',
    Manufacturing: 'Button45',
    Student: 'Button40',
    Driver: 'Button44',
    Office: 'Button41',
    Administrator: 'Button43',
    Other: 'Button42',
    LastEyeExam: 'Text9',
    Male: 'Button55',
    Female: 'Button56',
    Birthdate: 'Text10',
    Age: 'Text11',
    Spectacles: 'Button50',
    Spectacles_Age: 'Text12',
    Wear_Full: 'Button46',
    Distance_Only: 'Button47',
    Near_Only: 'Button48',
    BlurryNearVision: 'Button57',
    BlurryDistanceVision: 'Button58',
    EyePain: 'Button53',
    Infection: 'Button54',
    Burning: 'Button51',
    Itching: 'Button52',
    LightSensitivity: 'Button49',
    Literate_yes:'Button83',
    Literate_no:'Button84',
    English: 'Button82',
    Dilated: 'Button85',
    Diabetes: 'Button64',
    HighBloodPressure: 'Button65',
    HeartDisease: 'Button62',
    Glaucoma: 'Button63',
    Cataract: 'Button67',
    Headaches:'Button60',
    PregnantBreastfeeding:'Button66',
    OtherCondition: 'Button61',
    OtherConditionText:'Text144',
    MedicationAllergies: 'Button59',
    presionTime: 'Text145',
    MedicationAllergiesText: 'Text13',
    MedicationsUsed: 'Text14',
    ODNormalPupile: 'Button68',
    ODSlowPupile: 'Button69',
    ODFixedPupile: 'Button70',
    OSNormalPupile: 'Button74',
    OSSlowPupile: 'Button75',
    OSFixedPupile: 'Button76',
    OrthoDistance: 'Button71',
    EsoDistance:'Button77',
    ExoDistance:'Button78',
    OrthoNear: 'Button72',
    EsoNear: 'Button79',
    ExoNear: 'Button80',
    Rhiper: 'Button73',
    Lhiper: 'Button81',
    AutoRefAuto: 'Button91',
    AutoRefRet: 'Button92',
    ODDistancePre: 'Text16',
    ODNearPre: 'Text19',
    OSDistancePre: 'Text17',
    OSNearPre: 'Text18',
    BloodPressure:'Text143',
    Glucosa:'Text15',
    ODAutoSphere: 'Text23',
    ODAutoCilinder: 'Text20',
    ODAutoGrades: 'Text39',
    OSAutoSphere: 'Text24',
    OSAutoCilinder: 'Text37',
    OSAutoGrades: 'Text38',
    IOPOD:'Text21',
    IOPOS: 'Text22',
    ODFinalSphere: 'Text26',
    ODFinalCilinder: 'Text40',
    ODFinalGrades: 'Text42',
    OSFinalSphere: 'Text27',
    OSFinalCilinder: 'Text41',
    OSFinalGrades: 'Text43',
    PD: 'Text25',
    BestAcuityODDistance:'Text29',
    BestAcuityODNear:'Text30',
    BestAcuityOSDistance: 'Text31',
    BestAcuityOSNear: 'Text32',
    Notes: 'Text28',
    Myopia: 'Button86',
    Hyperopia: 'Button87',
    Astigmatism: 'Button88',
    Presbyopia: 'Button89',
    Anisometropia: 'Button90',
    Amblyopia: 'Button93',
    Strabismus: 'Button94',
    DiabeticRet: 'Button95',
    HtnRet: 'Button96',
    DryEye: 'Button97',
    Pinguecula: 'Button98',
    Pterygium: 'Button99',
    Conjunctivitis: 'Button100',
    DiagGlaucoma: 'Button101',
    diagOtrosText: 'Text33',
    CataractsOD: 'Button102',
    CataractsOS: 'Button103',
    PriorOD: 'Button104',
    PriorOS:'Button105',
    TopicalAntiInfective: 'Button106',
    TopicalSteroid: 'Button108',
    TopicalCombo: 'Button110',
    TopicalNSAID: 'Button112',
    TopicalGlaucoma: 'Button113',
    TopicalArtificial: 'Button114',
    tratOtrosTopicoText: '',
    OralAntiInfective: 'Button107',
    OralSteroid: 'Button109',
    OralNSAID: 'Button111',
    OralGlaucoma: 'Button115',
    tratOtrosOralText: '',
    RefGlaucoma: 'Button116',
    RefPterygium: 'Button117',
    RefRetina: 'Button118',
    RefStrabismus: 'Button119',
    RefForeign: 'Button120',
    RefCataractOD: 'Button121',
    RefCataractOS: 'Button122',
    refOtros: 'Button123',
    refOtrosText: 'Text35',
    PrimaryODSphere: 'Text133',
    PrimaryODCilinder: 'Text134',
    PrimaryODGrades: 'Text139',
    PrimaryODADD: 'Text141',
    PrimaryOSSphere: 'Text135',
    PrimaryOSCilinder: 'Text136',
    PrimaryOSGrades: 'Text137',
    PrimaryOSADD: 'Text141',
    PrimaryCustom: 'Button129',
    PrimaryPremade: 'Button128',
    PrimaryDistance: 'Button125',
    PrimaryNear: 'Button126',
    SecundaryODSphere:'Text46',
    SecundaryODCilinder: 'Text47',
    SecundaryODGrades: 'Text48',
    SecundaryODADD: 'Text142',
    SecundaryOSSphere: 'Text138',
    SecundaryOSCilinder: 'Text140',
    SecundaryOSGrades: 'Text49',
    SecundaryOSADD: 'Text142',
    SecundaryCustom: 'Button131',
    SecundaryPremade: 'Button130',
    SecundaryDistance: 'Button127',
    SecundaryNear: 'Button132',
    Sunglasses: 'Button124',
    Signature: 'Text36'
};

const formFieldsData = {
    Juan: {
        patientID: { value: "1" },
        countryID: { value: "MX" },
        locationType: { value: "Urban" },
        firstName: { value: "Juan" },
        middleInitial: { value: "A" },
        lastName: { value: "Pérez López" },
        city: { value: "Gómez Palacio" },
        occupation: { value: "Student" },
        gender: { value: "Male" },
        birthdate: { value: "20000115" },
        age: { value: "25" }
    },
    Carlos: {
        patientID: { value: "2" },
        countryID: { value: "MX" },
        locationType: { value: "Rural" },
        firstName: { value: "Carlos" },
        middleInitial: { value: "B" },
        lastName: { value: "Ramírez" },
        city: { value: "Torreón" },
        occupation: { value: "Driver" },
        gender: { value: "Male" },
        birthdate: { value: "19951220" },
        age: { value: "29" }
    },
    Maria: {
        patientID: { value: "3" },
        countryID: { value: "MX" },
        locationType: { value: "Urban" },
        firstName: { value: "Maria" },
        middleInitial: { value: "C" },
        lastName: { value: "González" },
        city: { value: "Saltillo" },
        occupation: { value: "Office" },
        gender: { value: "Female" },
        birthdate: { value: "20030210" },
        age: { value: "21" }
    }
};
async function fillPDFSafe(data) {
    try {
        const existingPdfBytes = await fetch("Formulario.pdf").then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const helveticaFont = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);

        const form = pdfDoc.getForm();

        const dataForm = getFormValues();

        const fechaActual = new Date();
        const formatoCorto = fechaActual.toISOString().split('T')[0];

        const mapValues = {
            [PDFMap.Date]: formatoCorto,
            [PDFMap.CountryID]: data.countryID.value,
            [PDFMap.PatientID]: data.patientID.value,
            [PDFMap.Rural]: data.locationType.value === "Rural",
            [PDFMap.Urban]: data.locationType.value === "Urban",
            [PDFMap.firstName]: data.firstName.value,
            [PDFMap.MI]: data.middleInitial.value,
            [PDFMap.lastName]: data.lastName.value,
            [PDFMap.City]: data.city.value,
            [PDFMap.Student]: data.occupation.value === "Student",
            [PDFMap.Driver]: data.occupation.value === "Driver",
            [PDFMap.Office]: data.occupation.value === "Office",
            [PDFMap.Agriculture]: data.occupation.value === "Agriculture",
            [PDFMap.Manufacturing]: data.occupation.value === "Manufacturing",
            [PDFMap.Administrator]: data.occupation.value === "Administrator",
            [PDFMap.Other]: data.occupation.value === "Other",
            [PDFMap.LastEyeExam]: dataForm.LastEyeExam,
            [PDFMap.Male]: data.gender.value === "Male",
            [PDFMap.Female]: data.gender.value === "Female",
            [PDFMap.Birthdate]: data.birthdate.value,
            [PDFMap.Age]: data.age.value,
            [PDFMap.Spectacles]: dataForm.SpectaclesChecked,
            [PDFMap.Spectacles_Age]: dataForm.Spectacles_Age,
            [PDFMap.BlurryNearVision]: dataForm.BlurryNearVision,
            [PDFMap.BlurryDistanceVision]: dataForm.BlurryDistanceVision,
            [PDFMap.EyePain]: dataForm.EyePain,
            [PDFMap.Infection]: dataForm.Infection,
            [PDFMap.Burning]: dataForm.Burning,
            [PDFMap.Itching]: dataForm.Itching,
            [PDFMap.LightSensitivity]: dataForm.LightSensitivity,
            [PDFMap.Wear_Full]: dataForm.Wear === "Wear_Full",
            [PDFMap.Distance_Only]: dataForm.Wear === "Distance_Only",
            [PDFMap.Near_Only]: dataForm.Wear === "Near_Only",
            [PDFMap.English]: dataForm.English,
            [PDFMap.Literate_yes]: dataForm.Literate === "si",
            [PDFMap.Literate_no]: dataForm.Literate === "no",
            [PDFMap.Dilated]: dataForm.Dilated,
            [PDFMap.Diabetes]: dataForm.Diabetes,
            [PDFMap.HighBloodPressure]: dataForm.HighBloodPressure,
            [PDFMap.HeartDisease]: dataForm.HeartDisease,
            [PDFMap.Glaucoma]: dataForm.Glaucoma,
            [PDFMap.Cataract]: dataForm.Cataract,
            [PDFMap.Headaches]: dataForm.Headaches,
            [PDFMap.PregnantBreastfeeding]: dataForm.PregnantBreastfeeding,
            [PDFMap.MedicationAllergies]: dataForm.MedicationAllergies,
            [PDFMap.presionTime]: dataForm.presionTime,
            [PDFMap.MedicationAllergiesText]: dataForm.MedicationAllergiesText,
            [PDFMap.MedicationsUsed]: dataForm.MedicationsUsed,
            [PDFMap.OtherConditionText]: dataForm.OtherConditionText,
            [PDFMap.OtherCondition]: dataForm.OtherCondition,
            [PDFMap.ODNormalPupile]: dataForm.ODNormalPupile,
            [PDFMap.ODSlowPupile]: dataForm.ODSlowPupile,
            [PDFMap.ODFixedPupile]: dataForm.ODFixedPupile,
            [PDFMap.OSNormalPupile]: dataForm.OSNormalPupile,
            [PDFMap.OSSlowPupile]: dataForm.OSSlowPupile,
            [PDFMap.OSFixedPupile]: dataForm.OSFixedPupile,
            [PDFMap.OrthoDistance]: dataForm.OrthoDistance,
            [PDFMap.EsoDistance]: dataForm.EsoDistance,
            [PDFMap.ExoDistance]: dataForm.ExoDistance,
            [PDFMap.OrthoNear]: dataForm.OrthoNear,
            [PDFMap.EsoNear]: dataForm.EsoNear,
            [PDFMap.ExoNear]: dataForm.ExoNear,
            [PDFMap.Rhiper]: dataForm.Rhiper,
            [PDFMap.Lhiper]: dataForm.Lhiper,
            [PDFMap.AutoRefAuto]: dataForm.AutoRefAuto,
            [PDFMap.AutoRefRet]: dataForm.AutoRefRet,
            [PDFMap.ODDistancePre]: dataForm.ODDistancePre,
            [PDFMap.ODNearPre]: dataForm.ODNearPre,
            [PDFMap.OSDistancePre]: dataForm.OSDistancePre,
            [PDFMap.OSNearPre]: dataForm.OSNearPre,
            [PDFMap.BloodPressure]: dataForm.BloodPressure,
            [PDFMap.Glucosa]: dataForm.Glucosa,
            [PDFMap.ODAutoSphere]: dataForm.ODAutoSphere,
            [PDFMap.ODAutoCilinder]: dataForm.ODAutoCilinder,
            [PDFMap.ODAutoGrades]: dataForm.ODAutoGrades,
            [PDFMap.OSAutoCilinder]: dataForm.OSAutoCilinder,
            [PDFMap.OSAutoSphere]: dataForm.OSAutoSphere,
            [PDFMap.OSAutoGrades]: dataForm.OSAutoGrades,
            [PDFMap.IOPOD]: dataForm.IOPOD,
            [PDFMap.IOPOS]: dataForm.IOPOS,
            [PDFMap.PD]: dataForm.PD,
            [PDFMap.BestAcuityODDistance]: dataForm.BestAcuityODDistance,
            [PDFMap.BestAcuityODNear]: dataForm.BestAcuityODNear,
            [PDFMap.BestAcuityOSDistance]: dataForm.BestAcuityOSDistance,
            [PDFMap.BestAcuityOSNear]: dataForm.BestAcuityOSNear,
            [PDFMap.Notes]: dataForm.Notes,
            [PDFMap.ODFinalSphere]: dataForm.ODFinalSphere,
            [PDFMap.ODFinalCilinder]: dataForm.ODFinalCilinder,
            [PDFMap.ODFinalGrades]: dataForm.ODFinalGrades,
            [PDFMap.OSFinalSphere]: dataForm.OSFinalSphere,
            [PDFMap.OSFinalCilinder]: dataForm.OSFinalCilinder,
            [PDFMap.OSFinalGrades]: dataForm.OSFinalGrades,
            [PDFMap.Myopia]: dataForm.Myopia,
            [PDFMap.Hyperopia]: dataForm.Hyperopia,
            [PDFMap.Astigmatism]: dataForm.Astigmatism,
            [PDFMap.Presbyopia]: dataForm.Presbyopia,
            [PDFMap.Anisometropia]: dataForm.Anisometropia,
            [PDFMap.Amblyopia]: dataForm.Amblyopia,
            [PDFMap.Strabismus]: dataForm.Strabismus,
            [PDFMap.DiabeticRet]: dataForm.DiabeticRet,
            [PDFMap.HtnRet]: dataForm.HtnRet,
            [PDFMap.DryEye]: dataForm.DryEye,
            [PDFMap.Pinguecula]: dataForm.Pinguecula,
            [PDFMap.Pterygium]: dataForm.Pterygium,
            [PDFMap.Conjunctivitis]: dataForm.Conjunctivitis,
            [PDFMap.DiagGlaucoma]: dataForm.DiagGlaucoma,
            [PDFMap.diagOtrosText]: dataForm.diagOtrosText,
            [PDFMap.CataractsOD]: dataForm.CataractsOD,
            [PDFMap.CataractsOS]: dataForm.CataractsOS,
            [PDFMap.PriorOD]: dataForm.PriorOD,
            [PDFMap.PriorOS]: dataForm.PriorOS,
            [PDFMap.TopicalAntiInfective]: dataForm.TopicalAntiInfective,
            [PDFMap.TopicalSteroid]: dataForm.TopicalSteroid,
            [PDFMap.TopicalCombo]: dataForm.TopicalCombo,
            [PDFMap.TopicalNSAID]: dataForm.TopicalNSAID,
            [PDFMap.TopicalGlaucoma]: dataForm.TopicalGlaucoma,
            [PDFMap.TopicalArtificial]: dataForm.TopicalArtificial,
            [PDFMap.tratOtrosTopicoText]: dataForm.tratOtrosTopicoText,
            [PDFMap.OralAntiInfective]: dataForm.OralAntiInfective,
            [PDFMap.OralSteroid]: dataForm.OralSteroid,
            [PDFMap.OralNSAID]: dataForm.OralNSAID,
            [PDFMap.OralGlaucoma]: dataForm.OralGlaucoma,
            [PDFMap.tratOtrosOralText]: dataForm.tratOtrosOralText,
            [PDFMap.RefGlaucoma]: dataForm.RefGlaucoma,
            [PDFMap.RefPterygium]: dataForm.RefPterygium,
            [PDFMap.RefRetina]: dataForm.RefRetina,
            [PDFMap.RefStrabismus]: dataForm.RefStrabismus,
            [PDFMap.RefForeign]: dataForm.RefForeign,
            [PDFMap.RefCataractOD]: dataForm.RefCataractOD,
            [PDFMap.RefCataractOS]: dataForm.RefCataractOS,
            [PDFMap.refOtros]: dataForm.refOtros,
            [PDFMap.refOtrosText]: dataForm.refOtrosText,
            [PDFMap.PrimaryODSphere]: dataForm.PrimaryODSphere,
            [PDFMap.PrimaryODCilinder]: dataForm.PrimaryODCilinder,
            [PDFMap.PrimaryODGrades]: dataForm.PrimaryODGrades,
            [PDFMap.PrimaryODADD]: dataForm.PrimaryODADD,
            [PDFMap.PrimaryOSSphere]: dataForm.PrimaryOSSphere,
            [PDFMap.PrimaryOSCilinder]: dataForm.PrimaryOSCilinder,
            [PDFMap.PrimaryOSGrades]: dataForm.PrimaryOSGrades,
            [PDFMap.PrimaryOSADD]: dataForm.PrimaryOSADD,
            [PDFMap.PrimaryCustom]: dataForm.PrimaryCustom,
            [PDFMap.PrimaryPremade]: dataForm.PrimaryPremade,
            [PDFMap.PrimaryDistance]: dataForm.PrimaryDistance,
            [PDFMap.PrimaryNear]: dataForm.PrimaryNear,
            [PDFMap.SecundaryODSphere]: dataForm.SecundaryODSphere,
            [PDFMap.SecundaryODCilinder]: dataForm.SecundaryODCilinder,
            [PDFMap.SecundaryODGrades]: dataForm.SecundaryODGrades,
            [PDFMap.SecundaryODADD]: dataForm.SecundaryODADD,
            [PDFMap.SecundaryOSSphere]: dataForm.SecundaryOSSphere,
            [PDFMap.SecundaryOSCilinder]: dataForm.SecundaryOSCilinder,
            [PDFMap.SecundaryOSGrades]: dataForm.SecundaryOSGrades,
            [PDFMap.SecundaryOSADD]: dataForm.SecundaryOSADD,
            [PDFMap.SecundaryCustom]: dataForm.SecundaryCustom,
            [PDFMap.SecundaryPremade]: dataForm.SecundaryPremade,
            [PDFMap.SecundaryDistance]: dataForm.SecundaryDistance,
            [PDFMap.SecundaryNear]: dataForm.SecundaryNear,
            [PDFMap.Sunglasses]: dataForm.Sunglasses,
            [PDFMap.Signature]: dataForm.Signature,

        };

        Object.entries(mapValues).forEach(([pdfField, value]) => {
            try {
                const field = form.getField(pdfField);

                // Checkbox
                if (typeof value === "boolean") {
                    value ? field.check() : field.uncheck();
                } else {
                    field.setText(value.toString());
                    field.updateAppearances(helveticaFont);
                    field.defaultUpdateAppearances(PDFLib.rgb(0, 0, 0));
                }
            } catch (err) {
                //console.warn("Campo no encontrado:", pdfField);
            }
        });

        form.flatten();
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "FormularioVOSH_Lleno.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        console.log("PDF generado y descargado correctamente ✅");
    } catch (err) {
        console.error("Error generando PDF:", err);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("generarPDF");
    const pacienteSelect = document.getElementById("paciente");

    boton.addEventListener("click", async () => {
        const selected = pacienteSelect.value;
        const data = formFieldsData[selected] || {};
        await fillPDFSafe(data);
    });
});

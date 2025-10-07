function toggleInfo() {
    const div = document.getElementById('infoExtra');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
}

const steps = document.querySelectorAll('.step');
const progressSteps = document.querySelectorAll('.progress-step');
const progressFill = document.getElementById('progressFill');
let currentStep = 0;

function updateProgress() {
    progressSteps.forEach((step, index) => {
        if(index <= currentStep) step.classList.add('active');
        else step.classList.remove('active');
    });
    const percent = (currentStep / (progressSteps.length - 1)) * 100;
    progressFill.style.width = percent + '%';
}

function nextStep() {
    // Validaciones por paso
    let isValid = true;

    if (currentStep === 0) {
        isValid = validateStep1();
    } else if (currentStep === 1) {
        isValid = validateStep2();
    } else if (currentStep === 2) {
        isValid = validateStep3();
    } else if (currentStep === 3){
        isValid = validateStep4();
    } else if (currentStep === 4){
        isValid = validateStep5();
    } else if (currentStep === 5){
        isValid = validateStep6();
    }

    if (!isValid) return; // si falla, no avanza

    // avanzar si pasa validación
    if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('active');
        currentStep++;
        steps[currentStep].classList.add('active');
        updateProgress();
    }
}

function prevStep() {
    if (currentStep > 0) {
        steps[currentStep].classList.remove('active');
        currentStep--;
        steps[currentStep].classList.add('active');
        updateProgress();
    }
}

function validateStep1() {
    let valid = true;
    let messages = [];

    // Seleccionar campaña
    const campaña = document.getElementById("campaña");
    if (!campaña.value) {
        valid = false;
        messages.push("Debes seleccionar campaña.");
    }

    // Seleccionar paciente
    const paciente = document.getElementById("paciente");
    if (!paciente.value) {
        valid = false;
        messages.push("Debes seleccionar paciente.");
    }

    // ¿Tiene gafas?
    const gafas = document.getElementById("gafas");
    if (!gafas.value) {
        valid = false;
        messages.push("Debes indicar si tiene gafas.");
    }

    // Antigüedad de gafas
    const antiguedad = document.getElementById("antiguedad");
    if (gafas.value === "si") {
        if (!antiguedad.value || antiguedad.value <= 0) {
            valid = false;
            messages.push("Debes indicar la antigüedad de las gafas.");
        } else if (antiguedad.value > 25) {
            valid = false;
            messages.push("La antigüedad de las gafas no puede ser mayor a 25 años.");
        }
    }
    else if (gafas.value === "no"){
        if (antiguedad.value > 0) {
            valid = false;
            messages.push("No incluyas antigüedad de las gafas si no seleccionaste anteriomente la opcion");
        }
    }

    // Razón de visita (al menos una)
    const razones = document.querySelectorAll('#step1 .checkbox-group input[type="checkbox"]');
    let algunaRazon = Array.from(razones).some(cb => cb.checked);
    if (!algunaRazon) {
        valid = false;
        messages.push("Selecciona al menos una razón de la visita.");
    }

    // Hábito de uso (obligatorio uno)
    const radiosUso = document.querySelectorAll('input[name="uso"]');
    let seleccionado = Array.from(radiosUso).some(r => r.checked);
    if (!seleccionado) {
        valid = false;
        messages.push("Debes seleccionar el hábito de uso de lentes.");
    }

    if (!valid) {
        alert(messages.join("\n"));
    }

    return valid;
}

// Mostrar / ocultar info adicional
function toggleInfo() {
    const div = document.getElementById("infoExtra");
    div.style.display = (div.style.display === "none") ? "block" : "none";
}

function validateStep2() {
    let valid = true;
    let messages = [];

    // Condiciones de salud (al menos una)
    const condiciones = document.querySelectorAll('#step2 fieldset .checkbox-group:nth-of-type(1) input[type="checkbox"]');
    let algunaCondicion = Array.from(condiciones).some(cb => cb.checked);
    if (!algunaCondicion) {
        valid = false;
        messages.push("Debes seleccionar al menos una condición de salud.");
    }

    // Si marcaron "Otros", validar texto
    const otrosCheckbox = condiciones[condiciones.length - 1]; // último checkbox (Otros)
    const otrosTexto = document.querySelector('#step2 input[type="text"]');
    if (otrosCheckbox.checked && !otrosTexto.value.trim()) {
        valid = false;
        messages.push("Debes especificar la condición en 'Otros'.");
    }

    // Alergias a medicamentos
    const alergiaCheckbox = document.querySelector('#step2 .checkbox-group:nth-of-type(2) input[type="checkbox"]');
    const alergiaTexto = document.querySelectorAll('#step2 input[type="text"]')[1]; 
    if (alergiaCheckbox.checked && !alergiaTexto.value.trim()) {
        valid = false;
        messages.push("Debes especificar las alergias a medicamentos.");
    }

    // Medicamentos actuales (recomendado obligatorio)
    const medicamentos = document.querySelector('#step2 textarea');
    if (!medicamentos.value.trim()) {
        valid = false;
        messages.push("Debes indicar los medicamentos actuales del paciente.");
    }

    if (!valid) {
        alert(messages.join("\n"));
    }

    return valid;
}

function validateStep3() {
    let valid = true;
    let messages = [];

    // 1. Agudeza visual
    const agudezaInputs = document.querySelectorAll('#step3 table:nth-of-type(1) input');
    agudezaInputs.forEach(input => {
        const val = input.value.trim();

        // Obligatorio
        if (!val) {
            valid = false;
            messages.push("Debes completar todos los campos de agudeza visual (OD/OS, lejos/cerca).");
        } 
        // Formato válido
        else if (!/^(\d{1,2}\/\d{1,3}|CF|HM|PL|NLP)$/i.test(val)) {
            valid = false;
            messages.push("Mejor Agudeza debe tener formato válido (ej: 20/20, CF, HM, PL).");
        }
    });

    // 2. Pupilas OD
    const pupilasOD = document.querySelectorAll('#step3 label:has(input[type="checkbox"]) input[type="checkbox"]');
    const pupilasODGroup = pupilasOD.slice ? pupilasOD.slice(0,3) : Array.from(pupilasOD).slice(0,3);
    const pupilasOSGroup = Array.from(pupilasOD).slice(3,6);

    if (!pupilasODGroup.some(cb => cb.checked)) {
        valid = false;
        messages.push("Debes seleccionar una opción para Pupilas OD.");
    }
    if (!pupilasOSGroup.some(cb => cb.checked)) {
        valid = false;
        messages.push("Debes seleccionar una opción para Pupilas OS.");
    }

    // 3. Cover Test
    const coverLejos = document.querySelectorAll('#step3 h5:nth-of-type(1) + label + .checkbox-group input[type="checkbox"]');
    const coverCerca = document.querySelectorAll('#step3 h5:nth-of-type(1) + label + .checkbox-group + label + .checkbox-group input[type="checkbox"]');
    const coverVertical = document.querySelectorAll('#step3 h5:nth-of-type(2) + .checkbox-group input[type="checkbox"]');

    if (!Array.from(coverLejos).some(cb => cb.checked)) {
        valid = false;
        messages.push("Debes seleccionar al menos una opción en Cover Test Lejos.");
    }
    if (!Array.from(coverCerca).some(cb => cb.checked)) {
        valid = false;
        messages.push("Debes seleccionar al menos una opción en Cover Test Cerca.");
    }
    if (!Array.from(coverVertical).some(cb => cb.checked)) {
        valid = false;
        messages.push("Debes seleccionar al menos una opción en Cover Test Vertical.");
    }

    // 4. Auto Refracción (si marcan auto/ret)
    const autoCheck = document.querySelectorAll('#step3 h3:nth-of-type(5) + .checkbox-group input[type="checkbox"]');
    const autoInputs = document.querySelectorAll('#step3 table:nth-of-type(2) input');
    if (Array.from(autoCheck).some(cb => cb.checked)) {
        autoInputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                messages.push("Debes completar todos los valores de Auto Refracción si se selecciona Auto/Ret.");
                return;
            }
        });
    }

    if (!valid) {
        alert(messages.join("\n"));
    }

    return valid;
}

function validateStep4() {
    let valid = true;
    let messages = [];

    // 1. Refracción final
    const refraccionInputs = document.querySelectorAll('#step4 table:nth-of-type(1) input');

    for (let i = 0; i < refraccionInputs.length; i += 3) {
        const ojo = refraccionInputs[i].parentElement.textContent.trim().includes('OD') ? 'OD' : 'OS';
        const values = [refraccionInputs[i], refraccionInputs[i+1], refraccionInputs[i+2]];
        const filled = values.filter(input => input.value.trim() !== "");

        // Si se empieza a llenar un ojo, deben completarse los 3 campos
        if (filled.length > 0 && filled.length < 3) {
            valid = false;
            messages.push(`Si llenas algún valor de Refracción Final para ${ojo}, debes completar Esfera, Cilindro y Eje.`);
        }

        // Validar rango de Eje (0-180) solo si está completo
        if (filled.length === 3) {
            const eje = parseInt(values[2].value);
            if (isNaN(eje) || eje < 0 || eje > 180) {
                valid = false;
                messages.push(`${ojo}: Eje debe ser un número entero entre 0 y 180.`);
            }
        }
    }

    // 2. PD
    const pdInput = document.querySelector('#step4 input[type="number"]');
    if (pdInput.value.trim() !== "") {
        const pd = parseFloat(pdInput.value);
        if (isNaN(pd) || pd < 40 || pd > 75) {
            valid = false;
            messages.push("PD debe ser un número entre 40 y 75 mm.");
        }
    }

    // 3. Mejor agudeza (opcional, texto)
    const agudezaInputs = document.querySelectorAll('#step4 table:nth-of-type(2) input');
    agudezaInputs.forEach(input => {
    const val = input.value.trim();

    // Validar si está vacío
    if (!val) {
        valid = false;
        messages.push("Debes completar todos los campos de Mejor Agudeza (OD/OS, lejos/cerca).");
    } 
    // Validar formato
    else if (!/^(\d{1,2}\/\d{1,3}|CF|HM|PL|NLP)$/i.test(val)) {
        valid = false;
        messages.push("Mejor Agudeza debe tener formato válido (ej: 20/20, CF, HM, PL).");
    }
});


    if (!valid) alert(messages.join("\n"));
    return valid;
}

function validateStep5() {
    let valid = true;
    let messages = [];

    // Diagnóstico
    const diagOtros = document.getElementById('diagOtros');
    const diagText = document.getElementById('diagOtrosText');
    if (diagOtros.checked && !diagText.value.trim()) {
        valid = false;
        messages.push('Debes especificar el diagnóstico en "Otros".');
    }

    // Tratamiento Tópico
    const tratOtrosTopico = document.getElementById('tratOtrosTopico');
    const tratTopicoText = document.getElementById('tratOtrosTopicoText');
    if (tratOtrosTopico.checked && !tratTopicoText.value.trim()) {
        valid = false;
        messages.push('Debes especificar "Otros" en Tratamiento Tópico.');
    }

    // Tratamiento Oral
    const tratOtrosOral = document.getElementById('tratOtrosOral');
    const tratOralText = document.getElementById('tratOtrosOralText');
    if (tratOtrosOral.checked && !tratOralText.value.trim()) {
        valid = false;
        messages.push('Debes especificar "Otros" en Tratamiento Oral.');
    }

    // Referencia
    const refOtros = document.getElementById('refOtros');
    const refText = document.getElementById('refOtrosText');
    if (refOtros.checked && !refText.value.trim()) {
        valid = false;
        messages.push('Debes especificar la referencia en "Otros".');
    }

    if (!valid) alert(messages.join('\n'));
    return valid;
}

function validateStep6() {
    let valid = true;
    let messages = [];

    // --- Tablas Primaria y Secundaria ---
    const tables = document.querySelectorAll('#step6 table');
    tables.forEach((table, idx) => {
        ['OD', 'OS'].forEach((ojo, rowIdx) => {
            const inputs = table.rows[rowIdx + 1].querySelectorAll('input'); // +1 porque fila 0 = header
            const filled = Array.from(inputs).filter(input => input.value.trim() !== "");

            // Validar que si llenan algún campo, llenen todos
            if (filled.length > 0 && filled.length < inputs.length) {
                valid = false;
                messages.push(`En ${idx === 0 ? 'Primaria' : 'Secundaria'}, si llenas algún valor para ${ojo}, debes completar Esfera, Cilindro, Eje y ADD.`);
            }

            // Validar valores dentro de rango
            inputs.forEach(input => {
                const val = input.value.trim();
                if (val !== "") {
                    const num = parseFloat(val);
                    if (num < parseFloat(input.min) || num > parseFloat(input.max)) {
                        valid = false;
                        messages.push(`Valor fuera de rango en ${idx === 0 ? 'Primaria' : 'Secundaria'} (${ojo}): ${input.placeholder} debe estar entre ${input.min} y ${input.max}.`);
                    }
                }
            });
        });
    });

    // --- Firma ---
    const firma = document.querySelector('#step6 fieldset:last-of-type input[type="text"]');
    if (!firma.value.trim()) {
        valid = false;
        messages.push('Debes llenar la firma del doctor.');
    }

    if (!valid) alert(messages.join('\n'));
    return valid;
}

updateProgress();
